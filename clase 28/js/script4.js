let random1 = Math.floor(Math.random() * 1000); 

let random2 = Math.floor(Math.random() * 1000); 

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('lista promise1'), random1);
}) 

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('rechazada promise2'), random2);
}) 

Promise.race([promise1, promise2])
.then((response) => {
    console.log(response);
})
.catch((reject) =>{
    console.log(reject);
})