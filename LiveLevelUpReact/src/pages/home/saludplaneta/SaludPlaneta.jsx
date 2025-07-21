import React, { useState } from 'react';
import styles from '../Home.module.css';
import planetaImg from '../../../assets/imagenes-home/planeta.jpg';

export default function SaludPlaneta() {
  const [showLogros, setShowLogros] = useState(false);
  const [showAcciones, setShowAcciones] = useState(false);

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
        <section style={{flex: '0 0 320px', background: '#183c2a', borderRadius: 18, margin: '18px 18px 18px 0', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 16px #0002'}}>
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
            <img src={planetaImg} alt="Planeta" style={{width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', marginRight: 32, boxShadow: '0 2px 16px #5b9cc8'}} />
            <div>
              <h2 style={{fontSize: '2.2rem', fontWeight: 700, color: '#183c2a'}}>Progreso ambiental</h2>
              <p style={{fontSize: '1.1rem', color: '#183c2a'}}>Aquí verás tu impacto positivo en el planeta y consejos para mejorar.</p>
            </div>
          </div>
        </section>
        {/* Columna derecha: logros, consejos, acciones */}
        <section style={{flex: '0 0 260px', display: 'flex', flexDirection: 'column', gap: 18, margin: '18px 0 18px 18px'}}>
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
            <button style={{background: '#ffd600', border: 'none', borderRadius: '50%', width: 48, height: 48, color: '#183c2a', fontSize: 28, boxShadow: '0 2px 8px #0002', cursor: 'pointer'}}>😊</button>
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
      </main>
      {/* Cinta de noticias animada */}
      <div style={{position: 'fixed', left: 0, right: 0, bottom: 48, height: 38, background: '#183c2a', color: '#fff', display: 'flex', alignItems: 'center', overflow: 'hidden', zIndex: 30}}>
        <div style={{whiteSpace: 'nowrap', animation: 'marquee 18s linear infinite', fontWeight: 500, fontSize: 18, paddingLeft: 32}}>
          🌍 ¡Recuerda separar los residuos! &nbsp;&nbsp;&nbsp;♻️ Participa en el reto ecológico semanal. &nbsp;&nbsp;&nbsp;💧 Ahorra agua todos los días. &nbsp;&nbsp;&nbsp;🚲 Usa la bici para trayectos cortos.
        </div>
      </div>
      {/* Pie de página */}
      <footer style={{background: '#5b9cc8', color: '#fff', textAlign: 'center', padding: 18, position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 40, fontWeight: 500, fontSize: 18}}>
        LifeLevelUp © 2024
      </footer>
      {/* Animación de la cinta de noticias */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
} 