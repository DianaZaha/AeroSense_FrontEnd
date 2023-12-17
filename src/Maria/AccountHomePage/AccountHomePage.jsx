import { Box } from '@mui/material';
import { React, useState} from 'react'
import Stack from '@mui/material/Stack';
import AvatarPaperComponent from './AvatarPaper/AvatarPaperComponent';
import DetailsPaperComponent from './DetailsPaperComponent';

const User = ["Jane Doe", "12345678", "email1@email.com", "0755 435 455", "0734 532 553", "Premium", "Aleea Dorobantilor, nr. 70"];

export default function AccountHomePage() {
    
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

      const [open, setOpen] = useState(false);
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

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ paddingY:'0.5%'}}> 
                <AvatarPaperComponent Name={User[0]} UserType={User[5]}/>
            </Box>
            <Box>
                <DetailsPaperComponent 
                Name={User[0]} 
                Password={User[1]} 
                Email={User[2]} 
                Phone={User[3]} 
                Address={User[6]}/>
            </Box>
        </Stack>
      );
}
