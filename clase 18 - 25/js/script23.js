/*
Superficie

DATOS
radio = 'Radio ingresado por el usuario'
pi = constante 3.14
superficie = superficie calculada

INICIO
    PEDIR un radio al usuario
    VALIDAR que el radio sea un numero entero
    CALCULAR superficie
        pi * radio * radio 
    MOSTRAR superficie
FIN
*/

const pi = 3.14159265359;
let radio = parseFloat(prompt('Ingrese el radio del circulo para calcular su superficie '))

function calcularSuperficie(radio){
    let superficie = radio * radio * pi 
    alert('La superfice del círculo es: '+superficie)
} 

calcularSuperficie(radio);
