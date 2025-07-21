import React from 'react';
import styles from './SaludBienestar.module.css';

const consejos = [
  "Recuerda beber 2 litros de agua al día.",
  "Estirar 5 minutos mejora tu flexibilidad.",
  "Una manzana al día mantiene al doctor en la lejanía.",
  "¡Camina 30 minutos para un corazón sano!",
];

const RightPanel = () => {
  const [achievementsOpen, setAchievementsOpen] = React.useState(false);
  const [petTip, setPetTip] = React.useState(consejos[0]);
  
  const handlePetClick = () => {
    const newTip = consejos[Math.floor(Math.random() * consejos.length)];
    setPetTip(newTip);
  };
  
  return (
    <>
      <aside className={styles.rightPanel}>
        <div>
          <button onClick={() => setAchievementsOpen(true)} className={styles.iconButton}>🏆</button>
        </div>
        <div>
          <button onClick={handlePetClick} className={styles.iconButton}>🐾</button>
          {petTip && <div className={styles.petTip}>{petTip}</div>}
        </div>
      </aside>
      <div className={`${styles.achievementsPanel} ${achievementsOpen ? styles.show : ''}`}>
        <h3>🏆 Logros</h3>
        <ul>
          <li>Insignia "Primer paso saludable"</li>
          <li>Insignia "Come-frutas"</li>
        </ul>
        <button onClick={() => setAchievementsOpen(false)}>Cerrar</button>
      </div>
    </>
  );
};

export default RightPanel; 