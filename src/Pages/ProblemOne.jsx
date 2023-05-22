import React, { useState } from "react";
import { Box, Button, FormControl, MenuItem, Paper, Skeleton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Cards from "../Components/Cards";


export default function ProblemOne() {

    const [inputs, setInputs] = useState([]);
    const [formData, setFormData] = useState({});
    const [cards, setCards] = useState([]);
    const [labelCount, setLabelCount] = useState(1);
    const [problemLoading, setProblemLoading] = useState(false)


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

      const handleDeletCard = (id) => {
        console.log(id);
        const update = cards.filter((item) => item.id !== id);
        setCards(update);
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

  return (
    <div>
     
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
                      sx={{ width: "150px" }}
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
                      sx={{ width: "150px" }}
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

    </div>
  )
}
