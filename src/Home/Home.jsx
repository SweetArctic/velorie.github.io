import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="background-image"></div>
        <div className="content">
          <div className="title-container">
          <h1 className="title">VÈLORIE</h1>
          </div>
          <div className="subtitle">
              <p>Beauty & Makeup</p>
          </div>
          <div className="buttons-container">
            <Link to="/products" className="button products-button">Explorar productos</Link>
            <Link to="/about" className="button about-button">Conoce más</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;