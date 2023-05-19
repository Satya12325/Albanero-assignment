import { Box, Paper } from '@mui/material'
import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cards(props) {
  const { data, handleDelete, id } = props
  return (
    <Paper elevation={3}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "20px",
      }}
    >
      <Box >
        {Object.entries(data).map(([label, value]) => (

          label === "id" ? "" :
            <div key={label}>
              <strong>{label}:</strong> {value.toString()}
            </div>

        ))}
      </Box>
      <DeleteIcon color="error" onClick={() => handleDelete(id)} />

    </Paper>
  )
}
