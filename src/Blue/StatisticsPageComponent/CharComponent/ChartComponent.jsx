import { Box, Typography, LinearProgress, Fab, Modal } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { LineChart, axisClasses } from '@mui/x-charts';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StatisticsDetails from './StatisticsDetails';

const chartSetting = {
  yAxis: [
    {
      label: 'Values',
    },
  ],
  width: 1200,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
  axisHighlight: { x: 'band', y: 'line' },
  tooltip: { trigger: 'axis' }
};

const valueFormatter = (value) => `${value}`;


export default function ChartComponent({ supabase, measurement, sensorId, }) {

  const [data, setData] = useState(null);
  const [ReadingList, setReadingList] = useState(null);
  const [measurementName, setMeasurementName] = useState('');
  const [preRender, setPrerender] = useState(0);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsHandleOpen = () => setDetailsOpen(true);
  const detailsHandleClose = () => setDetailsOpen(false);

  const style = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%',
    bgcolor: 'background.paper', boxShadow: 24, p: 4,
  };

  useEffect(() => {
    async function fetchData() {
      const { data: Readings, error } = await supabase.from('values').select('*').eq('id_measurement', measurement).eq('id_sensor', sensorId).order('time_stamp', { ascending: false }).limit(20);
      Readings.sort((a, b) => a.id_value > b.id_value ? 1 : -1);
      setReadingList(Readings);
      if (error != null) {
        console.error('Error fetching data:', error);
        setData(null);
        return;
      } else {
        setData(null);
        let transformedData = [];
        let count = 1;
        Readings.map(item => {
          transformedData.push({
            value: item.value,
            time: new Date(item.time_stamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            no: count
          });
          count = count + 1;
        });
        console.log(transformedData);
        setData(transformedData);
        if (measurement === 1) setMeasurementName("Brigthness Level");
        if (measurement === 2) setMeasurementName("Sound Level");
        if (measurement === 3) setMeasurementName("Temperature");
        if (measurement === 4) setMeasurementName("Humidity");
        if (measurement === 5) setMeasurementName("CO2 Level");
        if (measurement === 6) setMeasurementName("TVOC Level");
        if (data !== null) setPrerender(1);
        console.log(data);
      }
    };

    fetchData();
  }, [data, preRender, ReadingList]);

  if (data === null || data.length === 0) {
    return <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'row', p: 1, m: 1, }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'column', p: 1, m: 1, }}>
        <Typography>Loading data</Typography>
        <LinearProgress />
      </Box></Box>;
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between", flexDirection: 'row', p: 1, m: 1, }}>
        {(preRender > 0 && measurement !== null && data !== null && data.length > 0) &&
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between", flexDirection: 'column', p: 1, m: 1, }}>
            <LineChart
              dataset={data}
              xAxis={[{
                scaleType: 'band', dataKey: 'no', labels: { enabled: false, visible: false }
              }]}
              series={[
                { dataKey: 'value', label: 'Value of ' + measurementName + ' :', valueFormatter }]}
              {...chartSetting}
            />
            <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <Fab variant="extended" sx={{ background: "#c2e7ff" , width: '50%', justify: "center"}} onClick={detailsHandleOpen} >
              <VisibilityIcon /> See more </Fab>
            </Box>
            <Modal open={detailsOpen} onClose={detailsHandleClose} >
              <Box sx={style} >
                <StatisticsDetails sensorId={sensorId} ReadingList={ReadingList} MeasurementName={measurementName} />
              </Box>
            </Modal>
          </Box>
        }
      </Box>

    </>
  )
}
