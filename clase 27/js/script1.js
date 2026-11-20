let calc = function calc(n1, operation){
    if(typeof operation !== 'function'){
        throw new Error ('Esto no es una función');
    }
    console.log('Hola calc');
    return operation(n1)
}

let fun1 = function() {
    console.log('Hola Callback')
}

let cuadrado = function (n1){
    return Math.pow(n1, 2);
}

let raizCuadrada = function (n1){
    return Math.sqrt(n1);
}

let prime = function(n1){ //https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php//
  if(n1===1){
    return false;
  }
  else if(n1===2){
   return true;
  }
  else{
    for(var x = 2; x < n1; x++)
    {
      if(n1 % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

let factorial = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

console.log(calc(18, factorial));