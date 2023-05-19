import { Box, Paper } from '@mui/material'
import React from 'react'

export default function Cards(props) {
  const {data} = props
  return (
    <Paper>
        <Box >
              {Object.entries(data).map(([label, value]) => (
                <p key={label}>
                  <strong>{label}:</strong> {value.toString()}
                </p>
              ))}
            </Box>
    </Paper>
  )
}
