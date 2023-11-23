import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { ListItem, List, Box } from '@mui/material';

// Include the Google Fonts link directly in your component
const GoogleFontsLink = (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Jura:wght@400;700&display=swap"
  />
);

const sensorList = ["Kitchen", "Bedroom", "Child's Room", "Storage Room"];

export default function RoutineDetails() {
  return (
    <>
      {GoogleFontsLink}
      <Card sx={{ maxWidth: 450, margin: 'auto', padding: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="div" sx={{ fontFamily: 'Jura, sans-serif' }}>
            Name: Senzor 1
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Jura, sans-serif', marginBottom: 2 }}>
            Start Date: 12/12/2012
          </Typography>
          <FormControlLabel
            control={<Checkbox name="air" sx={{ fontFamily: 'Jura, sans-serif' }} />}
            label="Air"
          />
          <FormControlLabel
            control={<Checkbox name="sound" sx={{ fontFamily: 'Jura, sans-serif' }} />}
            label="Sound"
          />
          <FormControlLabel
            control={<Checkbox name="humidity" sx={{ fontFamily: 'Jura, sans-serif' }} />}
            label="Humidity"
          />
          <FormControlLabel
            control={<Checkbox name="light" sx={{ fontFamily: 'Jura, sans-serif' }} />}
            label="Light"
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Jura, sans-serif', marginTop: 1 }}>
              SENSOR LIST
            </Typography>
            <List>
              {sensorList.map((element) => (
                <ListItem key={element} sx={{ fontFamily: 'Jura, sans-serif' }}>
                  {element}
                </ListItem>
              ))}
              <ListItem sx={{ textAlign: 'center', fontFamily: 'Jura, sans-serif', marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                >
                  Add a Sensor to the Routine
                </Button>
              </ListItem>
            </List>
          </Box>
          <Button variant="contained" color="primary" sx={{ fontFamily: 'Jura, sans-serif', marginTop: 2 }}>
            Save
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
