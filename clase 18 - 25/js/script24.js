/*
INICIO
Hacer
    n1 = Ingrese un numero
    n2 = Ingrese otro numero

    Si (n1 y n2 son numeros enteros)
        Mostrar suma de n1 y n2
    
    No 
        Mensaje de error

Repetir mientras suma sea menor a 100

Mostrar error mientras una excepción
FIN
*/

let suma= 0;

function sumarDosNumeros(){
    
    while (suma < 100){
        let n1 = Number(prompt('Ingrese un número'));
        let n2 = Number(prompt('Ingrese otro número'));
        if(n1 % 1 == 0 && n2 % 1 == 0){
            suma = n1 + n2;
            alert('La suma de dos números enteros es: '+ suma);
        }
        else{
            throw new Error('No se pueden sumar decimales')
        }
    }
}
sumarDosNumeros()







