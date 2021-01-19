let mainNav = document.querySelector('.main-nav');
let menuBtn = document.querySelector('.main-nav__toogle');

mainNav.classList.remove('main-nav--no-js');

menuBtn.addEventListener('click', openMenu );

function openMenu(){
    mainNav.classList.toggle('main-nav--closed');
    bgDiv.classList.toggle('hidden');
    menuBtn.classList.toggle('main-nav__toogle--close');
}