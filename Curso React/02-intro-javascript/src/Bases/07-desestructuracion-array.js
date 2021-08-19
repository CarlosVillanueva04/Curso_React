const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [p1, , p3] = personajes;
console.log(p1, p3);

const retornaArreglo = () => {
    return ['ABC', 254];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// TAREA
// 1. El primer valor del arr se llamará nombre
// 2. se llamará setNombre
const UseState = (valor) => {
    return [valor, () => { console.log('setNombree') }];
};

const [nombre, setNombre] = UseState('Chispas');
console.log(nombre);
// arr[1]();
setNombre();