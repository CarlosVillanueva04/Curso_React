const nombre = 'Gatita';
const Apellido = 'Chispas';

const nombreCompleto = ` ${ nombre } ${ Apellido }`;

export function getNombre(nombre = 'Carlos') {
    return `Hola ${ nombre }, ¿Cómo estas mi princesa?`;
}

console.log(` ${ getNombre(nombre) } `);