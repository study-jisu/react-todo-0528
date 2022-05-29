import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Count from './pages/Count';
import Todo from './pages/Todo';
import Home from './pages/Home';
import About from './pages/About';
import Circle from './components/todo/Circle';
import Profile from './components/todo/Profile';


const App = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <hr />
      <Count />
      <Circle color="green" huge/>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
