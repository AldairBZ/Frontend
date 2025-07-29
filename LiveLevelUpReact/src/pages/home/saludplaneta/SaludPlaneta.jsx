import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SaludPlaneta.module.css';
import planetaImg from '../../../assets/svg/planet.png';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import gatoMedicoImg from '../../../assets/gato-medico.png';

export default function SaludPlaneta() {
  const [showLogros, setShowLogros] = useState(false);
  const [showAcciones, setShowAcciones] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.saludPlanetaWrapper}>
      {/* ===== HEADER ===== */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/home/salud-bienestar">Salud</a></li>
            <li><a href="/home/salud-planeta" style={{background: 'rgba(255,255,255,0.2)', border: '2px solid #fff'}}>Planeta</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== HERO MODERNO ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroParticles}></div>
          <div className={styles.heroGradient}></div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Columna izquierda: Avatar planeta */}
            <div className={styles.heroAvatar}>
              <div className={styles.avatarContainer}>
                <img src={planetaImg} alt="Planeta" style={{width: 180, height: 180}} />
                <div className={styles.avatarGlow}></div>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>+8K</span>
                  <span className={styles.statLabel}>Acciones ecológicas</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>+120K</span>
                  <span className={styles.statLabel}>Kg CO₂ ahorrados</span>
                </div>
              </div>
            </div>
            {/* Columna derecha: Texto y CTAs */}
            <div className={styles.heroTextBlock}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeIcon}>🌍</span>
                <span className={styles.badgeText}>Planeta saludable, futuro brillante</span>
              </div>
              <h1 className={styles.heroTitle}>
                Cuida el planeta.<span className={styles.heroTitleHighlight}> Cambia tu entorno.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Descubre cómo tus hábitos diarios pueden transformar el mundo. Participa en retos ecológicos, mide tu impacto y evoluciona junto a la comunidad.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>♻️</span>
                  <span className={styles.featureText}>Retos ecológicos</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>🌱</span>
                  <span className={styles.featureText}>Impacto real</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>📊</span>
                  <span className={styles.featureText}>Métricas ambientales</span>
                </div>
              </div>
              <div className={styles.heroCtas}>
                <button className={styles.ctaPrimary} onClick={() => navigate('/home/salud-bienestar')}>
                  <span className={styles.ctaIcon}>🌱</span>
                  <span className={styles.ctaText}>Ver salud y bienestar</span>
                  <span className={styles.ctaArrow}>→</span>
                </button>
                <button className={styles.ctaSecondary} onClick={() => navigate('/home/avatar/personalizar')}>
                  <span className={styles.ctaIcon}>🧑‍🚀</span>
                  <span className={styles.ctaText}>Personalizar avatar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollIndicator}>
            <span className={styles.scrollText}>Descubre más</span>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>
      </section>

      {/* ===== BARRA DE NOTICIAS ===== */}
      <div className={styles.newsTicker}>
        <div className={styles.tickerContent}>
          🌍 ¡Recuerda separar los residuos! &nbsp;&nbsp;&nbsp;♻️ Participa en el reto ecológico semanal. &nbsp;&nbsp;&nbsp;💧 Ahorra agua todos los días. &nbsp;&nbsp;&nbsp;🚲 Usa la bici para trayectos cortos.
        </div>
      </div>
      
      {/* ===== MAIN CONTENT ===== */}
      <main className={styles.main}>
        {/* Contenedor principal con estructura cuadriculada */}
        <div className={styles.panelsContainer}>
          {/* ===== SECCIÓN 1: PANEL DE CHAT ===== */}
          <section className={styles.chatPanel}>
            <h3 className={styles.chatHeader}>Chat</h3>
            <div className={styles.chatMessages}>
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={styles.chatMessage}>{msg}</div>
              ))}
            </div>
            <form className={styles.chatForm} onSubmit={e => {
              e.preventDefault();
              if (chatInput.trim() !== "") {
                setChatMessages(msgs => [...msgs, chatInput]);
                setChatInput("");
              }
            }}>
              <input 
                type="text" 
                placeholder="Escribe un mensaje..." 
                value={chatInput} 
                onChange={e => setChatInput(e.target.value)} 
                className={styles.chatInput}
              />
              <button type="submit" className={styles.chatButton}>Enviar</button>
            </form>
          </section>

          {/* ===== SECCIÓN 2: PANEL CENTRAL DE PROGRESO ===== */}
          <section className={styles.progressPanel}>
            <div className={styles.progressCard}>
              <div className={styles.planetContainer}>
                <div className={styles.planetOrbit}></div>
                <img src={planetaImg} alt="Planeta" className={styles.planetImage} />
              </div>
              <div className={styles.progressContent}>
                <h2 className={styles.progressTitle}>Progreso ambiental</h2>
                <p className={styles.progressDescription}>
                  Aquí verás tu impacto positivo en el planeta y consejos para mejorar.
                </p>

                <div className={styles.healthBar}>
                  <div className={styles.healthLabel}>Salud</div>
                  <div className={styles.healthBarContainer}>
                    <div className={styles.healthBarFill}></div>
                    <span className={styles.healthBarValue}>45/100</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== SECCIÓN 3: PANEL DE ACCIONES ===== */}
          <section className={styles.actionsPanel}>
            <div style={{display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end'}}>
              {/* Icono logros */}
              <div style={{position: 'relative'}}>
                <button 
                  onClick={() => setShowLogros(v => !v)} 
                  className={styles.actionButton}
                >
                  🏆
                </button>
                {showLogros && (
                  <div className={styles.popup} style={{top: 80, right: 40}}>
                    <h4 className={styles.popupTitle}>Logros</h4>
                    <ul className={styles.popupList}>
                      <li>🌱 Primer paso ecológico</li>
                      <li>🌍 Amigo del planeta</li>
                      <li>♻️ Reciclador experto</li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Icono consejos + popup alineados */}
              <div style={{position: 'relative'}}>
                <button className={`${styles.actionButton} ${styles.tipsButton}`} style={{marginBottom: 0}}>
                  <img src={gatoMedicoImg} alt="Consejo" className={styles.tipsImage} />
                </button>
                <div className={styles.tipsPopup} style={{position: 'absolute', right: -40, top: 88, marginTop: 0, marginBottom: 0, alignSelf: 'unset'}}>
                  <span className={styles.tipsText}>
                    Consejo: Apaga las luces que no uses para ahorrar energía.
                  </span>
                </div>
              </div>
            </div>
            {/* Botón acciones */}
            <div style={{alignSelf: 'flex-end', marginTop: '32px', position: 'relative'}}>
              <button 
                onClick={() => setShowAcciones(v => !v)} 
                className={styles.actionsMainButton}
              >
                Acciones
              </button>
              {showAcciones && (
                <div className={styles.actionsPopup}>
                  <button 
                    onClick={() => setShowAcciones(false)} 
                    className={styles.closeButton}
                  >
                    ✕
                  </button>
                  <h4 className={styles.popupTitle}>Acciones ecológicas</h4>
                  <div className={styles.actionsGrid}>
                    <button className={styles.actionItem}>Reciclar</button>
                    <button className={styles.actionItem}>Reducir el consumo energético</button>
                    <button className={styles.actionItem}>Fomentar la conservación de la biodiversidad</button>
                    <button className={styles.actionItemNegative}>Contaminar</button>
                    <button className={styles.actionItemNegative}>Consumir muchas materias primas</button>
                    <button className={styles.actionItemNegative}>Realizar caza furtiva</button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* ===== FOOTER COMPLETO ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <h2>LifeLevelUp</h2>
            <p>Concienciación ambiental y bienestar personal. Transformando hábitos en impacto positivo.</p>
            <div className={styles.footerEmojis}>
              <span>🌱</span>
              <span>🌍</span>
              <span>💚</span>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/home/saludibienestar">Salud y Bienestar</a></li>
              <li><a href="/home/saludplaneta">Salud del Planeta</a></li>
              <li><a href="/home/avatar">Personalizar Avatar</a></li>
              <li><a href="#">Recursos</a></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Sobre nosotros</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('referentes');}}>Referentes científicos</a></li>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('privacidad');}}>Política de privacidad</a></li>
              <li><a href="#">Guía de hábitos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h3>Contacto</h3>
            <a href="mailto:hola@lifelevelup.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              hola@lifelevelup.com
            </a>
            <a href="tel:+346667526382" className={styles.contactItem}>
              <span className={styles.contactIcon}>🌱</span>
              +34 666 PLANETA
            </a>
            <a href="#" className={styles.contactItem}>
              <span className={styles.contactIcon}>🌍</span>
              España, Europa
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2025 LifeLevelUp. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* ===== MODAL ===== */}
      {modalAbierto && (
        <div className={styles.modal} onClick={() => setModalAbierto(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setModalAbierto(null)}
              className={styles.modalCloseButton}
            >
              Cerrar ✕
            </button>
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
    </div>
  );
} 