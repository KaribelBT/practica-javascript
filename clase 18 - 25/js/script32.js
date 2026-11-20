let listado_perros = [];
let raza;
let nombre;
let peso;
let edad;

class perros{
    constructor (raza, nombre, peso, edad){
        this.raza = raza;
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
}

do{
    raza = prompt('Ingresa raza del perro');
    if (raza == 'stop'){
        break}
    nombre = prompt('Ingresa nombre del perro');
    peso = prompt('Ingresa peso del perro');
    edad = prompt('Ingresa edad del perro');
    let perro = new perros ( raza, nombre, peso,edad);
    listado_perros.push(perro);
}while(true)
    
console.log(listado_perros)