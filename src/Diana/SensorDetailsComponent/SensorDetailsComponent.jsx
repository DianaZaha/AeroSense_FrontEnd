import { Typography, Box } from '@mui/material'
import React from 'react'

export default function SensorDetailsComponent({SensorName, ID}) {
  return (
   <Box>
    <Typography variant="h4">
        Name: {SensorName}
    </Typography>
    <Typography>
        Sensor Factory ID: {ID}
    </Typography>
    <Typography>
        This is my sensor {SensorName} Description
    </Typography>
   </Box>
  )
}
