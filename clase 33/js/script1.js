/*Utilizando prompts, crear un objeto Persona que tenga los siguientes datos:
- Nombre
- Apellido
- Fecha de Nacimiento
Luego, guardarlo como JSON y mostrarlo por consola.*/

const persona = {
    nombre: prompt('Nombre'),
    apellido: prompt ('Apellido'),
    nac: prompt('Fecha de Nacimiento')
}

const personaJSON = JSON.stringify(persona);
console.log(personaJSON);