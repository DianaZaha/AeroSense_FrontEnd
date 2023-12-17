import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { Collapse, Alert } from '@mui/material';
import PremiumPage from './PremiumPage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const defaultTheme = createTheme();

export default function CreateUserPage({supabase}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if(
      formData.get('email').length === 0 ||
      formData.get('password').length === 0 ||
      formData.get('phone_number').length === 0 ||
      formData.get('address').length === 0 
    ){
      setOpenAlert(true);
      return;
    }

    const { data, error } = await supabase.from('users').insert([
      {
        email: formData.get('email'),
        password: formData.get('password'),
        phone_number: formData.get('phone_number'),
        address: formData.get('address'),
        admin: formData.get('admin') !== null,
      }
    ]).select();

    if(error){
      handleOpenModal();
      return;
    }

    localStorage.setItem('role', data[0].admin);
    window.location.reload(false);
  };

  const [openAlert, setOpenAlert] = React.useState(false);
  const handleCloseAlert = (_event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setOpenAlert(false);
	};

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
              name="phone_number"
              label="Phone number"
              type="phone"
              id="phone_number"
             
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="address"
              id="address"
             
            />

            <Stack direction='row'>
            <FormControlLabel control={<Checkbox default />} name="admin" id="admin" label="Go PREMIUM!" />         
            <Button variant="outlined" onClick={handleOpen}>See details</Button>
            
            </Stack>
        
            <Grid container>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,backgroundColor: '#228B22', color: 'white', '&:hover': {backgroundColor: 'darkgreen' ,} }}
                >
                Create

                </Button>
            </Grid>
            <Collapse in={openAlert}>
              <Alert open={openAlert} onClose={handleCloseAlert} severity='error' sx={{ width: '100%' }}>
                One or more fields are empty!
              </Alert>
            </Collapse>
            <Modal
              open={open}
              onClose={handleClose}
              sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{  minWidth: 1000 }}>
                  <PremiumPage/>
              </Box>
            </Modal>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  User already exists!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  The user with the given email does already exist in the database!
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}