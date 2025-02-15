import React, { useRef, useEffect } from 'react';
import Footer from "../Footer/Footer";
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const sections = sectionRefs.current;

      if (!hero || !sections || sections.length === 0) return;

      const scrollPosition = hero.scrollTop;

      let currentSectionIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionIndex = index;
        }
      });

      hero.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth',
      });
    };

    const handleResize = () => {
      sectionRefs.current.forEach(section => {
        if (section) {
          section.style.minHeight = `${window.innerHeight}px`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <section className="hero-section hero-section-1" ref={el => sectionRefs.current[0] = el}>
        <div className="hero-content">
          <h1>Conócenos</h1>
          <p>Somos un emprendimiento que quiere llevarte lo más destacado en Make-up y belleza.</p>
          <p>Buscamos los mejores precios y la mejor calidad para entregarte los más destacado y actual en el área del cuidado y la belleza</p>
          <p>Conoce nuestras redes sociales y contacto para obtener nuestros productos</p>
          <p>¡Gracias por ayudarnos a crecer!</p>
          <div className="hero-buttons">
            <button className="btn-primary">Comprar ahora</button>
            <button className="btn-secondary">Ver más</button>
          </div>
        </div>
        <img className='hero-image' src="https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZSUyMHVwfGVufDB8fDB8fHww" alt="Maquillaje" />
      </section>
      <section className="hero-section hero-section-2" ref={el => sectionRefs.current[1] = el}>
        <div className="hero-content">
          <h1>¡Síguenos en Instagram!</h1>
          <div className='iframe-container'>
            <iframe 
              className="instagram-embed" 
              src="https://www.instagram.com/veloirev.f/embed" 
              width="300" 
              height="380" 
              allowtransparency="true" 
              allow="encrypted-media" 
              title="Instagram Embed"
              scrolling="no"
            ></iframe>
          </div><br />
          <p>Síguenos en Instagram para ver más contenido y novedades.</p>
        </div>
      </section>
      <section className="hero-section hero-section-3" ref={el => sectionRefs.current[2] = el}>
        <div className="hero-content">
          <h1>Contáctanos</h1>
          <p>¿Tienes alguna pregunta o comentario? ¡No dudes en contactarnos!</p>
        </div>
        <img className='hero-image' src="https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZSUyMHVwfGVufDB8fDB8fHww" alt="Maquillaje" />
      </section>
    </div>
  );
};

export default Hero;