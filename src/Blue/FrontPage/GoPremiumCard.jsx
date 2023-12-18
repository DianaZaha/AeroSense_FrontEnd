import React from 'react';
import { Box, Fab, Typography, Paper, Grid} from '@mui/material';
import PremiumImage from './ImagesBlue/premium.png';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function GoPremiumCard() {

  return (

    <Paper mt={2} elevation={3} sx={{ background: '#143E2F', paddingTop: 3, paddingBottom: 3 }}>
      <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={4}>
          <img src={PremiumImage} alt="AeroSense_logo" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={10} sm={5}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'column', p: 1, m: 1, }}>
            <Typography variant="h4" mt={4} mb={2} sx={{ color: '#ecebef'}}>
              SHARE THE CARE WITH THOSE AROUND YOU
            </Typography>
            <Typography variant="body1" mt={2} mb={2} sx={{ color: '#ecebef'}}>
              Become a Manager and access data for more than one room. Use our data to keep all the people in your life safe. A good environment benefits everyone!
            </Typography>
            <Link to="/create-user">
              <Fab variant="extended" sx={{ background: "#228B22", color: "#ffffff" }} >
                <AddIcon />
                GO PREMIUM
              </Fab>
            </Link>
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  );
};

