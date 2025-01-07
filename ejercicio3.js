const prompt = require("prompt-sync")();


const num1 = parseFloat(prompt("Ingresa el primer numero: "));
const num2 = parseFloat(prompt("Ingresa el segundo numero: "));
const num3 = parseFloat(prompt("Ingresa el tercer numero: "));


if (num1 > num2 && num1 > num3) {
    console.log("El numero mayor es " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("El numero mayor es " + num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("El numero mayor es " + num3);
} else {
    if (num1 === num2 && num1 > num3) {
        console.log("El primer número (" + num1 + ") y el segundo número (" + num2 + ") son iguales y mayores que el tercer número (" + num3 + ")");
    } else if (num1 === num2 && num1 < num3) {
        console.log("El primer número (" + num1 + ") y el segundo número (" + num2 + ") son iguales y menores que el tercer número (" + num3 + ")");
    } else if (num1 === num3 && num1 > num2) {
        console.log("El primer número (" + num1 + ") y el tercer número (" + num3 + ") son iguales y mayores que el segundo número (" + num2 + ")");
    } else if (num1 === num3 && num1 < num2) {
        console.log("El primer número (" + num1 + ") y el tercer número (" + num3 + ") son iguales y menores que el segundo número (" + num2 + ")");
    } else if (num2 === num3 && num2 > num1) {
        console.log("El segundo número (" + num2 + ") y el tercer número (" + num3 + ") son iguales y mayores que el primer número (" + num1 + ")");
    } else if (num2 === num3 && num2 < num1) {
        console.log("El segundo número (" + num2 + ") y el tercer número (" + num3 + ") son iguales y menores que el primer número (" + num1 + ")");
    } else {
        console.log("los tres numeros son iguales.");
    }
}




// if (num1 > num2 && num1 > num3) {
//     console.log(`El numero mayor es ${num1}`);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`El numero mayor es ${num2}`);
// } else if (num3 > num1 && num3 > num2) {
//     console.log(`El numero mayor es ${num3}`);
// } else {
//     if (num1 === num2 && num1 > num3) {
//         console.log(`El primer número (${num1}) y el segundo número (${num2}) son iguales y mayores que el tercer número (${num3})`);
//     } else if (num1 === num2 && num1 < num3) {
//         console.log(`El primer número (${num1}) y el segundo número (${num2}) son iguales y menores que el tercer número (${num3})`);
//     } else if (num1 === num3 && num1 > num2) {
//         console.log(`El primer número (${num1}) y el tercer número (${num3}) son iguales y mayores que el segundo número (${num2})`);
//     } else if (num1 === num3 && num1 < num2) {
//         console.log(`El primer número (${num1}) y el tercer número (${num3}) son iguales y menores que el segundo número (${num2})`);
//     } else if (num2 === num3 && num2 > num1) {
//         console.log(`El segundo número (${num2}) y el tercer número (${num3}) son iguales y mayores que el primer número (${num1})`);
//     } else if (num2 === num3 && num2 < num1) {
//         console.log(`El segundo número (${num2}) y el tercer número (${num3}) son iguales y menores que el primer número (${num1})`);
//     } else {
//         console.log("Hay un empate entre los tres números.");
//     }
// }