const lang = {
    en: {
      pageTitle: "Agustin Ciucani - Web Developer",
      navAbt: "About Me",
      navPjs: "Projects",
      navCtc: "Contact",
      homeTitle: "Hi, I'm Agustin Ciucani",
      homeSubtitle: "This is my official portfolio website to showcase all my works related to web development",
      resumeText: "Download my Resume here:",
      resumeDw: "Download",
      aboutTitle: "About Me",
      aboutText: "Hello! My name is Agustin, a 20 years old programmer who currently lives in Buenos Aires, Argentina and enjoys creating things on the internet... I'm interested on learning and getting into the world of programming. Besides music, coding is my passion and hobby. Is because of that, that I'm always interested on learning and getting into the coding world. I'm always looking for learn and incorporate new technologies to my projects. My interest in web development started in 2020 when I get graduated from high school where I learned programming and since then, I have learned a lot about HTML and CSS!",
      portfolioTitle: "Portfolio",
      project1Title: "FastFood Website",
      project2Title: "Movie Review Website",
      project3Title: "Portfolio",
      nameRepo: "Repository",
      contactTitle: "Contact",
      contactText: "Currently i'm looking for any new opportunities, my inbox is always open.<br>Feel free to contact me and talk about a freelance job, or in a company, or just chat &#128517;",
      contactSocial: "Social",
      copyright: "gustin Ciucani - All rights reserved.",
    },
    
    es: {
      pageTitle: "Agustin Ciucani - Desarrollador Web",
      navAbt: "Acerca de Mi",
      navPjs: "Proyectos",
      navCtc: "Contacto",
      homeTitle: "Hola, soy Agustin Ciucani",
      homeSubtitle: "Este es mi sitio web de portafolio oficial para mostrar todos mis trabajos relacionados con el desarrollo web",
      resumeText: "Descarga mi CV aquí:",
      resumeDw: "Descargar",
      aboutTitle: "Sobre Mí",
      aboutText: "¡Hola! Mi nombre es Agustin, un programador de 20 años que actualmente vive en Buenos Aires, Argentina y disfruta creando cosas en Internet ... Me interesa aprender y adentrarme en el mundo de la programación. Además de la música, la programación es mi pasión y hobby. Es por eso que siempre estoy interesado en aprender y adentrarme en el mundo de la programación. Siempre estoy buscando aprender e incorporar nuevas tecnologías a mis proyectos. Mi interés en el desarrollo web comenzó en 2020 cuando me gradué de la escuela secundaria donde aprendí programación y desde entonces, ¡he aprendido mucho sobre HTML y CSS!",
      portfolioTitle: "Portafolio",
      project1Title: "Sitio web de comida rápida",
      project2Title: "Sitio web de reseñas de películas",
      project3Title: "Portafolio",
      nameRepo: "Repositorio",
      contactTitle: "Contacto",
      contactText: "Actualmente estoy en busca de nuevas oportunidades y mi correo está siempre a tu disposición.<br>Siéntete libre de contactarme y hablar sobre algún trabajo freelance, en una empresa, o simplemente charlar. &#128517;",
      contactSocial: "Redes",
      copyright: "Agustin Ciucani - Todos los derechos reservados.",
    }
}

const languageSelector = document.getElementById("lang-selector");

languageSelector.addEventListener("change", () => {
  const selectedLanguage = languageSelector.value;
  const languageTexts = lang[selectedLanguage];
  const textElements = document.querySelectorAll("[data-text]");

  textElements.forEach(element => {
    const textKey = element.getAttribute("data-text");
    const textValue = languageTexts[textKey];
    element.innerHTML = textValue;
  });
});

  