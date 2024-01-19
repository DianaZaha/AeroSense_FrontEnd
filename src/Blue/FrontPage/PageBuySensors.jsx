import React from 'react';
import { Box, Typography, Paper, Grid, Link, Fab} from '@mui/material';
import sensorimage from './ImagesBlue/Sensor.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function BuySensors() {

  return (

    <Paper mt={2} elevation={3} sx={{background: '#ecebef', paddingTop: 3, paddingBottom: 3}}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10} sm={5}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'column', p: 1, m: 1, }}>
          <Typography variant="h4" mt={4} mb={2}>
            EASILY GET STARTED
          </Typography>
          <Typography variant="body1" mt={2} mb={2}>
            Purchase one of our sensor modules from our retailer partners and embark your journey towards a better indoor quality today!
          </Typography>
          </Box>
          <Link href="https://www.optimusdigital.ro/ro/cautare?controller=search&orderby=position&orderway=desc&search_query=esp32&submit_search= ">
              <Fab variant="extended" sx={{ background: "#228B22", color: "#ffffff" }} >
                <AddShoppingCartIcon />
                Buy Now!
              </Fab>
            </Link>
        </Grid>
        <Grid item xs={12} sm={4}> 
            <img src={sensorimage} alt="SensorImage" style={{ maxWidth: "100%" }}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

