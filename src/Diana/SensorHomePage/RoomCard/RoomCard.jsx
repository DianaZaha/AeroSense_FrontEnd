import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorCard from '../SensorCard/SensorCard';
import { Box, Modal } from '@mui/material'; 
import RoomDetailsComponent from '../../RoomDetailsComponent/RoomDetailsComponent';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://qniuxbcurrnrzyptvfej.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaXV4YmN1cnJucnp5cHR2ZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MjEyOTIsImV4cCI6MjAxNjQ5NzI5Mn0.m19rQ75BCpl_6iX-unkW3keao72D4po1olxds1YKeNo");
const {data: ID} = await supabase.from('machine_machine_group').select('*');
const {data: Machines} = await supabase.from('machine').select('*');

export default function RoomCard({Name, Description, RoomId}) {
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

  const SensorIDs = [];
  ID.forEach(element=>{ if(element.id_machine_group===RoomId){SensorIDs.push(element.id_machine)} });
  const SensorList= [];
  Machines.forEach(element=>{if(SensorIDs.includes(element.id_machine)){SensorList.push(element)} })
  console.log(SensorList);

  return (
    <Card sx={{ minWidth: 275 , background: "#C1E1C1"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Room's Name: {Name}
        </Typography>
        <Box sx={{  display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1,}}>
        {SensorList.map(element => (
          <Box sx={{ paddingX:'0.3%'}}> <SensorCard Name={element.name} Id={element.id_machine} /></Box>
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
            <RoomDetailsComponent RoomName={Name} RoomDetailsDescription={Description} RoomSensorList={SensorList}/>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}