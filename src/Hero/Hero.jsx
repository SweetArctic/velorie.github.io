import React, { useRef, useEffect } from 'react';
import cosmetics from "./cosmetics.png";
import rimel from "./rimel.png";
import lipstick from "./lipstick.png";
import pn_svg from "./svg/phone.svg";
import em_svg from "./svg/mail.svg";
import wp_svg from "./svg/whatsapp.svg";
import ig_svg from "./svg/instagram.svg";
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleResize = () => {
            sectionRefs.current.forEach(section => {
                if (section) {
                    section.style.minHeight = `${window.innerHeight}px`;
                }
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="hero" ref={heroRef}>
            <section className="hero-section hero-section-1" ref={el => sectionRefs.current[0] = el}>
                <div className="hero-content">
                    <h1>Conócenos</h1>
                    <p> Somos un emprendimiento que quiere llevarte lo más destacado en Makeup y belleza.
                        Buscamos los mejores precios y la mejor calidad para entregarte lo más destacado y actual en el área del cuidado y la belleza.
                        Conoce nuestras redes sociales y contacto para obtener nuestros productos.
                        ¡Gracias por ayudarnos a crecer!</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Comprar ahora</button>
                        <button className="btn-secondary">Ver más</button>
                    </div>
                </div>
                <img className='hero-image' src={cosmetics} width="450px" height="auto" alt="Maquillaje" />
                <img src={lipstick} alt="Lipstick" className='lipstick-image' />
                <br />
            </section>

            <section className="hero-section hero-section-2" ref={el => sectionRefs.current[1] = el}>
                <div className="hero-content">
                    <h1>¡Síguenos en Instagram!</h1>
                    <p>¡Habla con nosotros! Adquiere nuestros productos, entérate de las novedades, descuentos y demás que tenemos para ti en nuestro Instagram.<br /> Ayúdanos a crecer.</p>
                    <div className='iframe-container'></div>
                </div>
                <iframe
                    className="instagram-embed"
                    src="https://www.instagram.com/veloirev.f/embed"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="Instagram Embed"
                    scrolling="no"
                ></iframe>
                <br />
            </section>
            <section className="hero-section hero-section-3" ref={el => sectionRefs.current[2] = el}>
                <img src={rimel} alt="Rímel" className='rimel-image' />
                    <div className="info__container">
                        <h3>Contacto</h3>
                        <a className='link'>
                            <img src={pn_svg} alt="phone" width="20" height="20" /> +57 315 592 4590 <br /><img src={pn_svg} alt="phone" width="20" height="20" /> +57 315 230 5791
                        </a>
                        <p>Ayúdanos a mejorar, si tienes sugerencias, reclamos o solicitudes, las puedes diligenciar a nuestro correo.</p>
                        <a className='link'>
                            <img src={em_svg} alt="email" width="20" height="20" /> veloirev.f@gmail.com
                        </a>
                        <h3>Redes Sociales</h3>
                        <a className='link'>
                            <img src={wp_svg} alt="WhatsApp" width="20" height="20" /> WhatsApp
                        </a>
                        <a href='https://www.instagram.com/veloirev.f/' className='link'>
                            <img src={ig_svg} alt="Instagram" width="20" height="20" /> Instagram
                        </a>
                    </div>
            </section>
        </div>
    );
};

export default Hero;