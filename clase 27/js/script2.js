let arr = [];
let add = function(arr, operation){
    return operation(arr);
};

let addBegin = function(arr){
    arr.unshift(1);
    return arr;
}

let addEnd = function(arr){
    arr.push(5);
    return arr;
}

console.log(add(arr, addBegin));
console.log(add(arr, addEnd));

let deleteLast = () => arr.pop();

console.log(deleteLast());