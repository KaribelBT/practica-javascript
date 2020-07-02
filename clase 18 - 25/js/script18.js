let edad = 1;

let personasMayores = 0;

do{
    edad = parseInt(prompt("Ingresa tu edad"));
    if (edad>=18){
        personasMayores++;
    }
}while(edad>0)

console.log("La cantidad de personas mayores de 18 es: "+personasMayores);