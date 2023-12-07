import React, { useCallback, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorCard from '../SensorCard/SensorCard';
import { Box, Modal, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import RoomDetailsComponent from '../../RoomDetailsComponent/RoomDetailsComponent';
import AddSensorComponent from '../../AddSensorComponent/AddSensorComponent';


export default function RoomCard({ supabase, Name, Description, RoomId, setDeleteAlerState, setAddSensorAlerState, fetchRooms }) {
  const [sensorList, setSensorList] = useState([]);
  const [preRender, setPrerender] = useState(0);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsHandleOpen = () => setDetailsOpen(true);
  const detailsHandleClose = () => setDetailsOpen(false);

  const [addSensorOpen, setAddSensorOpen] = useState(false);
  const handleOpenNewSensor = () => setAddSensorOpen(true);
  const handleCloseNewSensor = () => setAddSensorOpen(false);


  const style = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%',
    bgcolor: 'background.paper', boxShadow: 24, p: 4,
  };

  const style1 = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '30%',
    bgcolor: 'background.paper', boxShadow: 24, p: 4,
  };

  async function fetchMachines() {
    const { data: sensors, error } = await supabase.from('sensor').select('*').eq('id_room', RoomId);
    if (error != null)
      setSensorList([]);
    else {
      sensors.sort((a, b) => a.id_sensor > b.id_sensor ? 1 : -1);
      setSensorList(sensors);
    }
  }
  const getSensorList = useCallback(() => {
    fetchMachines();
  }, []);

  if (preRender === 0) {
    getSensorList();
    setPrerender(1);
  }

  const setAddSensorAlerStateRoomCard = useCallback((val) => {
    fetchMachines();
    setAddSensorAlerState(val);
}, []);

  return (
    <Card sx={{ minWidth: 275, background: "#C1E1C1" }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between", flexDirection: 'row', p: 1, m: 1, }}>
          <Typography variant="h5" component="div">
            Room's Name: {Name}
          </Typography>
          <Fab variant="extended" size="medium" onClick={detailsHandleOpen} sx={{ size: '100%', background: "#FFFFFF", color: "#228B22" }} >
            <MenuOpenIcon sx={{ mr: 1 }} /> Details
          </Fab>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1, }}>
          {sensorList.map(element => (
            <Box key={element.id_sensor} sx={{ paddingX: '0.3%', paddingY: '0.3%' }}> <SensorCard Name={element.name} Id={element.id_sensor} /></Box>
          ))
          }
          <Card sx={{ minWidth: 275, background: "#C1E1C1" }}>
            <CardContent >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'column', p: 1, m: 1, }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'row', p: 1, m: 1, }}>
                  <Fab variant="extended" size="big" onClick={handleOpenNewSensor} sx={{ background: "#FFFFFF", color: "#228B22" }} >
                    <AddIcon /> </Fab>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
      <CardActions>
      <Modal open={addSensorOpen} onClose={handleCloseNewSensor} >
                <Box sx={style1}>
                    <AddSensorComponent UserID={1} RoomID={RoomId} supabase={supabase} 
                    onClose={handleCloseNewSensor} setAddSensorAlerState={setAddSensorAlerStateRoomCard} />
                </Box>
            </Modal>
        <Modal open={detailsOpen} onClose={detailsHandleClose} >
          <Box sx={style}>
            <RoomDetailsComponent
              supabase={supabase}
              RoomId={RoomId} RoomName={Name}
              RoomDetailsDescription={Description}
              RoomSensorList={sensorList} onClose={detailsHandleClose}
              setDeleteAlerState={setDeleteAlerState}
              fetchRooms={fetchRooms} />
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}