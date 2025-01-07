//  Adivina el número
// Genera un número aleatorio entre 1 y 10 (usa random.randint) y permite al usuario
// adivinarlo.
// *Da pistas como "muy bajo" o "muy alto".
const prompt = require("prompt-sync")(); 
const number = Math.floor(Math.random() * 5) + 1;

console.log("Guess the number");
let userWriteNumber = parseInt(prompt("Write a number from 1 to 5"));

while (userWriteNumber !== number) {
    if (userWriteNumber < number) {
        console.log("Very low");
        userWriteNumber = parseInt(prompt("Write a number"));
    } else if (userWriteNumber > number) {
        console.log("Very high");
        userWriteNumber = parseInt(prompt("Write a number"));
    }
}

console.log("You did it, The number is:", number);
