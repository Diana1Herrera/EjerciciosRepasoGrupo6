// Contar vocales
// Pide al usuario una palabra y usa un for para contar cuántas vocales tiene.


const prompt = require("prompt-sync")(); 

let count = 0;
let word = prompt("Write a word");


for (let i = 0; i < word.length; i++) {
    
    if ("aeiouAEIOU".includes(word[i])) {
        count += 1;
    }
}

// Muestra el resultado
console.log("The word has " + count + " vowels.");
