import { Box, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Button';

export default function EditProfileComponent({supabase, user, handleClose, setUser}) {
    const defaultUser = user;
    const [changedUser, setChangedUser] = useState(user);

    const [showPassword, setShowPassword] = React.useState(false);
    const [openAlert, setAlertOpen] = useState(false);

    const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setAlertOpen(false);
	};

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
      } 

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

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

    const onChangeProperty = (property, value) => {
		setChangedUser({
			...changedUser,
			[property]: value
		});
	};

    async function submitChange() {
        if (changedUser.name.length === 0 ||
            changedUser.password.length === 0 ||
            changedUser.email.length === 0 ||
            changedUser.phone_number.length === 0 ||
            changedUser.address.length === 0
        ) {
            setAlertOpen(true);
			return;
        }

        const { data } = await supabase.from('users').update({
            name: changedUser.name,
            email: changedUser.email,
            password: changedUser.password,
            phone_number: changedUser.phone_number,
            address: changedUser.address,
            admin: changedUser.admin
        }).eq("id_user", changedUser.id_user).select();

        setUser(data[0]);
        handleClose();
    }

    return(
    <>
        <Container>
            <Box sx={ style }>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Full Name" variant="standard" value={changedUser.name} onChange={e => onChangeProperty("name", e.target.value)}/>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "flex-end" }}>
                    <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <FormControl sx={{ m: 0, width: "78ch" }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            key={changedUser.password}
                            value={changedUser.password} onChange={e => onChangeProperty("password", e.target.value)}
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
                    <TextField fullWidth label="Email" variant="standard" value={changedUser.email} onChange={e => onChangeProperty("email", e.target.value)}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Phone" variant="standard" value={changedUser.phone_number} onChange={e => onChangeProperty("phone_number", e.target.value)}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0 }} />
                    <TextField fullWidth label="Address" variant="standard" value={changedUser.address} onChange={e => onChangeProperty("address", e.target.value)}/>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" sx={{ paddingY: '10%' }}>
                    <Button variant="contained" color="success" disabled={JSON.stringify(defaultUser) === JSON.stringify(changedUser)}
                        onClick={submitChange}
                    >
                        Save changes
                    </Button>
                    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert} sx={{ color: 'red' }}>
                        <Alert onClose={handleCloseAlert} severity='error' sx={{ width: '100%' }}>
                            One or more fields are empty!
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </Container>
    </>
    )
}
