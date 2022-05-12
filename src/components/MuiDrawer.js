import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MuiDrawer() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div> 
            <IconButton size='large' edge='start' onClick={() => setDrawerOpen(true)}> 
                <MenuIcon />
            </IconButton>
            <Drawer 
                anchor='right' 
                open={drawerOpen} 
                onClose={() => setDrawerOpen(false)}
            >
                <Box padding={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6' component='div'>
                        Menu
                    </Typography>
                </Box>
            </Drawer>
        </div>
    )
        
}

//<IconButton size='large' edge='start' color='inherit'> 