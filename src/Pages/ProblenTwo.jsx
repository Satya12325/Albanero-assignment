import React, { useState } from "react";
import { Box, Button, FormControl, MenuItem, Paper, Skeleton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from '@mui/material/CircularProgress';
export default function ProblemTwo() {


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

  return (
    <div>
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
    </div>
  )
}
