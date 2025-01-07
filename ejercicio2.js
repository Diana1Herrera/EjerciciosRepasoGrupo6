const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Ingresa un nnmero: "));
if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par.`);
} else {
    console.log(`El numero ${numero} es impar.`);
}