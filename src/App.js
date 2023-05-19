import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Box, Button, MenuItem, Paper, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Cards from "./Components/Cards";

function App() {
  const [inputs, setInputs] = useState([]);
  const [formData, setFormData] = useState({});
  const [cards, setCards] = useState([]);
  const [problem,setProblem] = useState(true);

  const handleAddInput = (type) => {
    const label = inputs.length + 1;
    const newInput = {
      type,
      label,
    };
    console.log(newInput);
    setInputs([...inputs, newInput]);
  };

  const handleInputChange = (label, value) => {
    setFormData({
      ...formData,
      [label]: value,
    });
  };

  const handleDelete = (label) => {
    const updatedInputs = inputs.filter((input) => input.label !== label);
    setInputs(updatedInputs);
    // Remove the corresponding key-value pair from the formData object
    const updatedFormData = { ...formData };
    delete updatedFormData[label];
    setFormData(updatedFormData);
  };

  const handleSaveDetails = () => {
    const newCard = { ...formData };
    console.log(newCard);
    setCards([...cards, newCard]);
    setFormData({});
    setInputs([]);
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Satya",
      card1: false,
      card2: false,
      card3: false,
      card4: false,
    },
    {
      id: 2,
      name: "Vivek",
      card1: false,
      card2: false,
      card3: false,
      card4: false,
    },
    // Add more users if needed
  ]);

  const [selectedUser, setSelectedUser] = useState("");
  const [cardVisibility, setCardVisibility] = useState({
    card1: true,
    card2: true,
    card3: true,
    card4: true,
  });

  const handleUserSelect = (event) => {
    const userId = parseInt(event.target.value);
    setSelectedUser(userId);
  };

  const handleCheckboxChange = (userId, cardName) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, [cardName]: !user[cardName] };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleSaveAccess = () => {
    const updatedCardVisibility = { ...cardVisibility };
    users.forEach((user) => {
      //   Object.keys(cardVisibility).forEach((card) => {
      //     if (user[card]) {
      //       updatedCardVisibility[card] = true;
      //     }
      //   });
      Object.keys(updatedCardVisibility).forEach((card) => {
        updatedCardVisibility[card] = users.some((user) => user[card]);
      });
    });
    setCardVisibility(updatedCardVisibility);
  };

  return (
    <div className="App">
    <Paper  style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            margin: "auto",
          }}>
    <Button
    onClick={()=> setProblem(true)}
            variant="contained"
            color={problem ? "success" : "error"}>Problem 1</Button>
             <Button
                 onClick={()=> setProblem(false)}
            
            variant="contained"
            color={problem ? "error" : "success"}>Problem 2</Button>
    </Paper>
      {problem && 
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Paper
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          elevation={3}
        >
          <Button variant="contained" onClick={() => handleAddInput("text")}>
            Add text-field
          </Button>
          <Button variant="contained" onClick={() => handleAddInput("select")}>
            Add select box
          </Button>
          <Button
            variant="contained"
            onClick={() => handleAddInput("checkbox")}
          >
            Add checkbox
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveDetails}
          >
            Save Details
          </Button>
        </Paper>
        <Paper
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          elevation={3}
        >
          <h3>Form Generator Section: - </h3>
          {inputs.map((input) => (
            <div key={input.label}>
              <label htmlFor={`input-${input.label}`}>{input.label} : </label>
              {input.type === "text" && (
                <span>
                  <TextField
                    label="Filled"
                    variant="filled"
                    type="text"
                    id={`input-${input.label}`}
                    onChange={(e) =>
                      handleInputChange(input.label, e.target.value, "text")
                    }
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(input.label)}
                  >
                    Delete
                  </Button>
                </span>
              )}
              {input.type === "select" && (
                <span>
                  <TextField
                    select
                    label="Select"
                    defaultValue="EUR"
                    id={`input-${input.label}`}
                    onChange={(e) =>
                      handleInputChange(input.label, e.target.value, "select")
                    }
                  >
                    <MenuItem value="">Select an Gender</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>

                    {/* Add your select options here */}
                  </TextField>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(input.label)}
                  >
                    Delete
                  </Button>
                </span>
              )}
              {input.type === "checkbox" && (
                <span>
                  <input
                    type="checkbox"
                    id={`input-${input.label}`}
                    onChange={(e) =>
                      handleInputChange(
                        input.label,
                        e.target.checked,
                        "checkbox"
                      )
                    }
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(input.label)}
                  >
                    Delete
                  </Button>
                </span>
              )}
            </div>
          ))}
        </Paper>
        <Paper sx={{ width: "25%" }} elevation={3}>
          <h3>Cards Section: - </h3>

          {cards.map((card, index) => (
            <Cards key={index} data={card} />
          ))}
          {/* <div key={index}>
              {Object.entries(card).map(([label, value]) => (
                <p key={label}>
                  <strong>{label}:</strong> {value.toString()}
                </p>
              ))}
            </div> */}
        </Paper>
      </Box>
      }

      {/* Problem -2  */}
{!problem &&

      <Box>
        <h2 style={{textAlign:"center"}}>Access Control Page</h2>
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Paper
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          elevation={3}>
          <TextField
                    select
                    label="Select"
                    defaultValue="EUR"
                     value={selectedUser} 
          
          onChange={handleUserSelect}>
            <MenuItem value="">Select a user</MenuItem>
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </TextField>
        </Paper>

        <Paper
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          elevation={3}>
          
            <Button
            variant="contained"
            color="success"
             onClick={handleSaveAccess}>Save</Button>
          <div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Card 1</th>
                  <th>Card 2</th>
                  <th>Card 3</th>
                  <th>Card 4</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    {Object.keys(cardVisibility).map((card) => (
                      <td key={card}>
                        <input
                          type="checkbox"
                          checked={user[card]}
                          onChange={() => handleCheckboxChange(user.id, card)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Paper>
        {/* Cards */}
        <Paper
          sx={{
            width: "25%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"space-around",
            gap: 2,
          }}
          elevation={3}>
          {cardVisibility.card1 && (
            <Paper>
              <h3>Card 1</h3>
              {users.map((user) => {
                if (user.card1) {
                  return <p key={user.id}>{user.name}</p>;
                }
                return null;
              })}
            </Paper>
          )}
          {cardVisibility.card2 && (
            <Paper>
              <h3>Card 2</h3>
              {users.map((user) => {
                if (user.card2) {
                  return <p key={user.id}>{user.name}</p>;
                }
                return null;
              })}
            </Paper>
          )}
          {cardVisibility.card3 && (
            <Paper>
              <h3>Card 3</h3>
              {users.map((user) => {
                if (user.card3) {
                  return <p key={user.id}>{user.name}</p>;
                }
                return null;
              })}
            </Paper>
          )}
          {cardVisibility.card4 && (
            <Paper>
              <h3>Card 4</h3>
              {users.map((user) => {
                if (user.card4) {
                  return <p key={user.id}>{user.name}</p>;
                }
                return null;
              })}
            </Paper>
          )}
        </Paper>
        </Box>
      </Box>
}
    </div>
  );
}

export default App;
