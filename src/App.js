import React from 'react';
import SensorReading from './SensorReading';
import HomePage from './HomePageComponent/HomePage';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import HomePageUserAccount from './HomePageUserAccount/HomePageUserAccount';
import { useState } from 'react';
import UserSensorStatistics from './UserSensorStatistics/UserSensorStatistics';

function App() {
  const [values, setValues] = useState([90.5, 100.4, 95.6, 98.7]);
  return (
    <>
      {/*
         <HomePage />
         <CreateAccount />
        <SensorReading reading={values}/>
      */}
      
      <UserSensorStatistics/>
      
    </>
  )
}

export default App;
