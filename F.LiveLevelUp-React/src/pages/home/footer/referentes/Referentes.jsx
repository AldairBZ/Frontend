import React from 'react';
import './CSS/referentes.css';
// Importo todas las imágenes
import image1 from './IMG/image.png';
import image2 from './IMG/image2.png';
import image3 from './IMG/image3.png';
import image4 from './IMG/image4.png';
import image5 from './IMG/image5.png';
import image6 from './IMG/image6.png';
import image7 from './IMG/image7.png';
import image8 from './IMG/image8.png';
import image9 from './IMG/Image9.png';
import image10 from './IMG/Image10.png';
import image11 from './IMG/Image11.png';
import image12 from './IMG/Image12.png';
import image13 from './IMG/Image13.png';
import image14 from './IMG/Image14.png';
import image15 from './IMG/Image15.png';
import image16 from './IMG/Image16.png';

const referentesSalud = [
  { url: 'https://www.who.int/', img: image1, titulo: 'World health organization' },
  { url: 'https://www.cdc.gov/', img: image2, titulo: 'Centers for disease control and prevention' },
  { url: 'https://www.mayoclinic.org/', img: image3, titulo: 'Mayoclinic' },
  { url: 'https://www.nih.gov/', img: image4, titulo: 'National institutes of health' },
  { url: 'https://medlineplus.gov/', img: image5, titulo: 'Medline plus' },
  { url: 'https://www.healthline.com/', img: image6, titulo: 'Healthline' },
  { url: 'https://www.psychologytoday.com/', img: image7, titulo: 'Psychology today' },
  { url: 'https://www.hsph.harvard.edu/nutritionsource', img: image8, titulo: 'The nutrition source' },
];
const referentesPlaneta = [
  { url: 'https://www.unep.org', img: image9, titulo: 'UN Environment Programme (UNEP)' },
  { url: 'https://ourworldindata.org', img: image10, titulo: 'Our World in Data' },
  { url: 'https://www.nationalgeographic.com/environment/', img: image11, titulo: 'National Geographic Environment' },
  { url: 'https://cleanhub.com', img: image12, titulo: 'CleanHub' },
  { url: 'https://www.earthday.org', img: image13, titulo: 'Earth Day' },
  { url: 'https://www.greenpeace.org', img: image14, titulo: 'Greenpeace' },
  { url: 'https://www.wwf.org', img: image15, titulo: 'WWF' },
  { url: 'https://www.un.org/en/climatechange/science/climate-issues/health', img: image16, titulo: 'UN Climate & Health' },
];

// Defino un set con los nombres de imagen a agrandar
const imagenesGrandes = new Set([
  image1, // World health organization
  image6, // Healthline
  image7, // Psychology today
  image11, // National Geographic Environment
  image14, // Greenpeace
  image16, // UN Climate & Health
]);

export default function Referentes() {
  return (
    <div style={{maxWidth: 1100, margin: '0 auto', padding: 24}}>
      <h2 style={{marginBottom: 16}}>Salud y Bienestar</h2>
      <p style={{marginBottom: 24}}>La información sobre salud y bienestar personal ha sido recopilada de fuentes oficiales como la OMS y MedlinePlus. De estas páginas hemos extraído datos como la esperanza de vida media, los factores que la afectan (como la alimentación, el tabaquismo o el ejercicio físico), y hábitos recomendados para mejorarla. Esta base nos permite generar consejos personalizados y simulaciones orientativas dentro de la webapp.</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        marginBottom: 40,
      }}>
        {referentesSalud.map((ref, i) => (
          <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" style={{display: 'block', textAlign: 'center', textDecoration: 'none', color: '#222', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 12}}>
            <img src={ref.img} alt={ref.titulo} style={{
              width: ref.img === image1 ? 135 : (imagenesGrandes.has(ref.img) ? 110 : 80),
              height: ref.img === image1 ? 135 : (imagenesGrandes.has(ref.img) ? 110 : 80),
              objectFit: 'contain',
              marginBottom: 8
            }} />
            <div style={{fontWeight: 600, fontSize: 16}}>{ref.titulo}</div>
          </a>
        ))}
      </div>
      <h2 style={{marginBottom: 16}}>Salud del Planeta</h2>
      <p style={{marginBottom: 24}}>La información sobre la salud del planeta y sostenibilidad ha sido recopilada de fuentes reconocidas como el Programa de Naciones Unidas para el Medio Ambiente (UNEP), el Banco Mundial y el Foro Económico Mundial. De estas webs hemos extraído datos sobre el estado actual del medio ambiente, el impacto de las actividades humanas y acciones recomendadas para mejorar la salud del planeta. Esta información fundamenta las evaluaciones y simuladores que ofrece nuestra webapp.</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {referentesPlaneta.map((ref, i) => (
          <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" style={{display: 'block', textAlign: 'center', textDecoration: 'none', color: '#222', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 12}}>
            <img src={ref.img} alt={ref.titulo} style={{
              width: 120,
              height: 120,
              objectFit: 'contain',
              marginBottom: 8
            }} />
            <div style={{fontWeight: 600, fontSize: 16}}>{ref.titulo}</div>
          </a>
        ))}
      </div>
    </div>
  );
} 