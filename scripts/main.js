/*************************
 * MENU SHOW / HIDE
 */
const menuButton = document.getElementById('hamburger'); // get menu hamburger button
const menuContainer = document.getElementById('menu'); // get menu container

menuButton.addEventListener("click", handleMenu); // Attach a listener to menu button

function handleMenu () {
  menuContainer.classList.toggle('visible'); // Toggle visible class to menu container
}

/**************************
 * TO TOP
 */
document.getElementById("Top").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll window to top 0 Y coordinates
});

/*************************
 * SCROLL WINDOW EVENT
 */
document.addEventListener("scroll", (event) => { // Attach listener to scroll window event
  if (menuContainer.classList.contains('visible')) { // Check if menu is visible
    menuContainer.classList.remove('visible'); // If visible, the make it hidden by removing visible class
  }
})

/*************************
 * RESIZE WINDOW EVENT
 */
window.addEventListener("resize", (event) => {
  if (menuContainer.classList.contains('visible')) { // Check if menu is visible
    menuContainer.classList.remove('visible'); // If visible, the make it hidden by removing visible class
  }
})