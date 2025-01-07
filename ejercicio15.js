function esPalindromo(palabra) {
    palabra = palabra.toLowerCase();

    let palabraInvertida = palabra.split('').reverse().join('');

    if (palabra === palabraInvertida) {
        console.log(palabra + " es un palindromo.");
    } else {
        console.log(palabra + " no es un palindromo.");
    }
}
