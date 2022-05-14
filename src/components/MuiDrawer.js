import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function MuiDrawer() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const navigate = useNavigate();

    const itemsList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => navigate('/'),
        },
        {
            text: 'Customers',
            icon: <PersonIcon />,
            onClick: () => navigate('/customers'),
        },
        {
            text: 'Exercises',
            icon: <DirectionsRunIcon />,
            onClick: () => navigate('/trainings'),
        }
    ];

    return (
        <div> 
            <Box textAlign='right'>
            <IconButton 
                size='large' 
                edge='start' 
                color='inherit' 
                onClick={() => setDrawerOpen(true)}
            > 
                <MenuIcon />
            </IconButton>
            </Box>
            <Drawer 
                anchor='right' 
                open={drawerOpen} 
                onClose={() => setDrawerOpen(false)}
            >
                <Box padding={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6' component='div'>
                        Find your way
                    </Typography>
                </Box>
                <Divider />
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item; 
                        return (
                            <ListItem key={text} onClick={onClick} disablePadding>
                                <ListItemButton>
                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                    );
                    })}
                </List>
            </Drawer>
        </div>
    )
        
}
