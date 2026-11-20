/*
Traer información
Sobre siguiente endpoint
https://jsonplaceholder.typicode.com/users
Generar una función asíncrona que muestre los nombres de usuario una vez que la llamada al endpoint este completa
*/

const url = 'https://jsonplaceholder.typicode.com/users';

async function fetchUrl(url){
    try {
        const response = await fetch(url);
        const users = await response.json();
        for(let i = 0; i<users.length; i++){
            console.log(users[i].name);
        }
    } catch (error) {
        console.log('fetch failed', error);
    }
}

fetchUrl(url);