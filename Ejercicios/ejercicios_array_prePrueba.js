/**
 * let frase = ["posiciones", "se cuenta", "Las","array", "cero.", "a partir", "del"];

console.log("Ingrese el largo de la frase: ");
// var largo = window.prompt("Ingrese el largo de la frase: ");
console.log(frase);
let concatenaFrase = frase[2] + " " + frase[0] + " " + frase[6]
    + " " + frase[3] + " " + frase[1] + " " + frase[5] + " " + 
    frase[6] + " " + frase[4];

console.log(concatenaFrase);
 */

/** Concatenar numeros es facil, lo hacemos concatenando como si fuese un texto.
 * 
 */

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";

let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;

console.log(numeroString1 + " " + numeroString2 + " "+  numeroString3);
console.log(concatenaNumeros);