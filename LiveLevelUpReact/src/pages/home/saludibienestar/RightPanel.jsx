import React from 'react';
import styles from './SaludBienestar.module.css';
import gatoMedicoImg from '../../../assets/gato-medico.png';

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
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12}}>
          {petTip && <div className={styles.petTip}>{petTip}</div>}
          <button onClick={handlePetClick} className={styles.iconButton} style={{background: 'none', border: 'none', boxShadow: 'none', padding: 0, marginBottom: 0, cursor: 'pointer'}}>
            <img src={gatoMedicoImg} alt="Gato médico" style={{width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', background: '#fff', boxShadow: '0 2px 8px #0002'}} />
          </button>
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