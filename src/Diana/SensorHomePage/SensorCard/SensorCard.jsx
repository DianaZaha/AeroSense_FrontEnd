import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorsIcon from '@mui/icons-material/Sensors';

export default function SensorCard({Name}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sensor's Name: {Name}
        </Typography>
        <SensorsIcon></SensorsIcon>
      </CardContent>
      <CardActions>
        <Button size="small">Sensor Details</Button>
      </CardActions>
    </Card>
  );
}
