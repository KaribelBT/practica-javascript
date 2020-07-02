/*Algoritmo
    
    DATOS
        numero (numeros ingresados por usuario)
        suma (sumatoria de los numeros ingresados de 1 digito)
        n (cantidad de numeros ingresados de 1 digito)
        promedio (promedio de numeros ingresados de 1 digito)

    INICIO
        
        HACER
            PEDIR numero
            VALIDAR que numero sea entero
            SI numero es de 1 digito 
                suma = suma + numero 
                n = n + 1    
        HASTA QUE usuario ingrese salir
        
        CALCULAR promedio = suma / n

        MOSTRAR promedio de los numeros de 1 digito
    FIN
*/

let numero = 0;
let suma = 0;
let n = 0;
let promedio = 0;

do{
    numero = prompt("Ingresa varios números y luego SALIR para terminar");
    
    if(numero <= 9){
        numero = parseInt(numero);
        suma= suma + numero;
        n++;
    }
}while(numero != 'salir'); 

promedio = suma / n;

alert('El promedio de los números de un digito ingresados es: '+promedio);