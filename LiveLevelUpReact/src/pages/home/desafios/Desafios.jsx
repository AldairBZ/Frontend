import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Desafios.module.css';

export default function Desafios() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('todos');

  const weeklyChallenges = [
    {
      id: 1,
      emoji: "🥦",
      title: "5 días sin carne",
      description: "Reduce tu huella de carbono y mejora tu salud",
      reward: "50 puntos + Insignia Verde",
      participants: 342,
      category: "alimentacion",
      difficulty: "facil",
      duration: "5 días"
    },
    {
      id: 2,
      emoji: "🚶‍♀️",
      title: "7.000 pasos diarios",
      description: "Mantén tu cuerpo activo y reduce emisiones",
      reward: "75 puntos + Insignia Activa",
      participants: 567,
      category: "movimiento",
      difficulty: "medio",
      duration: "7 días"
    },
    {
      id: 3,
      emoji: "🚯",
      title: "Semana sin plástico",
      description: "Elimina el plástico de un solo uso",
      reward: "100 puntos + Insignia Eco",
      participants: 234,
      category: "sostenibilidad",
      difficulty: "dificil",
      duration: "7 días"
    },
    {
      id: 4,
      emoji: "💧",
      title: "Duchas de 5 minutos",
      description: "Ahorra agua y energía en tu rutina",
      reward: "60 puntos + Insignia Ahorro",
      participants: 456,
      category: "ahorro",
      difficulty: "facil",
      duration: "7 días"
    },
    {
      id: 5,
      emoji: "🚲",
      title: "Transporte sostenible",
      description: "Usa bici o transporte público toda la semana",
      reward: "80 puntos + Insignia Transporte",
      participants: 189,
      category: "movimiento",
      difficulty: "medio",
      duration: "7 días"
    },
    {
      id: 6,
      emoji: "🌱",
      title: "Planta un árbol",
      description: "Contribuye a la reforestación del planeta",
      reward: "150 puntos + Insignia Reforestador",
      participants: 123,
      category: "sostenibilidad",
      difficulty: "facil",
      duration: "1 día"
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos', icon: '🏆' },
    { id: 'alimentacion', label: 'Alimentación', icon: '🥗' },
    { id: 'movimiento', label: 'Movimiento', icon: '🚶‍♀️' },
    { id: 'sostenibilidad', label: 'Sostenibilidad', icon: '🌍' },
    { id: 'ahorro', label: 'Ahorro', icon: '💰' }
  ];

  const filteredChallenges = activeFilter === 'todos' 
    ? weeklyChallenges 
    : weeklyChallenges.filter(challenge => challenge.category === activeFilter);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'facil': return '#10b981';
      case 'medio': return '#f59e0b';
      case 'dificil': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDifficultyLabel = (difficulty) => {
    switch(difficulty) {
      case 'facil': return 'Fácil';
      case 'medio': return 'Medio';
      case 'dificil': return 'Difícil';
      default: return 'Desconocido';
    }
  };

  return (
    <div className={styles.desafiosWrapper}>
      {/* ===== HEADER MODERNO ===== */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/home/saludibienestar">Salud</a></li>
            <li><a href="/home/saludplaneta">Planeta</a></li>
            <li><a href="/home/desafios" className={styles.activeLink}>Desafíos</a></li>
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
              <span className={styles.badgeIcon}>🏆</span>
              <span className={styles.badgeText}>Desafíos Semanales</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Transforma tus hábitos
              <span className={styles.heroTitleHighlight}> superando retos.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Únete a desafíos divertidos y gana recompensas mientras transformas tus hábitos 
              y contribuyes a un mundo más sostenible.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1,247</span>
                <span className={styles.statLabel}>Usuarios activos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>45,892</span>
                <span className={styles.statLabel}>Desafíos completados</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Desafíos disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTROS ===== */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersContainer}>
          <div className={styles.filtersTitle}>
            <span className={styles.filtersIcon}>🔍</span>
            <h2>Filtrar por categoría</h2>
          </div>
          <div className={styles.filtersGrid}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterButton} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className={styles.filterIcon}>{filter.icon}</span>
                <span className={styles.filterLabel}>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESAFÍOS ===== */}
      <main className={styles.main}>
        <div className={styles.challengesContainer}>
          <div className={styles.challengesGrid}>
            {filteredChallenges.map(challenge => (
              <div key={challenge.id} className={styles.challengeCard}>
                <div className={styles.challengeHeader}>
                  <div className={styles.challengeEmoji}>{challenge.emoji}</div>
                  <div className={styles.challengeInfo}>
                    <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                    <p className={styles.challengeDescription}>{challenge.description}</p>
                  </div>
                </div>
                
                <div className={styles.challengeDetails}>
                  <div className={styles.challengeMeta}>
                    <div className={styles.challengeDifficulty}>
                      <span 
                        className={styles.difficultyDot} 
                        style={{backgroundColor: getDifficultyColor(challenge.difficulty)}}
                      ></span>
                      <span className={styles.difficultyText}>
                        {getDifficultyLabel(challenge.difficulty)}
                      </span>
                    </div>
                    <div className={styles.challengeDuration}>
                      <span className={styles.durationIcon}>⏱️</span>
                      <span>{challenge.duration}</span>
                    </div>
                  </div>
                  
                  <div className={styles.challengeReward}>
                    <div className={styles.rewardInfo}>
                      <span className={styles.rewardText}>{challenge.reward}</span>
                      <span className={styles.participants}>{challenge.participants} participantes</span>
                    </div>
                    <button className={styles.joinButton}>
                      <span>Unirme</span>
                      <span className={styles.joinIcon}>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ===== FOOTER MODERNO ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <h2>LifeLevelUp</h2>
            <p>Transforma tus hábitos, transforma el mundo. Únete a la revolución sostenible.</p>
            <div className={styles.footerEmojis}>
              <span>🏆</span>
              <span>🌱</span>
              <span>💚</span>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/home/saludibienestar">Salud y Bienestar</a></li>
              <li><a href="/home/saludplaneta">Salud del Planeta</a></li>
              <li><a href="/home/desafios">Desafíos</a></li>
              <li><a href="/home/comunidad">Comunidad</a></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Recursos</h3>
            <ul>
              <li><a href="#">Guía de desafíos</a></li>
              <li><a href="#">Consejos para completar</a></li>
              <li><a href="#">Sistema de recompensas</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h3>Contacto</h3>
            <a href="mailto:hola@lifelevelup.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              hola@lifelevelup.com
            </a>
            <a href="tel:+346667526382" className={styles.contactItem}>
              <span className={styles.contactIcon}>🏆</span>
              +34 666 DESAFIOS
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
    </div>
  );
} 