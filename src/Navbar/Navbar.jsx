import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoMini from "./Veloire__logo__MINI.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  const [navbarColor, setNavbarColor] = useState("#FEF0E6");
  const [mobileMenuColor, setMobileMenuColor] = useState("#FEF0E6");
  const location = useLocation();
  const [activeWidth, setActiveWidth] = useState(0);
  const [activeLeft, setActiveLeft] = useState(0);
  const activeLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 80 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (activeLinkRef.current) {
      setActiveWidth(activeLinkRef.current.offsetWidth);
      setActiveLeft(activeLinkRef.current.offsetLeft);
    }
    requestAnimationFrame(() => {
      setNavbarColor(
        location.pathname === "/products" ? "#ECD6D7" : "#FEF0E6"
      );
      setMobileMenuColor(
        location.pathname === "/products" ? "#ECD6D7" : "#FEF0E6"
      );
    });
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`navbar ${isVisible ? "" : "navbar-hidden"}`} 
      style={{ 
        background: navbarColor, 
        transition: "background 0.8s ease-in-out, transform 0.3s ease-in-out", 
        transform: isVisible ? "translateY(0)" : "translateY(-100%)" 
      }}
    >
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/">
            <img src={logoMini} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="navbar-links">
            {["/", "/products", "/about", "/contact"].map((path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`navbar-link ${location.pathname === path ? "active" : ""}`}
                  ref={location.pathname === path ? activeLinkRef : null}
                >
                  {path === "/" ? "Inicio" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            <div className="navbar-active-indicator" style={{ width: activeWidth, left: activeLeft }} />
          </ul>
        </div>
        <div className="navbar-right">
          <div className={`navbar-mobile-menu-icon ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <div 
        className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`} 
        style={{ 
          background: mobileMenuColor, 
          transition: "background 0.8s ease-in-out, transform 0.3s ease-in-out", 
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)" 
        }}
      >
        <ul className="navbar-mobile-links">
          {["/", "/products", "/about", "/contact"].map((path, index) => (
            <li key={index}>
              <Link to={path} onClick={() => setIsMobileMenuOpen(false)}>
                {path === "/" ? "Inicio" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
