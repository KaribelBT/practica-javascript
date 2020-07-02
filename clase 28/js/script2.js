let promise2 = new Promise( (resolve, reject) => {
    setTimeout( () => reject('rechazado'), 1000);
})
 promise2.catch( (error) => console.log (error));