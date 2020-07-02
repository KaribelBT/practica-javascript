class users{
    constructor (nombre, apellido, email, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }
    isAdult(){
        if (this.edad > 18){
            return true;
        }
        else {
            return false;
        }
    } 
    getFullName(){
        return this.nombre +' '+ this.apellido; 
    }
}

let user = new users ('Karibel', 'Barco', 'karibel.barco@gmail.com', 28);

console.log(user.isAdult());
console.log(user.getFullName());
