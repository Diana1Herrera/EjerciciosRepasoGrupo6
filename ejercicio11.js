function AreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

let base = 5;
let altura = 10;
let area = AreaTriangulo(base, altura);
console.log("El area del triangulo es: " + area);

