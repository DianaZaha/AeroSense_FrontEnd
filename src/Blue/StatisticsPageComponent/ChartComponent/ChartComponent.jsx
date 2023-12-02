import { Box, Typography } from '@mui/material'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Hours',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    light: 59,
    sound: 57,
    temperature: 27,
    humidity: 21,
    airquality: 95,
    day: 'Monday',
  },
  {
    light: 50,
    sound: 52,
    temperature: 28,
    humidity: 28,
    airquality: 80,
    day: 'Tuesday',
  },
  {
    light: 47,
    sound: 53,
    temperature: 26,
    humidity: 41,
    airquality: 70,
    day: 'Wednesday',
  },
  {
    light: 54,
    sound: 56,
    temperature: 26,
    humidity: 73,
    airquality: 90,
    day: 'Thursday',
  },
  {
    light: 57,
    sound: 69,
    temperature: 29,
    humidity: 99,
    airquality: 95,
    day: 'Friday',
  },
  {
    light: 60,
    sound: 63,
    temperature: 27,
    humidity: 144,
    airquality: 80,
    day: 'Saturday',
  },
  {
    light: 59,
    sound: 60,
    temperature: 30,
    humidity: 319,
    airquality: 90,
    day: 'Sunday',
  },
  
];

const valueFormatter = (value) => `${value}mm`;


export default function ChartComponent() {
  return (
    <Box>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
        series={[
          { dataKey: 'light', label: 'Light', valueFormatter },
          { dataKey: 'sound', label: 'Sound', valueFormatter },
          { dataKey: 'temperature', label: 'Temperature', valueFormatter },
          { dataKey: 'humidity', label: 'Humidity', valueFormatter },
          { dataKey: 'airquality', label: 'Air Quality', valueFormatter },
        ]}
        {...chartSetting}
/>
    </Box>
  )
}
