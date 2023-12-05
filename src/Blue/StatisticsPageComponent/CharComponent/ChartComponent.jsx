import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Values',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};
const dataset1 = [
  {
    light: 59,
    sound: 57,
    temperature: 27,
    humidity: 21,
    airquality: 95,
    day: '29.11',
  },
  {
    light: 50,
    sound: 52,
    temperature: 28,
    humidity: 28,
    airquality: 80,
    day: '30.11',
  },
  {
    light: 47,
    sound: 53,
    temperature: 26,
    humidity: 41,
    airquality: 70,
    day: '01.12',
  },
  {
    light: 54,
    sound: 56,
    temperature: 26,
    humidity: 73,
    airquality: 90,
    day: '02.12',
  },
  {
    light: 57,
    sound: 69,
    temperature: 29,
    humidity: 99,
    airquality: 95,
    day: '03.12',
  },
  {
    light: 60,
    sound: 63,
    temperature: 27,
    humidity: 144,
    airquality: 80,
    day: '04.12',
  },
  {
    light: 59,
    sound: 60,
    temperature: 30,
    humidity: 319,
    airquality: 90,
    day: '05.12',
  },

];

const dataset2 = [
  {
    light: 59,
    day: '29.11',
  },
  {
    light: 50,
    day: '30.11',
  },
  {
    light: 47,
    day: '01.12',
  },
  {
    light: 54,
    day: '02.12',
  },
  {
    light: 57,
    day: '03.12',
  },
  {
    light: 60,
    day: '04.12',
  },
  {
    light: 59,
    day: '05.12',
  },

];

const valueFormatter = (value) => `${value}`;


export default function ChartComponent({ data }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between", flexDirection: 'row', p: 1, m: 1, }}>
      {data === 1 &&
        <BarChart
          dataset={dataset1}
          xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
          series={[{ dataKey: 'light', label: 'Light', valueFormatter },
          { dataKey: 'sound', label: 'Sound', valueFormatter },
          { dataKey: 'temperature', label: 'Temperature', valueFormatter },
          { dataKey: 'humidity', label: 'Humidity', valueFormatter },
          { dataKey: 'airquality', label: 'Air Quality', valueFormatter }]}
          {...chartSetting}
        />
      }
      {data === 2 &&
        <BarChart
          dataset={dataset2}
          xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
          series={[{ dataKey: 'light', label: 'Light', valueFormatter }]}
          {...chartSetting}
        />
      }
    </Box>
  )
}
