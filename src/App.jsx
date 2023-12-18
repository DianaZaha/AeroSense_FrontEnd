import React from 'react';
import { createClient } from '@supabase/supabase-js'
import CreateUserPage from './Deni/CreateUserPage'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, createTheme} from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import SideBarComponent from './Diana/SensorHomePage/SideBarComponent/SideBarComponent';
import { RoutinesPage } from './Deni/RoutinesPage/RoutinesPage';
import SensorHomePage from './Diana/SensorHomePage/SensorHomePage';
import StatisticsPageComponent from './Blue/StatisticsPageComponent/StatisticsPageComponent';
import LoginPage from './Crista/components/UserLoginPage';
import FrontPage from './Blue/FrontPage/FrontPage';
import AccountHomePage from './Maria/AccountHomePage/AccountHomePage';
import Footer from './Teo/FooterComponent/Footer';

const mdTheme = createTheme();

function App() {
  const supabase = createClient("https://qniuxbcurrnrzyptvfej.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaXV4YmN1cnJucnp5cHR2ZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MjEyOTIsImV4cCI6MjAxNjQ5NzI5Mn0.m19rQ75BCpl_6iX-unkW3keao72D4po1olxds1YKeNo");
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const PrivateRouteAdmin = ({ children }) => {
    const authed = ( localStorage.getItem('role') === 'true');
    if(authed)
      return children;
    else
      return navigate("/");
  }

  const PrivateRouteLogged = ({ children }) => {
    const authed = localStorage.getItem('role');
    if(authed)
      return children;
    else{
      return navigate("/");
    }
  }

  const PrivateRouteNotLogged = ({ children }) => {
    const authed = localStorage.getItem('role');
    if(!authed)
      return children;
    else
      return navigate("/");
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <SideBarComponent>
          <Container maxWidth='xl'>
            <Routes>
              <Route exact={true} path="/" element={<FrontPage />}/>
              <Route exact={true} path="/login" element ={<PrivateRouteNotLogged><LoginPage supabase={supabase}/></PrivateRouteNotLogged>}/>
              <Route exact={true} path="/create-user" element={<PrivateRouteNotLogged><CreateUserPage supabase={supabase}/></PrivateRouteNotLogged>}/>
              <Route exact={true} path="/sensors" element={<PrivateRouteLogged><SensorHomePage supabase={supabase} userId={userId}/></PrivateRouteLogged>}/>
              <Route exact={true} path='/routines' element={<PrivateRouteLogged><RoutinesPage supabase={supabase} userId={userId}/></PrivateRouteLogged>}/>
              <Route exact={true} path='/account' element={<PrivateRouteLogged><AccountHomePage supabase={supabase} userId={userId}/></PrivateRouteLogged>}/>
              <Route exact={true} path="/statistics" element={<PrivateRouteAdmin><StatisticsPageComponent supabase={supabase} userId={userId}/></PrivateRouteAdmin>}/>
            </Routes>
            <Footer/>
            </Container>
            </SideBarComponent>
            
    </ThemeProvider>
  )
}

export default App;
 
