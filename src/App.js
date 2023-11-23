import React from 'react';
import SensorReading from './SensorReading';
import HomePage from './HomePageComponent/HomePage';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import HomePageUserAccount from './HomePageUserAccount/HomePageUserAccount';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSensorStatistics from './UserSensorStatistics/UserSensorStatistics';

function App() {
  const [values, setValues] = useState([90.5, 100.4, 95.6, 98.7]);
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<HomePage/>}/>
        <Route exact={true} path="/user" element={<HomePageUserAccount/>}/>
        <Route exact={true} path="/create" element={<CreateAccount/>}/>
        <Route exact={true} path="/sensor" element={<UserSensorStatistics/>}/>
      </Routes>
    </>
  )
}

export default App;
