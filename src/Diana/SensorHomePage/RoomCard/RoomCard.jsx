import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorCard from '../SensorCard/SensorCard';
import {Grid, Box, Container, Modal } from '@mui/material'; 
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RoomDetailsComponent from '../../RoomDetailsComponent/RoomDetailsComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RoomCard({Name, Description, sensorList}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card sx={{ minWidth: 275 , background: "#C1E1C1"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Room's Name: {Name}
        </Typography>
        <Box sx={{  display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1,}}>
        {sensorList.map(element => (
          <Box sx={{ paddingX:'0.3%'}}> <SensorCard Name={element}/></Box>
        ))
      }
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>Room Details:</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
           <Box sx={style}>
            <RoomDetailsComponent RoomName={Name} RoomDetailsDescription={Description} RoomSensorList={sensorList}/>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}