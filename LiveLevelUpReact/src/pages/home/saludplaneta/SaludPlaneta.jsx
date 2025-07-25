import React, { useState } from 'react';
import styles from '../Home.module.css';
import planetaImg from '../../../assets/svg/planet.png';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import gatoMedicoImg from '../../../assets/gato-medico.png';

export default function SaludPlaneta() {
  const [showLogros, setShowLogros] = useState(false);
  const [showAcciones, setShowAcciones] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(null);

  return (
    <div className={styles.homeWrapper}>
      {/* Barra de navegación superior */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="#">Salud</a></li>
            <li><a href="#">Planeta</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main} style={{display: 'flex', flex: 1, minHeight: 'calc(100vh - 60px - 48px)', marginTop: 60}}>
        {/* Foro/Chat (izquierda) */}
        <div style={{display: 'flex', flexDirection: 'row', gap: 18}}>
        <section style={{flex: '0 0 220px', background: '#81ca57', borderRadius: 18, margin: '18px 18px 18px 0', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 16px #0002'}}>
          <h3 style={{color: '#fff', padding: '18px 0 0 18px'}}>Foro / Chat</h3>
          <div style={{flex: 1, padding: 18, overflowY: 'auto', color: '#fff'}}>Mensajes de ejemplo...</div>
          <form style={{display: 'flex', borderTop: '1px solid #2e5d4a', padding: 12}}>
            <input type="text" placeholder="Escribe un mensaje..." style={{flex: 1, borderRadius: 8, border: 'none', padding: 8}} />
            <button type="submit" style={{marginLeft: 8, background: '#5b9cc8', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600}}>Enviar</button>
          </form>
        </section>
        {/* Panel de progreso (centro) */}
        <section style={{flex: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 420}}>
          <div style={{display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 24, boxShadow: '0 4px 32px #0002', padding: 36, minWidth: 420, minHeight: 320}}>
            <div className="planet-orbit" style={{position: 'relative', width: 270, height: 270, marginRight: 32}}>
              <img src={planetaImg} alt="Planeta" style={{width: 270, height: 270, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 16px #5b9cc8', position: 'relative', zIndex: 2}} />
            </div>
            <div>
              <h2 style={{fontSize: '2.2rem', fontWeight: 700, color: '#183c2a'}}>Progreso ambiental</h2>
              <p style={{fontSize: '1.1rem', color: '#183c2a'}}>Aquí verás tu impacto positivo en el planeta y consejos para mejorar.</p>
            </div>
          </div>
        </section>
        {/* Columna derecha: logros, consejos, acciones */}
        <section style={{flex: '0 0 260px', display: 'flex', flexDirection: 'column', gap: 18, margin: '18px 0 18px 18px', alignItems: 'center'}}>
          {/* Gato médico en vez de huellitas */}
          <div style={{marginBottom: 8, marginTop: 2}}>
            <img src={gatoMedicoImg} alt="Gato médico" style={{width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #0002', background: '#fff'}} />
          </div>
          {/* Icono logros */}
          <div style={{alignSelf: 'flex-end'}}>
            <button onClick={() => setShowLogros(v => !v)} style={{background: '#5b9cc8', border: 'none', borderRadius: '50%', width: 48, height: 48, color: '#fff', fontSize: 28, boxShadow: '0 2px 8px #0002', cursor: 'pointer'}}>🏆</button>
            {showLogros && (
              <div style={{position: 'absolute', top: 80, right: 40, background: '#fff', borderRadius: 16, boxShadow: '0 4px 32px #0003', padding: 24, minWidth: 220, zIndex: 10}}>
                <h4 style={{margin: 0, marginBottom: 12}}>Logros</h4>
                <ul style={{padding: 0, margin: 0, listStyle: 'none'}}>
                  <li>🌱 Primer paso ecológico</li>
                  <li>🌍 Amigo del planeta</li>
                  <li>♻️ Reciclador experto</li>
                </ul>
              </div>
            )}
          </div>
          {/* Icono consejos */}
          <div style={{alignSelf: 'flex-end', position: 'relative'}}>
            <button style={{background: '#ffd600', border: 'none', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002', cursor: 'pointer', padding: 0}}>
              <img src={gatoMedicoImg} alt="Consejo" style={{width: 36, height: 36, borderRadius: '50%', objectFit: 'cover'}} />
            </button>
            <div style={{position: 'absolute', left: 60, top: 0, background: '#fff', borderRadius: 16, boxShadow: '0 4px 32px #0003', padding: 18, minWidth: 180, minHeight: 120, maxWidth: 220, zIndex: 10, display: 'flex', alignItems: 'center'}}>
              <span style={{fontWeight: 500, color: '#183c2a'}}>Consejo: Apaga las luces que no uses para ahorrar energía.</span>
            </div>
          </div>
          {/* Botón acciones */}
          <div style={{alignSelf: 'flex-end', marginTop: 'auto'}}>
            <button onClick={() => setShowAcciones(v => !v)} style={{background: '#81ca57', border: 'none', borderRadius: 12, color: '#fff', fontWeight: 700, fontSize: 18, padding: '12px 32px', boxShadow: '0 2px 8px #0002', cursor: 'pointer'}}>Acciones</button>
            {showAcciones && (
              <div style={{position: 'absolute', right: 0, bottom: 60, background: '#fff', borderRadius: 16, boxShadow: '0 4px 32px #0003', padding: 24, minWidth: 220, zIndex: 10}}>
                <h4 style={{margin: 0, marginBottom: 12}}>Acciones ecológicas</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                  <button style={{background: '#e3f2fd', border: 'none', borderRadius: 8, padding: 12, fontWeight: 600, color: '#183c2a', cursor: 'pointer'}}>Reciclar hoy</button>
                  <button style={{background: '#e3f2fd', border: 'none', borderRadius: 8, padding: 12, fontWeight: 600, color: '#183c2a', cursor: 'pointer'}}>Apagar luces</button>
                  <button style={{background: '#e3f2fd', border: 'none', borderRadius: 8, padding: 12, fontWeight: 600, color: '#183c2a', cursor: 'pointer'}}>Usar transporte público</button>
                </div>
              </div>
            )}
          </div>
        </section>
        </div>
      </main>
      {/* Cinta de noticias animada */}
      <div style={{position: 'fixed', left: 0, right: 0, bottom: 48, height: 38, background: '#183c2a', color: '#fff', display: 'flex', alignItems: 'center', overflow: 'hidden', zIndex: 30}}>
        <div style={{whiteSpace: 'nowrap', animation: 'marquee 18s linear infinite', fontWeight: 500, fontSize: 18, paddingLeft: 32}}>
          🌍 ¡Recuerda separar los residuos! &nbsp;&nbsp;&nbsp;♻️ Participa en el reto ecológico semanal. &nbsp;&nbsp;&nbsp;💧 Ahorra agua todos los días. &nbsp;&nbsp;&nbsp;🚲 Usa la bici para trayectos cortos.
        </div>
      </div>
      {/* Pie de página */}
      <footer className="footer-blanco" style={{background: '#5b9cc8', display: 'flex', justifyContent: 'flex-start', gap: 60, padding: '10px 20px 6px 20px', fontSize: 16, fontWeight: 400, position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 40}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 160}}>
          <div style={{fontSize: 16, fontWeight: 500, marginBottom: 10}}>Uso de datos y privacidad</div>
          <a href="#" onClick={e => {e.preventDefault(); setModalAbierto('privacidad');}} style={{textDecoration: 'none', fontSize: 13, marginBottom: 7}}>Política de privacidad</a>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 160}}>
          <div style={{fontSize: 16, fontWeight: 500, marginBottom: 10}}>Webs de confianza</div>
          <a href="#" onClick={e => {e.preventDefault(); setModalAbierto('referentes');}} style={{textDecoration: 'none', fontSize: 13, marginBottom: 7}}>Referentes</a>
          <a href="#" style={{textDecoration: 'none', fontSize: 13, marginBottom: 7}}>Partners</a>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 160}}>
          <div style={{fontSize: 16, fontWeight: 500, marginBottom: 10}}>Quiénes somos</div>
          <a href="#" onClick={e => {e.preventDefault(); setModalAbierto('equipo');}} style={{textDecoration: 'none', fontSize: 13, marginBottom: 7}}>Equipo</a>
          <a href="#" onClick={e => {e.preventDefault(); setModalAbierto('historia');}} style={{textDecoration: 'none', fontSize: 13, marginBottom: 7}}>Historia</a>
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
            {modalAbierto === 'historia' && (
              <div style={{padding: 48, minHeight: 120, minWidth: 320}}>
                <h1 style={{fontSize: 28, marginBottom: 24, color: '#232e43'}}>
                  Historia
                </h1>
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
              </div>
            )}
          </div>
        </div>
      )}
      {/* Animación de la cinta de noticias */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      {/* Animación de la estela/orbita del planeta */}
      <style>{`
        .planet-orbit {
          position: relative;
          display: inline-block;
        }
        .planet-orbit::before {
          content: '';
          position: absolute;
          top: -12px;
          left: -12px;
          width: 294px;
          height: 294px;
          border-radius: 50%;
          background: conic-gradient(rgba(91,156,200,0.10) 0deg, rgba(91,156,200,0.18) 90deg, rgba(91,156,200,0.10) 180deg, rgba(91,156,200,0.18) 270deg, rgba(91,156,200,0.10) 360deg);
          z-index: 1;
          animation: orbit-spin 3.5s linear infinite;
        }
        @keyframes orbit-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <style>{`
        .footer-blanco, .footer-blanco * {
          color: #fff !important;
        }
      `}</style>
    </div>
  );
} 