import React, { useState, useEffect } from 'react';
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
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "María", message: "¡Acabo de completar el reto de reciclaje! 🌱", time: "2 min" },
    { id: 2, user: "Carlos", message: "Hoy caminé 10km en lugar de usar el coche 🚶‍♂️", time: "5 min" },
    { id: 3, user: "Ana", message: "Conseguí reducir mi consumo de agua en un 30% 💧", time: "8 min" },
    { id: 4, user: "Luis", message: "Planteé 3 árboles en mi jardín 🌳", time: "12 min" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [planetaHealth, setPlanetaHealth] = useState(45);
  const [currentTip, setCurrentTip] = useState("Apaga las luces que no uses para ahorrar energía.");
  const navigate = useNavigate();

  // Consejos rotativos del gato bot
  const consejos = [
    "Apaga las luces que no uses para ahorrar energía.",
    "Usa transporte público o bicicleta para trayectos cortos.",
    "Recicla papel, plástico y vidrio correctamente.",
    "Dúchate en menos de 5 minutos para ahorrar agua.",
    "Compra productos locales para reducir la huella de carbono.",
    "Usa bolsas reutilizables en lugar de plástico.",
    "Desconecta dispositivos cuando no los uses.",
    "Come más vegetales y menos carne."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(consejos[Math.floor(Math.random() * consejos.length)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        user: "Tú",
        message: chatInput,
        time: "Ahora"
      };
      setChatMessages(prev => [newMessage, ...prev]);
      setChatInput("");
      
      setTimeout(() => {
        const systemMessage = {
          id: Date.now() + 1,
          user: "Sistema",
          message: "¡Gracias por compartir tu acción ecológica! +5 puntos 🌟",
          time: "Ahora"
        };
        setChatMessages(prev => [systemMessage, ...prev]);
        setPlanetaHealth(prev => Math.min(100, prev + 1));
      }, 1000);
    }
  };

  const accionesEcológicas = [
    { id: 1, text: "Reciclar", positive: true },
    { id: 2, text: "Reducir el consumo energético", positive: true },
    { id: 3, text: "Fomentar la conservación de la biodiversidad", positive: true },
    { id: 4, text: "Contaminar", positive: false },
    { id: 5, text: "Consumir muchas materias primas", positive: false },
    { id: 6, text: "Realizar caza furtiva", positive: false }
  ];

  return (
    <div className={styles.saludPlanetaWrapper}>
      {/* ===== HEADER MODERNO ===== */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/home/salud-bienestar">Salud</a></li>
            <li><a href="/home/salud-planeta" className={styles.activeLink}>Planeta</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== HERO SECTION MODERNO ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroParticles}></div>
          <div className={styles.heroGradient}></div>
        </div>
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>🌍</span>
              <span className={styles.badgeText}>Salud del Planeta</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Tu impacto positivo
              <span className={styles.heroTitleHighlight}> transforma el mundo.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Únete a nuestra comunidad ecológica y descubre cómo cada pequeña acción 
              contribuye a un planeta más saludable y sostenible.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1,247</span>
                <span className={styles.statLabel}>Usuarios activos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>45,892</span>
                <span className={styles.statLabel}>Acciones completadas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{planetaHealth}/100</span>
                <span className={styles.statLabel}>Salud del planeta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CINTA DE NOTICIAS MODERNA ===== */}
      <div className={styles.newsTicker}>
        <div className={styles.tickerContent}>
          🌍 ¡Recuerda separar los residuos! &nbsp;&nbsp;&nbsp;♻️ Participa en el reto ecológico semanal. &nbsp;&nbsp;&nbsp;💧 Ahorra agua todos los días. &nbsp;&nbsp;&nbsp;🚲 Usa la bici para trayectos cortos. &nbsp;&nbsp;&nbsp;🌱 Planta un árbol hoy mismo. &nbsp;&nbsp;&nbsp;⚡ Desconecta dispositivos innecesarios.
        </div>
      </div>

      {/* ===== MAIN CONTENT MODERNO ===== */}
      <main className={styles.main}>
        <div className={styles.panelsContainer}>
          {/* ===== PANEL DE CHAT MODERNO ===== */}
          <section className={styles.chatPanel}>
            <div className={styles.chatHeader}>
              <div className={styles.chatTitle}>
                <span className={styles.chatIcon}>💬</span>
                <h3>Chat Ecológico</h3>
              </div>
              <div className={styles.onlineUsers}>
                <span className={styles.usersIcon}>👥</span>
                <span>1,247 usuarios online</span>
              </div>
            </div>
            
            <div className={styles.chatMessages}>
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`${styles.chatMessage} ${msg.user === "Tú" ? styles.ownMessage : msg.user === "Sistema" ? styles.systemMessage : styles.otherMessage}`}>
                  <div className={styles.messageHeader}>
                    <span className={styles.messageUser}>{msg.user}</span>
                    <span className={styles.messageTime}>{msg.time}</span>
                  </div>
                  <div className={styles.messageText}>{msg.message}</div>
                </div>
              ))}
            </div>
            
            <form className={styles.chatForm} onSubmit={handleChatSubmit}>
              <input 
                type="text" 
                placeholder="Comparte tu acción ecológica..." 
                value={chatInput} 
                onChange={e => setChatInput(e.target.value)} 
                className={styles.chatInput}
              />
              <button type="submit" className={styles.chatButton}>
                <span>Enviar</span>
                <span className={styles.sendIcon}>🚀</span>
              </button>
            </form>
          </section>

          {/* ===== PANEL CENTRAL MODERNO ===== */}
          <section className={styles.progressPanel}>
            <div className={styles.progressCard}>
              <div className={styles.planetContainer}>
                <div className={styles.planetOrbit}></div>
                <img src={planetaImg} alt="Planeta" className={styles.planetImage} />
                <div className={styles.planetGlow}></div>
              </div>
              
              <div className={styles.progressContent}>
                <h2 className={styles.progressTitle}>🌍 Salud del Planeta</h2>
                <p className={styles.progressDescription}>
                  Tu impacto positivo está transformando el mundo. Cada acción cuenta.
                </p>

                <div className={styles.healthBar}>
                  <div className={styles.healthLabel}>
                    <span>Estado Actual</span>
                    <span className={styles.healthValue}>{planetaHealth}/100</span>
                  </div>
                  <div className={styles.healthBarContainer}>
                    <div 
                      className={styles.healthBarFill} 
                      style={{width: `${planetaHealth}%`}}
                    ></div>
                    <div className={styles.healthBarGlow}></div>
                  </div>
                  <div className={styles.healthStatus}>
                    {planetaHealth < 30 ? "🌡️ Crítico" : 
                     planetaHealth < 60 ? "⚠️ Mejorando" : 
                     planetaHealth < 80 ? "🌱 Saludable" : "🌟 Excelente"}
                  </div>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>1,247</span>
                    <span className={styles.statLabel}>Usuarios activos</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>45,892</span>
                    <span className={styles.statLabel}>Acciones completadas</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== PANEL DE ACCIONES MODERNO ===== */}
          <section className={styles.actionsPanel}>
            {/* Icono de logros */}
            <div className={styles.actionItem}>
              <button 
                onClick={() => setShowLogros(v => !v)} 
                className={styles.actionButton}
                title="Ver logros"
              >
                🏆
              </button>
              {showLogros && (
                <div className={styles.popup}>
                  <div className={styles.popupHeader}>
                    <h4>🏆 Logros Desbloqueados</h4>
                    <button 
                      onClick={() => setShowLogros(false)} 
                      className={styles.closeButton}
                    >
                      ✕
                    </button>
                  </div>
                  <ul className={styles.popupList}>
                    <li className={styles.achievementItem}>
                      <span className={styles.achievementIcon}>🌱</span>
                      <div className={styles.achievementInfo}>
                        <span className={styles.achievementTitle}>Primer paso ecológico</span>
                        <span className={styles.achievementDesc}>Completaste tu primera acción verde</span>
                      </div>
                    </li>
                    <li className={styles.achievementItem}>
                      <span className={styles.achievementIcon}>🌍</span>
                      <div className={styles.achievementInfo}>
                        <span className={styles.achievementTitle}>Amigo del planeta</span>
                        <span className={styles.achievementDesc}>10 acciones consecutivas</span>
                      </div>
                    </li>
                    <li className={styles.achievementItem}>
                      <span className={styles.achievementIcon}>♻️</span>
                      <div className={styles.achievementInfo}>
                        <span className={styles.achievementTitle}>Reciclador experto</span>
                        <span className={styles.achievementDesc}>Reciclaste 50 elementos</span>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Gato bot con consejos */}
            <div className={styles.actionItem}>
              <button className={`${styles.actionButton} ${styles.tipsButton}`}>
                <img src={gatoMedicoImg} alt="Gato consejero" className={styles.tipsImage} />
              </button>
              <div className={styles.tipsPopup}>
                <div className={styles.tipsHeader}>
                  <span className={styles.tipsIcon}>🐱</span>
                  <span className={styles.tipsTitle}>Consejo del día</span>
                </div>
                <span className={styles.tipsText}>{currentTip}</span>
              </div>
            </div>

            {/* Botón de acciones */}
            <div className={styles.actionItem}>
              <button 
                onClick={() => setShowAcciones(v => !v)} 
                className={styles.actionsMainButton}
              >
                <span>⚡</span>
                <span>Acciones</span>
              </button>
              {showAcciones && (
                <div className={styles.actionsPopup}>
                  <div className={styles.popupHeader}>
                    <h4>🎯 Acciones Ecológicas</h4>
                    <button 
                      onClick={() => setShowAcciones(false)} 
                      className={styles.closeButton}
                    >
                      ✕
                    </button>
                  </div>
                  <div className={styles.actionsGrid}>
                    {accionesEcológicas.map(accion => (
                      <button 
                        key={accion.id} 
                        className={`${styles.actionItem} ${accion.positive ? styles.positiveAction : styles.negativeAction}`}
                      >
                        {accion.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* ===== FOOTER MODERNO ===== */}
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
              <li><a href="/home/salud-bienestar">Salud y Bienestar</a></li>
              <li><a href="/home/salud-planeta">Salud del Planeta</a></li>
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