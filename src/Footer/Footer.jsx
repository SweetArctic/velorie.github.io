import React from 'react';
import ig_svg from "../Footer/svg/instagram.svg";
import wp_svg from "../Footer/svg/whatsapp.svg";
import em_svg from "../Footer/svg/mail.svg";
import pn_svg from "../Footer/svg/phone.svg";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__right">
      </div>
        <div className="footer__left">
          <h3>Contacto</h3>
          <a>
            <img src={pn_svg} alt="phone" width="20" height="20" />
            <p>+57 315 592 4590 - +57 315 230 5791</p>
          </a>
          <a>
            <img src={em_svg} alt="emai" width="20" height="20" />
            <p>veloirev.f@gmail.com</p>
          </a>
          <h3>Redes Sociales</h3>
          <a>
            <img src={wp_svg} alt="WhatsApp" width="20" height="20" /> WhatsApp
          </a>
            <a><img src={ig_svg} alt="Instagram" width="20" height="20" /> Instagram
          </a>
        </div>
    </footer>
  );
};

export default Footer;