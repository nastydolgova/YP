const mainNav = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.main-nav__toogle');


mainNav.classList.remove('main-nav--no-js');

menuBtn.addEventListener('click', openMenu );

function openMenu(){
    mainNav.classList.toggle('main-nav--closed');
    menuBtn.classList.toggle('main-nav__toogle--close');
}
