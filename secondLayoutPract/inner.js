let navBar_button = document.querySelector("#drop-down_menu");
let navBar_menu = document.querySelector("#nav-Bar_menu");
let mainCont = document.querySelector(".main-cont");
let nav_links = document.querySelector("#nav-links");

navBar_button.addEventListener('click', function (event){
    event.stopPropagation(); // предотвращаем распространение события на родительские элементы

    navBar_menu.classList.toggle("nav-bar_active");
    nav_links.classList.toggle("nav-links_active");

    // Добавляем обработчик клика на mainCont только если меню активно
    if (navBar_menu.classList.contains("nav-bar_active")) {
        mainCont.addEventListener('click', closeMenuOutside);
    } else {
        mainCont.removeEventListener('click', closeMenuOutside);
    }
});

function closeMenuOutside(event) {
    if (!navBar_menu.contains(event.target)) {
        navBar_menu.classList.remove("nav-bar_active");
        nav_links.classList.remove("nav-links_active");
        mainCont.removeEventListener('click', closeMenuOutside);
    }
}
