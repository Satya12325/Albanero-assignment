import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Box, Button, FormControl, MenuItem, Paper, Skeleton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Cards from "./Components/Cards";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

function App() {
  const [inputs, setInputs] = useState([]);
  const [formData, setFormData] = useState({});
  const [cards, setCards] = useState([]);
  const [problem, setProblem] = useState(true);
  const [labelCount, setLabelCount] = useState(1);

  const handleAddInput = (type) => {

    const label = inputs.length + 1;
    const newInput = {
      type,
      label,
    };
    console.log(newInput);
    setInputs([...inputs, newInput]);
  };

  const addTextField = () => {
    setInputs([...inputs, { type: "text", label: `Name` }]);
    setLabelCount(labelCount + 1);
  };

  const addSelectBox = () => {
    setInputs([...inputs, { type: "select", label: `Gender` }]);
    setLabelCount(labelCount + 1);
  };

  const addCheckbox = () => {
    setInputs([...inputs, { type: "checkbox", label: `Checkbox` }]);
    setLabelCount(labelCount + 1);
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
  const [errors, setErrors] = useState();

  const handleSaveDetails = async () => {
    setProblemLoading(true)

    // Check for empty required fields
    // inputs.forEach((input) => {
    //   if (input.label in formData && formData[input.label].trim() === "") {
    //     newErrors[input.label] = "This field is required";
    //     hasError = true;
    //   }
    // });

    console.log(Object.keys(formData).length ===0 );
    var f = 0;
    for (let key in formData) {
      // console.log(key);
      if (formData[key] === "") {
        setErrors("Fields is missing !!!")
        f = 1;
      }
    }

    console.log(f)
    if(Object.keys(formData).length === 0){
      setErrors("Fields is missing !!!")

      return false;
    }
    if (f != 0) {
      setProblemLoading(false)
      return;
    }
    else {

      const newCard = { ...formData, id: cards.length + 1 };
      console.log(newCard);
      setCards([...cards, newCard]);
      await setTimeout(() => {
        setProblemLoading(false)
      }, 2000)
      setFormData({});
      setInputs([]);
      setErrors("");
    }

  };

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Satya",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 2,
      name: "Ram",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 3,
      name: "Hari",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 4,
      name: "Alexander",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 5,
      name: "Siri",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 6,
      name: "John",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 7,
      name: "Skyline",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 8,
      name: "Quick",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 9,
      name: "Nitish",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    },
    {
      id: 10,
      name: "John",
      Active: false,
      ExamClear: false,
      hindi: false,
      English: false,
    }
    // Add more users if needed
  ]);

  const [selectedUser, setSelectedUser] = useState("");
  const [cardVisibility, setCardVisibility] = useState({
    card1: true,
    card2: true,
    card3: true,
    card4: true,
  });
  const [problemLoading, setProblemLoading] = useState(false)

  const handleUserSelect = (event) => {
    const userId = parseInt(event.target.value);
    setSelectedUser(userId);
  };

  const handleCheckboxChange = (userId, cardName) => {
    console.log(userId, cardName)
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, [cardName]: !user[cardName] };
      }
      return user;
    });
    console.log(updatedUsers)
    setUsers(updatedUsers);
  };

  const handleSaveAccess = async () => {


    setProblemLoading(true)
    const updatedCardVisibility = { ...cardVisibility };
    console.log(selectedUser)
    const fltr = users.filter((item) => item.id === selectedUser)
    console.log(fltr)
    fltr.forEach((user) => {
      //   Object.keys(cardVisibility).forEach((card) => {
      //     if (user[card]) {
      //       updatedCardVisibility[card] = true;
      //     }
      //   });
      Object.keys(updatedCardVisibility).forEach((card) => {
        updatedCardVisibility[card] = fltr.some((user) => user[card]);
      });
    });

    await setTimeout(() => {
      setProblemLoading(false)
    }, 2000)
    setCardVisibility(updatedCardVisibility);
  };

  const handleDeletCard = (id) => {
    console.log(id);
    const update = cards.filter((item) => item.id !== id);
    setCards(update);
  };

  return (
    <div className="App">
      <Paper
        style={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          margin: "auto",
        }}
      >
        <Button
          onClick={() => setProblem(true)}
          variant="contained"
          color={problem ? "success" : "error"}
        >
          Problem 1
        </Button>
        <Button
          onClick={() => setProblem(false)}
          variant="contained"
          color={problem ? "error" : "success"}
        >
          Problem 2
        </Button>
      </Paper>
      {problem && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          className="problem"
        >
          <Paper
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "20px",
              // height: "200px",
              // border: "1px solid"
              background: "transparent",
              background: 'linear-gradient(183.49deg, rgba(111, 148, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%)',

            }}
            elevation={3}
          >
            <Button variant="contained" onClick={() => addTextField("text")}>
              Add text-field
            </Button>
            <Button
              variant="contained"
              onClick={() => addSelectBox("select")}
            >
              Add select box
            </Button>
            <Button
              variant="contained"
              onClick={() => addCheckbox("checkbox")}
            >
              Add checkbox
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleSaveDetails}
            // type="submit"
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
              padding: "20px",
              height: "300px",
              overflow: "scroll",
              background: "transparent",
              background: 'linear-gradient(183.49deg, rgba(111, 148, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%)',

            }}
            elevation={3}
          >
            {/* <form onSubmit={handleSaveDetails}> */}
            <h3
              style={{ textShadow: '0 10px 4px rgba(0, 0, 0, 0.5)', }}
            >Form Generator Section: - </h3>
            {inputs.map((input) => (
              <div key={input.label}>
                {/* <FormControl> */}
                {input.type === "text" && (
                  <span
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      // margin:"10px"
                    }}
                  >
                    <label htmlFor={`input-${input.label}`}>
                      {input.label} :{" "}
                    </label>
                    <TextField
                      label="Filled"
                      variant="filled"
                      type="text"
                      id={`input-${input.label}`}
                      sx={{ width: "200px" }}
                      error={!!errors}
                      helperText={errors}
                      required
                      onChange={(e) =>
                        handleInputChange(input.label, e.target.value, "text")
                      }
                    />
                    {/* <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(input.label)}
                  >
                    Delete
                  </Button> */}
                    <DeleteIcon
                      color="error"
                      onClick={() => handleDelete(input.label)}
                    />
                  </span>
                )}
                {input.type === "select" && (
                  <span
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      // margin:"10px"
                    }}
                  >
                    <label htmlFor={`input-${input.label}`}>
                      {input.label} :{" "}
                    </label>

                    <TextField
                      select
                      label="Select"
                      defaultValue="EUR"
                      id={`input-${input.label}`}
                      placeholder="Select an Gender"
                      sx={{ width: "200px" }}
                      error={!!errors}
                      helperText={errors}
                      required
                      onChange={(e) =>
                        handleInputChange(input.label, e.target.value, "select")
                      }
                    >
                      <MenuItem value="">Select an Gender</MenuItem>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>

                      {/* Add your select options here */}
                    </TextField>
                    {/* <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(input.label)}
                  >
                    Delete
                  </Button> */}
                    <DeleteIcon
                      color="error"
                      onClick={() => handleDelete(input.label)}
                    />
                  </span>
                )}
                {input.type === "checkbox" && (
                  <span
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      // margin:"10px"
                    }}
                  >
                    <label htmlFor={`input-${input.label}`}>
                      {input.label} :{" "}
                    </label>

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
                      style={{ height: "30px", width: "30px" }}
                    />
                    {/* <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(input.label)}
                  >
                    Delete
                  </Button> */}
                    <DeleteIcon
                      color="error"
                      onClick={() => handleDelete(input.label)}
                    />
                  </span>
                )}
                {/* </FormControl> */}
                {errors && <div className="error">{errors[input.label]}</div>}
              </div>
            ))}
            {/* </form> */}

          </Paper>
          <Paper
            sx={{
              width: "25%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "300px",
              overflow: "scroll",
              background: "transparent",
              background: 'linear-gradient(183.49deg, rgba(111, 148, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%)',

            }}
            elevation={3}
          >
            <h3 style={{ textShadow: '0 10px 4px rgba(0, 0, 0, 0.5)', }}
            >Cards Section: - </h3>
            {
              problemLoading ? cards.map(item => <Skeleton animation="wave" sx={{
                height: "50px"
              }} />) : cards.map((card, index) => (
                <Cards
                  key={index}
                  data={card}
                  id={card.id}
                  handleDelete={handleDeletCard}
                />
              ))
            }


            {/* <div key={index}>
              {Object.entries(card).map(([label, value]) => (
                <p key={label}>
                  <strong>{label}:</strong> {value.toString()}
                </p>
              ))}
            </div> */}
            {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={problemLoading}
        onClick={()=>setProblemLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}

          </Paper>
        </Box>
      )}

      {/* Problem -2  */}
      {!problem && (
        <Box>
          <h2 style={{ textAlign: "center" }}>Access Control Page</h2>
          <Box
            sx={{
              display: "flex",
              // flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: 2,
              alignItems: "center",
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
              <TextField
                select
                label="Select"
                defaultValue="EUR"
                value={selectedUser}
                onChange={handleUserSelect}
              >
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
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              elevation={3}
            >
              <Button
                variant="contained"
                color="success"
                onClick={handleSaveAccess}
              >
                Save
              </Button>
              <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                      sx={{ backgroundColor: "black", }}
                    >
                      <TableRow

                      >
                        <TableCell sx={{ color: "white" }}>User</TableCell>
                        <TableCell sx={{ color: "white" }}>Active</TableCell>
                        <TableCell sx={{ color: "white" }}>Exam clear</TableCell>
                        <TableCell sx={{ color: "white" }}>Able to speak Hindi</TableCell>
                        <TableCell sx={{ color: "white" }}>Able to speak English</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow
                          key={user.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">{user.name}</TableCell>
                          {Object.keys(cardVisibility).map((card) => (
                            <TableCell key={card} >
                              <input
                                type="checkbox"
                                style={{ height: "20px", width: "20px" }}
                                checked={user[card]}
                                onChange={() =>
                                  handleCheckboxChange(user.id, card)
                                }
                              />
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Paper>
            {/* Cards */}
            {/* <Paper
              sx={{
                width: "50%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                gap: 2,
                padding: "20px",
              }}
              elevation={3}
            > */}
            {
              problemLoading ? <CircularProgress /> : <Paper
                sx={{
                  width: "70%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  gap: 2,
                  padding: "20px",
                  background: "transparent",
              background: 'linear-gradient(183.49deg, rgba(111, 148, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%)',

                }}
                elevation={3}>
                {cardVisibility.card1 && (
                  <Paper sx={{
                    padding: "20px",
                  }}>
                    <h3>Active</h3>
                    {users.map((user) => {
                      if (user.card1) {
                        return <li key={user.id}>{user.name}</li>;
                      }
                      return null;
                    })}
                  </Paper>
                )}
                {cardVisibility.card2 && (
                  <Paper sx={{
                    padding: "20px",
                  }}>
                    <h3>Exam clear</h3>
                    {users.map((user) => {
                      if (user.card2) {
                        return <li key={user.id}>{user.name}</li>;
                      }
                      return null;
                    })}
                  </Paper>
                )}
                {cardVisibility.card3 && (
                  <Paper sx={{
                    padding: "20px",
                  }}>
                    <h3>Able to talk Hindi</h3>
                    {users.map((user) => {
                      if (user.card3) {
                        return <li key={user.id}>{user.name}</li>;
                      }
                      return null;
                    })}
                  </Paper>
                )}
                {cardVisibility.card4 && (
                  <Paper sx={{
                    padding: "20px",
                  }}>
                    <h3>Able to talk English</h3>
                    {users.map((user) => {
                      if (user.card4) {
                        return <li key={user.id}>{user.name}</li>;
                      }
                      return null;
                    })}

                  </Paper>
                )}
              </Paper>
            }
            {/* </Paper> */}

          </Box>
        </Box>
      )}
    </div>
  );
}

export default App;
