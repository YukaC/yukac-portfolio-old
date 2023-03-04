const buttonHamb = document.getElementById("hamburger");
const div = document.getElementById("menu-div");

addScrollEvent("ToAboutMe", "AboutMe");
addScrollEvent("ToProjects", "Projects");
addScrollEvent("ToContact", "Contact");

function addScrollEvent(elementId, targetId) {
  document.getElementById(elementId).addEventListener("click", function() {
    scrollToElement(targetId);
  });
}

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

document.getElementById("Top").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 1000) {
    div.style.display = "flex";
  } else {
    div.style.display = "none"
  }
});

function menu() {
  
  div.style.display = "none";
  if (div.style.display === "none") {
    div.style.display = "flex";
    window.addEventListener("touchstart", menuCloseHandler);
    document.addEventListener("click", menuCloseHandler);
    window.addEventListener("scroll", scrollHandler);
  } else {
    div.style.display = "none";
    window.removeEventListener("touchstart", menuCloseHandler);
    document.removeEventListener("click", menuCloseHandler);
    window.removeEventListener("scroll", scrollHandler);
  }
}

function menuCloseHandler() {
  const menuDiv = document.getElementById("menu-div");
  document.addEventListener("click", function(event) {
    const clickedElement = event.target;
    if (clickedElement !== div && !buttonHamb.contains(clickedElement) && !menuDiv.contains(clickedElement)) {
      menuDiv.style.display = "none";
    } else {
      menuDiv.style.display = "flex";
    }
  });
}

function scrollHandler() {
  div.style.display = "none";
  document.removeEventListener("touchstart", menuCloseHandler);
  document.removeEventListener("mousedown", menuCloseHandler);
  window.removeEventListener("scroll", scrollHandler);
}

buttonHamb.addEventListener("click", menu);