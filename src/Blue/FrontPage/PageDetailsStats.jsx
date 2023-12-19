import React from 'react'
import { Box, Typography, Paper, Grid} from '@mui/material';
import logo from './ImagesBlue/StatsDetail.png';

export default function PageDetailsStats () {
  return (
    <Paper mt={2} elevation={3} sx={{background: '#ecebef', paddingTop: 3, paddingBottom: 3}}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10} sm={5}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'column', p: 1, m: 1, }}>
          <Typography variant="h4" mt={4} mb={2}>
            GAUGE THE VITALITY OF YOUR SPACE IN REAL TIME.
          </Typography>
          <Typography variant="body1" mt={2} mb={2}>
          We will notify you each time one of our sensors detect a drop in your quality of life. All you have to do is keep an eye out for our tips!
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <img src={logo} alt="AeroSense_logo" style={{ maxWidth: "100%" }}/>
        </Grid>
      </Grid>
    </Paper>

  )
}