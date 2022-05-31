const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    /* Condición para comprobar si la clase navMenu contiene
    la clase nav-menu_visible y por tanto, cambiar el aria-lavel
    a Cerrar Menú. De lo contrario, Abrir menú.
    (Hecho para personas discapacitadas) */
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});