import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import NotFound from './components/NotFound';
import MuiDrawer from './components/MuiDrawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ bgcolor: "#c16bd6" }}>
        <Toolbar>       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PersonalTrainer
          </Typography>
          <BrowserRouter>
          <MuiDrawer />
            <Link to="/">Customers</Link>{' '}
            <Link to="/trainings">Trainings</Link>{' '}
            <Routes>
              <Route exact path="/" element={<Customerlist />} />
              <Route path="/trainigs" element={<Traininglist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Toolbar>
        
      </AppBar>
      
      <Customerlist />
      <Traininglist />
    </div>
  );
}

export default App;