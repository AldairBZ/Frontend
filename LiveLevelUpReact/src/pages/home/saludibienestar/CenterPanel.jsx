import React from 'react';
import styles from './SaludBienestar.module.css';
import { useDrop } from 'react-dnd';

const CenterPanel = ({ status, setStatus }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  const handleDrop = (item) => {
    if (item.text.includes('fruta') || item.text.includes('dormir') || item.text.includes('ejercicio')) {
      setStatus(`¡Genial! Has hecho algo bueno: ${item.text} ✅`);
    } else {
      setStatus(`¡Ojo! Esto no es bueno: ${item.text} ❌`);
    }
  };

  return (
    <section className={styles.centerPanel}>
      <div
        ref={drop}
        className={`${styles.avatarPanel} ${isOver ? styles['drag-over'] : ''}`}
      >
        <span>🧍</span>
      </div>
      <div className={styles.statusBox}>{status}</div>
    </section>
  );
};

export default CenterPanel; 