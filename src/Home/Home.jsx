import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
        <div className="title-container">
        <h1 className="title">VÈLORIE</h1>
        </div>
        <div className="subtitle">
            <p>Beauty & Make-up</p>
        </div>
        <div className="buttons-container">
          <Link to="/products" className="button products-button">Explorar productos</Link>
          <Link to="/about" className="button about-button">Conoce más</Link>
        </div>
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;