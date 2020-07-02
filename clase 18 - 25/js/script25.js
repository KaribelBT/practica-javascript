let numero1 = parseInt(prompt ("Ingrese el primer número:"));if (numero1 > 10) {
    numero1 = parseInt(prompt ("Ingrese un nuevo número:"));
    if (numero1 > 100) {
        alert ("A");
    } else {
        alert ("B");
    }
} else {
    numero1 = parseInt(prompt ("Ingrese un nuevo número:"));
    if (numero1 > 1000) {
        alert ("C");
    } else {
        alert ("D");
    }
} 