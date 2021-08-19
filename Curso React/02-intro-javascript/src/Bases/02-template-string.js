const nombre = 'Gatita';
const Apellido = 'Chispas';

const nombreCompleto = ` ${ nombre } ${ Apellido }`;

function getNombre(nombre) {
    return `Hola${ nombre }, ¿Cómo estas mi princesa?`;
}

console.log(` ${ getNombre(nombreCompleto) } `);