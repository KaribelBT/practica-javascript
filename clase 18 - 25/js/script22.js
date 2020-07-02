/*
Validar credenciales

DATOS
usuario = constante nombre de usuario
contraseña = constante contraseña
usuarioIngresado = nombre de usuario que ingresen
contraseñaIngresada = contraseña que ingresen

INICIO
    PEDIR nombre de usuario
    PEDIR contraseña
    VALIDAR que sean correctos
        SI son correctos mostrar 'OK'
        Sino mostrar 'Verificá los datos ingresados'
FIN
*/

const usuario = 'Karibel';
const contrasena = 'hola123';

function validarCredenciales (usuario, contrasena){
    let usuarioIngresado = prompt('Ingrese su usuario aquí');
    let contrasenaIngresada = prompt('Ingrese su contraseña aquí');
    alert(((usuario == usuarioIngresado) && (contrasena == contrasenaIngresada)) ? "OK":"Verificá los datos ingresados");
}

validarCredenciales(usuario, contrasena);
