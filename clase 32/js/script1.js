//Cambiar la imagen principal, con un delay de 3 seg. Utilizar fetch invocando a una imagen cargado en nuestra pc.
function loadImage(){
const image = document.getElementById('perrito1');
fetch('/images/fucku.jpg')
    .then(function(response) {
        return response.blob();
    })
    .then(function(miBlob) {
        const objectURL = URL.createObjectURL(miBlob);
        const imageHTML = document.getElementById('imagen')
        setTimeout(() => {
            imageHTML.src = objectURL;    
        }, 3000);
    });
}

//Crear dinámicamente el menú después de 3 seg. Utilizar fetch invocando a un archivo que contenga el html del menú.
function loadMenu(){
const menu = document.getElementById('menu');
fetch('/menu.html')
    .then( resp => resp.text() )
    .then( ul => {
        setTimeout(() => {
            menu.innerHTML = ul;    
        }, 3000);
    }) 
}

/*Obtener el logo y cargar logo Vamos a buscar una imagen desde una url inexistente, esto lanzará un ERROR.
Cuando ocurra el error, manejarlo y buscar otra imagen (default) desde mi ruta local y cargarla.*/
function loadLogo(){
const logo = document.getElementById('logo');
fetch('/images/loguito.jpg')
    .then(response =>{
        if (response.status !== 200){
            let newImage= document.createElement('IMG');
            newImage.setAttribute('src', '/images/logo.png');
            logo.appendChild(newImage);
            logo.removeChild(logo.firstElementChild)
        }
    })
}

//hacer una función para ejecutar el resto
function integradora(){
    loadImage()
    loadMenu()
    loadLogo()
}

integradora()