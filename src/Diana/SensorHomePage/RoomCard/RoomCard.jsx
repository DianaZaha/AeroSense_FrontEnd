import React, { useCallback, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorCard from '../SensorCard/SensorCard';
import { Box, Modal } from '@mui/material';
import RoomDetailsComponent from '../../RoomDetailsComponent/RoomDetailsComponent';
import { Error } from '@mui/icons-material';

export default function RoomCard({ supabase, Name, Description, RoomId, setDeleteAlerState, fetchRooms}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [sensorList, setSensorList] = useState([]);
  const [preRender, setPrerender] = useState(0);
  const detailsHandleOpen = () => setDetailsOpen(true);
  const detailsHandleClose = () => setDetailsOpen(false);
  

  const style = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%',
    bgcolor: 'background.paper', boxShadow: 24, p: 4,
  };

  async function fetchMachines() {
    const { data } = await supabase.from('machine_group').select('machine( * )').eq('id_machine_group', RoomId);
    setSensorList(data[0].machine); 
  }

  const getSensorList = useCallback(() => {
    fetchMachines();
  }, []);

  if (preRender === 0) {
    getSensorList();
    setPrerender(1);
  }

  return (
    <Card sx={{ minWidth: 275, background: "#C1E1C1" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Room's Name: {Name}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1, }}>
          {sensorList.map(element => (
            <Box key={element.id_machine} sx={{ paddingX: '0.3%' }}> <SensorCard Name={element.name} Id={element.id_machine} /></Box>
          ))
          }
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={detailsHandleOpen}>Room Details:</Button>
        <Modal open={detailsOpen} onClose={detailsHandleClose} >
          <Box sx={style}>
            <RoomDetailsComponent 
            supabase={supabase} 
            RoomId={RoomId} RoomName={Name} 
            RoomDetailsDescription={Description} 
            RoomSensorList={sensorList} onClose={detailsHandleClose}
            setDeleteAlerState={setDeleteAlerState}
            fetchRooms={fetchRooms}/>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}