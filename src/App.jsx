import React from 'react';
import { createClient } from '@supabase/supabase-js'
import HomePage from './HomePageComponent/HomePage';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import HomePageUserAccount from './HomePageUserAccount/HomePageUserAccount';
import { Routes, Route } from 'react-router-dom';
import UserSensorStatistics from './UserSensorStatistics/UserSensorStatistics';
import { Container, createTheme} from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import SideBarComponent from './Diana/SensorHomePage/SideBarComponent/SideBarComponent';
import { RoutinesPage } from './Denisa/RoutinesPage/RoutinesPage';
import SensorHomePage from './Diana/SensorHomePage/SensorHomePage';
import StatisticsPageComponent from './Blue/StatisticsPageComponent/StatisticsPageComponent';

const mdTheme = createTheme();

function App() {
  const supabase = createClient("https://qniuxbcurrnrzyptvfej.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaXV4YmN1cnJucnp5cHR2ZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MjEyOTIsImV4cCI6MjAxNjQ5NzI5Mn0.m19rQ75BCpl_6iX-unkW3keao72D4po1olxds1YKeNo")

  return (
    <ThemeProvider theme={mdTheme}>
        <SideBarComponent>
          <Container maxWidth='xl'>
            <Routes>
              <Route exact={true} path="/" element={<HomePage/>}/>
              <Route exact={true} path="/user" element={<HomePageUserAccount/>}/>
              <Route exact={true} path="/create" element={<CreateAccount/>}/>
              <Route exact={true} path="/sensor" element={<UserSensorStatistics/>}/>
              <Route exact={true} path="/sensors" element={<SensorHomePage supabase={supabase}/>}/>
              <Route exact={true} path='/routines' element={<RoutinesPage supabase={supabase}/>}/>
              <Route exact={true} path="/statistics" element={<StatisticsPageComponent/>}/>
            </Routes>
          </Container>
        </SideBarComponent> 
    </ThemeProvider>
  )
}

export default App;
