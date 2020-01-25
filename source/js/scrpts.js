var menu=document.querySelector(".main-menu");
var sandwich=document.querySelector(".main-menu__sandwich");


if (menu.classList.contains("main-menu--no-js")) {
  menu.classList.remove('main-menu--no-js');
}

if (sandwich.classList.contains("main-menu__sandwich--no-js")) {
  sandwich.classList.remove('main-menu__sandwich--no-js');
}

sandwich.addEventListener("click", function(evt) {
  sandwich.classList.toggle('main-menu__sandwich--close');
  menu.classList.toggle('main-menu--show');
});
