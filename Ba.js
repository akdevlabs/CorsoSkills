
  const articles = [
    { Article: 1, Tittle: "Cómo Certificaciones Profesionales Pueden Impulsar tu Empleabilidad", content: "Descubre por qué las certificaciones son clave para destacar en un mercado laboral competitivo.", image: "https://via.placeholder.com/300x200?text=Certificaciones" },
    { Article: 2, Tittle: "Los Mejores Consejos para Aprender y Retener Información Efectivamente", content: "Exploramos estrategias comprobadas para mejorar la retención de información y acelerar tu proceso de aprendizaje.", image: "https://via.placeholder.com/300x200?text=Retención+de+Información" },
    { Article: 3, Tittle: "A Estudiar en Grupo vs. Estudiar Solo: Pros y Contras", content: "Evaluamos los pros y contras de estudiar solo o en grupo, y te damos recomendaciones.", image: "https://via.placeholder.com/300x200?text=Estudio+en+Grupo+vs+Solo" },
    { Article: 4, Tittle: "Cómo Equilibrar el Trabajo y el Aprendizaje para Avanzar en tu Carrera", content: "Este artículo ofrece técnicas de gestión del tiempo y planificación.", image: "https://via.placeholder.com/300x200?text=Trabajo+y+Aprendizaje" },
    { Article: 5, Tittle: "Transformando el Mundo del Trabajo: Las Habilidades Blandas que las Empresas Buscan", content: "Destacamos las habilidades interpersonales más valoradas en el mercado actual.", image: "https://via.placeholder.com/300x200?text=Habilidades+Blandas" },
    { Article: 6, Tittle: "Cómo Crear un Plan de Aprendizaje Personalizado para el Éxito Profesional", content: "Descubre cómo estructurar tus metas de aprendizaje y elige los cursos adecuados.", image: "https://via.placeholder.com/300x200?text=Plan+de+Aprendizaje" },
  ];

  // Get the ID from URL
  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get("id"));

  // Find the article by ID
  const article = articles.find(article => article.Article === articleId);

  if (article) {
    // Populate HTML with article data
    document.getElementById("articleTitle").innerText = article.Tittle;
    document.getElementById("articleImage").src = article.image;
    document.getElementById("articleImage").alt = article.Tittle;
    document.getElementById("articleBody").innerText = article.content;
  } else {
    document.getElementById("articleContent").innerHTML = "<p>Artículo no encontrado.</p>";
  }