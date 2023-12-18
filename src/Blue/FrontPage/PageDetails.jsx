import React from 'react'
import { Fab, Typography, Paper, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import logo from './ImagesBlue/AeroSense_Logo.png';
import { Link } from 'react-router-dom';

export default function PageDetails() {
  return (
    <Paper elevation={3} sx={{background: '#143E2F', paddingTop: 3, paddingBottom: 3}}>
    <Grid container spacing={4} justifyContent="center">
    <Grid item xs={10} sm={5}>
        <Typography variant="h4"  mt={4} mb={2} sx={{ color: '#ecebef'}}>
          A HEALTHY ENVIRONMENT FOR A HEALTHY MIND
        </Typography>
        <Typography variant="body1"  mt={2} mb={2} sx={{ color: '#ecebef' }}>
          We believe in practices that connect your mental and physical health to the health of our planet. Make the best of your surroundings by using our product!
        </Typography>
        <Link to="/create-user">
          <Fab variant="extended" sx={{ background: "#228B22", color: "#ffffff" }} >
            <AddIcon />
            Sign Up Now
          </Fab>
        </Link>
      </Grid>
      <Grid item xs={12} sm={4} >
          <img src={logo} alt="AeroSense_logo" style={{ maxWidth: "100%"}}/>
      </Grid>
      </Grid>
    </Paper>
  )
};