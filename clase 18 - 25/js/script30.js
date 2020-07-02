class users{
    constructor (nombre, apellido, email, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }
}

let user = new users ('Karibel', 'Barco', 'karibel.barco@gmail.com', 28);

alert("Tus datos son: Nombre: " + user.nombre + ", Apellido: " + user.apellido + ", Email: " + user.email)

