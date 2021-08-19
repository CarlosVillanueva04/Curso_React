const persona = {
    nombre: 'Cathe',
    apellido: 'Perez',
    edad: 22,
    ubicacion: {
        ciudad: 'Soledad',
        direccion: 'Calle 68a # 15 a 15'
    }
};


const persona_dos = {...persona };
persona_dos.edad = 23;
console.log(persona);
console.table(persona_dos);