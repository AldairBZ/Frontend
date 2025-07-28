import React from 'react';
import styles from './Home.module.css';
import PanelesInteractivos from './PanelesInteractivos';
import QuienesSomos from './footer/equipo/QuienesSomos.jsx';
import Privacidad from './footer/privacidad/Terminos.jsx';
import Referentes from './footer/referentes/Referentes.jsx';
import perfilImg from '../../assets/imagenes-home/perfil/perfil.png';
import { useTheme } from '../../contexts/ThemeContext';

export default function Home() {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const profileBtnRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [modalAbierto, setModalAbierto] = React.useState(null);
  const { darkMode, toggleTheme } = useTheme();

  React.useEffect(() => {
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
            <span>LifeLevelUp</span>
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
                <input type="checkbox" checked={darkMode} onChange={toggleTheme} className={styles.switchInput} />
                <span className={styles.switchSlider}></span>
                <span className={styles.switchText}>{darkMode ? '🌙' : '☀️'}</span>
              </label>
            </div>
            <div className={styles.actions}>
              <button
                ref={profileBtnRef}
                style={{background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', marginLeft: '-12px', borderRadius: '12px', boxShadow: showProfileMenu ? '0 0 0 2px #81ca57' : '0 2px 8px #0002', transition: 'box-shadow 0.2s'}}
                title="Usuario"
                onClick={() => setShowProfileMenu((v) => !v)}
              >
                <img
                  src={perfilImg}
                  alt="Perfil"
                  style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: darkMode ? '2px solid #81ca57' : '2px solid #5b9cc8', background: darkMode ? '#232e43' : '#fff', transition: 'border 0.2s, background 0.2s' }}
                />
              </button>
              {showProfileMenu && (
                <div ref={menuRef} className={styles.profileMenu + ' ' + (darkMode ? styles.profileMenuDark : '')}>
                  <button className={styles.profileMenuItem} onClick={() => window.location.href = '/home/avatar/personalizar'}>Editar perfil</button>
                  <button className={styles.profileMenuItem + ' ' + styles.logoutBtn}>Cerrar sesión</button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main} style={{overflowY: 'auto', minHeight: 'calc(100vh - 60px - 48px)'}}>
        <PanelesInteractivos />
        <section style={{maxWidth: 900, margin: '40px auto 40px auto', background: 'rgba(245,249,251,0.92)', borderRadius: 24, boxShadow: '0 4px 24px #b4f8c844', padding: '36px 32px', textAlign: 'left'}}>
          <h1 style={{fontSize: '2.2rem', fontWeight: 800, color: '#5b9cc8', marginBottom: 18, letterSpacing: '0.01em'}}>¿Por qué LifeLevelUp?</h1>
          <p style={{fontSize: '1.18rem', color: '#232e43', marginBottom: 18, lineHeight: 1.6}}>
            LifeLevelUp es una experiencia interactiva que convierte tus hábitos diarios en una aventura visual. Imagina que tú y el planeta son parte de un juego tipo Los Sims, pero en versión minimalista, con avatares SVG personalizables y animaciones suaves.
          </p>
          <h2 style={{fontSize: '1.35rem', fontWeight: 700, color: '#81ca57', marginBottom: 10, marginTop: 18}}>🌍 El planeta también importa</h2>
          <p style={{fontSize: '1.08rem', color: '#232e43', marginBottom: 0, lineHeight: 1.6}}>
            Cada acción positiva también afecta al planeta virtual, que refleja el impacto colectivo de tus decisiones. Por ejemplo, elegir caminar en lugar de usar coche mejora la salud ambiental del mundo que estás ayudando a construir.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-col']}>
            <h3>Uso de datos y privacidad</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('privacidad');}}>Política de privacidad</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Webs de confianza</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('referentes');}}>Referentes</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Quiénes somos</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('equipo');}}>Equipo</a></li>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('historia');}}>Historia</a></li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
        </div>
      </footer>
      {/* Modal para mostrar los componentes */}
      {modalAbierto && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
          onClick={() => setModalAbierto(null)}
        >
          <div style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 32px #0003',
            padding: 0,
            maxWidth: 900,
            width: '95vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAbierto(null)}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: '#5b9cc8',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '6px 16px',
                fontWeight: 600,
                fontSize: 18,
                cursor: 'pointer',
                zIndex: 2
              }}
            >Cerrar ✕</button>
            {modalAbierto === 'equipo' && <QuienesSomos />}
            {modalAbierto === 'privacidad' && <Privacidad onClose={() => setModalAbierto(null)} />}
            {modalAbierto === 'referentes' && <Referentes />}
            {(modalAbierto === 'cookies' || modalAbierto === 'historia') && (
              <div style={{padding: 48, minHeight: 120, minWidth: 320}}>
                <h1 style={{fontSize: 28, marginBottom: 24, color: '#232e43'}}>
                  {modalAbierto === 'cookies' ? 'Cookies' : 'Historia'}
                </h1>
                {modalAbierto === 'historia' && (
                  <div style={{fontSize: 18, color: '#232e43', lineHeight: 1.6}}>
                    <p>🧬 <b>Nuestra Historia</b></p>
                    <p>Todo empezó con una simple pregunta:<br/>
                    ¿Y si nuestras decisiones diarias pudieran salvarnos… y salvar al planeta?</p>
                    <p>LifeLevelUp nació como un proyecto que une tecnología, salud y conciencia colectiva. Queríamos algo más que una app informativa: queríamos una experiencia que te hiciera ver, sentir y actuar.</p>
                    <p>Nos dimos cuenta de que muchas plataformas hablan de bienestar o sostenibilidad… pero pocas conectan ambas cosas de forma visual, educativa y accesible para todos.</p>
                    <p>Así nació LifeLevelUp.<br/>
                    Un espacio donde tu avatar evoluciona contigo, donde tus decisiones tienen consecuencias, y donde cada cambio cuenta —no solo para ti, sino para todos.</p>
                    <p>Porque creemos que el cambio empieza en lo pequeño. En lo personal. En lo cotidiano.<br/>
                    Y si muchas personas lo hacen a la vez... el mundo también mejora.</p>
                    <p style={{marginTop: 32}}>
                    Somos un equipo de jóvenes diseñadores, desarrolladores y soñadores comprometidos con el futuro.<br/>
                    Y sí, también usamos LifeLevelUp cada día.<br/>
                    — El equipo de LifeLevelUp</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 