const arreglo = [1, 2, 3, 4];

let arreglo_dos = [...arreglo, 5]
    // arreglo.push(5);

const arreglo_tres = arreglo_dos.map(function(numero) {
    return numero * 2;
})
console.log(arreglo);
console.log(arreglo_dos);
console.log(arreglo_tres);