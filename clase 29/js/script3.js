/*Traer información

Sobre siguiente endpoint
https://api.github.com/users/ + username
Generar un array de username válidos de github, mostrar los resultados

Listado de usuarios activos en github
https://commits.top/ */

async function getUser() {
    async function fetchUser(username) {
        return fetch("https://api.github.com/users/" + username)
    }
    const userResponse = await fetchUser('KaribelBT');
    const user1 = await userResponse.json();
    console.log(user1)
}
  
getUser();