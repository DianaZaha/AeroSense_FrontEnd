import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function PremiumPage() {


    return (
          <Grid container spacing={1}>
         {[lightTheme].map((theme, index) => (
             <Grid item xs={5.5} key={index}>
             <ThemeProvider theme={theme}>
                <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
            },
        }}
        >

        <Card elevation={5}>
            <Typography variant="h4" sx={{ margin: 4}}>
            Premium package
      </Typography>
            <CardContent>
                <Typography> 
                 <Checkbox {...label} disabled checked />
                 Includes all the features of the standard user
                 </Typography>
                 <Typography> 
                 <Checkbox {...label} disabled checked />
                 You have access to multiple sensors
                 </Typography>
                 <Typography> 
                 <Checkbox {...label} disabled checked />
                 You can group sensors into rooms
                 </Typography>
                 <Typography> 
                 <Checkbox {...label} disabled checked />
                 You have access to statistical data in CSV format
                 </Typography>
                 <Typography> 
                 <Checkbox {...label} disabled checked />
                 You receive premium sensor maintanance 
                 </Typography>
            </CardContent>
        </Card>
        
        </Box>
            </ThemeProvider>
            </Grid>
        ))}
        </Grid>
    );
}



