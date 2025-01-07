const prompt = require("prompt-sync")();


const numero = parseInt(prompt("Ingresa un numero para ver su tabla de multiplicar: "));


for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
