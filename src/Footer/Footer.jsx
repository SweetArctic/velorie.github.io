import React from 'react';
import './Footer.css';

const Footer = () => {
  const whatsappLink = "https://wa.me/573155924590";
  const instagramLink = "https://www.instagram.com/veloirev.f?igsh=MWZvdDNwaHhuZTFjdQ==";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Teléfono: +57 315 592 4590 / +57 315 230 5791</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2048px-WhatsApp.svg.png" alt="WhatsApp" width="20" height="20" /> WhatsApp
          </a>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022_%281%29.svg" alt="Instagram" width="20" height="20" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;