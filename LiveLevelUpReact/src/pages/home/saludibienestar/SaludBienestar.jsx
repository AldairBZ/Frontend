import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SaludBienestar.module.css';

export default function SaludBienestar() {
  const navigate = useNavigate();
  const [showHabitsDropdown, setShowHabitsDropdown] = useState(false);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showCatTip, setShowCatTip] = useState(false);
  const [healthStatus, setHealthStatus] = useState('Neutro');
  const [healthEmoji, setHealthEmoji] = useState('😐');
  const [userHabits, setUserHabits] = useState([]);
  const [userActions, setUserActions] = useState([]);
  const [avatarMood, setAvatarMood] = useState('happy');
  const [currentTip, setCurrentTip] = useState('');
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'Primer paso saludable', icon: '🌱', unlocked: true },
    { id: 2, name: 'Come-frutas', icon: '🍎', unlocked: true },
    { id: 3, name: 'Hidratación perfecta', icon: '💧', unlocked: false },
    { id: 4, name: 'Ejercicio diario', icon: '🏃‍♂️', unlocked: false },
    { id: 5, name: 'Descanso óptimo', icon: '😴', unlocked: false }
  ]);

  const habits = [
    { id: 1, name: 'Fumar', icon: '🚬', impact: -9, category: 'negative' },
    { id: 2, name: 'Beber alcohol', icon: '🍺', impact: -3, category: 'negative' },
    { id: 3, name: 'Ejercicio diario', icon: '🏃‍♂️', impact: +5, category: 'positive' },
    { id: 4, name: 'Meditación', icon: '🧘‍♀️', impact: +2, category: 'positive' },
    { id: 5, name: 'Dormir 8 horas', icon: '😴', impact: +3, category: 'positive' },
    { id: 6, name: 'Comer frutas', icon: '🍎', impact: +2, category: 'positive' }
  ];

  const actions = [
    { id: 1, name: 'Beber agua', icon: '💧', impact: +1, category: 'positive' },
    { id: 2, name: 'Caminar 30 min', icon: '🚶‍♀️', impact: +2, category: 'positive' },
    { id: 3, name: 'Comer verduras', icon: '🥬', impact: +1, category: 'positive' },
    { id: 4, name: 'Tomar café', icon: '☕', impact: -1, category: 'negative' },
    { id: 5, name: 'Usar escaleras', icon: '🪜', impact: +1, category: 'positive' },
    { id: 6, name: 'Respirar profundo', icon: '🫁', impact: +1, category: 'positive' }
  ];

  const catTips = [
    "¡Hola! Recuerda beber 2 litros de agua al día 💧",
    "Un paseo de 30 minutos puede cambiar tu día 🚶‍♀️",
    "Las frutas son tus mejores amigas 🍎",
    "Respira profundo y relájate 🫁",
    "¡El ejercicio es la mejor medicina! 🏃‍♂️",
    "Duerme bien para despertar mejor 😴"
  ];

  useEffect(() => {
    // Rotar consejos del gato
    const tipInterval = setInterval(() => {
      const randomTip = catTips[Math.floor(Math.random() * catTips.length)];
      setCurrentTip(randomTip);
    }, 8000);
    return () => clearInterval(tipInterval);
  }, []);

  const addHabit = (habit) => {
    if (!userHabits.find(h => h.id === habit.id)) {
      setUserHabits([...userHabits, habit]);
      updateHealthStatus(habit.impact);
      setShowHabitsDropdown(false);
    }
  };

  const addAction = (action) => {
    if (!userActions.find(a => a.id === action.id)) {
      setUserActions([...userActions, action]);
      updateHealthStatus(action.impact);
      setShowActionsDropdown(false);
    }
  };

  const removeHabit = (habitId) => {
    const habit = userHabits.find(h => h.id === habitId);
    if (habit) {
      setUserHabits(userHabits.filter(h => h.id !== habitId));
      updateHealthStatus(-habit.impact);
    }
  };

  const removeAction = (actionId) => {
    const action = userActions.find(a => a.id === actionId);
    if (action) {
      setUserActions(userActions.filter(a => a.id !== actionId));
      updateHealthStatus(-action.impact);
    }
  };

  const updateHealthStatus = (impact) => {
    // Simular cálculo de impacto en la salud
    const totalImpact = userHabits.reduce((sum, h) => sum + h.impact, 0) + 
                       userActions.reduce((sum, a) => sum + a.impact, 0) + impact;
    
    if (totalImpact >= 10) {
      setHealthStatus('Excelente');
      setHealthEmoji('😄');
      setAvatarMood('excited');
    } else if (totalImpact >= 5) {
      setHealthStatus('Bueno');
      setHealthEmoji('🙂');
      setAvatarMood('happy');
    } else if (totalImpact >= 0) {
      setHealthStatus('Neutro');
      setHealthEmoji('😐');
      setAvatarMood('neutral');
    } else if (totalImpact >= -5) {
      setHealthStatus('Regular');
      setHealthEmoji('😕');
      setAvatarMood('worried');
    } else {
      setHealthStatus('Malo');
      setHealthEmoji('😞');
      setAvatarMood('sad');
    }
  };

  const getImpactColor = (impact) => {
    return impact > 0 ? '#10b981' : impact < 0 ? '#ef4444' : '#6b7280';
  };

  return (
    <div className={styles.saludBienestarWrapper}>
      {/* ===== HEADER MODERNO ===== */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => navigate('/home')}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/home/salud-bienestar" className={styles.activeLink}>Salud</a></li>
            <li><a href="/home/salud-planeta">Planeta</a></li>
            <li><a href="/home/desafios">Desafíos</a></li>
            <li><a href="/home/comunidad">Comunidad</a></li>
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
              <span>🌱</span>
              <span>Salud y Bienestar</span>
            </div>
            <h1 className={styles.heroTitle}>
              Interactúa con tu
              <span className={styles.heroTitleHighlight}> avatar de salud</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Simula hábitos y rutinas para ver cómo impactan en tu bienestar. 
              ¡Tu avatar reacciona a tus decisiones en tiempo real!
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN PRINCIPAL INTERACTIVA ===== */}
      <section className={styles.mainInteractiveSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>¿Por qué es importante la salud y el bienestar?</h2>
          <p className={styles.sectionSubtitle}>
            La salud y el bienestar son la base para una vida plena. Adoptar hábitos saludables y tomar buenas decisiones diarias impacta directamente en tu energía, ánimo y calidad de vida. ¡Empieza hoy a mejorar tu salud y verás cómo todo cambia a tu alrededor!
          </p>
        </div>

        <div className={styles.interactiveContainer}>
          {/* ===== PANEL IZQUIERDO - HÁBITOS Y ACCIONES ===== */}
          <div className={styles.leftPanel}>
            {/* Panel de Hábitos */}
            <div className={styles.habitsPanel}>
              <button 
                className={styles.dropdownButton}
                onClick={() => setShowHabitsDropdown(!showHabitsDropdown)}
              >
                Hábitos ▼
              </button>
              
              {showHabitsDropdown && (
                <div className={styles.dropdownMenu}>
                  {habits.map(habit => (
                    <div 
                      key={habit.id} 
                      className={styles.dropdownItem}
                      onClick={() => addHabit(habit)}
                    >
                      <span className={styles.itemIcon}>{habit.icon}</span>
                      <span className={styles.itemName}>{habit.name}</span>
                      <span 
                        className={styles.itemImpact}
                        style={{ color: getImpactColor(habit.impact) }}
                      >
                        {habit.impact > 0 ? '+' : ''}{habit.impact} años
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Hábitos Seleccionados */}
              <div className={styles.selectedItems}>
                {userHabits.map(habit => (
                  <div key={habit.id} className={styles.selectedItem}>
                    <span className={styles.itemIcon}>{habit.icon}</span>
                    <span className={styles.itemName}>{habit.name}</span>
                    <button 
                      className={styles.removeButton}
                      onClick={() => removeHabit(habit.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel de Acciones */}
            <div className={styles.actionsPanel}>
              <button 
                className={styles.dropdownButton}
                onClick={() => setShowActionsDropdown(!showActionsDropdown)}
              >
                Acciones ▼
              </button>
              
              {showActionsDropdown && (
                <div className={styles.dropdownMenu}>
                  {actions.map(action => (
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
                        {action.impact > 0 ? '+' : ''}{action.impact} años
                      </span>
                    </div>
                  ))}
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
          </div>

          {/* ===== PANEL CENTRAL - AVATAR ===== */}
          <div className={styles.centerPanel}>
            <div className={styles.avatarContainer}>
              <div className={`${styles.avatar} ${styles[avatarMood]}`}>
                <div className={styles.avatarFace}>
                  <div className={styles.avatarEyes}>
                    <div className={styles.eye}></div>
                    <div className={styles.eye}></div>
                  </div>
                  <div className={styles.avatarMouth}></div>
                </div>
                <div className={styles.avatarBody}>
                  <div className={styles.avatarShirt}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.healthStatus}>
              <h3>Estado de salud: {healthStatus}</h3>
              <span className={styles.healthEmoji}>{healthEmoji}</span>
            </div>

            {/* Simulador de Impacto */}
            <div className={styles.impactSimulator}>
              <h4>Impacto en tu vida:</h4>
              <div className={styles.impactBar}>
                <div 
                  className={styles.impactFill}
                  style={{ 
                    width: `${Math.max(0, Math.min(100, 50 + (userHabits.reduce((sum, h) => sum + h.impact, 0) + userActions.reduce((sum, a) => sum + a.impact, 0)) * 5))}%`,
                    backgroundColor: getImpactColor(userHabits.reduce((sum, h) => sum + h.impact, 0) + userActions.reduce((sum, a) => sum + a.impact, 0))
                  }}
                ></div>
              </div>
              <p className={styles.impactText}>
                {userHabits.reduce((sum, h) => sum + h.impact, 0) + userActions.reduce((sum, a) => sum + a.impact, 0)} años de impacto
              </p>
            </div>
          </div>

          {/* ===== PANEL DERECHO - BOT Y LOGROS ===== */}
          <div className={styles.rightPanel}>
            {/* Bot de Gato */}
            <div className={styles.catBot}>
              <div className={styles.catAvatar} onClick={() => setShowCatTip(!showCatTip)}>
                <div className={styles.catEars}>
                  <div className={styles.catEar}></div>
                  <div className={styles.catEar}></div>
                </div>
                <div className={styles.catFace}>
                  <div className={styles.catEyes}>
                    <div className={styles.catEye}></div>
                    <div className={styles.catEye}></div>
                  </div>
                  <div className={styles.catNose}></div>
                  <div className={styles.catMouth}></div>
                </div>
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

            {/* Recordatorio de Agua */}
            <div className={styles.waterReminder}>
              <span className={styles.waterIcon}>💧</span>
              <p>Recuerda beber 2 litros de agua al día.</p>
            </div>

            {/* Panel de Logros */}
            <div className={styles.achievementsPanel}>
              <div className={styles.achievementsHeader}>
                <span className={styles.trophyIcon}>🏆</span>
                <h3>Logros</h3>
              </div>
              
              <div className={styles.achievementsList}>
                {achievements.map(achievement => (
                  <div 
                    key={achievement.id} 
                    className={`${styles.achievement} ${achievement.unlocked ? styles.unlocked : styles.locked}`}
                  >
                    <span className={styles.achievementIcon}>{achievement.icon}</span>
                    <span className={styles.achievementName}>{achievement.name}</span>
                    {achievement.unlocked && <span className={styles.unlockBadge}>✓</span>}
                  </div>
                ))}
              </div>
              
              <button 
                className={styles.closeAchievementsButton}
                onClick={() => setShowAchievements(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN DE PROGRESO (MOVIDA DESDE HOME) ===== */}
      <section className={styles.progressSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>🎮 Tu Progreso</h2>
          <p className={styles.sectionSubtitle}>
            Desbloquea logros y sube de nivel mientras mejoras tus hábitos
          </p>
        </div>
        
        <div className={styles.progressGrid}>
          <div className={styles.progressCard}>
            <div className={styles.progressIcon}>🏆</div>
            <h3 className={styles.progressTitle}>Nivel Actual</h3>
            <div className={styles.progressLevel}>Nivel 7 - Eco Guerrero</div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{width: '75%'}}></div>
            </div>
            <div className={styles.progressText}>75% completado</div>
          </div>
          
          <div className={styles.progressCard}>
            <div className={styles.progressIcon}>⭐</div>
            <h3 className={styles.progressTitle}>Puntos Totales</h3>
            <div className={styles.progressPoints}>2,847 puntos</div>
            <div className={styles.progressRank}>Top 15% de usuarios</div>
          </div>
          
          <div className={styles.progressCard}>
            <div className={styles.progressIcon}>🏅</div>
            <h3 className={styles.progressTitle}>Insignias Desbloqueadas</h3>
            <div className={styles.badgesGrid}>
              <span className={styles.badge}>🌱</span>
              <span className={styles.badge}>💧</span>
              <span className={styles.badge}>♻️</span>
              <span className={styles.badge}>🚶‍♀️</span>
              <span className={styles.badge}>🥦</span>
              <span className={styles.badge}>⚡</span>
            </div>
            <div className={styles.progressText}>6 de 12 insignias</div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER MODERNO ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Navegación</h4>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/home/salud-bienestar">Salud y Bienestar</a></li>
              <li><a href="/home/salud-planeta">Salud del Planeta</a></li>
              <li><a href="/home/desafios">Desafíos</a></li>
              <li><a href="/home/comunidad">Comunidad</a></li>
              <li><a href="/home/avatar/personalizar">Personalizar Avatar</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Referentes científicos</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Guía de hábitos</a></li>
              <li><a href="#">Calculadora de impacto</a></li>
              <li><a href="#">Blog de bienestar</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contacto</h4>
            <div className={styles.footerContact}>
              <p>📧 hola@lifelevelup.com</p>
              <p>🌱 +34 666 PLANETA</p>
              <p>🌍 España, Europa</p>
              <p>⏰ Lun-Vie 9:00-18:00</p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2024 LifeLevelUp. Transformamos hábitos diarios en impacto positivo para ti y el planeta.</p>
        </div>
      </footer>
    </div>
  );
} 