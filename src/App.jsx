import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero/Hero';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Products from './Products/Products';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;