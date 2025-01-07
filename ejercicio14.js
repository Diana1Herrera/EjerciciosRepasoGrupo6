function sumarNumeros(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

let listaDeNumeros = [1, 2, 3, 4, 5];
let total = sumarNumeros(listaDeNumeros);
console.log("La suma de los números es: " + total);
