import { Box, Backdrop, CircularProgress } from '@mui/material';
import { React, useEffect, useState} from 'react'
import Stack from '@mui/material/Stack';
import AvatarPaperComponent from './AvatarPaper/AvatarPaperComponent';
import DetailsPaperComponent from './DetailsPaperComponent';

export default function AccountHomePage({supabase, userId}) {
    const [user, setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            const { data } = await supabase.from('users').select('*').eq('id_user', userId);
            return data[0];
        }
        fetchUser().then(user => {
            setUser(user);
            setLoading(false);
        })
    }, [supabase, userId]);

    return (
        <>
            {loading && 
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
            {!loading && <Stack direction="row" spacing={2}>
                <Box sx={{ paddingY:'0.5%'}}> 
                    <AvatarPaperComponent supabase={supabase} user={user} UserType={user.admin} setUser={setUser}/>
                </Box>
                <Box>
                    <DetailsPaperComponent 
                    Name={user.name} 
                    Password={user.password} 
                    Email={user.email} 
                    Phone={user.phone_number} 
                    Address={user.address}/>
                </Box>
            </Stack>
            }
        </>
      );
}
