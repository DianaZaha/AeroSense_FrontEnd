import React from 'react'
import { Divider, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

const DetailsPaper = styled(Paper)(({ theme }) => ({
  width: 800,
  height: 480,
  background: "#C1E1C1",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function DetailsPaperComponent({Name, Password, Email, Phone, Address}) {
  return (
      <DetailsPaper square={false}>
        <List sx={{ width: '100%', maxWidth: 700, bgcolor: '' }}>
            <ListItem alignItems="flex-start">
                <ListItemText
                primary="Full Name"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color={"#21801d"}
                        fontSize={15}
                    >
                    </Typography>
                    {Name}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                primary="Email"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                    </Typography>
                    {Email}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
                <ListItemText
                primary="Phone"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                    </Typography>
                    {Phone}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />

        
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
                <ListItemText
                primary="Address"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                    </Typography>
                    <p>
                        {Address}
                    </p>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    </DetailsPaper>
  )
}
