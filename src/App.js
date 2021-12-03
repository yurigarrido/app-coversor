import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import MyContext from './context/MyContext.js';

function App() {
  return (
    <div className="App">
      <MyContext>
        <Routes>
          <Route path="/index" element={<Header/>} />
        </Routes>
        <Header />
      </MyContext>
    </div>
  );
}

export default App;
