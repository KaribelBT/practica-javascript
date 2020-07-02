let promise1 = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('listo'), 2000);
})
 promise1.then( (response) => console.log (response));

 