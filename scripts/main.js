document.getElementById("ToAboutMeMB").addEventListener("touchend", function() {
  scrollToElement("AboutMe");
});

document.getElementById("ToProjectsMB").addEventListener("touchend", function() {
  scrollToElement("Projects");
});

document.getElementById("ToContactMB").addEventListener("touchend", function() {
  scrollToElement("Contact");
});

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  var windowHeight = window.innerHeight;
  var halfWindowHeight = windowHeight / 2.8;
  var offset = element.getBoundingClientRect().top - halfWindowHeight;
  window.scroll({
    top: offset,
    behavior: "smooth"
  });
}


document.getElementById("ToAboutMe").addEventListener("click", function() {
  scrollToElement("AboutMe");
});

document.getElementById("ToProjects").addEventListener("click", function() {
  scrollToElement("Projects");
});

document.getElementById("ToContact").addEventListener("click", function() {
  scrollToElement("Contact");
});

document.getElementById("ToAboutMeMB").addEventListener("click", function() {
  scrollToElement("AboutMe");
});

document.getElementById("ToProjectsMB").addEventListener("click", function() {
  scrollToElement("Projects");
});

document.getElementById("ToContactMB").addEventListener("click", function() {
  scrollToElement("Contact");
});


// Get the button:
let mybutton = document.getElementById("Top");

// When the user clicks on the button, scroll to the top of the document
document.getElementById("Top").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})


const button = document.getElementById("hamburger");
const div = document.getElementById("menu-div");
div.style.display = "none";

button.addEventListener("click", function() {
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 1000) {
    div.style.display = "none";
  }
});


// Crear el observador de intersección
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Si el elemento ya no es visible en la pantalla
    if (!entry.isIntersecting) {
      // Ocultar el elemento
      entry.target.style.display = "none";
    }
  });
});

// Obtener el elemento a observar
const elementoAObservar = document.getElementById("menu-div");

// Observar el elemento
observer.observe(elementoAObservar);