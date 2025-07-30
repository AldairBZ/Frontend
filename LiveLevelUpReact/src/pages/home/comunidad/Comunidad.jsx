import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Comunidad.module.css';

export default function Comunidad() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('historias');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'logro' });
  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: 'María G.',
    avatar: '👩‍🦰',
    level: 15,
    points: 2847,
    achievements: 8,
    streak: 23
  });

  const successStories = [
    {
      id: 1,
      name: "María G.",
      avatar: "👩‍🦰",
      before: "Sedentaria, 0 ejercicio",
      after: "10.000 pasos diarios",
      story: "En 3 meses perdí 8kg y me siento más energética que nunca. ¡Gracias LifeLevelUp!",
      impact: "+2 años de vida",
      likes: 156,
      comments: 23,
      date: "2 días"
    },
    {
      id: 2,
      name: "Carlos M.",
      avatar: "👨‍🦱",
      before: "Coche todos los días",
      after: "Bicicleta + transporte público",
      story: "Ahorro 200€ al mes y he reducido mi huella de carbono en un 60%",
      impact: "-1.2 ton CO₂/año",
      likes: 203,
      comments: 45,
      date: "1 semana"
    },
    {
      id: 3,
      name: "Ana L.",
      avatar: "👩‍🦳",
      before: "Dieta alta en carne",
      after: "Vegetariana 4 días/semana",
      story: "Mejoré mi digestión y descubrí sabores increíbles. El planeta también lo agradece.",
      impact: "-0.8 ton CO₂/año",
      likes: 89,
      comments: 12,
      date: "3 días"
    },
    {
      id: 4,
      name: "Luis R.",
      avatar: "👨‍🦲",
      before: "Plástico en todo",
      after: "Cero residuos plásticos",
      story: "Después de 6 meses sin plástico, mi casa está más limpia y mi conciencia más tranquila.",
      impact: "-0.5 ton CO₂/año",
      likes: 134,
      comments: 28,
      date: "5 días"
    }
  ];

  const communityPosts = [
    {
      id: 1,
      user: "EcoWarrior_2024",
      avatar: "🌱",
      title: "Mi jardín vertical está floreciendo",
      content: "Después de 3 meses, mi jardín vertical en el balcón está dando sus primeros frutos. ¡Tomates cherry orgánicos!",
      category: "logro",
      likes: 67,
      comments: 15,
      date: "1 hora",
      image: "🍅"
    },
    {
      id: 2,
      user: "BiciLover",
      avatar: "🚴‍♀️",
      title: "Ruta ciclista por la ciudad",
      content: "Descubrí una nueva ruta ciclista que conecta 5 parques de la ciudad. ¡Perfecta para los fines de semana!",
      category: "descubrimiento",
      likes: 89,
      comments: 22,
      date: "3 horas",
      image: "🌳"
    },
    {
      id: 3,
      user: "ZeroWaste_Maria",
      avatar: "♻️",
      title: "Receta: Detergente casero",
      content: "Comparto mi receta de detergente casero con bicarbonato y vinagre. ¡Económico y ecológico!",
      category: "consejo",
      likes: 234,
      comments: 56,
      date: "6 horas",
      image: "🧼"
    }
  ];

  const leaderboard = [
    { position: 1, name: "EcoChampion", avatar: "👑", points: 15420, level: 25 },
    { position: 2, name: "GreenWarrior", avatar: "🌿", points: 12890, level: 22 },
    { position: 3, name: "PlanetSaver", avatar: "🌍", points: 11560, level: 20 },
    { position: 4, name: "Maria G.", avatar: "👩‍🦰", points: 9870, level: 18 },
    { position: 5, name: "Carlos M.", avatar: "👨‍🦱", points: 8450, level: 16 }
  ];

  const challenges = [
    {
      id: 1,
      title: "Reto del Mes: Cero Plástico",
      participants: 1247,
      daysLeft: 12,
      progress: 78,
      category: "sostenibilidad"
    },
    {
      id: 2,
      title: "10K Pasos Diarios",
      participants: 892,
      daysLeft: 7,
      progress: 65,
      category: "movimiento"
    },
    {
      id: 3,
      title: "Vegetariano por 30 días",
      participants: 456,
      daysLeft: 15,
      progress: 45,
      category: "alimentacion"
    }
  ];

  useEffect(() => {
    setPosts(communityPosts);
  }, []);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      const post = {
        id: Date.now(),
        user: userProfile.name,
        avatar: userProfile.avatar,
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
        likes: 0,
        comments: 0,
        date: "Ahora",
        image: ""
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', category: 'logro' });
      setShowCreatePost(false);
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'logro': return '#10b981';
      case 'descubrimiento': return '#3b82f6';
      case 'consejo': return '#f59e0b';
      case 'pregunta': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'logro': return '🏆';
      case 'descubrimiento': return '🔍';
      case 'consejo': return '💡';
      case 'pregunta': return '❓';
      default: return '📝';
    }
  };

  return (
    <div className={styles.comunidadWrapper}>
      {/* ===== HEADER MODERNO ===== */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/home/salud-bienestar">Salud</a></li>
            <li><a href="/home/salud-planeta">Planeta</a></li>
            <li><a href="/home/desafios">Desafíos</a></li>
            <li><a href="/home/comunidad" className={styles.activeLink}>Comunidad</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== HERO SECTION MODERNO ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroParticles}></div>
          <div className={styles.heroGradient}></div>
        </div>
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>👥</span>
              <span className={styles.badgeText}>Comunidad LifeLevelUp</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Conecta, comparte y
              <span className={styles.heroTitleHighlight}> crece junto a otros.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Únete a nuestra comunidad de personas comprometidas con el cambio. 
              Comparte tus logros, descubre consejos y celebra los éxitos de otros.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1,247</span>
                <span className={styles.statLabel}>Miembros activos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>45,892</span>
                <span className={styles.statLabel}>Logros compartidos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12,456</span>
                <span className={styles.statLabel}>Interacciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS DE NAVEGACIÓN ===== */}
      <section className={styles.tabsSection}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabsGrid}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'historias' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('historias')}
            >
              <span className={styles.tabIcon}>🌟</span>
              <span className={styles.tabLabel}>Historias de Éxito</span>
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'foro' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('foro')}
            >
              <span className={styles.tabIcon}>💬</span>
              <span className={styles.tabLabel}>Foro Comunitario</span>
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'ranking' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('ranking')}
            >
              <span className={styles.tabIcon}>🏆</span>
              <span className={styles.tabLabel}>Ranking</span>
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'retos' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('retos')}
            >
              <span className={styles.tabIcon}>🎯</span>
              <span className={styles.tabLabel}>Retos Activos</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {/* ===== COLUMNA PRINCIPAL ===== */}
          <div className={styles.mainContent}>
            {/* ===== HISTORIAS DE ÉXITO ===== */}
            {activeTab === 'historias' && (
              <div className={styles.historiasSection}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>🌟 Historias de Éxito</h2>
                  <p className={styles.sectionSubtitle}>
                    Descubre cómo otros usuarios están transformando sus vidas y el planeta
                  </p>
                </div>
                
                <div className={styles.storiesGrid}>
                  {successStories.map(story => (
                    <div key={story.id} className={styles.storyCard}>
                      <div className={styles.storyHeader}>
                        <div className={styles.storyAvatar}>{story.avatar}</div>
                        <div className={styles.storyInfo}>
                          <h3 className={styles.storyName}>{story.name}</h3>
                          <div className={styles.storyImpact}>{story.impact}</div>
                        </div>
                        <div className={styles.storyMeta}>
                          <span className={styles.storyDate}>{story.date}</span>
                        </div>
                      </div>
                      
                      <div className={styles.storyContent}>
                        <div className={styles.storyComparison}>
                          <div className={styles.beforeAfter}>
                            <div className={styles.beforeLabel}>Antes:</div>
                            <div className={styles.beforeText}>{story.before}</div>
                          </div>
                          <div className={styles.arrow}>→</div>
                          <div className={styles.beforeAfter}>
                            <div className={styles.afterLabel}>Ahora:</div>
                            <div className={styles.afterText}>{story.after}</div>
                          </div>
                        </div>
                        <p className={styles.storyText}>{story.story}</p>
                      </div>
                      
                      <div className={styles.storyActions}>
                        <button className={styles.actionButton}>
                          <span>👍</span>
                          <span>{story.likes}</span>
                        </button>
                        <button className={styles.actionButton}>
                          <span>💬</span>
                          <span>{story.comments}</span>
                        </button>
                        <button className={styles.readMoreButton}>
                          <span>Leer más</span>
                          <span className={styles.readMoreIcon}>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== FORO COMUNITARIO ===== */}
            {activeTab === 'foro' && (
              <div className={styles.foroSection}>
                <div className={styles.foroHeader}>
                  <h2 className={styles.sectionTitle}>💬 Foro Comunitario</h2>
                  <button 
                    className={styles.createPostButton}
                    onClick={() => setShowCreatePost(true)}
                  >
                    <span>✏️</span>
                    <span>Crear Post</span>
                  </button>
                </div>

                {showCreatePost && (
                  <div className={styles.createPostModal}>
                    <div className={styles.createPostContent}>
                      <div className={styles.createPostHeader}>
                        <h3>Crear nuevo post</h3>
                        <button 
                          className={styles.closeButton}
                          onClick={() => setShowCreatePost(false)}
                        >
                          ✕
                        </button>
                      </div>
                      
                      <form onSubmit={handleCreatePost} className={styles.createPostForm}>
                        <select 
                          value={newPost.category}
                          onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                          className={styles.categorySelect}
                        >
                          <option value="logro">🏆 Logro</option>
                          <option value="descubrimiento">🔍 Descubrimiento</option>
                          <option value="consejo">💡 Consejo</option>
                          <option value="pregunta">❓ Pregunta</option>
                        </select>
                        
                        <input 
                          type="text"
                          placeholder="Título de tu post..."
                          value={newPost.title}
                          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                          className={styles.postTitleInput}
                        />
                        
                        <textarea 
                          placeholder="Comparte tu experiencia, consejo o pregunta..."
                          value={newPost.content}
                          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                          className={styles.postContentInput}
                          rows={4}
                        />
                        
                        <div className={styles.createPostActions}>
                          <button type="button" onClick={() => setShowCreatePost(false)}>
                            Cancelar
                          </button>
                          <button type="submit" className={styles.publishButton}>
                            Publicar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                <div className={styles.postsGrid}>
                  {posts.map(post => (
                    <div key={post.id} className={styles.postCard}>
                      <div className={styles.postHeader}>
                        <div className={styles.postUser}>
                          <div className={styles.postAvatar}>{post.avatar}</div>
                          <div className={styles.postUserInfo}>
                            <span className={styles.postUserName}>{post.user}</span>
                            <span className={styles.postDate}>{post.date}</span>
                          </div>
                        </div>
                        <div 
                          className={styles.postCategory}
                          style={{backgroundColor: getCategoryColor(post.category)}}
                        >
                          {getCategoryIcon(post.category)}
                        </div>
                      </div>
                      
                      <div className={styles.postContent}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postText}>{post.content}</p>
                        {post.image && (
                          <div className={styles.postImage}>{post.image}</div>
                        )}
                      </div>
                      
                      <div className={styles.postActions}>
                        <button 
                          className={styles.postActionButton}
                          onClick={() => handleLike(post.id)}
                        >
                          <span>👍</span>
                          <span>{post.likes}</span>
                        </button>
                        <button className={styles.postActionButton}>
                          <span>💬</span>
                          <span>{post.comments}</span>
                        </button>
                        <button className={styles.postActionButton}>
                          <span>🔄</span>
                          <span>Compartir</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== RANKING ===== */}
            {activeTab === 'ranking' && (
              <div className={styles.rankingSection}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>🏆 Ranking de la Comunidad</h2>
                  <p className={styles.sectionSubtitle}>
                    Los usuarios más activos y comprometidos con el cambio
                  </p>
                </div>
                
                <div className={styles.rankingGrid}>
                  {leaderboard.map((user, index) => (
                    <div key={user.position} className={styles.rankingCard}>
                      <div className={styles.rankingPosition}>
                        <span className={styles.positionNumber}>{user.position}</span>
                        <div className={styles.rankingAvatar}>{user.avatar}</div>
                      </div>
                      
                      <div className={styles.rankingInfo}>
                        <h3 className={styles.rankingName}>{user.name}</h3>
                        <div className={styles.rankingStats}>
                          <span className={styles.rankingPoints}>{user.points.toLocaleString()} pts</span>
                          <span className={styles.rankingLevel}>Nivel {user.level}</span>
                        </div>
                      </div>
                      
                      {index < 3 && (
                        <div className={styles.rankingBadge}>
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== RETOS ACTIVOS ===== */}
            {activeTab === 'retos' && (
              <div className={styles.retosSection}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>🎯 Retos Activos</h2>
                  <p className={styles.sectionSubtitle}>
                    Únete a los retos comunitarios y compite con otros usuarios
                  </p>
                </div>
                
                <div className={styles.retosGrid}>
                  {challenges.map(challenge => (
                    <div key={challenge.id} className={styles.retoCard}>
                      <div className={styles.retoHeader}>
                        <h3 className={styles.retoTitle}>{challenge.title}</h3>
                        <div className={styles.retoCategory}>{challenge.category}</div>
                      </div>
                      
                      <div className={styles.retoProgress}>
                        <div className={styles.progressInfo}>
                          <span className={styles.progressText}>Progreso comunitario</span>
                          <span className={styles.progressPercent}>{challenge.progress}%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progressFill}
                            style={{width: `${challenge.progress}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      <div className={styles.retoStats}>
                        <div className={styles.retoStat}>
                          <span className={styles.statIcon}>👥</span>
                          <span>{challenge.participants} participantes</span>
                        </div>
                        <div className={styles.retoStat}>
                          <span className={styles.statIcon}>⏱️</span>
                          <span>{challenge.daysLeft} días restantes</span>
                        </div>
                      </div>
                      
                      <button className={styles.joinRetoButton}>
                        <span>Unirme al Reto</span>
                        <span className={styles.joinIcon}>→</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className={styles.sidebar}>
            {/* ===== PERFIL DEL USUARIO ===== */}
            <div className={styles.userProfileCard}>
              <div className={styles.userProfileHeader}>
                <div className={styles.userProfileAvatar}>{userProfile.avatar}</div>
                <div className={styles.userProfileInfo}>
                  <h3 className={styles.userProfileName}>{userProfile.name}</h3>
                  <span className={styles.userProfileLevel}>Nivel {userProfile.level}</span>
                </div>
              </div>
              
              <div className={styles.userProfileStats}>
                <div className={styles.userStat}>
                  <span className={styles.userStatNumber}>{userProfile.points}</span>
                  <span className={styles.userStatLabel}>Puntos</span>
                </div>
                <div className={styles.userStat}>
                  <span className={styles.userStatNumber}>{userProfile.achievements}</span>
                  <span className={styles.userStatLabel}>Logros</span>
                </div>
                <div className={styles.userStat}>
                  <span className={styles.userStatNumber}>{userProfile.streak}</span>
                  <span className={styles.userStatLabel}>Días seguidos</span>
                </div>
              </div>
            </div>

            {/* ===== ESTADÍSTICAS COMUNITARIAS ===== */}
            <div className={styles.communityStatsCard}>
              <h3 className={styles.communityStatsTitle}>📊 Estadísticas</h3>
              <div className={styles.communityStatsGrid}>
                <div className={styles.communityStat}>
                  <span className={styles.communityStatNumber}>1,247</span>
                  <span className={styles.communityStatLabel}>Miembros</span>
                </div>
                <div className={styles.communityStat}>
                  <span className={styles.communityStatNumber}>45,892</span>
                  <span className={styles.communityStatLabel}>Logros</span>
                </div>
                <div className={styles.communityStat}>
                  <span className={styles.communityStatNumber}>12,456</span>
                  <span className={styles.communityStatLabel}>Interacciones</span>
                </div>
                <div className={styles.communityStat}>
                  <span className={styles.communityStatNumber}>89</span>
                  <span className={styles.communityStatLabel}>Retos activos</span>
                </div>
              </div>
            </div>

            {/* ===== ENLACES RÁPIDOS ===== */}
            <div className={styles.quickLinksCard}>
              <h3 className={styles.quickLinksTitle}>🔗 Enlaces Rápidos</h3>
              <div className={styles.quickLinksList}>
                <a href="/home/desafios" className={styles.quickLink}>
                  <span>🏆</span>
                  <span>Ver Desafíos</span>
                </a>
                <a href="/home/salud-planeta" className={styles.quickLink}>
                  <span>🌍</span>
                  <span>Salud del Planeta</span>
                </a>
                <a href="/home/salud-bienestar" className={styles.quickLink}>
                  <span>🌱</span>
                  <span>Salud y Bienestar</span>
                </a>
                <a href="#" className={styles.quickLink}>
                  <span>📚</span>
                  <span>Guías y Consejos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ===== FOOTER MODERNO ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <h2>LifeLevelUp</h2>
            <p>Conecta, comparte y crece junto a una comunidad comprometida con el cambio.</p>
            <div className={styles.footerEmojis}>
              <span>👥</span>
              <span>🌟</span>
              <span>💚</span>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/home/salud-bienestar">Salud y Bienestar</a></li>
              <li><a href="/home/salud-planeta">Salud del Planeta</a></li>
              <li><a href="/home/desafios">Desafíos</a></li>
              <li><a href="/home/comunidad">Comunidad</a></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3>Comunidad</h3>
            <ul>
              <li><a href="#">Directrices de la comunidad</a></li>
              <li><a href="#">Reportar contenido</a></li>
              <li><a href="#">Sugerencias</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h3>Contacto</h3>
            <a href="mailto:hola@lifelevelup.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              hola@lifelevelup.com
            </a>
            <a href="tel:+346667526382" className={styles.contactItem}>
              <span className={styles.contactIcon}>👥</span>
              +34 666 COMUNIDAD
            </a>
            <a href="#" className={styles.contactItem}>
              <span className={styles.contactIcon}>🌍</span>
              España, Europa
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2025 LifeLevelUp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
} 