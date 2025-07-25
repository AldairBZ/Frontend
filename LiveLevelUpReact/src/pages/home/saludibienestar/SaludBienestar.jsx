import React from 'react';
import styles from './SaludBienestar.module.css';
import perfilImg from '../../../assets/imagenes-home/perfil/perfil.png';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import { useTheme } from '../../../contexts/ThemeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import Marquee from './Marquee';

export default function SaludBienestar() {
  const { darkMode, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [modalAbierto, setModalAbierto] = React.useState(null);
  const [status, setStatus] = React.useState('Estado de salud: Neutro 🙂');
  
  const profileBtnRef = React.useRef(null);
  const menuRef = React.useRef(null);

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
    <DndProvider backend={HTML5Backend}>
      <div className={styles.homeWrapper}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <span>LifeLevelUp</span>
            </div>
            <ul className={styles.menu}>
              <li>
                <a href="/home">Inicio</a>
              </li>
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
                    <button className={styles.profileMenuItem}>Editar perfil</button>
                    <button className={styles.profileMenuItem + ' ' + styles.logoutBtn}>Cerrar sesión</button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
        <div style={{height: 60}} />
        <main className={styles.mainContent}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'18px'}}>
          <LeftPanel />
          <CenterPanel status={status} setStatus={setStatus} />
          <RightPanel />
          </div>
        </main>
        <Marquee />
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
          <div className={styles['footer-bottom']}></div>
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
    </DndProvider>
  );
} 