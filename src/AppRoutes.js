import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import App from './App.js';
import WorldLife from './WorldLife.js';
import Action from './action.js';
import Patience from './keepPatience.js';
import Akhira from './Akhira.js';



function AppRoutes(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />} ></Route>
                <Route path="/World"  element={ <WorldLife /> } />
                <Route path="/Act"  element={ <Action /> } />
                <Route path="/Sabar"  element={ <Patience /> } />
                <Route path="/hereafter"  element={ <Akhira /> } />
            </Routes>
        </Router>
    )
    
}

export default AppRoutes