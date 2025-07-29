import React from 'react';
import styles from './HeroSection.module.css';
import ModernAvatar from './saludibienestar/ModernAvatar';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroParticles}></div>
        <div className={styles.heroGradient}></div>
      </div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* Columna izquierda: Avatar animado */}
          <div className={styles.heroAvatar}>
            <div className={styles.avatarContainer}>
              <ModernAvatar size={200} animate />
              <div className={styles.avatarGlow}></div>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Usuarios activos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Hábitos completados</span>
              </div>
            </div>
          </div>
          
          {/* Columna derecha: Texto y CTAs */}
          <div className={styles.heroTextBlock}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>🌟</span>
              <span className={styles.badgeText}>Plataforma #1 en sostenibilidad</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Transforma tus hábitos.
              <span className={styles.heroTitleHighlight}> Cambia tu mundo.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Gamifica tu bienestar y tu impacto ecológico con nuestra plataforma interactiva. 
              Únete a la comunidad que evoluciona cada día hacia un futuro más sostenible.
            </p>
            
            <div className={styles.heroFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🎮</span>
                <span className={styles.featureText}>Gamificación avanzada</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🌱</span>
                <span className={styles.featureText}>Impacto ambiental real</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📊</span>
                <span className={styles.featureText}>Métricas personalizadas</span>
              </div>
            </div>
            
            <div className={styles.heroCtas}>
              <button className={styles.ctaPrimary}>
                <span className={styles.ctaIcon}>🌱</span>
                <span className={styles.ctaText}>Crear mi cuenta</span>
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button className={styles.ctaSecondary}>
                <span className={styles.ctaIcon}>📚</span>
                <span className={styles.ctaText}>Ver cómo funciona</span>
              </button>
            </div>
            
            <div className={styles.heroTrust}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🔒</span>
                <span className={styles.trustText}>100% Gratis</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>⚡</span>
                <span className={styles.trustText}>Configuración en 2 min</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>💚</span>
                <span className={styles.trustText}>Sin spam</span>
              </div>
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
  );
} 