import React from 'react';
import HomePage from './HomePageComponent/HomePage';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import HomePageUserAccount from './HomePageUserAccount/HomePageUserAccount';
import { Routes, Route } from 'react-router-dom';
import UserSensorStatistics from './UserSensorStatistics/UserSensorStatistics';
import { Container, createTheme} from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import SideBarComponent from './Diana/SensorHomePage/SideBarComponent/SideBarComponent';
import { RoutinesPage } from './RoutinesPage/RoutinesPage';
import SensorHomePage from './Diana/SensorHomePage/SensorHomePage';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
        <SideBarComponent>
          <Container maxWidth='xl'>
            <Routes>
              <Route exact={true} path="/" element={<HomePage/>}/>
              <Route exact={true} path="/user" element={<HomePageUserAccount/>}/>
              <Route exact={true} path="/create" element={<CreateAccount/>}/>
              <Route exact={true} path="/sensor" element={<UserSensorStatistics/>}/>
              <Route exact={true} path="/sensors" element={<SensorHomePage/>}/>
              <Route exact={true} path='/routines' element={<RoutinesPage/>}/>
            </Routes>
          </Container>
        </SideBarComponent> 
    </ThemeProvider>
  )
}

export default App;
