const funcion = function(nombre) {
    return `Hola, ${ nombre }`;
};

const funcion_dos = (nombre) => {
    return `Hola, ${ nombre }`;
};

const funcion_tres = (nombre) => `Hola, ${ nombre }`;

const funcion_cuatro = () => `Hola Mundo`;

// console.log(funcion('Vegeta'));
// console.log(funcion_dos('Goku'));
// console.log(funcion_tres('Carlos'));
// console.log(funcion_cuatro());

export const getUser = () => ({
    id: 'Clave0102',
    username: 'Team TNS'
})

// console.log(getUser());

// TAREA
export function getUsuarioActivo(nombre) {
    return {
        id: 'Clave0102',
        username: nombre
    }
}

// console.log(getUsuarioActivo('Lola'));

const getUsuarioActivoF = (nombre) => ({
    id: 'Clave0102',
    username: nombre
})

// console.log(getUsuarioActivoF('Lolita'));