import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorCard from '../SensorCard/SensorCard';
import {Grid, Box, Container } from '@mui/material'; 
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RoomCard({Name, senorList}) {
  return (
    <Card sx={{ minWidth: 275 , background: "#C1E1C1"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Room's Name: {Name}
        </Typography>
        <Box sx={{  display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1,}}>
        {senorList.map(element => (
          <Box sx={{ paddingX:'0.3%'}}> <SensorCard Name={element}/></Box>
        ))
      }
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Room Seetings:</Button>
      </CardActions>
    </Card>
  );
}