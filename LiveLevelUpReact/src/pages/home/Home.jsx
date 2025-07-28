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
  const mainRef = React.useRef(null);
  const [showScrollLight, setShowScrollLight] = React.useState(true);
  const [showFooter, setShowFooter] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

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

  React.useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    
    function onScroll() {
      const scrollTop = main.scrollTop;
      const clientHeight = main.clientHeight;
      const scrollHeight = main.scrollHeight;
      
      // Calcular progreso del scroll (0 a 1)
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(Math.min(progress, 1));
      
      // Mostrar footer cuando el usuario está al 80% del contenido
      const shouldShowFooter = progress > 0.8;
      setShowFooter(shouldShowFooter);
      
      // Mostrar botón de volver arriba cuando el usuario ha hecho scroll
      setShowScrollToTop(progress > 0.3);
      
      // Detectar sección activa
      const sections = ['home', 'por-que-lifelevelup'];
      const headerHeight = 60;
      let currentSection = 'home';
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop - headerHeight;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollTop >= elementTop && scrollTop < elementBottom) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
      
      // Ocultar scroll light cuando está cerca del final
      const atBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setShowScrollLight(!atBottom);
    }
    
    main.addEventListener('scroll', onScroll);
    onScroll(); // Ejecutar una vez para establecer el estado inicial
    return () => main.removeEventListener('scroll', onScroll);
  }, []);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && mainRef.current) {
      const headerHeight = 60; // Altura del header fijo
      const elementPosition = element.offsetTop - headerHeight;
      mainRef.current.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.homeWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>LifeLevelUp</span>
            {/* Indicador de sección activa */}
            {activeSection !== 'home' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#81ca57',
                boxShadow: '0 0 8px #81ca57',
                animation: 'pulse 2s infinite'
              }} />
            )}
          </div>
          <ul className={styles.menu}>
            <li>
              <a 
                href="#salud" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('salud');
                }}
                style={{
                  background: activeSection === 'salud' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.10)',
                  border: activeSection === 'salud' ? '2.5px solid #fff' : '1.5px solid rgba(255,255,255,0.10)',
                  boxShadow: activeSection === 'salud' ? '0 8px 32px 0 #91c1e0, 0 0px 12px #fff4' : '0 2px 16px 0 rgba(91,156,200,0.18), 0 0px 8px #fff2, 0 1px 0 #fff2'
                }}
              >
                Salud
              </a>
            </li>
            <li>
              <a 
                href="#planeta" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('planeta');
                }}
                style={{
                  background: activeSection === 'planeta' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.10)',
                  border: activeSection === 'planeta' ? '2.5px solid #fff' : '1.5px solid rgba(255,255,255,0.10)',
                  boxShadow: activeSection === 'planeta' ? '0 8px 32px 0 #91c1e0, 0 0px 12px #fff4' : '0 2px 16px 0 rgba(91,156,200,0.18), 0 0px 8px #fff2, 0 1px 0 #fff2'
                }}
              >
                Planeta
              </a>
            </li>
          </ul>
          <div style={{display:'flex',alignItems:'center',gap:'18px'}}>
                  {/* Indicador de progreso de scroll */}
      <div style={{
        position: 'relative',
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#fff',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.background = 'rgba(255,255,255,0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.background = 'rgba(255,255,255,0.1)';
      }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" style={{transform: 'rotate(-90deg)'}}>
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="#81ca57"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 14}`}
            strokeDashoffset={`${2 * Math.PI * 14 * (1 - scrollProgress)}`}
            style={{transition: 'stroke-dashoffset 0.3s ease'}}
          />
        </svg>
        <span style={{
          position: 'absolute',
          fontSize: '10px',
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '0 1px 2px rgba(0,0,0,0.3)'
        }}>
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>
            
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
      <main 
        ref={mainRef} 
        className={styles.main} 
        style={{
          overflowY: 'auto', 
          minHeight: '100vh', 
          paddingTop: 0,
          paddingBottom: showFooter ? '120px' : '20px', // Espacio para el footer
          transition: 'padding-bottom 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <PanelesInteractivos />
        <section 
          id="por-que-lifelevelup"
          style={{
            maxWidth: 900, 
            margin: '40px auto 80px auto', 
            padding: '0 32px', 
            textAlign: 'left'
          }}
        >
          <h1 style={{
            fontSize: '2.2rem', 
            fontWeight: 800, 
            color: '#5b9cc8', 
            marginBottom: 24, 
            letterSpacing: '0.01em',
            textShadow: '0 2px 8px rgba(91,156,200,0.3)'
          }}>¿Por qué LifeLevelUp?</h1>
          <p style={{
            fontSize: '1.18rem', 
            color: '#f5f9fb', 
            marginBottom: 32, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            LifeLevelUp es una experiencia interactiva que convierte tus hábitos diarios en una aventura visual. Imagina que tú y el planeta son parte de un juego tipo Los Sims, pero en versión minimalista, con avatares SVG personalizables y animaciones suaves.
          </p>
          <h2 style={{
            fontSize: '1.35rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 16, 
            marginTop: 32,
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🌍 El planeta también importa</h2>
          <p style={{
            fontSize: '1.08rem', 
            color: '#e3f0fa', 
            marginBottom: 0, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            Cada acción positiva también afecta al planeta virtual, que refleja el impacto colectivo de tus decisiones. Por ejemplo, elegir caminar en lugar de usar coche mejora la salud ambiental del mundo que estás ayudando a construir.
          </p>
          
          <h2 style={{
            fontSize: '1.35rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 16, 
            marginTop: 40,
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🎮 Una experiencia única</h2>
          <p style={{
            fontSize: '1.08rem', 
            color: '#e3f0fa', 
            marginBottom: 0, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            Nuestra plataforma combina gamificación, educación ambiental y bienestar personal en una sola experiencia. Cada decisión que tomas se refleja en tu avatar y en el estado del planeta virtual, creando una conexión visual entre tus acciones y sus consecuencias.
          </p>
          
          <h2 style={{
            fontSize: '1.35rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 16, 
            marginTop: 40,
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🌟 Comienza tu viaje</h2>
          <p style={{
            fontSize: '1.08rem', 
            color: '#e3f0fa', 
            marginBottom: 60, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            Únete a nuestra comunidad y descubre cómo pequeños cambios en tu rutina diaria pueden tener un impacto significativo en tu bienestar y en el planeta. ¡Tu avatar te está esperando!
          </p>
        </section>
      </main>
      {showScrollLight && (
        <div 
          className="scroll-light" 
          style={{
            position: 'fixed',
            left: '50%',
            bottom: '18px',
            transform: 'translateX(-50%)',
            width: '38px',
            height: '10px',
            borderRadius: '8px',
            background: 'radial-gradient(circle, #b6eaff 60%, #81ca57 100%, transparent 100%)',
            boxShadow: '0 0 18px 6px #b6eaff88',
            opacity: 0.85,
            pointerEvents: 'none',
            zIndex: 100,
            transition: 'opacity 0.3s',
            animation: 'scrollLightPulse 1.2s infinite alternate'
          }}
        />
      )}
      
      {/* Botón de volver arriba */}
      {showScrollToTop && (
        <button
          onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: showFooter ? '140px' : '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #81ca57 0%, #5b9cc8 100%)',
            border: 'none',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(129, 202, 87, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'scale(1)',
            opacity: 1
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(129, 202, 87, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 16px rgba(129, 202, 87, 0.3)';
          }}
          title="Volver arriba"
        >
          ↑
        </button>
      )}
      
      {/* Footer con animación de aparición */}
      <footer 
        className={styles.footer} 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          width: '100%',
          transform: showFooter ? 'translateY(0)' : 'translateY(100%)',
          opacity: showFooter ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: showFooter ? '0 -4px 20px rgba(0,0,0,0.15)' : 'none',
          backdropFilter: showFooter ? 'blur(10px)' : 'none',
          background: showFooter ? 'rgba(91, 156, 200, 0.95)' : 'rgba(91, 156, 200, 1)'
        }}
      >
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