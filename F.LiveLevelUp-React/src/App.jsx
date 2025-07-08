import React from 'react';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      {/* Columna izquierda: Avatar y estado */}
      <section id="avatar" style={{ gridColumn: 1 }}>
        {/* Aquí irá el avatar editable y barras de estado */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #A0E7E5', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ marginBottom: 12 }}>🧍 Tu Avatar</h2>
          {/* Avatar y controles aquí */}
        </div>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #A0E7E5', padding: '1.5rem' }}>
          <h3>❤️ Estado de Vida</h3>
          {/* Barras de progreso aquí */}
        </div>
      </section>
      {/* Columna central: Hábitos */}
      <section id="habitos" style={{ gridColumn: 2 }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #A0E7E5', padding: '1.5rem' }}>
          <h2>🧪 Hábitos Saludables</h2>
          {/* Panel de hábitos aquí */}
        </div>
      </section>
      {/* Columna derecha: Planeta y logros */}
      <section id="planeta" style={{ gridColumn: 3 }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #A0E7E5', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2>🌍 Estado del Planeta</h2>
          {/* Panel del planeta y simulador colectivo aquí */}
        </div>
        <div id="logros" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #A0E7E5', padding: '1.5rem' }}>
          <h2>🏆 Logros</h2>
          {/* Lista de logros aquí */}
        </div>
      </section>
      {/* Consejos y notificaciones flotantes */}
      <div id="consejos" style={{ position: 'fixed', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 100 }}>
        {/* Componente de consejos/alertas aquí */}
      </div>
    </Layout>
  );
}