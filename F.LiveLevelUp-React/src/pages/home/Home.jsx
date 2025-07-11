import React, { useState, useRef, useEffect } from 'react';
import styles from './Home.module.css';
import planetLogo from '../../assets/svg/planet.png';

export default function Home() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileBtnRef = useRef(null);
  const menuRef = useRef(null);

  // Drag state for Salud and Planeta
  const [positions, setPositions] = useState({
    salud: { x: -160, y: -10 },
    planeta: { x: -70, y: -10 },
  });
  const dragging = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleDragStart = (e, key) => {
    dragging.current = key;
    const rect = e.target.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    document.body.style.userSelect = 'none';
  };

  const handleDrag = (e) => {
    if (!dragging.current) return;
    setPositions((prev) => ({
      ...prev,
      [dragging.current]: {
        x: e.clientX - offset.current.x - e.target.parentNode.getBoundingClientRect().left,
        y: e.clientY - offset.current.y - e.target.parentNode.getBoundingClientRect().top,
      },
    }));
  };

  const handleDragEnd = () => {
    dragging.current = null;
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    const onMouseMove = (e) => handleDrag(e);
    const onMouseUp = () => handleDragEnd();
    if (dragging.current) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging.current]);

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
            <img src={planetLogo} alt="Logo LiveLevelUp" style={{height: 40, width: 40, borderRadius: '50%'}} />
            <span>LiveLevelUp</span>
          </div>
          <ul className={styles.menu} style={{position: 'relative'}}>
            <li
              style={{
                position: 'absolute',
                left: `calc(0% + ${positions.salud.x}px)`,
                top: `${positions.salud.y}px`,
                cursor: 'grab',
                zIndex: 10,
              }}
              onMouseDown={(e) => handleDragStart(e, 'salud')}
            >
              <a href="#">Salud</a>
            </li>
            <li
              style={{
                position: 'absolute',
                left: `calc(50% + ${positions.planeta.x}px)`,
                top: `${positions.planeta.y}px`,
                cursor: 'grab',
                zIndex: 10,
              }}
              onMouseDown={(e) => handleDragStart(e, 'planeta')}
            >
              <a href="#">Planeta</a>
            </li>
          </ul>
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
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.articles}>
          <article className={styles.card} key={1}>
            <div className={styles['card-image']}>
              <img src={planetLogo} alt={`Artículo 1`} style={{height: 80, width: 80, borderRadius: '50%'}} />
            </div>
            <div className={styles['card-content']}>
              <span className={styles.category}>CATEGORÍA</span>
              <h2>Salud y bienestar</h2>
            </div>
          </article>
          <article className={styles.card} key={3}>
            <div className={styles['card-image']}>
              <img src={planetLogo} alt={`Artículo 3`} style={{height: 80, width: 80, borderRadius: '50%'}} />
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
          <span>© 2025 Nombre del sitio. Todos los derechos reservados.</span>
          <span className={styles['footer-up']} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>⬆️</span>
        </div>
      </footer>
    </div>
  );
} 