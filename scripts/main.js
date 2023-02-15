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
    var offset = element.getBoundingClientRect().top - (window.innerHeight / 2);
  
    // Realizar un scroll suave a la posición de desplazamiento
    window.scroll({
      top: offset,
      behavior: "smooth"
    });
  });