import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SensorCard from '../SensorCard/SensorCard';
import { Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function UnallocatedSensorsCard({unallocatedList, supabase}) {
  const [, setAddSensorOpen] = useState(false);

  const handleOpenNewSensor = () => setAddSensorOpen(true);

  return (
    <Card sx={{ minWidth: 275, background: "#f1d3d3" }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-between", flexDirection: 'row', p: 1, m: 1, }}>
        <Typography variant="h5" component="div">
          Unallocated Sensors
        </Typography>
        <Fab variant="extended" onClick={handleOpenNewSensor} sx={{ size: '140%', background: "#FFFFFF", color: "#000000"}} >
          <AddIcon/>
            New Sensor
          </Fab>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1, }}>
          {unallocatedList.map(element => (
            <Box key={element.id_sensor} sx={{ paddingX: '0.3%' }}> <SensorCard Name={element.name} Id={element.id_sensor} supabase={supabase} /></Box>
          ))
          }
        </Box>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}