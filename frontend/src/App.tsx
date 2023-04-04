import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './movie/MovieList';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
