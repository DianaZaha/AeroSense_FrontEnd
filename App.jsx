import React from 'react';
//import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import SideBarComponent from './Diana/SensorHomePage/SideBarComponent/SideBarComponent';
import { RoutinesPage } from './RoutinesPage/RoutinesPage';
import FrontPage from './Blue/Front_page/Page';
import HomePageUserAccount from './HomePageUserAccount/HomePageUserAccount';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import UserSensorStatistics from './UserSensorStatistics/UserSensorStatistics';
import SensorHomePage from './Diana/SensorHomePage/SensorHomePage';
import StatisticsPageComponent from './Blue/StatisticsPageComponent/StatisticsPageComponent';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route
          path="/user"
          element={
            <SideBarComponent>
              <Container maxWidth='xl'>
                <HomePageUserAccount />
              </Container>
            </SideBarComponent>
          }
        />
        <Route
          path="/create"
          element={
            <SideBarComponent>
              <Container maxWidth='xl'>
                <CreateAccount />
              </Container>
            </SideBarComponent>
          }
        />
        <Route
          path="/sensor"
          element={
            <SideBarComponent>
              <Container maxWidth='xl'>
                <UserSensorStatistics />
              </Container>
            </SideBarComponent>
          }
        />
        <Route
          path="/sensors"
          element={
            <SideBarComponent>
              <Container maxWidth='xl'>
                <SensorHomePage />
              </Container>
            </SideBarComponent>
          }
        />
        <Route
          path="/routines"
          element={
            <SideBarComponent>
              <Container maxWidth='xl'>
                <RoutinesPage />
              </Container>
            </SideBarComponent>
          }
        />
        <Route
          path="/statistics"
          element={
            <SideBarComponent>
              <Container maxWidth='xl'>
                <StatisticsPageComponent />
              </Container>
            </SideBarComponent>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
