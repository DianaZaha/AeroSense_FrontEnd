import React from 'react'
import Modal from '@mui/material/Modal';
import EditProfileComponent from '../../EditProfileComponent/EditProfileComponent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import logo from '../../images/initialAvatar.png';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

const AvatarPaperStyle = styled(Paper)(({ theme }) => ({
    width: 380,
    height: 480,
    background: "#a2dba2",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

export default function AvatarPaperComponent({supabase, user, UserType, setUser}) {
    const accountType = UserType ? "Premium" : "Standard";
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

  return(
    <AvatarPaperStyle square={false}>
        <div>
            <h1>
            </h1>
        </div>

        <label htmlFor="contained-button-file">
            <IconButton>
                <Avatar 
                    src={logo} 
                    style={{
                    margin: "10px",
                    width: 180,
                    height: 180,
                    background: "white",
                    }} 
                />
            </IconButton>
        </label>

        <Typography color={'#09ba73'}>
            <h1>
                <b>
                    {user.name}
                </b>
            </h1>
            <h3>
                    Type of user: {accountType}
            </h3>
        </Typography>

        <div>
            <h1>
            </h1>
        </div>

        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', color: "#ede4c7" }}
        >

            <Grid item xs={3}>
                <Card sx={{ width: 120, alignSelf: "flex-end" }}>
                    <CardActions>
                        <Button size="small" onClick={handleOpen}>Edit Profile</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                            <Box sx={{ paddingY:'0.5%'}}> <EditProfileComponent supabase={supabase} user={user} handleClose={handleClose} setUser={setUser}/></Box>

                        </Modal>
                    </CardActions>
                </Card>

            </Grid>
        </Grid>

    </AvatarPaperStyle>
  )
}
