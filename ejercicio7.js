//  Factorial
// Escribe un programa que calcule el factorial de un número usando un for.

const prompt = require("prompt-sync")(); 


let number= parseInt(prompt("Write a number"));


let mul =1

for (let i = 1; i <=number ; i++) {
    mul = mul *i
}

console.log(`The factorial of ${number} is ${mul}`);