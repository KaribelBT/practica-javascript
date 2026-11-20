/*
DATOS
numero = numero ingresado por el usuario
letra = numero convertido en letra

INICIO

PEDIR un numero entre 1 y 10

SI (numero <= 10)
CONVERTIRLO a una letra siendo 1=a y 10=j
MOSTRAR el resultado

SINO
MOSTRAR error

FIN

*/

let numero = parseInt(prompt('Ingrese un numero entre 1 y 10'));

if(numero <= 10){
    let letra =  String.fromCharCode(numero+64);
    alert('El numero ingresado equivale a la letra: '+letra);
}
else{
    alert('El numero ingresado no es válido');
}

