// Array of article objects with images added
const articles = [
  { Article: 1, Tittle: "Cómo Certificaciones Profesionales Pueden Impulsar tu Empleabilidad", content: "Descubre por qué las certificaciones son clave para destacar en un mercado laboral competitivo.", image: "Images/content/Certification.webp", url: "Articles/Article1.html" },

  { Article: 2, Tittle: "Los Mejores Consejos para Aprender y Retener Información Efectivamente", content: "Exploramos estrategias comprobadas para mejorar la retención de información y acelerar tu proceso de aprendizaje.", image: "Images/content/Certification.webp", url: "Articles/Article2.html" },
  
  { Article: 3, Tittle: "A Estudiar en Grupo vs. Estudiar Solo: Pros y Contras", content: "Evaluamos los pros y contras de estudiar solo o en grupo, y te damos recomendaciones.", image: "Images/content/Group.webp", url: "Articles/Article3.html" },
  
  { Article: 4, Tittle: "Cómo Equilibrar el Trabajo y el Aprendizaje para Avanzar en tu Carrera", content: "Este artículo ofrece técnicas de gestión del tiempo y planificación.", image: "Images/content/balance.webp", url: "Articles/Article4.html" },
  
  { Article: 5, Tittle: "Transformando el Mundo del Trabajo: Las Habilidades Blandas que las Empresas Buscan", content: "Destacamos las habilidades interpersonales más valoradas en el mercado actual.", image: "Images/content/world.webp", url: "Articles/Article5.html" },
  
  { Article: 6, Tittle: "Cómo Crear un Plan de Aprendizaje Personalizado para el Éxito Profesional", content: "Descubre cómo estructurar tus metas de aprendizaje y elige los cursos adecuados.", image: "Images/content/path.webp", url: "Articles/Article6.html" },
  
  { Article: 7, Tittle: "Inteligencia Emocional: La Clave para un Entorno Laboral Saludable", content: "Este artículo explora cómo desarrollar la autoconciencia y el control emocional.", image: "https://via.placeholder.com/300x200?text=Inteligencia+Emocional", url: "Articles/Article7.html" },
  
  { Article: 8, Tittle: "El Futuro del Trabajo: Habilidades Digitales que Todos Necesitan", content: "Te mostramos qué habilidades tecnológicas son imprescindibles.", image: "https://via.placeholder.com/300x200?text=Habilidades+Digitales", url: "Articles/Article8.html" },
  
  { Article: 9, Tittle: "Cómo Aprovechar el Networking para Crecer Profesionalmente", content: "Aprende técnicas efectivas para construir y mantener una red de contactos.", image: "https://via.placeholder.com/300x200?text=Networking", url: "Articles/Article9.html" },
  
  { Article: 10, Tittle: "Mindfulness para Profesionales: Estrategias para Reducir el Estrés y Mejorar el Enfoque", content: "Explora prácticas simples para reducir el estrés y aumentar tu productividad.", image: "https://via.placeholder.com/300x200?text=Mindfulness", url: "Articles/Article10.html" },
  
  { Article: 11, Tittle: "Aprendizaje Continuo: La Importancia de Mantenerse Actualizado en tu Industria", content: "Conoce la importancia del aprendizaje continuo y cómo impacta tu carrera.", image: "https://via.placeholder.com/300x200?text=Aprendizaje+Continuo", url: "Articles/Article11.html" },
  
  { Article: 12, Tittle: "Técnicas para Mejorar tus Habilidades de Comunicación Profesional", content: "Este artículo cubre técnicas de comunicación esenciales.", image: "https://via.placeholder.com/300x200?text=Habilidades+de+Comunicación", url: "Articles/Article12.html" }
];

// Initial setup
let currentIndex = 0;
let clickCount = 0;
let articlesPerPage = 6; // Start with 6 articles per page


// Function to update the number of articles per page
function updateArticlesPerPage(newValue) {
  articlesPerPage = newValue;
  console.log("Updated articles per page:", articlesPerPage);
}

// Function to render articles based on currentIndex and articlesPerPage
function renderArticles() {
  const postsBlock = document.getElementById("postsBlock");
  postsBlock.innerHTML = '';  // Clear previous content

  const endIndex = Math.min(currentIndex + articlesPerPage, articles.length);
  for (let i = currentIndex; i < endIndex; i++) {
    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
      <a href="${articles[i].url}" style="text-decoration: none; color: inherit;" onclick="stopRendering();">
        <img src="${articles[i].image}" alt="${articles[i].Tittle}">
        <h2>${articles[i].Tittle}</h2>
        <p>${articles[i].content}</p>
      </a>
    `;
    postsBlock.appendChild(post);
  }

  // Update button visibility and text
  const showButton = document.getElementById("show");
  if (currentIndex + articlesPerPage >= articles.length) {
    showButton.innerText = "Mostrar Menos";
  } else {
    showButton.innerText = "Mostrar Más...";
  }
}

// Function to handle button clicks
function handleButtonClick() {
  clickCount++; // Increment the click count

  if (clickCount === 1) {
    // First click action - load more articles
    console.log("First click: Load more articles");
    updateArticlesPerPage(12); // Update to show more articles
    renderArticles(); // Render articles with the new limit

  } else if (clickCount === 2) {
    // Second click action - reset view
    console.log("Second click: Show fewer articles");
    currentIndex = 0; // Reset to the start
    updateArticlesPerPage(6); // Reset to initial value
    renderArticles(); // Render with the reset limit
    clickCount = 0; // Reset the click count for the next cycle
  }
}

// Initial render
renderArticles();

// Add click event listener to the button
document.getElementById("show").addEventListener("click", handleButtonClick);
