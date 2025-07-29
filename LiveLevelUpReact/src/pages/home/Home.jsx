import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import PanelesInteractivos from './PanelesInteractivos';
import Layout from '../../components/Layout.jsx';
import HeroSection from './HeroSection';

export default function Home() {
  const [userCount, setUserCount] = useState(1247);
  const [co2Saved, setCo2Saved] = useState(128304);
  const [waterSaved, setWaterSaved] = useState(1032000);
  const [kmWalked, setKmWalked] = useState(82000);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simular contador de usuarios en tiempo real
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const weeklyChallenges = [
    {
      id: 1,
      emoji: "🥦",
      title: "5 días sin carne",
      description: "Reduce tu huella de carbono y mejora tu salud",
      reward: "50 puntos + Insignia Verde",
      participants: 342
    },
    {
      id: 2,
      emoji: "🚶‍♀️",
      title: "7.000 pasos diarios",
      description: "Mantén tu cuerpo activo y reduce emisiones",
      reward: "75 puntos + Insignia Activa",
      participants: 567
    },
    {
      id: 3,
      emoji: "🚯",
      title: "Semana sin plástico",
      description: "Elimina el plástico de un solo uso",
      reward: "100 puntos + Insignia Eco",
      participants: 234
    },
    {
      id: 4,
      emoji: "💧",
      title: "Duchas de 5 minutos",
      description: "Ahorra agua y energía en tu rutina",
      reward: "60 puntos + Insignia Ahorro",
      participants: 456
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "María G.",
      avatar: "👩‍🦰",
      before: "Sedentaria, 0 ejercicio",
      after: "10.000 pasos diarios",
              story: "En 3 meses perdí 8kg y me siento más energética que nunca. ¡Gracias LifeLevelUp!",
      impact: "+2 años de vida"
    },
    {
      id: 2,
      name: "Carlos M.",
      avatar: "👨‍🦱",
      before: "Coche todos los días",
      after: "Bicicleta + transporte público",
      story: "Ahorro 200€ al mes y he reducido mi huella de carbono en un 60%",
      impact: "-1.2 ton CO₂/año"
    },
    {
      id: 3,
      name: "Ana L.",
      avatar: "👩‍🦳",
      before: "Dieta alta en carne",
      after: "Vegetariana 4 días/semana",
      story: "Mejoré mi digestión y descubrí sabores increíbles. El planeta también lo agradece.",
      impact: "-0.8 ton CO₂/año"
    }
  ];

  const educationalCards = [
    {
      id: 1,
      icon: "♻️",
      title: "El reciclaje explicado en 60 segundos",
      content: "Reciclar una botella de plástico ahorra la energía necesaria para mantener una bombilla encendida durante 6 horas. ¿Sabías que el 91% del plástico no se recicla?",
      category: "reciclaje"
    },
    {
      id: 2,
      icon: "🌱",
      title: "Por qué comer local es mejor",
      content: "Los alimentos locales viajan menos de 100km vs 2.500km de media. Esto significa 17 veces menos emisiones de CO₂ y productos más frescos.",
      category: "alimentacion"
    },
    {
      id: 3,
      icon: "💡",
      title: "El impacto de apagar las luces",
      content: "Apagar las luces cuando no las necesitas puede ahorrar hasta 15% en tu factura eléctrica. Multiplicado por millones de hogares, el impacto es enorme.",
      category: "energia"
    },
    {
      id: 4,
      icon: "🚰",
      title: "La crisis del agua dulce",
      content: "Solo el 2.5% del agua del planeta es dulce, y el 70% está congelada. Cada gota cuenta: una ducha de 5 min vs 15 min ahorra 150 litros.",
      category: "agua"
    }
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Contador de usuarios en tiempo real */}
      <div className={styles.liveCounter}>
        <div className={styles.counterContent}>
          <span className={styles.counterIcon}>👥</span>
          <span className={styles.counterText}>
            <strong>{userCount.toLocaleString()}</strong> personas transformando sus hábitos ahora mismo
          </span>
          <div className={styles.counterPulse}></div>
        </div>
      </div>

      <div className={styles.homeContent}>
        <PanelesInteractivos />

        {/* Sección de Desafíos Semanales */}
        <section className={styles.challengesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🏆 Desafíos Semanales</h2>
            <p className={styles.sectionSubtitle}>
              Únete a retos divertidos y gana recompensas mientras transformas tus hábitos
            </p>
          </div>
          
          <div className={styles.challengesGrid}>
            {weeklyChallenges.map(challenge => (
              <div key={challenge.id} className={styles.challengeCard}>
                <div className={styles.challengeHeader}>
                  <span className={styles.challengeEmoji}>{challenge.emoji}</span>
                  <div className={styles.challengeInfo}>
                    <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                    <p className={styles.challengeDescription}>{challenge.description}</p>
                  </div>
                </div>
                <div className={styles.challengeFooter}>
                  <div className={styles.challengeReward}>
                    <span className={styles.rewardText}>{challenge.reward}</span>
                    <span className={styles.participants}>{challenge.participants} participantes</span>
                  </div>
                  <button className={styles.joinButton}>Unirme</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Impacto Colectivo */}
        <section className={styles.impactSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🌍 Impacto Colectivo</h2>
            <p className={styles.sectionSubtitle}>
              Juntos estamos creando un cambio real. Estos son nuestros números en tiempo real:
            </p>
          </div>
          
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>🌱</div>
              <div className={styles.impactNumber}>
                {isVisible ? co2Saved.toLocaleString() : '0'}
              </div>
              <div className={styles.impactLabel}>kg de CO₂ evitados</div>
              <div className={styles.impactDescription}>
                Equivale a plantar {Math.floor(co2Saved / 22)} árboles
              </div>
            </div>
            
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>💧</div>
              <div className={styles.impactNumber}>
                {isVisible ? (waterSaved / 1000).toLocaleString() : '0'}
              </div>
              <div className={styles.impactLabel}>litros de agua ahorrados</div>
              <div className={styles.impactDescription}>
                Equivale a {Math.floor(waterSaved / 150)} duchas de 5 minutos
              </div>
            </div>
            
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>🚶‍♂️</div>
              <div className={styles.impactNumber}>
                {isVisible ? kmWalked.toLocaleString() : '0'}
              </div>
              <div className={styles.impactLabel}>km caminados</div>
              <div className={styles.impactDescription}>
                Equivale a dar la vuelta al mundo {Math.floor(kmWalked / 40075)} veces
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Historias de Éxito */}
        <section className={styles.storiesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🌟 Historias de Éxito</h2>
            <p className={styles.sectionSubtitle}>
              Descubre cómo otros usuarios están transformando sus vidas y el planeta
            </p>
          </div>
          
          <div className={styles.storiesGrid}>
            {successStories.map(story => (
              <div key={story.id} className={styles.storyCard}>
                <div className={styles.storyHeader}>
                  <div className={styles.storyAvatar}>{story.avatar}</div>
                  <div className={styles.storyInfo}>
                    <h3 className={styles.storyName}>{story.name}</h3>
                    <div className={styles.storyImpact}>{story.impact}</div>
                  </div>
                </div>
                <div className={styles.storyContent}>
                  <div className={styles.storyComparison}>
                    <div className={styles.beforeAfter}>
                      <span className={styles.beforeLabel}>Antes:</span>
                      <span className={styles.beforeText}>{story.before}</span>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.beforeAfter}>
                      <span className={styles.afterLabel}>Ahora:</span>
                      <span className={styles.afterText}>{story.after}</span>
                    </div>
                  </div>
                  <p className={styles.storyText}>{story.story}</p>
                </div>
                <button className={styles.readMoreButton}>Leer más</button>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Educación Ambiental */}
        <section className={styles.educationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>📚 Educación Ambiental</h2>
            <p className={styles.sectionSubtitle}>
              Aprende sobre el impacto de tus acciones en menos de 60 segundos
            </p>
          </div>
          
          <div className={styles.educationGrid}>
            {educationalCards.map(card => (
              <div key={card.id} className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <span className={styles.educationIcon}>{card.icon}</span>
                  <h3 className={styles.educationTitle}>{card.title}</h3>
                </div>
                <div className={styles.educationContent}>
                  <p className={styles.educationText}>{card.content}</p>
                </div>
                <div className={styles.educationFooter}>
                  <span className={styles.educationCategory}>{card.category}</span>
                  <button className={styles.learnMoreButton}>Aprender más</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Progreso y Logros */}
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

        {/* Sección de Hábitos Diarios (mejorada) */}
        <section className={styles.habitsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>💡 Hábitos Diarios Sostenibles</h2>
            <p className={styles.sectionSubtitle}>
              Pequeños cambios que generan un gran impacto en tu vida y el planeta
            </p>
          </div>
          
          <div className={styles.habitsGrid}>
            <div className={styles.habitCard}>
              <div className={styles.habitHeader}>
                <span className={styles.habitEmoji}>🌅</span>
                <h3 className={styles.habitTitle}>Mañana Sostenible</h3>
              </div>
              <ul className={styles.habitList}>
                <li>Desayuna alimentos locales y de temporada</li>
                <li>Usa una taza reutilizable para el café</li>
                <li>Camina o usa bici para distancias cortas</li>
                <li>Dúchate en menos de 5 minutos</li>
              </ul>
            </div>
            
            <div className={styles.habitCard}>
              <div className={styles.habitHeader}>
                <span className={styles.habitEmoji}>🌞</span>
                <h3 className={styles.habitTitle}>Durante el Día</h3>
              </div>
              <ul className={styles.habitList}>
                <li>Lleva tu propia botella de agua</li>
                <li>Come más vegetales y menos carne</li>
                <li>Apaga luces y dispositivos innecesarios</li>
                <li>Usa escaleras en lugar de ascensor</li>
              </ul>
            </div>
            
            <div className={styles.habitCard}>
              <div className={styles.habitHeader}>
                <span className={styles.habitEmoji}>🌙</span>
                <h3 className={styles.habitTitle}>Noche Consciente</h3>
              </div>
              <ul className={styles.habitList}>
                <li>Recicla y separa residuos correctamente</li>
                <li>Reflexiona sobre tu impacto diario</li>
                <li>Desconecta dispositivos antes de dormir</li>
                <li>Planifica el día siguiente de forma sostenible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección Newsletter (mejorada) */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterHeader}>
              <span className={styles.newsletterEmoji}>🌱</span>
              <h2 className={styles.newsletterTitle}>¡Únete a la revolución sostenible!</h2>
            </div>
            <p className={styles.newsletterText}>
              Recibe consejos personalizados, nuevos desafíos y actualizaciones exclusivas. 
              Sé parte del cambio que el planeta necesita.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className={styles.newsletterInput}
                required 
              />
              <button type="submit" className={styles.newsletterButton}>
                🌱 Suscribirme
              </button>
            </form>
            <p className={styles.newsletterDisclaimer}>
              * Solo contenido de valor. Sin spam, puedes darte de baja cuando quieras.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
} 