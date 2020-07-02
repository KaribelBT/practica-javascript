/*Sobre su maqueta reemplazar el título mediante javascript*/
function replaceText(id, text){
    let heading = document.getElementById(id);
    let newText = document.createTextNode(text);
    return heading.firstChild.replaceWith(newText);
}
replaceText('heading', 'puto el que lo lea');

//Agregar un nuevo item al menú de navegación
var item_nuevo = document.createElement("LI"); // Crea un <li> 
var textnode = document.createTextNode("Item 5"); // Crea un text node
item_nuevo.appendChild(textnode); // Append the text to <li>
let resultado = document.getElementById("menu").appendChild(item_nuevo); // Obtiene la lista <ul> y le agrega el nuevo item
console.log(resultado)

//Luego de ǽ segundos de cargada la página reemplazar imagen
let imagen = document.getElementById('perrito1');
setTimeout(function() {
    imagen.setAttribute('src', './images/fucku.jpg')
}, 2000)

//Reemplazar el texto y que al menos Ǽ palabra esté en negrita
let newP = document.getElementById('parrafo');
heading.innerHTML = ('Puto <b>el que lo</b> lea');

//Buscar 2 usuarios válidos en la API de Github mediante una función asíncrona y completar para ambos su nombre y foto
//https://api.github.com/users/ + username
async function getUser() {
  async function fetchUser(username) {
    return fetch("https://api.github.com/users/" + username)
  }
  
  const user1Response = await fetchUser("pfmescher");
  const user2Response = await fetchUser("lucasmg-dev");
    
  const user1 = await user1Response.json();
  const user2 = await user2Response.json();
    
  document.getElementById('imagen1').src = user1.avatar_url;
  document.getElementById('imagen2').src = user2.avatar_url;

  document.getElementById('nombre1').innerHTML = user1.login;
  document.getElementById('nombre2').innerHTML = user2.login;
}

getUser();
