import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MyContext from './context/MyContext.js';
import Home from './pages/Home';
import styled from 'styled-components';

const Body = styled.body `
  background-color: #FAF6ED ;
  margin: 0;
  padding: 0;
  border: 0;
`

function App() {
  return (
    <Body className="App">
      <MyContext>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext>
    </Body>
  );
}

export default App;
