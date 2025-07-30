import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
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
    </Layout>
  );
} 