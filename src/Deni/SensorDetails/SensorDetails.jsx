import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, CardHeader, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '100px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function SensorDetails() {
    const fetchedAir = 160;
    const fetchedHumid = 16000;
    const fetchedTemp = 160000;
    const fetchedSound = 160000;
    const fetchedBright = 1600;

    return (
        <Grid container spacing={1}>
        {[lightTheme].map((theme, index) => (
            <Grid item xs={5.5} key={index}>
            <ThemeProvider theme={theme}>
                <Box
                sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr' },
                    gap: 2,
                }}
                >
                
                    {[4].map((elevation) => (
                    <Item key={elevation} elevation={elevation}>
                        <Typography variant='h4' sx={{ margin: 1}}>
                            {`Sensor name: Kitchen`}
                        </Typography>
                    </Item>
                ))}
                    {[4].map((elevation) => (
                    <Item key={elevation} elevation={elevation}>
                        <Typography variant='h4' sx={{ margin: 1}}>
                            {`Sensor routine: routine4`}
                        </Typography>
                    </Item>
                ))}
                {[4].map((elevation) => (
                    <Item key={elevation} elevation={elevation}>
                        <Typography variant='h4' sx={{ margin: 1}}>
                            {`Sensor ID: 23654sdte5`}
                        </Typography>
                    </Item>
                ))}
                </Box>
                <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 600,
            height: 380,
            },
        }}
        >

        <Card elevation={5}>
            <CardHeader title="Recorded data"></CardHeader>
            <CardContent>
            Air quality value:<Typography sx={{ color: fetchedAir < 3000 ? '#27d128' : '#ff0000'}}>{fetchedAir}</Typography> 
    
            Humidity level:<Typography sx={{ color: fetchedHumid < 2000 ? '#27d128' : '#ff0000'}}>{fetchedHumid}</Typography>
        
            Temperature:<Typography sx={{ color: fetchedTemp < 7000 ? '#27d128' : '#ff0000'}}>{fetchedTemp}</Typography> 
        
            Sound pollution:<Typography sx={{ color: fetchedSound < 300 ? '#27d128' : '#ff0000'}}>{fetchedSound}</Typography>
        
            Brightness detector:<Typography sx={{ color: fetchedBright < 100 ? '#27d128' : '#ff0000'}}>{fetchedBright}</Typography>
            </CardContent>
        </Card>
        
        </Box>
            </ThemeProvider>
            </Grid>
        ))}
        </Grid>
    );
}