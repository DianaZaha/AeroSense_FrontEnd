import { Box } from '@mui/material'
import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function EditProfileComponent() {

    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
      } 

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => {
        setOpen(false);
        setPassword('');
      } 

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 480,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return(
    <>
        <Container>

            <Box sx={ style }>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Full Name" variant="standard" />
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "flex-end" }}>
                    <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <FormControl sx={{ m: 0, width: "78ch" }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            key={password}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            autoFocus
                        />
                    </FormControl>  
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Email" variant="standard" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Phone" variant="standard" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Address" variant="standard" />
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" sx={{ paddingY: '10%' }}>
                    <Button variant="contained" color="success">
                        Save changes
                    </Button>
                </Box>

            </Box>

        </Container>
    </>
    )
}
