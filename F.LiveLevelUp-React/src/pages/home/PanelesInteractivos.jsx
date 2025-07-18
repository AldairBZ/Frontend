import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PanelesInteractivos.module.css';
import logoLiveUp from '../../assets/imagenes-home/logoLiveUp.png';
import fondopanel from '../../assets/imagenes-home/fondopanel.jpg';
import bienestar from '../../assets/imagenes-home/bienestar.jpg';
import planeta from '../../assets/imagenes-home/planeta.jpg';

// Personaliza aquí tus imágenes y rutas de destino
const paneles = [
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 1
    ruta: '/ruta1',     // Cambia por la ruta de tu página 1
    titulo: 'Panel 1'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 2
    ruta: '/ruta2',
    titulo: 'Salud y bienestar'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 3
    ruta: '/ruta3',
    titulo: 'Panel 3'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 4
    ruta: '/home/salud-planeta',
    titulo: 'Salud del planeta'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 5
    ruta: '/ruta5',
    titulo: 'Panel 5'
  }
];

export default function PanelesInteractivos({ panelesCustom }) {
  const panelesToShow = panelesCustom || paneles;

  return (
    <div className={styles.panelesWrapper}>
      <main className={styles.panelesMain}>
        {panelesToShow.map((panel, i) => (
          i === 2 ? (
            <div key={i} className={styles.panelSection + ' ' + styles.panelSectionMedio} style={{
              '--panel-img': `url(${fondopanel})`
            }}>
              <article className={styles.panelArticle}>
                <h2>{panel.titulo}</h2>
                {/* No se agrega texto extra aquí */}
              </article>
            </div>
          ) : (
            <Link to={panel.ruta} key={i} className={
              styles.panelSection + (i === 3 ? ' ' + styles.panelPlaneta : '') + (i === 1 ? ' ' + styles.panelBienestar : '')
            } style={{
              '--panel-img': (i === 0 || i === panelesToShow.length - 1) ? `url(${fondopanel})` : (i === 1 ? `url(${bienestar})` : (i === 3 ? `url(${planeta})` : 'none'))
            }}>
              <article className={styles.panelArticle}>
                <h2>{panel.titulo}</h2>
                {panel.titulo === 'Salud y bienestar' && (
                  <p style={{marginTop: 12, color: '#fff', fontWeight: 500, fontSize: 18, textShadow: '0 2px 8px #232e43cc'}}>Mejora tu calidad de vida &gt;</p>
                )}
                {panel.titulo === 'Salud del planeta' && (
                  <p style={{marginTop: 12, color: '#fff', fontWeight: 500, fontSize: 18, textShadow: '0 2px 8px #232e43cc'}}>Mejora la calidad del entorno &gt;</p>
                )}
              </article>
            </Link>
          )
        ))}
      </main>
    </div>
  );
} 