import React from 'react';
import styles from './SaludBienestar.module.css';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import Marquee from './Marquee';
import Layout from '../../../components/Layout.jsx';

export default function SaludBienestar() {
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
      <Layout>
        {/* Marquee pegado al nav, antes del contenido principal */}
        <Marquee />
        <div className={styles.homeWrapper}>
          {/* Espaciador para header fijo */}
          <div style={{ height: 60 }} />
          <main className={styles.mainContentModern}>
            {/* Panel izquierdo: botones y paneles de hábitos/acciones */}
            <LeftPanel />
            {/* Panel central: avatar y estado de salud */}
            <CenterPanel status={status} setStatus={setStatus} />
            {/* Panel derecho: logros y consejos */}
            <RightPanel />
          </main>
          {/* Modal para mostrar los componentes (footer, equipo, etc) */}
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
                  <div style={{ padding: 48, minHeight: 120, minWidth: 320 }}>
                    <h1 style={{ fontSize: 28, marginBottom: 24, color: '#232e43' }}>
                      {modalAbierto === 'cookies' ? 'Cookies' : 'Historia'}
                    </h1>
                    {modalAbierto === 'historia' && (
                      <div style={{ fontSize: 18, color: '#232e43', lineHeight: 1.6 }}>
                        <p>🧬 <b>Nuestra Historia</b></p>
                        <p>Todo empezó con una simple pregunta:<br />
                          ¿Y si nuestras decisiones diarias pudieran salvarnos… y salvar al planeta?</p>
                        <p>LifeLevelUp nació como un proyecto que une tecnología, salud y conciencia colectiva. Queríamos algo más que una app informativa: queríamos una experiencia que te hiciera ver, sentir y actuar.</p>
                        <p>Nos dimos cuenta de que muchas plataformas hablan de bienestar o sostenibilidad… pero pocas conectan ambas cosas de forma visual, educativa y accesible para todos.</p>
                        <p>Así nació LifeLevelUp.<br />
                          Un espacio donde tu avatar evoluciona contigo, donde tus decisiones tienen consecuencias, y donde cada cambio cuenta —no solo para ti, sino para todos.</p>
                        <p>Porque creemos que el cambio empieza en lo pequeño. En lo personal. En lo cotidiano.<br />
                          Y si muchas personas lo hacen a la vez... el mundo también mejora.</p>
                        <p style={{ marginTop: 32 }}>
                          Somos un equipo de jóvenes diseñadores, desarrolladores y soñadores comprometidos con el futuro.<br />
                          Y sí, también usamos LifeLevelUp cada día.<br />
                          — El equipo de LifeLevelUp</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Layout>
    </DndProvider>
  );
} 