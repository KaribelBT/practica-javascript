/*¿Cómo agregarían una nueva propiedad Fecha de Nacimiento a ese JSON?
¿Cuál les parece que es la forma más adecuada para hacerlo?*/

const persona = {
    nombre: prompt('Nombre'),
    apellido: prompt ('Apellido'),
    nac: prompt('Fecha de Nacimiento')
}

const personaJson = JSON.stringify(persona);
console.log(personaJson);

const personaParseada = JSON.parse(personaJSON);
console.log(personaParseada);

persona.Parseada.tieneHambre = true;
const personaParseada = JSON.parse(personaJSON);
console.log(personaParseada);

