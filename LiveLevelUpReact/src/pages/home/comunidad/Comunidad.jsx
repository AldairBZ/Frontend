import React from 'react';
import Layout from '../../../components/Layout.jsx';

export default function Comunidad() {
  console.log('Componente Comunidad cargado correctamente'); // Test log
  
  return (
    <Layout>
      <div style={{ 
        minHeight: '100vh', 
        padding: '120px 24px 80px',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #fef3c7 100%)',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          color: '#1f2937',
          marginBottom: '24px'
        }}>
          👥 Comunidad
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Conecta con la comunidad sostenible. Comparte tus logros, inspira a otros y descubre historias increíbles.
        </p>
        <div style={{ 
          marginTop: '60px',
          padding: '40px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: '60px auto 0'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1f2937' }}>
            ✨ Historias de Éxito
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '40px' }}>
            Inspírate con las historias de personas que han transformado sus vidas
          </p>
          <div style={{ 
            background: '#f9fafb',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#1f2937' }}>
              María González
            </h3>
            <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: '1.6' }}>
              En 3 meses logré reducir mi huella de carbono en un 40%. Empecé con pequeños cambios como usar transporte público y ahora soy una activista ambiental.
            </p>
            <div style={{ 
              marginTop: '16px',
              padding: '12px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>🏆</span>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#10b981' }}>
                Reducción del 40% en huella de carbono
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 