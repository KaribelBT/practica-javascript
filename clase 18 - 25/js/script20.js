/*Algoritmo

DATOS
    numero (numero ingresado por el usuario)
    par (numeros pares)
    impar (numeros impares)

INICIO
    HACER
        PEDIR numero
        VALIDAR que numero sea entero
        SI(numero es divisible/2)
            ACUMULAR en par
        SINO
            ACUMULAR en impar
    HASTA QUE usuario ingrese 0
    SI(par > impar)
        MOSTRAR par
    O SI(par < impar)
        MOSTRAr impar
    SINO 
        MOSTRAR "empate"
   
FIN
*/

let numero = 1;
let par = 0;
let impar = 0;

do{
    numero = parseInt(prompt('Ingresa un numero'));
    if (numero ==0){
        break;
    }
    if(numero % 2){
        impar++
    }
    else{
        par++
    }
}while(numero !==0);

if(par > impar){
    alert('Ingresaste más números pares');
}
else if(par < impar){
    alert('Ingresaste más números impares');
}
else{
    alert('Ingresaste la misma cantidad de números pares e impares');
}
