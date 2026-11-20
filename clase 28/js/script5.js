let numero = parseFloat(prompt('Ingresa un numero'));

let suma = function(numero){
    sumatoria = numero+numero;
    return(sumatoria);
}

let cuadrado = Math.pow(numero, 2);

let raizCuadrada = Math.sqrt(numero);

let f = [];
let factorial = function(numero) {
  if (numero == 0 || numero == 1)
    return 1;
  if (f[numero] > 0)
    return f[numero];
  return f[numero] = factorial(numero-1) * numero;
} 

let promise1 = new Promise((resolve, reject) => {
    resolve(suma(numero));
}) 

let promise2 = new Promise((resolve, reject) => {
    resolve(cuadrado);
})
let promise3 = new Promise((resolve, reject) =>{
    resolve(raizCuadrada);
})

let promise4 = new Promise((resolve, reject) => {
    resolve(factorial(numero));
})

promise1.then ((response) => {
    console.log(response);
    return promise2;
})
.then((response2) => {
    console.log(response2);
    return promise3;
})
.then((response3) =>{
    console.log(response3);
    return promise4;
})
.then((response4) =>{
    console.log(response4);
})
.catch((error) =>{
    console.log(error);
})