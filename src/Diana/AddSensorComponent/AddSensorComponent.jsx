import React, { useState, useCallback } from 'react'
import { Box, FormControl, InputLabel, Select, Button, MenuItem, Fab } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddIcon from '@mui/icons-material/Add';

export default function AddSensorComponent({ UserID, RoomID, supabase, onClose, setAddSensorAlerState }) {
  const [unallocatedSensors, SetUnallocatedSensors] = useState([]);
  const [idSensor, setIdSensor] = React.useState(0);
  const [prerender, setPrerender] = useState(0);

  const handleChange = (event) => {
    setIdSensor(event.target.value);
  };

  async function fetchUnallocatedSensors() {
    const { data: FetchedSensors, error } = await supabase.from('sensor').select('*').eq('id_user', UserID).is('id_room', null);
    if (error != null)
      SetUnallocatedSensors([]);
    else {
      FetchedSensors.sort((a, b) => a.id_sensor > b.id_sensor ? 1 : -1);
      SetUnallocatedSensors(FetchedSensors);
    }
  }

  const getSensorList = useCallback(() => {
    fetchUnallocatedSensors();
  }, []);

  if (prerender === 0) {
    getSensorList();
    setPrerender(1);
  }

  const AllocateSensor = () => {
    console.log(idSensor);
    postData(idSensor,RoomID);
    onClose();
    
  }

  const LinkNewSensor = () => {
    console.log("Nu se poate bre");
  }

  const postData = async (idSensor, idRoom) => {
    const { data, error } = await supabase.from('sensor').update({ id_room: idRoom}).eq('id_sensor', idSensor).single();
    console.log(error);
    if (error != null) {
      setAddSensorAlerState('error-database');
    }
    else {
      setAddSensorAlerState('added-successfully');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="ChoosenSensor">Unallocated Sensor</InputLabel>
            <Select
              labelId="ChoosenSensorlabel"
              id="ChoosenSensorselect"
              value={idSensor}
              label="Choose from Unallocated Sensor"
              onChange={handleChange}
            >
              {
                unallocatedSensors.map(element => (<MenuItem value={element.id_sensor}>{element.id_sensor} | {element.name}</MenuItem>))
              }
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between", flexDirection: 'row', p: 1, m: 1, }}>
          <Fab variant="extended" size="big" onClick={AllocateSensor} sx={{ background: "#228B22", color: "#ffffff" }} >
            <AddIcon />
          </Fab>
          <Fab variant="extended" size="big" onClick={LinkNewSensor} sx={{ background: "#228B22", color: "#ffffff" }} >
            <AddLinkIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  )
}
