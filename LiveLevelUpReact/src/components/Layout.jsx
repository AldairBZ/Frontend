import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './Layout.css';

export default function Layout({ children, showFooter = true, showScrollToTop = true }) {
  const { darkMode, toggleTheme } = useTheme();
  const mainRef = useRef(null);
  const [showScrollLight, setShowScrollLight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    
    function onScroll() {
      const scrollTop = main.scrollTop;
      const clientHeight = main.clientHeight;
      const scrollHeight = main.scrollHeight;
      
      // Calcular progreso del scroll (0 a 1)
      const progress = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      
      // Mostrar botón de volver arriba cuando el usuario ha hecho scroll
      if (showScrollToTop) {
        setShowScrollToTopBtn(progress > 0.3);
      }
      
      // Ocultar scroll light cuando está cerca del final
      const atBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setShowScrollLight(!atBottom);
    }
    
    main.addEventListener('scroll', onScroll);
    onScroll(); // Ejecutar una vez para establecer el estado inicial
    return () => main.removeEventListener('scroll', onScroll);
  }, [showScrollToTop]);

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`layout ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        scrollProgress={scrollProgress}
      />
      
      <main 
        ref={mainRef} 
        className="layout-main"
      >
        {children}
        
        {showFooter && <Footer />}
      </main>

      {/* Scroll light indicator */}
      {showScrollLight && (
        <div className="scroll-light" />
      )}
      
      {/* Botón de volver arriba */}
      {showScrollToTop && showScrollToTopBtn && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          title="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
} 