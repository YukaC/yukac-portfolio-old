document.getElementById("ToAboutMe").addEventListener("click", function() {
    // Buscar el elemento que deseas centrar en la pantalla
    var element = document.getElementById("AboutMe");
  
    // Calcular la posición de desplazamiento para centrar el elemento en la pantalla
    var offset = element.getBoundingClientRect().top - (window.innerHeight / 2.8);
  
    // Realizar un scroll suave a la posición de desplazamiento
    window.scroll({
      top: offset,
      behavior: "smooth"
    });
  });
  
  document.getElementById("ToProjects").addEventListener("click", function() {
    // Buscar el elemento que deseas centrar en la pantalla
    var element = document.getElementById("Projects");
  
    // Calcular la posición de desplazamiento para centrar el elemento en la pantalla
    var offset = element.getBoundingClientRect().top - (window.innerHeight / 4);
  
    // Realizar un scroll suave a la posición de desplazamiento
    window.scroll({
      top: offset,
      behavior: "smooth"
    });
  });
  
  document.getElementById("ToContact").addEventListener("click", function() {
    // Buscar el elemento que deseas centrar en la pantalla
    var element = document.getElementById("Contact");
  
    // Calcular la posición de desplazamiento para centrar el elemento en la pantalla
    var offset = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, offset);
  
    // Realizar un scroll suave a la posición de desplazamiento
    window.scroll({
      top: offset,
      behavior: "smooth"
    });
  });

// Get the button:
let mybutton = document.getElementById("Top");

// When the user clicks on the button, scroll to the top of the document
document.getElementById("Top").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})