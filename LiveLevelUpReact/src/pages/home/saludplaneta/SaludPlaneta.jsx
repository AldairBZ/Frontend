import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import Layout from '../../../components/Layout.jsx';
import styles from './SaludPlaneta.module.css';
import planetaImg from '../../../assets/svg/planet.png';
import QuienesSomos from '../footer/equipo/QuienesSomos.jsx';
import Privacidad from '../footer/privacidad/Terminos.jsx';
import Referentes from '../footer/referentes/Referentes.jsx';
import gatoMedicoImg from '../../../assets/gato-medico.png';

export default function SaludPlaneta() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [showLogros, setShowLogros] = useState(false);
  const [showAcciones, setShowAcciones] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Ana', message: '¡Hola! ¿Alguien más está reciclando hoy? ♻️', time: '2 min' },
    { id: 2, user: 'Carlos', message: 'Sí, acabo de separar el plástico y el papel', time: '1 min' },
    { id: 3, user: 'María', message: 'Yo estoy usando transporte público hoy 🌱', time: 'Ahora' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [planetaHealth, setPlanetaHealth] = useState(72);
  const [currentTip, setCurrentTip] = useState('');

  const accionesEcológicas = [
    { id: 1, name: 'Usar transporte público', impact: 5, icon: '🚌' },
    { id: 2, name: 'Comprar productos locales', impact: 3, icon: '🛒' },
    { id: 3, name: 'Reducir el uso de plástico', impact: 4, icon: '🥤' },
    { id: 4, name: 'Ahorrar energía', impact: 6, icon: '💡' },
    { id: 5, name: 'Plantar un árbol', impact: 8, icon: '🌳' },
    { id: 6, name: 'Usar energías renovables', impact: 10, icon: '☀️' }
  ];

  const catTips = [
    "¡Hola! Recuerda apagar las luces cuando salgas de una habitación 💡",
    "Un árbol puede absorber hasta 22kg de CO2 al año 🌳",
    "El transporte público reduce las emisiones en un 45% 🚌",
    "Los productos locales viajan menos y contaminan menos 🛒",
    "Reciclar una botella ahorra la energía de 6 horas de bombilla ♻️"
  ];

  useEffect(() => {
    const tipInterval = setInterval(() => {
      const randomTip = catTips[Math.floor(Math.random() * catTips.length)];
      setCurrentTip(randomTip);
    }, 8000);
    return () => clearInterval(tipInterval);
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      const newMessage = {
        id: Date.now(),
        user: 'Tú',
        message: chatInput,
        time: 'Ahora'
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatInput('');
      
      // Simular respuesta del sistema
      setTimeout(() => {
        const systemMessage = {
          id: Date.now() + 1,
          user: 'Sistema',
          message: '¡Excelente iniciativa! Cada acción cuenta para salvar nuestro planeta 🌍',
          time: 'Ahora'
        };
        setChatMessages(prev => [...prev, systemMessage]);
        
        // Aumentar salud del planeta
        setPlanetaHealth(prev => Math.min(100, prev + 1));
      }, 1000);
    }
  };

  return (
    <Layout>
      <div className={styles.saludPlanetaWrapper}>
        {/* ===== HERO SECTION MODERNO ===== */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroParticles}></div>
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span>🌍</span>
                Interactivo
              </div>
              <h1 className={styles.heroTitle}>
                Monitorea la
                <span className={styles.heroTitleHighlight}> salud del planeta</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Únete a la conversación global y descubre cómo tus acciones impactan 
                en tiempo real la salud de nuestro planeta.
              </p>
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
    </div>
  </Layout>
  );
} 