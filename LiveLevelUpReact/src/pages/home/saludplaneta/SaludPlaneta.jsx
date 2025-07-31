import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import Layout from '../../../components/Layout.jsx';
import styles from './SaludPlaneta.module.css';
import planetaImg from '../../../assets/svg/planet.png';
import gatoMedicoImg from '../../../assets/gato-medico.png';

export default function SaludPlaneta() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [showCatTip, setShowCatTip] = useState(false);
  const [planetaHealth, setPlanetaHealth] = useState(45); // Fijo en 45 como solicitas
  const [planetaStatus, setPlanetaStatus] = useState('Mejorando');
  const [planetaEmoji, setPlanetaEmoji] = useState('🌱');
  const [userActions, setUserActions] = useState([]);
  const [currentTip, setCurrentTip] = useState('');
  const [actionInfo, setActionInfo] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Ana', message: '¡Hola! ¿Alguien más está reciclando hoy? ♻️', time: '2 min' },
    { id: 2, user: 'Carlos', message: 'Sí, acabo de separar el plástico y el papel', time: '1 min' },
    { id: 3, user: 'María', message: 'Yo estoy usando transporte público hoy 🌱', time: 'Ahora' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const accionesPositivas = [
    { id: 1, name: 'Usar transporte público', impact: 5, icon: '🚌', description: 'Reduce las emisiones de CO2 en un 45% y mejora la calidad del aire urbano.' },
    { id: 2, name: 'Comprar productos locales', impact: 3, icon: '🛒', description: 'Disminuye la huella de carbono del transporte y apoya la economía local.' },
    { id: 3, name: 'Plantar un árbol', impact: 8, icon: '🌳', description: 'Un árbol absorbe hasta 22kg de CO2 al año y produce oxígeno para 4 personas.' }
  ];

  const accionesNegativas = [
    { id: 4, name: 'Usar plásticos desechables', impact: -4, icon: '🥤', description: 'Los plásticos tardan hasta 500 años en degradarse y contaminan los océanos.' },
    { id: 5, name: 'Dejar luces encendidas', impact: -3, icon: '💡', description: 'El desperdicio de energía aumenta las emisiones de gases de efecto invernadero.' },
    { id: 6, name: 'Usar el coche para trayectos cortos', impact: -6, icon: '🚗', description: 'Los trayectos cortos en coche son los más contaminantes por km recorrido.' }
  ];

  const catTips = [
    "¡Hola! Recuerda apagar las luces cuando salgas de una habitación 💡",
    "Un árbol puede absorber hasta 22kg de CO2 al año 🌳",
    "El transporte público reduce las emisiones en un 45% 🚌",
    "Los productos locales viajan menos y contaminan menos 🛒",
    "Reciclar una botella ahorra la energía de 6 horas de bombilla ♻️",
    "Usar la bici para trayectos cortos es saludable y ecológico 🚲",
    "Los productos de temporada tienen menor impacto ambiental 🌱",
    "Desconectar dispositivos ahorra energía y dinero ⚡"
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
      }, 1000);
    }
  };

  const addAction = (action) => {
    if (!userActions.find(a => a.id === action.id)) {
      setUserActions([...userActions, action]);
      updatePlanetaHealth(action.impact);
      setActionInfo(action.description);
      
      // Limpiar la información después de 5 segundos
      setTimeout(() => {
        setActionInfo('');
      }, 5000);
    }
  };

  const removeAction = (actionId) => {
    const action = userActions.find(a => a.id === actionId);
    if (action) {
      setUserActions(userActions.filter(a => a.id !== actionId));
      updatePlanetaHealth(-action.impact);
    }
  };

  const updatePlanetaHealth = (impact) => {
    const newHealth = Math.max(0, Math.min(100, planetaHealth + impact));
    setPlanetaHealth(newHealth);
    
    // Actualizar estado del planeta
    if (newHealth >= 80) {
      setPlanetaStatus('Excelente');
      setPlanetaEmoji('🌟');
    } else if (newHealth >= 60) {
      setPlanetaStatus('Saludable');
      setPlanetaEmoji('🌱');
    } else if (newHealth >= 40) {
      setPlanetaStatus('Mejorando');
      setPlanetaEmoji('🌱');
    } else if (newHealth >= 20) {
      setPlanetaStatus('Preocupante');
      setPlanetaEmoji('⚠️');
    } else {
      setPlanetaStatus('Crítico');
      setPlanetaEmoji('🌡️');
    }
  };

  const getImpactColor = (impact) => {
    if (impact > 0) return '#10b981';
    if (impact < 0) return '#ef4444';
    return '#6b7280';
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

        {/* ===== SECCIÓN PRINCIPAL INTERACTIVA ===== */}
        <section className={styles.mainInteractiveSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>¿Por qué es importante la salud del planeta?</h2>
            <p className={styles.sectionSubtitle}>
              La salud del planeta es fundamental para nuestra supervivencia. Cada acción que realizamos tiene un impacto en el medio ambiente. Adoptar hábitos sostenibles y tomar decisiones conscientes puede marcar la diferencia en la preservación de nuestro hogar común.
            </p>
          </div>

          <div className={styles.interactiveContainer}>
            {/* ===== PANEL IZQUIERDO - CHAT GLOBAL ===== */}
            <div className={styles.leftPanel}>
              <div className={styles.chatPanel}>
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
              </div>
            </div>

            {/* ===== PANEL CENTRAL - PLANETA ===== */}
            <div className={styles.centerPanel}>
              <div className={styles.planetContainer}>
                <div className={styles.planetOrbit}></div>
                <img src={planetaImg} alt="Planeta" className={styles.planetImage} />
                <div className={styles.planetGlow}></div>
              </div>
              
              <div className={styles.healthStatus}>
                <h3>Estado del planeta: {planetaStatus}</h3>
                <span className={styles.healthEmoji}>{planetaEmoji}</span>
              </div>

              {/* Barra de Salud del Planeta */}
              <div className={styles.impactSimulator}>
                <h4>Salud del Planeta:</h4>
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
                
                {/* Información de la acción */}
                {actionInfo && (
                  <div className={styles.actionInfo}>
                    <p>{actionInfo}</p>
                  </div>
                )}
              </div>

              {/* Estadísticas */}
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

            {/* ===== PANEL DERECHO - ACCIONES Y BOT ===== */}
            <div className={styles.rightPanel}>
              {/* Bot de Gato */}
              <div className={styles.catBot}>
                <div className={styles.catAvatar} onClick={() => setShowCatTip(!showCatTip)}>
                  <img 
                    src={gatoMedicoImg} 
                    alt="Gato Doctor" 
                    className={styles.catImage}
                  />
                </div>
                
                {showCatTip && (
                  <div className={styles.catTip}>
                    <p>{currentTip}</p>
                    <button 
                      className={styles.closeTipButton}
                      onClick={() => setShowCatTip(false)}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Panel de Acciones */}
              <div className={styles.actionsPanel}>
                <button 
                  className={styles.dropdownButton}
                  onClick={() => setShowActionsDropdown(!showActionsDropdown)}
                >
                  Acciones Ecológicas ▼
                </button>
                
                {showActionsDropdown && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.actionsSection}>
                      <h4 className={styles.actionsSectionTitle}>✅ Acciones Positivas</h4>
                      {accionesPositivas.map(action => (
                        <div 
                          key={action.id} 
                          className={styles.dropdownItem}
                          onClick={() => addAction(action)}
                        >
                          <span className={styles.itemIcon}>{action.icon}</span>
                          <span className={styles.itemName}>{action.name}</span>
                          <span 
                            className={styles.itemImpact}
                            style={{ color: getImpactColor(action.impact) }}
                          >
                            +{action.impact}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.actionsSection}>
                      <h4 className={styles.actionsSectionTitle}>❌ Acciones Negativas</h4>
                      {accionesNegativas.map(action => (
                        <div 
                          key={action.id} 
                          className={styles.dropdownItem}
                          onClick={() => addAction(action)}
                        >
                          <span className={styles.itemIcon}>{action.icon}</span>
                          <span className={styles.itemName}>{action.name}</span>
                          <span 
                            className={styles.itemImpact}
                            style={{ color: getImpactColor(action.impact) }}
                          >
                            {action.impact}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Acciones Seleccionadas */}
                <div className={styles.selectedItems}>
                  {userActions.map(action => (
                    <div key={action.id} className={styles.selectedItem}>
                      <span className={styles.itemIcon}>{action.icon}</span>
                      <span className={styles.itemName}>{action.name}</span>
                      <button 
                        className={styles.removeButton}
                        onClick={() => removeAction(action.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recordatorio Ecológico */}
              <div className={styles.ecoReminder}>
                <span className={styles.ecoIcon}>🌱</span>
                <p>Recuerda: cada pequeña acción cuenta para salvar el planeta.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 