import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import Layout from '../../../components/Layout.jsx';
import styles from './Desafios.module.css';

export default function Desafios() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('todos');

  const weeklyChallenges = [
    {
      id: 1,
      title: "Semana del Reciclaje",
      description: "Recicla al menos 5 tipos diferentes de materiales durante la semana",
      difficulty: "Fácil",
      participants: 1247,
      progress: 85,
      category: "reciclaje",
      icon: "♻️",
      rewards: ["50 puntos", "Insignia Verde"],
      deadline: "3 días restantes"
    },
    {
      id: 2,
      title: "Desafío de Transporte Sostenible",
      description: "Usa transporte público o bicicleta durante 5 días consecutivos",
      difficulty: "Medio",
      participants: 892,
      progress: 62,
      category: "transporte",
      icon: "🚌",
      rewards: ["100 puntos", "Insignia Azul", "10% descuento en transporte"],
      deadline: "5 días restantes"
    },
    {
      id: 3,
      title: "Reto de Ahorro Energético",
      description: "Reduce tu consumo de electricidad en un 20% esta semana",
      difficulty: "Difícil",
      participants: 456,
      progress: 38,
      category: "energia",
      icon: "💡",
      rewards: ["150 puntos", "Insignia Dorada", "Kit de eficiencia energética"],
      deadline: "7 días restantes"
    },
    {
      id: 4,
      title: "Desafío de Alimentación Local",
      description: "Compra solo productos locales durante 7 días",
      difficulty: "Medio",
      participants: 678,
      progress: 71,
      category: "alimentacion",
      icon: "🛒",
      rewards: ["80 puntos", "Insignia Verde", "Guía de productos locales"],
      deadline: "4 días restantes"
    },
    {
      id: 5,
      title: "Reto de Reducción de Plástico",
      description: "Evita usar plásticos de un solo uso durante 10 días",
      difficulty: "Difícil",
      participants: 334,
      progress: 45,
      category: "plastico",
      icon: "🥤",
      rewards: ["120 puntos", "Insignia Azul", "Kit de productos reutilizables"],
      deadline: "6 días restantes"
    },
    {
      id: 6,
      title: "Desafío de Conservación del Agua",
      description: "Reduce tu consumo de agua en un 25% esta semana",
      difficulty: "Medio",
      participants: 567,
      progress: 58,
      category: "agua",
      icon: "💧",
      rewards: ["90 puntos", "Insignia Verde", "Regulador de agua"],
      deadline: "2 días restantes"
    }
  ];

  const filters = [
    { id: 'todos', name: 'Todos', icon: '🏆' },
    { id: 'reciclaje', name: 'Reciclaje', icon: '♻️' },
    { id: 'transporte', name: 'Transporte', icon: '🚌' },
    { id: 'energia', name: 'Energía', icon: '💡' },
    { id: 'alimentacion', name: 'Alimentación', icon: '🛒' },
    { id: 'plastico', name: 'Plástico', icon: '🥤' },
    { id: 'agua', name: 'Agua', icon: '💧' }
  ];

  const filteredChallenges = activeFilter === 'todos' 
    ? weeklyChallenges 
    : weeklyChallenges.filter(challenge => challenge.category === activeFilter);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return '#10b981';
      case 'Medio': return '#f59e0b';
      case 'Difícil': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <Layout>
      <div className={styles.desafiosWrapper}>
        {/* ===== HERO SECTION MODERNO ===== */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroParticles}></div>
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span>🏆</span>
                <span>Semanales</span>
              </div>
              <h1 className={styles.heroTitle}>
                Supera tus
                <span className={styles.heroTitleHighlight}> límites sostenibles</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Únete a desafíos semanales que transforman pequeños cambios en grandes impactos. 
                ¡Compite, colabora y celebra el progreso colectivo!
              </p>
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
                  <span className={styles.filterLabel}>{filter.name}</span>
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
                    <div className={styles.challengeEmoji}>{challenge.icon}</div>
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
                          {challenge.difficulty}
                        </span>
                      </div>
                      <div className={styles.challengeDuration}>
                        <span className={styles.durationIcon}>⏱️</span>
                        <span>{challenge.deadline}</span>
                      </div>
                    </div>
                    
                    <div className={styles.challengeReward}>
                      <div className={styles.rewardInfo}>
                        <span className={styles.rewardText}>{challenge.rewards.join(' + ')}</span>
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
      </div>
    </Layout>
  );
} 