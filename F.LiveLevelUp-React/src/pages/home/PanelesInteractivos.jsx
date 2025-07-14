import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PanelesInteractivos.module.css';
import logoLiveUp from '../../assets/imagenes-home/logoLiveUp.png';

// Personaliza aquí tus imágenes y rutas de destino
const paneles = [
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 1
    ruta: '/ruta1',     // Cambia por la ruta de tu página 1
    titulo: 'Panel 1',
    descripcion: 'Este es un texto descriptivo para el panel 1.'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 2
    ruta: '/ruta2',
    titulo: 'Panel 2',
    descripcion: 'Este es un texto descriptivo para el panel 2.'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 3
    ruta: '/ruta3',
    titulo: 'Panel 3',
    descripcion: 'Este es un texto descriptivo para el panel 3.'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 4
    ruta: '/ruta4',
    titulo: 'Panel 4',
    descripcion: 'Este es un texto descriptivo para el panel 4.'
  },
  {
    imagen: logoLiveUp, // Cambia por tu imagen real 5
    ruta: '/ruta5',
    titulo: 'Panel 5',
    descripcion: 'Este es un texto descriptivo para el panel 5.'
  }
];

export default function PanelesInteractivos({ panelesCustom }) {
  const panelesToShow = panelesCustom || paneles;

  return (
    <div className={styles.panelesWrapper}>
      <main className={styles.panelesMain}>
        {panelesToShow.map((panel, i) => (
          <Link to={panel.ruta} key={i} className={styles.panelSection} style={{
            '--panel-img': `url(${panel.imagen})`
          }}>
            <article className={styles.panelArticle}>
              <h2>{panel.titulo}</h2>
              <p>{panel.descripcion}</p>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
} 