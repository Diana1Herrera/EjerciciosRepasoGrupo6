function contarPalabras(cadena) {
    let palabras = cadena.trim().split(/\s+/); 
    return palabras.length;
}

let cadena = "Generation es una red global sin ánimo de lucro que ayuda a las personas a lograr movilidad económica y mejorar sus vidas.";
let numeroDePalabras = contarPalabras(cadena);
console.log("La cadena contiene " + numeroDePalabras + " palabras.");
