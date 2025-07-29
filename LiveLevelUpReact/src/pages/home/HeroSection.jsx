import React from 'react';
import styles from './HeroSection.module.css';
import ModernAvatar from '../saludibienestar/ModernAvatar';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        {/* Columna izquierda: Avatar animado */}
        <div className={styles.heroAvatar}>
          <ModernAvatar size={180} animate />
        </div>
        {/* Columna derecha: Texto y CTAs */}
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroTitle}>
            Transforma tus hábitos.<br />
            Cambia tu mundo.
          </h1>
          <p className={styles.heroSubtitle}>
            Gamifica tu bienestar y tu impacto ecológico.<br />
            Únete a la comunidad que evoluciona cada día.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaPrimary}>🌱 Crear mi cuenta</button>
            <button className={styles.ctaSecondary}>📚 Ver cómo funciona</button>
          </div>
        </div>
      </div>
    </section>
  );
} 