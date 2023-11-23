import React from 'react';
import SensorReading from './SensorReading';
import HomePage from './HomePageComponent/HomePage';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import HomePageUserAccount from './HomePageUserAccount/HomePageUserAccount';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSensorStatistics from './UserSensorStatistics/UserSensorStatistics';
import {Box, Container, CssBaseline, createTheme} from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import SideBarComponent from './Diana/SensorHomePage/SideBarComponent/SideBarComponent';
import SensorHomePage from './Diana/SensorHomePage/SensorHomePage';

const mdTheme = createTheme();

function App() {
  const [values, setValues] = useState([90.5, 100.4, 95.6, 98.7]);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <Container maxWidth='xl'>
          <Routes>
            <Route exact={true} path="/" element={<HomePage/>}/>
            <Route exact={true} path="/user" element={<HomePageUserAccount/>}/>
            <Route exact={true} path="/create" element={<CreateAccount/>}/>
            <Route exact={true} path="/sensor" element={<UserSensorStatistics/>}/>
            <Route exact={true} path="/sensors" element={<SensorHomePage/>}/>
          </Routes>
        </Container>
      </Box>
      
    </ThemeProvider>
  )
}

export default App;
