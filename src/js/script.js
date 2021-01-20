const mainNav = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.main-nav__toogle');
const fotoBox = document.querySelector('.page-main--gallery');

mainNav.classList.remove('main-nav--no-js');

menuBtn.addEventListener('click', openMenu );

function openMenu(){
    mainNav.classList.toggle('main-nav--closed');
    menuBtn.classList.toggle('main-nav__toogle--close');
}

fetch( '../foto.json')
    .then((res) => res.json())
    .then(data => setFoto(data));

function setFoto({name, fotos}){
    fotoBox.insertAdjacentHTML(
        'afterbegin',
        `
         ${fotos.map((f) => `<img class="foto-item" src="${f.urlfoto}">`).join(' ')} 
        `
    )
}
