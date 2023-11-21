import React from 'react';
import SensorReading from './SensorReading';
import HomePage from './HomePageComponent/HomePage';
import CreateAccount from './CreateAccountPageComponent/CreateAccount';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState([90.5, 100.4, 95.6, 98.7]);
  return (
    <>
      {/*
         <HomePage />
        <SensorReading reading={values}/>
      */}
      <CreateAccount />
      
      
    </>
  )
}

export default App;
