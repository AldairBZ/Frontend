import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import Layout from '../../../components/Layout.jsx';
import styles from './Blogs.module.css';

export default function Blogs() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "10 Hábitos Matutinos que Transformarán tu Día",
      excerpt: "Descubre cómo pequeños cambios en tu rutina matutina pueden tener un impacto enorme en tu productividad y bienestar...",
      author: "Dr. Ana Martínez",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "bienestar",
      image: "🌅",
      tags: ["rutina", "productividad", "bienestar"]
    },
    {
      id: 2,
      title: "La Ciencia Detrás de la Alimentación Sostenible",
      excerpt: "Exploramos cómo nuestras elecciones alimentarias afectan no solo nuestra salud, sino también el futuro del planeta...",
      author: "Carlos Rodríguez",
      date: "12 Mar 2024",
      readTime: "8 min",
      category: "nutricion",
      image: "🥗",
      tags: ["sostenibilidad", "nutrición", "ciencia"]
    },
    {
      id: 3,
      title: "Ejercicio al Aire Libre: Beneficios Más Allá de la Salud Física",
      excerpt: "Descubre por qué el ejercicio en la naturaleza es más efectivo que en el gimnasio y cómo beneficia tu salud mental...",
      author: "María González",
      date: "10 Mar 2024",
      readTime: "6 min",
      category: "salud",
      image: "🏃‍♀️",
      tags: ["ejercicio", "naturaleza", "salud mental"]
    },
    {
      id: 4,
      title: "Guía Completa para Reducir tu Huella de Carbono",
      excerpt: "Una guía práctica con acciones concretas que puedes implementar hoy mismo para reducir tu impacto ambiental...",
      author: "Luis Fernández",
      date: "8 Mar 2024",
      readTime: "12 min",
      category: "sostenibilidad",
      image: "🌍",
      tags: ["sostenibilidad", "medio ambiente", "guía práctica"]
    },
    {
      id: 5,
      title: "Meditación para Principiantes: Todo lo que Necesitas Saber",
      excerpt: "Aprende técnicas simples de meditación que puedes practicar en casa y que transformarán tu bienestar mental...",
      author: "Sofia Pérez",
      date: "5 Mar 2024",
      readTime: "7 min",
      category: "bienestar",
      image: "🧘‍♀️",
      tags: ["meditación", "bienestar", "principiantes"]
    },
    {
      id: 6,
      title: "El Impacto Real de Reciclar: Datos que Te Sorprenderán",
      excerpt: "Descubre estadísticas impactantes sobre el reciclaje y cómo cada pequeño gesto cuenta para salvar el planeta...",
      author: "David López",
      date: "3 Mar 2024",
      readTime: "9 min",
      category: "sostenibilidad",
      image: "♻️",
      tags: ["reciclaje", "estadísticas", "medio ambiente"]
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos', icon: '📚' },
    { id: 'salud', name: 'Salud', icon: '🏥' },
    { id: 'nutricion', name: 'Nutrición', icon: '🥗' },
    { id: 'bienestar', name: 'Bienestar', icon: '🧘‍♀️' },
    { id: 'sostenibilidad', name: 'Sostenibilidad', icon: '🌍' }
  ];

  const educationalCards = [
    {
      id: 1,
      icon: "♻️",
      title: "El reciclaje explicado en 60 segundos",
      content: "Reciclar una botella de plástico ahorra la energía necesaria para mantener una bombilla encendida durante 6 horas. ¿Sabías que el 91% del plástico no se recicla?",
      category: "reciclaje"
    },
    {
      id: 2,
      icon: "🌱",
      title: "Por qué comer local es mejor",
      content: "Los alimentos locales viajan menos de 100km vs 2.500km de media. Esto significa 17 veces menos emisiones de CO₂ y productos más frescos.",
      category: "alimentacion"
    },
    {
      id: 3,
      icon: "💡",
      title: "El impacto de apagar las luces",
      content: "Apagar las luces cuando no las necesitas puede ahorrar hasta 15% en tu factura eléctrica. Multiplicado por millones de hogares, el impacto es enorme.",
      category: "energia"
    },
    {
      id: 4,
      icon: "🚰",
      title: "La crisis del agua dulce",
      content: "Solo el 2.5% del agua del planeta es dulce, y el 70% está congelada. Cada gota cuenta: una ducha de 5 min vs 15 min ahorra 150 litros.",
      category: "agua"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'salud': return '#ef4444';
      case 'nutricion': return '#10b981';
      case 'bienestar': return '#8b5cf6';
      case 'sostenibilidad': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return (
    <Layout>
      <div className={styles.blogsWrapper}>
        {/* ===== HERO SECTION MODERNO ===== */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroParticles}></div>
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span>📝</span>
                Educativo
              </div>
              <h1 className={styles.heroTitle}>
                Aprende y crece con
                <span className={styles.heroTitleHighlight}> contenido de valor</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Descubre artículos expertos, guías prácticas y consejos que te ayudarán 
                a transformar tus hábitos y mejorar tu vida.
              </p>
            </div>
          </div>
        </section>

      {/* ===== SECCIÓN PRINCIPAL ===== */}
      <section className={styles.mainSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>📚 Biblioteca de Conocimiento</h2>
          <p className={styles.sectionSubtitle}>
            Explora artículos cuidadosamente seleccionados para mejorar tu vida y la del planeta
          </p>
        </div>

        {/* ===== FILTROS Y BÚSQUEDA ===== */}
        <div className={styles.filtersSection}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>🔍</span>
          </div>
          
          <div className={styles.categoriesContainer}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.activeCategory : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ===== GRID DE BLOGS ===== */}
        <div className={styles.blogsGrid}>
          {filteredPosts.map(post => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.blogHeader}>
                <div className={styles.blogImage}>
                  <span className={styles.blogEmoji}>{post.image}</span>
                </div>
                <div className={styles.blogMeta}>
                  <span 
                    className={styles.blogCategory}
                    style={{ backgroundColor: getCategoryColor(post.category) }}
                  >
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                  <span className={styles.blogReadTime}>{post.readTime}</span>
                </div>
              </div>
              
              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                
                <div className={styles.blogTags}>
                  {post.tags.map(tag => (
                    <span key={tag} className={styles.blogTag}>#{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className={styles.blogFooter}>
                <div className={styles.blogAuthor}>
                  <span className={styles.authorName}>{post.author}</span>
                  <span className={styles.blogDate}>{post.date}</span>
                </div>
                <button className={styles.readMoreButton}>
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ===== PAGINACIÓN ===== */}
        <div className={styles.pagination}>
          <button className={styles.paginationButton} disabled>
            ← Anterior
          </button>
          <div className={styles.paginationNumbers}>
            <span className={styles.activePage}>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>12</span>
          </div>
          <button className={styles.paginationButton}>
            Siguiente →
          </button>
        </div>
      </section>

      {/* ===== SECCIÓN DE EDUCACIÓN AMBIENTAL (MOVIDA DESDE HOME) ===== */}
      <section className={styles.educationSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>📚 Educación Ambiental</h2>
          <p className={styles.sectionSubtitle}>
            Aprende sobre el impacto de tus acciones en menos de 60 segundos
          </p>
        </div>
        
        <div className={styles.educationGrid}>
          {educationalCards.map(card => (
            <div key={card.id} className={styles.educationCard}>
              <div className={styles.educationHeader}>
                <span className={styles.educationIcon}>{card.icon}</span>
                <h3 className={styles.educationTitle}>{card.title}</h3>
              </div>
              <div className={styles.educationContent}>
                <p className={styles.educationText}>{card.content}</p>
              </div>
              <div className={styles.educationFooter}>
                <span className={styles.educationCategory}>{card.category}</span>
                <button className={styles.learnMoreButton}>Aprender más</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </Layout>
  );
} 