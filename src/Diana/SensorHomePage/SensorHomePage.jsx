import React from 'react'

export default function SensorHomePage() {
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
          </Routes>
        </Container>
      </Box>
      <SideBarComponent/>
    </ThemeProvider>
  )
}
