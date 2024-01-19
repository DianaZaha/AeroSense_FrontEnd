import { Box, FormControl, InputLabel, MenuItem, Select, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChartComponent from './CharComponent/ChartComponent';

export default function StatisticsPageComponent({ supabase, userId }) {
  const [measurement, setMeasurement] = useState('');
  const [sensorId, setSensorId] = useState('');
  const [sensorList, setSensorList] = useState([]);
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const [prerender, setPrerender] = useState(0);
  let list = [];
  list.push({ id: 1, name: "Light" });
  list.push({ id: 2, name: "Sound" });
  list.push({ id: 3, name: "Temperature" });
  list.push({ id: 4, name: "Humidity" });
  list.push({ id: 5, name: "CO2" });
  list.push({ id: 6, name: "TVOC" });


  const handleChangeMeasuremnt = (event) => {
    setMeasurement(event.target.value);
    console.log(measurement);
  };

  const handleChangeSensorId = (event) => {
    setSensorId(event.target.value);
    console.log(sensorId);
  }

  useEffect(() => {
    async function fetchMachines() {
      const { data: sensors, error } = await supabase.from('sensor').select('*').eq('id_user', userId);
      if (error != null) {
        setSensorList([]);
      }
      else {
        sensors.sort((a, b) => a.id_sensor > b.id_sensor ? 1 : -1);
        setSensorList(sensors);
      }
      setMeasurementTypes(list);
      setPrerender(1);
    }
    fetchMachines();
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  , [prerender]);

console.log("I rerender stats page")
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around", flexDirection: 'column' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-around', position: 'sticky' }}>
        <Grid container spacing={2} >
          <Grid item xs={12}  md={12} sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h3">
              Your statistics report is ready!
            </Typography>
            <Typography variant="body1" sx={{ mt: 3}}>
              Choose your sensor and desired measurement type from the list you want to see and enjoy your sensor's history!
            </Typography>
            <Typography variant="caption">
              Please note that the data refreshes automatically every 20 seconds!
            </Typography>
          </Grid>
          <Grid item xs={10} md={6}>
            <FormControl fullWidth>
              <InputLabel id="ChoosenSensor">Sensor</InputLabel>
              <Select
                labelId="ChoosenSensorLabel"
                id="ChoosenSensorID"
                value={sensorId}
                label="Choose from your sensors"
                onChange={handleChangeSensorId}
              >
                {sensorList.map(element => (<MenuItem key={element.id_sensor} value={element.id_sensor}>{element.id_sensor} | {element.name}</MenuItem>))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={10} md={6}>
            <FormControl fullWidth>
              <InputLabel id="ChoosenMeasurement">Measurement Type</InputLabel>
              <Select
                labelId="ChoosenMeasurementLabel"
                id="ChoosenMeasurementlect"
                value={measurement}
                label="Choose from measurement possibilities"
                onChange={handleChangeMeasuremnt}
              >
                {measurementTypes.map(element => (<MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>))}
              </Select>
            </FormControl >
          </Grid>
        </Grid>
      </Container>
      {(measurement !== '' && sensorId !== '') && <ChartComponent supabase={supabase} measurement={measurement} sensorId={sensorId} />}
    </Box >
  )
}
