import { Box, FormControl, InputLabel, MenuItem, Select, Container} from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChartComponent from './CharComponent/ChartComponent';;

export default function StatisticsPageComponent({ supabase, userId }) {
  const [measurement, setMeasurement] = useState('');
  const [sensorId, setSensorId] = useState('');
  const [sensorList, setSensorList] = useState([]);
  const [measurementTypes, setMeasurementTypes] = useState([]);
  const [, setPrerender] = useState(0);
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
    , [sensorList]);


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around", flexDirection: 'column', p: 1, m: 1, }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-around', position: 'sticky' }}>
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
        <FormControl  fullWidth>
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
      </Container>
      {(measurement !== '' && sensorId !== '') && <ChartComponent supabase={supabase} measurement={measurement} sensorId={sensorId} />}
    </Box >
  )
}
