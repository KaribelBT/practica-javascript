/*function pedir_datos() {
  var user = {
    nombre: "",
    apellido: "",
    email: ""
  }  
  
  user.nombre = prompt("Cual es tu primer nombre?")
  user.apellido = prompt("Cual es tu apellido?")
  user.email = prompt("Cual es tu email?")  
  
  return user;
}

let usuario = pedir_datos();

alert("Tus datos son: Nombre " + usuario.nombre + ", Apellido: " + usuario.apellido + ", Email: " + usuario.email) */

/*
var user = {}

user.nombre = prompt("Cual es tu primer nombre?")
user.apellido = prompt("Cual es tu apellido?")
user.email = prompt("Cual es tu email?")

alert("Tus datos son: Nombre " + user.nombre + ", Apellido: " + user.apellido + ", Email: " + user.email)*/

var user = {
    nombre: "",
    apellido: "",
    email: "",
    fulldatos: function () {
      return "Nombre " + this.nombre + " Apellido " + this.apellido + " Email " + this.email;
    }
  }
  user.nombre = prompt("Cual es tu primer nombre?");
  user.apellido = prompt("Cual es tu apellido?");
  user.email = prompt("Cual es tu email?");
  
  alert("Tus datos completos son: " + user.fulldatos());