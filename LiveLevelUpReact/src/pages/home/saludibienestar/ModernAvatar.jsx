import React from 'react';

// Avatar SVG cartoon moderno, amigable y responsivo con animaciones
export default function ModernAvatar({ size = 160, animate = false }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      animation: animate ? 'floatAvatar 3s ease-in-out infinite alternate' : 'none'
    }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          display: 'block', 
          margin: '0 auto',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}
      >
        {/* Cabeza */}
        <ellipse 
          cx="80" 
          cy="54" 
          rx="32" 
          ry="34" 
          fill="#ffe0b2" 
          stroke="#e0b090" 
          strokeWidth="2"
          style={{
            animation: animate ? 'headBob 2s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Cabello */}
        <ellipse 
          cx="80" 
          cy="38" 
          rx="28" 
          ry="18" 
          fill="#fbc02d"
          style={{
            animation: animate ? 'hairWave 3s ease-in-out infinite' : 'none'
          }}
        />
        <ellipse 
          cx="60" 
          cy="44" 
          rx="8" 
          ry="6" 
          fill="#fbc02d"
          style={{
            animation: animate ? 'hairWave 3s ease-in-out infinite 0.5s' : 'none'
          }}
        />
        <ellipse 
          cx="100" 
          cy="44" 
          rx="8" 
          ry="6" 
          fill="#fbc02d"
          style={{
            animation: animate ? 'hairWave 3s ease-in-out infinite 1s' : 'none'
          }}
        />
        
        {/* Orejas */}
        <ellipse cx="46" cy="58" rx="6" ry="10" fill="#ffe0b2" />
        <ellipse cx="114" cy="58" rx="6" ry="10" fill="#ffe0b2" />
        
        {/* Cuerpo */}
        <rect 
          x="56" 
          y="88" 
          width="48" 
          height="44" 
          rx="18" 
          fill="#64b5f6" 
          stroke="#1976d2" 
          strokeWidth="2"
          style={{
            animation: animate ? 'bodyBreath 4s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Cuello */}
        <rect x="72" y="74" width="16" height="18" rx="6" fill="#ffe0b2" />
        
        {/* Brazos */}
        <rect 
          x="36" 
          y="98" 
          width="18" 
          height="10" 
          rx="5" 
          fill="#ffe0b2"
          style={{
            animation: animate ? 'armSwing 2s ease-in-out infinite' : 'none',
            transformOrigin: '36px 98px'
          }}
        />
        <rect 
          x="106" 
          y="98" 
          width="18" 
          height="10" 
          rx="5" 
          fill="#ffe0b2"
          style={{
            animation: animate ? 'armSwing 2s ease-in-out infinite reverse' : 'none',
            transformOrigin: '124px 98px'
          }}
        />
        
        {/* Piernas */}
        <rect 
          x="66" 
          y="132" 
          width="10" 
          height="22" 
          rx="5" 
          fill="#bdbdbd"
          style={{
            animation: animate ? 'legStep 1.5s ease-in-out infinite' : 'none',
            transformOrigin: '71px 132px'
          }}
        />
        <rect 
          x="84" 
          y="132" 
          width="10" 
          height="22" 
          rx="5" 
          fill="#bdbdbd"
          style={{
            animation: animate ? 'legStep 1.5s ease-in-out infinite reverse' : 'none',
            transformOrigin: '89px 132px'
          }}
        />
        
        {/* Ojos */}
        <ellipse 
          cx="70" 
          cy="56" 
          rx="4" 
          ry="5" 
          fill="#333"
          style={{
            animation: animate ? 'blink 4s ease-in-out infinite' : 'none'
          }}
        />
        <ellipse 
          cx="90" 
          cy="56" 
          rx="4" 
          ry="5" 
          fill="#333"
          style={{
            animation: animate ? 'blink 4s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Boca */}
        <path 
          d="M72 68 Q80 76 88 68" 
          stroke="#e57373" 
          strokeWidth="2" 
          fill="none"
          style={{
            animation: animate ? 'smile 3s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Brillo en los ojos */}
        <ellipse 
          cx="72" 
          cy="54" 
          rx="1.5" 
          ry="2" 
          fill="#fff"
          style={{
            animation: animate ? 'eyeSparkle 2s ease-in-out infinite' : 'none'
          }}
        />
        <ellipse 
          cx="92" 
          cy="54" 
          rx="1.5" 
          ry="2" 
          fill="#fff"
          style={{
            animation: animate ? 'eyeSparkle 2s ease-in-out infinite 0.5s' : 'none'
          }}
        />
      </svg>
      
      <style jsx>{`
        @keyframes floatAvatar {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes headBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes hairWave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.1); }
        }
        
        @keyframes bodyBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes armSwing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes legStep {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
        @keyframes smile {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes eyeSparkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
} 