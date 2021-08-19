const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);

const retornaPersona = ({ edad, clave, nombre, rango = 'Soldado' }) => {
    // const { edad, clave, nombre } = usuario;
    // console.log(edad, clave, nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        name: nombre,
        rang: rango,
        latlng: {
            lat: 14.69834,
            lng: -9.56876
        }
    }
}

const avenger = retornaPersona(persona);
console.log(avenger);

const { nombreClave, anios, latlng: { lat, lng } } = avenger;
console.log(nombreClave, anios, lat, lng);