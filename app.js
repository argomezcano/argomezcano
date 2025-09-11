// Datos de la aplicación
const appData = {
  sections: [
    {
      id: "r-section", 
      title: "Programación en R",
      number: "01",
      description: "Domina el análisis estadístico y la visualización de datos con R. Desde fundamentos hasta técnicas avanzadas de modelado y gráficos profesionales.",
      videos: [
        {
          id: "r-fundamentals",
          title: "Fundamentos de R", 
          level: "Básico",
          duration: "45 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Introducción a R"},
            {time: "02:30", title: "Instalación y configuración"},
            {time: "05:45", title: "Sintaxis básica"},
            {time: "08:00", title: "Tipos de datos"},
            {time: "12:15", title: "Vectores y listas"},
            {time: "18:30", title: "Funciones básicas"},
            {time: "25:00", title: "Ejercicios prácticos"},
            {time: "35:00", title: "Casos de uso"},
            {time: "42:00", title: "Recursos adicionales"}
          ]
        },
        {
          id: "r-ggplot",
          title: "Visualización con ggplot2",
          level: "Intermedio", 
          duration: "60 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Introducción a ggplot2"},
            {time: "03:15", title: "Gramática de gráficos"},
            {time: "07:30", title: "Capas y geometrías"},
            {time: "12:45", title: "Gráficos de dispersión"},
            {time: "18:00", title: "Gráficos de barras"},
            {time: "25:30", title: "Histogramas y densidad"},
            {time: "32:00", title: "Facetas y paneles"},
            {time: "40:15", title: "Temas y personalización"},
            {time: "48:00", title: "Exportación de gráficos"},
            {time: "55:00", title: "Ejercicios avanzados"}
          ]
        },
        {
          id: "r-advanced",
          title: "Análisis Estadístico Avanzado",
          level: "Avanzado",
          duration: "75 min", 
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Análisis estadístico avanzado"},
            {time: "04:20", title: "Modelos lineales"},
            {time: "10:15", title: "Regresión múltiple"},
            {time: "18:45", title: "ANOVA y contrastes"},
            {time: "26:30", title: "Modelos mixtos"},
            {time: "35:00", title: "Series temporales"},
            {time: "45:15", title: "Análisis multivariante"},
            {time: "55:30", title: "Machine learning"},
            {time: "65:00", title: "Validación de modelos"},
            {time: "70:00", title: "Interpretación de resultados"}
          ]
        }
      ]
    },
    {
      id: "python-section",
      title: "Python Científico", 
      number: "02",
      description: "Explora el ecosistema científico de Python con NumPy, Pandas, Matplotlib y Scikit-learn para análisis de datos y machine learning.",
      videos: [
        {
          id: "python-numpy",
          title: "NumPy y Análisis Numérico",
          level: "Intermedio",
          duration: "50 min",
          videoId: "wB_iljK7vZ0", 
          chapters: [
            {time: "00:00", title: "Introducción a NumPy"},
            {time: "02:45", title: "Arrays multidimensionales"},
            {time: "06:30", title: "Operaciones básicas"},
            {time: "11:15", title: "Indexación y slicing"},
            {time: "16:00", title: "Funciones matemáticas"},
            {time: "22:30", title: "Álgebra lineal"},
            {time: "28:45", title: "Broadcasting"},
            {time: "35:00", title: "Optimización de rendimiento"},
            {time: "42:00", title: "Casos prácticos"},
            {time: "47:30", title: "Integración con otras librerías"}
          ]
        },
        {
          id: "python-pandas",
          title: "Pandas para Ciencia de Datos",
          level: "Intermedio",
          duration: "65 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Introducción a Pandas"},
            {time: "03:30", title: "DataFrames y Series"},
            {time: "08:15", title: "Lectura de datos"},
            {time: "14:00", title: "Exploración inicial"},
            {time: "20:30", title: "Limpieza de datos"},
            {time: "28:45", title: "Transformaciones"},
            {time: "36:00", title: "Agrupaciones y agregaciones"},
            {time: "44:15", title: "Joins y merges"},
            {time: "52:30", title: "Visualización básica"},
            {time: "58:00", title: "Exportación de resultados"}
          ]
        },
        {
          id: "python-ml",
          title: "Machine Learning con Scikit-learn", 
          level: "Avanzado",
          duration: "80 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Introducción al Machine Learning"},
            {time: "04:45", title: "Preparación de datos"},
            {time: "10:30", title: "Algoritmos supervisados"},
            {time: "18:15", title: "Regresión lineal y logística"},
            {time: "26:00", title: "Árboles de decisión"},
            {time: "34:30", title: "Random Forest y boosting"},
            {time: "43:45", title: "SVM y redes neuronales"},
            {time: "52:00", title: "Clustering y PCA"},
            {time: "61:15", title: "Validación cruzada"},
            {time: "68:30", title: "Métricas de evaluación"},
            {time: "75:00", title: "Pipelines y automatización"}
          ]
        }
      ]
    },
    {
      id: "general-section",
      title: "Recursos Generales",
      number: "03", 
      description: "Metodologías, herramientas y buenas prácticas para proyectos de programación científica reproducible y colaborativa.",
      videos: [
        {
          id: "general-git",
          title: "Control de Versiones con Git",
          level: "Básico",
          duration: "40 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "¿Qué es el control de versiones?"},
            {time: "02:15", title: "Instalación y configuración"},
            {time: "05:30", title: "Conceptos básicos"},
            {time: "09:45", title: "Inicializar repositorio"},
            {time: "13:00", title: "Add, commit y push"},
            {time: "18:30", title: "Branching y merging"},
            {time: "25:15", title: "Resolución de conflictos"},
            {time: "30:00", title: "GitHub y colaboración"},
            {time: "35:30", title: "Buenas prácticas"},
            {time: "38:45", title: "Recursos adicionales"}
          ]
        },
        {
          id: "general-methodology", 
          title: "Metodologías de Investigación",
          level: "Intermedio",
          duration: "55 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Metodologías de investigación"},
            {time: "03:45", title: "Diseño experimental"},
            {time: "09:30", title: "Recopilación de datos"},
            {time: "16:15", title: "Análisis estadístico"},
            {time: "23:00", title: "Interpretación de resultados"},
            {time: "30:30", title: "Reproducibilidad"},
            {time: "37:15", title: "Documentación científica"},
            {time: "43:00", title: "Ética en investigación"},
            {time: "48:30", title: "Comunicación científica"},
            {time: "52:00", title: "Herramientas digitales"}
          ]
        },
        {
          id: "general-practices",
          title: "Buenas Prácticas en Programación Científica",
          level: "Avanzado", 
          duration: "70 min",
          videoId: "wB_iljK7vZ0",
          chapters: [
            {time: "00:00", title: "Buenas prácticas en programación"},
            {time: "04:15", title: "Estructura de proyectos"},
            {time: "09:00", title: "Documentación de código"},
            {time: "15:45", title: "Testing y validación"},
            {time: "22:30", title: "Optimización de rendimiento"},
            {time: "29:15", title: "Manejo de dependencias"},
            {time: "36:00", title: "Entornos virtuales"},
            {time: "43:30", title: "CI/CD en ciencia"},
            {time: "51:00", title: "Containerización"},
            {time: "58:15", title: "Compartir código científico"},
            {time: "65:00", title: "Licencias y derechos"}
          ]
        }
      ]
    }
  ]
};

// Estado de la aplicación
let currentSection = null;
let currentVideo = null;
let searchTimeout = null;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  showSection('home');
}

function setupEventListeners() {
  // Usar event delegation para manejar clicks dinámicos
  document.addEventListener('click', function(e) {
    // Navegación por secciones principales
    if (e.target.closest('[data-section]')) {
      e.preventDefault();
      const sectionId = e.target.closest('[data-section]').dataset.section;
      showSection(sectionId);
      return;
    }

    // Navegación por videos
    if (e.target.closest('[data-video]')) {
      e.preventDefault();
      const videoId = e.target.closest('[data-video]').dataset.video;
      showVideo(videoId);
      return;
    }

    // Botones de vuelta atrás
    if (e.target.closest('.back-btn')) {
      e.preventDefault();
      const target = e.target.closest('.back-btn').dataset.back;
      if (target === 'home') {
        showSection('home');
      } else {
        showSection(currentSection);
      }
      return;
    }

    // Resultados de búsqueda
    if (e.target.closest('.search-result')) {
      const result = e.target.closest('.search-result');
      const videoId = result.dataset.videoId;
      const chapterTime = result.dataset.chapterTime;
      
      showVideo(videoId);
      
      if (chapterTime) {
        setTimeout(() => {
          const seconds = timeToSeconds(chapterTime);
          seekToTime(seconds);
        }, 1000);
      }
      
      hideSearchResults();
      document.getElementById('search-input').blur();
      return;
    }

    // Cerrar resultados de búsqueda al hacer clic fuera
    if (!e.target.closest('.search-container')) {
      hideSearchResults();
    }
  });

  // Buscador
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const query = this.value.trim();
      searchTimeout = setTimeout(() => {
        performSearch(query);
      }, 300);
    });

    // Mostrar búsqueda al hacer focus
    searchInput.addEventListener('focus', function() {
      const query = this.value.trim();
      if (query) {
        performSearch(query);
      }
    });
  }
}

function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });

  // Mostrar la sección requerida
  if (sectionId === 'home') {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.classList.remove('hidden');
      currentSection = null;
    }
  } else {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      currentSection = sectionId;
    }
  }

  // Limpiar búsqueda cuando se navega
  if (sectionId === 'home') {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = '';
    }
    hideSearchResults();
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

function showVideo(videoId) {
  console.log('Showing video:', videoId);
  
  const video = findVideoById(videoId);
  if (!video) {
    console.error('Video not found:', videoId);
    return;
  }

  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });

  // Mostrar sección de video
  const videoSection = document.getElementById('video-section');
  if (!videoSection) {
    console.error('Video section not found');
    return;
  }
  
  videoSection.classList.remove('hidden');

  // Actualizar información del video
  const titleEl = document.getElementById('video-title');
  const durationEl = document.getElementById('video-duration');
  const levelEl = document.getElementById('video-level');
  
  if (titleEl) titleEl.textContent = video.title;
  if (durationEl) durationEl.textContent = video.duration;
  
  if (levelEl) {
    levelEl.textContent = video.level;
    levelEl.className = `status ${getLevelClass(video.level)}`;
  }

  // Configurar iframe del video
  const iframe = document.getElementById('video-iframe');
  if (iframe) {
    const embedUrl = `https://www.youtube.com/embed/${video.videoId}?enablejsapi=1&rel=0`;
    iframe.src = embedUrl;
  }

  // Configurar capítulos
  setupChapters(video);

  // Configurar botón de vuelta
  const backBtn = document.getElementById('video-back-btn');
  if (backBtn) {
    backBtn.dataset.back = currentSection || 'home';
  }
  
  currentVideo = video;
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function setupChapters(video) {
  const chaptersList = document.getElementById('chapters-list');
  if (!chaptersList) return;
  
  chaptersList.innerHTML = '';

  video.chapters.forEach(chapter => {
    const li = document.createElement('li');
    li.className = 'chapter-item';
    li.dataset.time = chapter.time;
    
    li.innerHTML = `
      <span class="chapter-time">${chapter.time}</span>
      <span class="chapter-title">${chapter.title}</span>
    `;

    li.addEventListener('click', function() {
      const timeInSeconds = timeToSeconds(chapter.time);
      seekToTime(timeInSeconds);
    });

    chaptersList.appendChild(li);
  });
}

function timeToSeconds(timeString) {
  const parts = timeString.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1]; // mm:ss
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2]; // hh:mm:ss
  }
  return 0;
}

function seekToTime(seconds) {
  const iframe = document.getElementById('video-iframe');
  if (!iframe || !currentVideo) return;
  
  const videoId = currentVideo.videoId;
  const newUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&start=${seconds}&autoplay=1`;
  iframe.src = newUrl;
}

function performSearch(query) {
  const searchResults = document.getElementById('search-results');
  if (!searchResults) return;
  
  if (!query) {
    hideSearchResults();
    return;
  }

  console.log('Performing search for:', query);
  const results = [];

  // Buscar en todos los videos y capítulos
  appData.sections.forEach(section => {
    section.videos.forEach(video => {
      // Buscar en título del video
      if (video.title.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          type: 'video',
          video: video,
          section: section,
          title: video.title,
          meta: `${section.title} • ${video.level} • ${video.duration}`
        });
      }

      // Buscar en capítulos
      video.chapters.forEach(chapter => {
        if (chapter.title.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            type: 'chapter',
            video: video,
            section: section,
            chapter: chapter,
            title: video.title,
            meta: `${section.title} • ${video.level}`,
            chapter_info: `${chapter.time} - ${chapter.title}`
          });
        }
      });
    });
  });

  console.log('Search results:', results.length);
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const searchResults = document.getElementById('search-results');
  if (!searchResults) return;
  
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-no-results">No se encontraron resultados</div>';
  } else {
    searchResults.innerHTML = results.map(result => `
      <div class="search-result" data-video-id="${result.video.id}" ${result.chapter ? `data-chapter-time="${result.chapter.time}"` : ''}>
        <div class="search-result__title">${result.title}</div>
        <div class="search-result__meta">${result.meta}</div>
        ${result.chapter_info ? `<div class="search-result__chapter">${result.chapter_info}</div>` : ''}
      </div>
    `).join('');
  }

  searchResults.classList.remove('hidden');
}

function hideSearchResults() {
  const searchResults = document.getElementById('search-results');
  if (searchResults) {
    searchResults.classList.add('hidden');
  }
}

function findVideoById(videoId) {
  for (const section of appData.sections) {
    const video = section.videos.find(v => v.id === videoId);
    if (video) return video;
  }
  return null;
}

function getLevelClass(level) {
  switch (level) {
    case 'Básico': return 'status--success';
    case 'Intermedio': return 'status--warning';
    case 'Avanzado': return 'status--error';
    default: return 'status--info';
  }
}