import { Box, Typography, Paper, Grid } from '@mui/material';
import React from 'react'
import bgImage from './ImagesBlue/plant_pots.jpg'
import PageDetails from "./PageDetails.jsx";
import PageDetailsSensors from "./PageDetailsSensors.jsx";
import PageDetailsStats from "./PageDetailsStats.jsx";
import GoPremiumCard from './GoPremiumCard.jsx';
import BuySensors from './PageBuySensors.jsx';

export default function FrontPage() {
  return (

    <>
      <Paper mt={2} elevation={3} sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', paddingTop: 3, paddingBottom: 3, backgroundRepeat: "no-repeat", height: '100vh' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={10} justifyContent="center">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around", flexDirection: 'column', p: 1, m: 1, fontWeight: 'bold'  }}>
            <Typography variant="h1" mt={4} mb={2} sx={{ color:'#143E2F', typography: { sm: 'h1', xs: 'h4' } }} >
              AEROSENSE
            </Typography>
            <Typography variant="h5" mt={4} mb={2}  sx={{ color:'#143E2F', typography: { sm: 'h5', xs: 'body1' } }}>
              Care for your environment. Care for yourself
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <PageDetails />
      <PageDetailsSensors />
      <PageDetailsStats />
      <GoPremiumCard />
      <BuySensors />
    </>
  );
};