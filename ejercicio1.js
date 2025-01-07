//Taller Repaso de Estructuras Basicas 

const prompt = require("prompt-sync")();

function sumarNumeros() {
    const num1 = parseFloat(prompt("Ingresa el primer numero: "));
    const num2 = parseFloat(prompt("Ingresa el segundo numero: "));
    const suma = num1 + num2;

    console.log(`El resultado de ${num1} + ${num2} es ${suma}`);
}

sumarNumeros();
