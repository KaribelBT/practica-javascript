/*
"Stop"

DATOS

lista_de_numeros
valor_ingresado
valor_transformado


REPETIR 
    PEDIR valor_ingresado
    SI valor_ingresado es un número distinto a NaN
        ANEXAR valor_ingresado a lista_de_numeros
MIENTRAS valor_ingresado pasado a minúscula sea distinto de "Stop"
MOSTRAR lista_de_numeros
*/

let lista_de_numeros = new Array();
let valor_ingresado;
let valor_transformado;

do{
    valor_ingresado = prompt('Ingrese un número');
    valor_transformado = Number(valor_ingresado);
    if(!isNaN(valor_transformado)){
        lista_de_numeros.push(valor_ingresado);
    }
} while (valor_ingresado.toLowerCase() !== 'stop');

alert(lista_de_numeros);