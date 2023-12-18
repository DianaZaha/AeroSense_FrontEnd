import React from 'react'
import { Fab, Typography, Paper, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import logo from './ImagesBlue/SensorsDetail.png';
import { Link } from 'react-router-dom';

export default function PageDetailsSensors() {
  return (

    <Paper mt={2} elevation={3} sx={{background: '#ecebef', paddingTop: 3, paddingBottom: 3}}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
            <img src={logo} alt="AeroSense_logo" style={{ maxWidth: "100%" }}/>
        </Grid>
        <Grid item xs={10} sm={5}>
          <Typography variant="h4" mt={4} mb={2}>
            LEARN HOW TO BETTER OPTIMIZE THE WORLD AROUND YOU
          </Typography>
          <Typography variant="body1" mt={2} mb={2}>
            Keep track of some of the most important aspects of your health, from air quality to sunlight exposure.
          </Typography>
          <Link to="/create-user">
            <Fab variant="extended" sx={{ background: "#228B22", color: "#ffffff" }} >
              <AddIcon />
              Check it out
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  )
}