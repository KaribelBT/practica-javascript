/*
Traer información

En la propiedad followers_url encontramos otro endpoint para conseguir los seguidores de un usuario de github.
Sobre nuestro array de username traer cada uno de sus seguidores.

*/

async function getUser(){
    async function fetchUser(username){
        return fetch("https://api.github.com/users/" + username)
    }

    async function fetchFollowers(followersUrl){
        return fetch(followersUrl)
    }

    const userResponse = await fetchUser("karibelbt");
    const user = await userResponse.json();
      
    const followersResponse = await fetchFollowers(user.followers_url);
    const followers = await followersResponse.json();
    console.log(followers);
}

// function getUser(){
//     function fetchUser(username){
//         return fetch("https://api.github.com/users/" + username)
//     }

//     function fetchFollowers(followersUrl){
//         return fetch(followersUrl)
//     }

//     const userResponse = fetchUser("karibelbt")
//         .then( resp => resp.json() )
//         .then( user => {
//             fetchFollowers(user.followers_url)
//                 .then( resp => resp.json() )
//                 .then( followers => console.log(followers) )
//         })
// }

getUser();

