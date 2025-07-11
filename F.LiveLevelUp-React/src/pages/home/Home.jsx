import React from 'react';
import styles from './Home.module.css';
import planetLogo from '../../assets/svg/planet.png';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={planetLogo} alt="Logo LiveLevelUp" style={{height: 40, width: 40, borderRadius: '50%'}} />
            <span>LiveLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="#">Sección 1</a></li>
            <li><a href="#">Sección 2</a></li>
            <li><a href="#">Sección 3</a></li>
            <li><a href="#">Sección 4</a></li>
            <li><a href="#">Sección 5</a></li>
            <li><a href="#">Sección 6</a></li>
            <li><a href="#">Sección 7</a></li>
            <li><a href="#">Más</a></li>
          </ul>
          <div className={styles.actions}>
            <button title="Buscar" onClick={()=>alert('Funcionalidad de búsqueda próximamente')}>🔍</button>
            <button onClick={()=>alert('Funcionalidad de login próximamente')}>Log In</button>
            <button onClick={()=>alert('Funcionalidad de suscripción próximamente')}>Subscribe</button>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.articles}>
          {[1,2,3].map((n) => (
            <article className={styles.card} key={n}>
              <div className={styles['card-image']}>
                <img src={planetLogo} alt={`Artículo ${n}`} style={{height: 80, width: 80, borderRadius: '50%'}} />
              </div>
              <div className={styles['card-content']}>
                <span className={styles.category}>CATEGORÍA</span>
                <h2>{`Título del Artículo ${n}`}</h2>
                <a href="#" className={styles['read-link']}>LEER MÁS</a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-col']}>
            <h2>Apartado Principal</h2>
            <p>Descripción breve del sitio web o empresa. Un texto de ejemplo para el pie de página.</p>
            <div className={styles['footer-socials']}>
              <span>🌐</span>
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
            </div>
          </div>
          <div className={styles['footer-col']}>
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Recursos</h3>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Soporte</a></li>
              <li><a href="#">Guía de usuario</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Contacto</h3>
            <ul>
              <li><span>✉️</span> ejemplo@email.com</li>
              <li><span>📞</span> +34 600 000 000</li>
              <li><span>📍</span> Ciudad, País</li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <span>© 2025 Nombre del sitio. Todos los derechos reservados.</span>
          <span className={styles['footer-up']} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>⬆️</span>
        </div>
      </footer>
    </div>
  );
} 