import { Typography, Box } from '@mui/material'
import React from 'react'

export default function SensorDetailsComponent({SensorName}) {
  return (
   <Box>
    <Typography variant="h4">
        Name: {SensorName}
    </Typography>
    <Typography>
        Sensor Factory ID: 12334567
    </Typography>
    <Typography>
        This is my sensor {SensorName} Description
    </Typography>
   </Box>
  )
}
