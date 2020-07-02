/*Traer información
Sobre siguiente endpoint
https://jsonplaceholder.typicode.com/users
Generar una promesa que muestre los nombres de usuario una vez que la llamada al endpoint este completa*/

const url = 'https://jsonplaceholder.typicode.com/users';

function fetchUrl(url){
    fetch(url)   
        .then(response => response.json())
        .then(response => { 
            for (let i=0; i<response.length ; i++){
                console.log(response[i].name)
            }
        }).catch(error =>{
            console.error('fetch failed', error);
        });
}

fetchUrl(url);