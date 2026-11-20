let userList = [];

class Users{
    name;
    lastname;
    email;
    phone;
    constructor(name, lastname, email, phone){ //es una funcion
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone =phone;
    }
}

let name = prompt('Ingresa tu nombre');
let lastname = prompt('Ingresa tu apellido');
let email = prompt('Ingresa tu email');
let phone = prompt(Number('Ingresa tu telefono'));
let user = new Users(name, lastname, email, phone);

function addUser(user){
    userList.push(user);
}

function usersList(){
   return userList;
}

addUser(user);

/* USUARIOS
window.listado_de_usuarios = [];

class usuarios {
    constructor(nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }
}

function agregarUsuario(usuario) { //ya nos dieron los datos porque son copados
    listado_de_usuarios.push(usuario);
}
function listarUsuarios() {
    console.log(listado_de_usuarios);
}
let karibel = new usuarios ('Karibel', 'Barco', 'karikpa@kpakpa.com', 1560606060);
let mery = new usuarios ('Mery', 'Baltar', 'merykpa@kpakpa.com', 15609237264);
let mauro = new usuarios ('Mauro', 'Bruera', 'maurokpo@kpokpo.com', 765878237423);

agregarUsuario(karibel);
agregarUsuario(mery);
agregarUsuario(mauro);

listarUsuarios();*/




