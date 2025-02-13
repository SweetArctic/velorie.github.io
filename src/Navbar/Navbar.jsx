import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoMini from './Veloire__logo__MINI.png';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importa el componente Link

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 80 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isVisible ? '' : 'navbar-hidden'}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/"> {/* Enlace al inicio */}
            <img src={logoMini} alt="img" width="120px" height="120px" />
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li><Link to="/" className="navbar-link active">Inicio</Link></li>
            <li><Link to="/products" className="navbar-link">Productos</Link></li>
            <li><Link to="/about" className="navbar-link">Acerca de</Link></li>
            <li><Link to="/contact" className="navbar-link">Contacto</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          {isMobileMenuOpen ? (
            <FaTimes className="navbar-mobile-menu-icon active" onClick={toggleMobileMenu} />
          ) : (
            <FaBars className="navbar-mobile-menu-icon" onClick={toggleMobileMenu} />
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-links">
            <li><Link to="/">Inicio</Link></li>            
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;