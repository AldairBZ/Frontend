import React from 'react';
import styles from './Home.module.css';
import PanelesInteractivos from './PanelesInteractivos';
import Layout from '../../components/Layout.jsx';

export default function Home() {

    return (
    <Layout>
      <div className={styles.homeContent}>
        <PanelesInteractivos />
        <section 
          id="por-que-lifelevelup"
          style={{
            maxWidth: 900, 
            margin: '40px auto 80px auto', 
            padding: '0 32px', 
            textAlign: 'left'
          }}
        >
          <h1 style={{
            fontSize: '2.2rem', 
            fontWeight: 800, 
            color: '#5b9cc8', 
            marginBottom: 24, 
            letterSpacing: '0.01em',
            textShadow: '0 2px 8px rgba(91,156,200,0.3)'
          }}>¿Por qué LifeLevelUp?</h1>
          <p style={{
            fontSize: '1.18rem', 
            color: '#333', 
            marginBottom: 32, 
            lineHeight: 1.7
          }}>
            LifeLevelUp es una experiencia interactiva que convierte tus hábitos diarios en una aventura visual. Imagina que tú y el planeta son parte de un juego tipo Los Sims, pero en versión minimalista, con avatares SVG personalizables y animaciones suaves.
          </p>
          <h2 style={{
            fontSize: '1.35rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 16, 
            marginTop: 32,
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🌍 El planeta también importa</h2>
          <p style={{
            fontSize: '1.08rem', 
            color: '#e3f0fa', 
            marginBottom: 0, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            Cada acción positiva también afecta al planeta virtual, que refleja el impacto colectivo de tus decisiones. Por ejemplo, elegir caminar en lugar de usar coche mejora la salud ambiental del mundo que estás ayudando a construir.
          </p>
          
          <h2 style={{
            fontSize: '1.35rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 16, 
            marginTop: 40,
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🎮 Una experiencia única</h2>
          <p style={{
            fontSize: '1.08rem', 
            color: '#e3f0fa', 
            marginBottom: 0, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            Nuestra plataforma combina gamificación, educación ambiental y bienestar personal en una sola experiencia. Cada decisión que tomas se refleja en tu avatar y en el estado del planeta virtual, creando una conexión visual entre tus acciones y sus consecuencias.
          </p>
          
          <h2 style={{
            fontSize: '1.35rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 16, 
            marginTop: 40,
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🌟 Comienza tu viaje</h2>
          <p style={{
            fontSize: '1.08rem', 
            color: '#e3f0fa', 
            marginBottom: 60, 
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)'
          }}>
            Únete a nuestra comunidad y descubre cómo pequeños cambios en tu rutina diaria pueden tener un impacto significativo en tu bienestar y en el planeta. ¡Tu avatar te está esperando!
          </p>
        </section>

        {/* Sección de Estadísticas Impactantes */}
        <section style={{
          maxWidth: 900, 
          margin: '60px auto 80px auto', 
          padding: '0 32px', 
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 40, 
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>📊 El impacto de nuestros hábitos diarios</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginTop: '40px'
          }}>
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(129,202,87,0.2)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>🌱</div>
              <h3 style={{color: '#81ca57', fontSize: '1.3rem', marginBottom: '12px'}}>Reducción de CO₂</h3>
              <p style={{color: '#333', fontSize: '1.1rem'}}>
                Caminar 30 min diarios en lugar de usar coche reduce <strong>2.5 kg</strong> de CO₂ por semana
              </p>
            </div>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(91,156,200,0.2)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>💧</div>
              <h3 style={{color: '#5b9cc8', fontSize: '1.3rem', marginBottom: '12px'}}>Ahorro de Agua</h3>
              <p style={{color: '#333', fontSize: '1.1rem'}}>
                Duchas de 5 min en lugar de 15 min ahorran <strong>150 litros</strong> de agua por día
              </p>
            </div>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(129,202,87,0.2)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>⚡</div>
              <h3 style={{color: '#81ca57', fontSize: '1.3rem', marginBottom: '12px'}}>Energía Limpia</h3>
              <p style={{color: '#333', fontSize: '1.1rem'}}>
                Usar transporte público reduce <strong>75%</strong> las emisiones por viaje
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Consejos Prácticos */}
        <section style={{
          maxWidth: 900, 
          margin: '60px auto 80px auto', 
          padding: '0 32px', 
          textAlign: 'left'
        }}>
          <h2 style={{
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#5b9cc8', 
            marginBottom: 32, 
            textShadow: '0 2px 8px rgba(91,156,200,0.3)'
          }}>💡 Consejos para empezar hoy mismo</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '32px'
          }}>
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(91,156,200,0.15)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{color: '#5b9cc8', fontSize: '1.2rem', marginBottom: '12px'}}>🌅 Mañana sostenible</h3>
              <ul style={{color: '#333', fontSize: '1rem', lineHeight: '1.6'}}>
                <li>• Desayuna alimentos locales y de temporada</li>
                <li>• Usa una taza reutilizable para el café</li>
                <li>• Camina o usa bici para distancias cortas</li>
              </ul>
            </div>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(129,202,87,0.15)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{color: '#81ca57', fontSize: '1.2rem', marginBottom: '12px'}}>🌞 Durante el día</h3>
              <ul style={{color: '#333', fontSize: '1rem', lineHeight: '1.6'}}>
                <li>• Lleva tu propia botella de agua</li>
                <li>• Come más vegetales y menos carne</li>
                <li>• Apaga luces y dispositivos innecesarios</li>
              </ul>
            </div>
            
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(91,156,200,0.15)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{color: '#5b9cc8', fontSize: '1.2rem', marginBottom: '12px'}}>🌙 Noche consciente</h3>
              <ul style={{color: '#333', fontSize: '1rem', lineHeight: '1.6'}}>
                <li>• Dúchate en menos de 5 minutos</li>
                <li>• Recicla y separa residuos correctamente</li>
                <li>• Reflexiona sobre tu impacto diario</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección de Comunidad */}
        <section style={{
          maxWidth: 900, 
          margin: '60px auto 80px auto', 
          padding: '0 32px', 
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#81ca57', 
            marginBottom: 24, 
            textShadow: '0 2px 8px rgba(129,202,87,0.3)'
          }}>🤝 Únete a nuestra comunidad</h2>
          
          <p style={{
            fontSize: '1.1rem', 
            color: '#333', 
            marginBottom: 40, 
            lineHeight: '1.7'
          }}>
            Más de <strong>10,000 personas</strong> ya están transformando sus hábitos y creando un impacto positivo. 
            Cada pequeño cambio cuenta cuando lo hacemos juntos.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #81ca57 0%, #5b9cc8 100%)',
              color: '#fff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(129,202,87,0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(129,202,87,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 16px rgba(129,202,87,0.3)';
            }}
            >
              🌱 Crear mi cuenta
            </button>
            
            <button style={{
              background: 'transparent',
              color: '#81ca57',
              border: '2px solid #81ca57',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#81ca57';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#81ca57';
            }}
            >
              📚 Ver más recursos
            </button>
          </div>
        </section>

        {/* Sección Newsletter */}
        <section style={{
          maxWidth: 900, 
          margin: '60px auto 80px auto', 
          padding: '0 32px', 
          textAlign: 'center'
        }}>
          <div style={{
            background: '#f8f9fa',
            borderRadius: '22px',
            boxShadow: '0 8px 40px rgba(129,202,87,0.15)',
            padding: '2.5rem 3.5rem 2rem 3.5rem',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid rgba(129,202,87,0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.2rem'
            }}>
              <span style={{
                fontSize: '3.2rem',
                display: 'inline-block',
                animation: 'floatCarta 3.5s ease-in-out infinite alternate'
              }}>🌱</span>
            </div>
            
            <h2 style={{
              color: '#81ca57',
              fontSize: '1.5rem',
              marginBottom: '0.7rem',
              fontWeight: '700'
            }}>¡Suscríbete y recibe consejos sostenibles en tu bandeja!</h2>
            
            <p style={{
              color: '#333',
              marginBottom: '1.2rem',
              fontSize: '1.08rem',
              lineHeight: '1.6'
            }}>
              Sé el primero en enterarte de nuevos hábitos, consejos ambientales y descuentos. 
              Te prometemos solo correos con impacto positivo para ti y el planeta.
            </p>
            
            <form style={{
              display: 'flex',
              gap: '0.7rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <input 
                type="email" 
                placeholder="tucorreo@lifelevelup.com" 
                required 
                style={{
                  padding: '0.9rem 1.1rem',
                  borderRadius: '10px',
                  border: '1.5px solid #81ca57',
                  background: '#fff',
                  color: '#333',
                  fontSize: '1.08rem',
                  minWidth: '280px',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                style={{
                  background: 'linear-gradient(90deg, #81ca57 0%, #5b9cc8 100%)',
                  color: '#fff',
                  fontWeight: '700',
                  border: 'none',
                  padding: '0.9rem 1.3rem',
                  borderRadius: '10px',
                  fontSize: '1.08rem',
                  boxShadow: '0 2px 8px 0 rgba(129,202,87,0.3)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 16px 0 rgba(129,202,87,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px 0 rgba(129,202,87,0.3)';
                }}
              >
                🌱 Suscribirme
              </button>
            </form>
            
            <p style={{
              color: '#81ca57',
              fontSize: '0.98rem',
              marginTop: '1.1rem',
              opacity: '0.9'
            }}>
              * No spam, solo consejos sostenibles de calidad. Puedes darte de baja cuando quieras.
            </p>
          </div>
        </section>
        
        {/* Espacio adicional para asegurar que el footer sea visible */}
        <section style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: '#f8f9fa',
          marginTop: '40px'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{
              color: '#5b9cc8',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              🌍 Únete a la revolución sostenible
            </h3>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Cada pequeño hábito cuenta. Juntos podemos crear un futuro más verde y saludable para todos.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minWidth: '200px'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🌱</div>
                <h4 style={{color: '#81ca57', marginBottom: '0.5rem'}}>Hábitos Verdes</h4>
                <p style={{color: '#666', fontSize: '0.9rem'}}>Pequeños cambios, gran impacto</p>
              </div>
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minWidth: '200px'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💚</div>
                <h4 style={{color: '#81ca57', marginBottom: '0.5rem'}}>Bienestar Total</h4>
                <p style={{color: '#666', fontSize: '0.9rem'}}>Salud para ti y el planeta</p>
              </div>
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minWidth: '200px'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🌍</div>
                <h4 style={{color: '#81ca57', marginBottom: '0.5rem'}}>Impacto Global</h4>
                <p style={{color: '#666', fontSize: '0.9rem'}}>Cambios que transforman el mundo</p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </Layout>
  );
} 