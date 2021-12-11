import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MyContext from './context/MyContext.js';
import Home from './pages/Home';

function App() {
  return (
    <section className="App">
      <MyContext>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext>
    </section>
  );
}

export default App;
