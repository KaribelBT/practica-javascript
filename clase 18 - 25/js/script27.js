/*

DATOS

valor_ingresado
lista_pares
lista_impares
lista_otros

REPETIR 
    PEDIR valor_ingresado
    SI valor_ingresado es un número distinto a NaN
        SI valor_ingresado es par 
            ANEXAR valor_ingresado a lista_pares
        SINO 
            ANEXAR valor_ingresado a lista_impares
    SINO 
        ANEXAR valor_ingresado a lista_otros
MIENTRAS valor_ingresado sea distinto de 0

MOSTRAR lista_de_numeros

*/

let valor_ingresado;
let lista_pares = new Array();
let lista_impares = new Array();
let lista_otros = new Array();

do{
    valor_ingresado = prompt('Ingrese un número');

    if(valor_ingresado == Number(valor_ingresado) && !isNaN(valor_ingresado)){
        if (valor_ingresado == 0){
            break;
        }      
        if(valor_ingresado % 2 == 0){
            lista_pares.push(valor_ingresado);
        } else{
            lista_impares.push(valor_ingresado);
        }            
    } else{lista_otros.push(valor_ingresado)}
} while (valor_ingresado !==0);

alert('Array Par: '+lista_pares+'Array Impar; '+lista_impares+'Array Otros: '+lista_otros);