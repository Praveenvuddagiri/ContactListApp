import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import HomePage from './Components/HomePage';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
