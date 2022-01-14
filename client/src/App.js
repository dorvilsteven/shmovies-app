<<<<<<< HEAD
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <MovieList />
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
            <Route exact path="/" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
       

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
>>>>>>> reapp
    </div>
  );
}

export default App;
