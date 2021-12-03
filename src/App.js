import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MyContext from './context/MyContext.js';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MyContext>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext>
    </div>
  );
}

export default App;
