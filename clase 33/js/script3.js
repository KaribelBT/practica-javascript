/* Paso 1: Utilizar LocalStorage para guardar los datos de la sesión. 
Comprobar que todo funcione cerrando el navegador y volviéndolo a abrir.

Paso 2: Agregar funcionalidad para cerrar sesión.

Paso 3: Agregar funcionalidad de “Recordar mi usuario” en el reinicio de sesión.

Paso 4: Una vez logueado, el usuario tiene que poder ver un formulario para guardar datos personales como:
Nombre / Apellido / DNI / Fecha Nacimiento / Hobbies Favoritos
Al presionar “Guardar”, se tienen que guardar en el navegador en formato JSON.

Paso 5 Al ingresar, el sitio tiene que mostrar los datos cargados en el formulario.*/


document.getElementById("logOut").style.display = "none";
document.getElementById("formulario").style.display = "none";
document.getElementById("datosRecordados").style.display = "none";

let usuarioRecordado = localStorage.usuario; //localStorage es una clase y le asigné la propiedad usuario
let datosRecordados = localStorage.datos;

//funcionalidad recordar usuario
if(usuarioRecordado !== undefined){
    document.getElementById("logIn").style.display = "none";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("formulario").style.display = "block";
}

//funcionalidad para loguearse
document.getElementById("btnLogIn").addEventListener("click", function displayPrompt(){
    let usuario = document.getElementById("usuario").value; //.value obtiene lo que ingreso en el input
    let contrasena = document.getElementById("contrasena").value;
    if(usuario === 'pepegrillo' && contrasena === 'abcd') {
        alert('Bienvenido ' + usuario + '!');
        let recordarUsuario = document.getElementById("recordarUsuario").checked;//.checked obtiene infor de si se clickeó o no
        if(recordarUsuario == true){
            localStorage.setItem('usuario', usuario);
        }
        document.getElementById("logIn").style.display = "none";
        document.getElementById("logOut").style.display = "block";
        document.getElementById("formulario").style.display = "block";
    } else {
        alert('Ha ingresado un usuario y/o contraseña incorrectos.')
    }
}); 

//funcionalidad mostrar datos del formulario
if(datosRecordados !== undefined){
    document.getElementById("formulario").style.display = "none";
    document.getElementById("datosRecordados").style.display = "block";
    datosRecordados = JSON.parse(datosRecordados);
    document.getElementById("nombreRecordado").innerText = datosRecordados.nombre;
    document.getElementById("apellidoRecordado").innerText = datosRecordados.apellido;
    document.getElementById("fechaRecordado").innerText = datosRecordados.fecha;
    document.getElementById("hobbiesRecordado").innerText = datosRecordados.hobbies;
}

//funcionalidad guardar datos formulario y mostrarlos
document.getElementById("saveForm").addEventListener("click", function saveForm(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let fecha = document.getElementById("fecha").value;
    let hobbies = document.getElementById("hobbies").value;
    let datos = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        fecha: fecha,
        hobbies: hobbies
    }
    datos = JSON.stringify(datos);
    localStorage.setItem('datos', datos);
});

//funcionalidad para desloguearse
document.getElementById("logOut").addEventListener("click", function logOut(event){
    event.preventDefault();
    localStorage.removeItem('usuario');
    document.getElementById("formulario").style.display = "none";
    document.getElementById("logOut").style.display = "none";
    alert('Cerraste sesión');
    document.getElementById("logIn").style.display = "block";
});