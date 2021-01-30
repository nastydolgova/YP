const fotoBox = document.querySelector('.page-main--gallery');

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
