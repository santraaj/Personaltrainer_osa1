import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PersonalTrainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Customerlist />
      <Traininglist />
    </div>
  );
}

export default App;

/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          // </IconButton> */