import React from 'react';

export default function Privacidad() {
  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: 24}}>
      <h1>Términos de Uso y Privacidad</h1>
      <p>
        En LiveLevelUp, nos tomamos muy en serio la privacidad de nuestros usuarios. Los datos que introduzcas en la plataforma (como edad, género, peso, hábitos o cualquier otra información personal) se utilizarán únicamente para personalizar tu experiencia dentro de la webapp: generar consejos adaptados a tu perfil, mostrar logros alcanzados, estimar tu progreso y ayudarte a reflexionar sobre tus hábitos y acciones.<br/><br/>
        No vendemos, compartimos ni intercambiamos tus datos con terceros. Toda la información se trata de forma confidencial, y cualquier análisis o seguimiento estadístico que se realice será completamente anónimo. En algunos casos, podríamos usar estos datos de forma interna para mejorar la plataforma o lanzar encuestas opcionales, pero nunca de forma que pueda identificarte directamente.<br/><br/>
        Al registrarte y utilizar los servicios de LiveLevelUp, aceptas nuestras Políticas de Uso y Términos de Servicio, los cuales definen de manera clara y sencilla tus derechos, deberes y el compromiso de nuestra parte para proteger tus datos y asegurar un entorno sano y respetuoso. Puedes consultar estos documentos en cualquier momento desde el pie de página de nuestra webapp.
      </p>
      <div style={{display: 'flex', gap: 16, margin: '32px 0'}}>
        <button style={{background: '#5b9cc8', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, cursor: 'pointer'}}>Acepto</button>
        <button style={{background: '#eee', color: '#333', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, cursor: 'pointer'}}>No acepto</button>
      </div>
    </div>
  );
} 