import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Home from './components/Home';
import MuiDrawer from './components/MuiDrawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ bgcolor: "#c16bd6" }}> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Personal Trainer App
          </Typography>
        </Toolbar>        
      </AppBar>
      <BrowserRouter>
          <MuiDrawer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customers" element={<Customerlist />} />
              <Route path="/trainings" element={<Traininglist />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;