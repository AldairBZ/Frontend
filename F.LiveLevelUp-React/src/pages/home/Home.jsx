import React, { useState, useRef, useEffect } from 'react';
import styles from './Home.module.css';
import logoLiveUp from '../../assets/imagenes-home/logoLiveUp.png';

export default function Home() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const profileBtnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Limpieza al desmontar
    return () => document.body.classList.remove('dark-mode');
  }, [darkMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <div className={styles.homeWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={logoLiveUp} alt="Logo LiveLevelUp" style={{height: 56, width: 56, objectFit: 'contain', background: 'none', marginRight: 10}} />
            <span>LiveLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li>
              <a href="#">Salud</a>
            </li>
            <li>
              <a href="#">Planeta</a>
            </li>
          </ul>
          <div style={{display:'flex',alignItems:'center',gap:'18px'}}>
            <div className={styles.options}>
              <label className={styles.switchLabel}>
                <input type="checkbox" checked={darkMode} onChange={()=>setDarkMode(v=>!v)} className={styles.switchInput} />
                <span className={styles.switchSlider}></span>
                <span className={styles.switchText}>{darkMode ? '🌙' : '☀️'}</span>
              </label>
            </div>
            <div className={styles.actions}>
              <button
                ref={profileBtnRef}
                style={{background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', marginLeft: '-12px'}}
                title="Usuario"
                onClick={() => setShowProfileMenu((v) => !v)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="40" height="40">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </g>
                </svg>
              </button>
              {showProfileMenu && (
                <div ref={menuRef} className={styles.profileMenu}>
                  <button className={styles.profileMenuItem}>Editar perfil</button>
                  <button className={styles.profileMenuItem}>Cerrar sesión</button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.articles}>
          <article className={styles.card} key={1}>
            <div className={styles['card-image']}>
              <img src={logoLiveUp} alt={`Artículo 1`} style={{height: 100, width: 100, objectFit: 'contain', background: 'none'}} />
            </div>
            <div className={styles['card-content']}>
              <span className={styles.category}>CATEGORÍA</span>
              <h2>Salud y bienestar</h2>
            </div>
          </article>
          <article className={styles.card} key={3}>
            <div className={styles['card-image']}>
              <img src={logoLiveUp} alt={`Artículo 3`} style={{height: 100, width: 100, objectFit: 'contain', background: 'none'}} />
            </div>
            <div className={styles['card-content']}>
              <span className={styles.category}>CATEGORÍA</span>
              <h2>Salud del planeta</h2>
            </div>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-col']}>
            <h3>Uso de datos y privacidad</h3>
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Webs de confianza</h3>
            <ul>
              <li><a href="#">Web oficial</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Quiénes somos</h3>
            <ul>
              <li><a href="#">Equipo</a></li>
              <li><a href="#">Historia</a></li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <span className={styles['footer-up']} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>⬆️</span>
        </div>
      </footer>
    </div>
  );
} 