let random = 0;

let promise3 = new Promise(function (resolve, reject){
    random = Math.floor((Math.random() * 100));
    if (random % 2 == 0){
        resolve('El numero es par');
    }else{
        reject('El numero es impar');
    }
})

promise3
    .then(function (response){
        console.log(response + ': ' + random);
    })
    .catch(function (error){
        console.log(error + ': ' + random);
    })