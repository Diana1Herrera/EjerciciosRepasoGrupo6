// Números del 1 al N
// Pide al usuario un número N e imprime todos los números del 1 al N usando un while.
const prompt = require("prompt-sync")(); 

let count= 1
let limit= parseInt(prompt("Write a number"));


while (count <= limit ){
    console.log(count);
    count = count + 1}