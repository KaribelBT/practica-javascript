let valor_ingresado;
let lista_numeros = [];
let n_chico = 0; 
let n_alto = 0;
 
do{
    valor_ingresado = prompt('Ingrese un número');
    if(valor_ingresado == Number(valor_ingresado) && !isNaN(valor_ingresado)){
        if (valor_ingresado == 0){
            break;
        }
        else{
            lista_numeros.push(valor_ingresado);    
        }
    }
}while (valor_ingresado !==0)
    

n_alto = Math.max.apply(null, lista_numeros); 
n_chico = Math.min.apply(null, lista_numeros); 
alert(n_alto);
alert(n_chico);
