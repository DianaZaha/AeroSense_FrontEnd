import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import FormGroup from '@mui/material/FormGroup';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CreateUserPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      /*phone: data.get('phone'),*/
      /*adress: data.get('adress'),*/
    });
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'darkgreen' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
          
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="phone number"
              label="Phone number"
              type="phone number"
              id="phone number"
             
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="adress"
              label="Adress"
              type="adress"
              id="adress"
             
            />

            <FormGroup>
   
            <FormControlLabel control={<Checkbox defaultChecked />} label="Go PREMIUM!" />
             {/* <FormControlLabel required control={<Checkbox />} label="Required" />
             <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
       
            </FormGroup>
        
            <Grid container>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,backgroundColor: '#32CD32', color: 'white', '&:hover': {backgroundColor: 'darkgreen' ,} }}
                >
                Create

                </Button>
            </Grid> 
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}