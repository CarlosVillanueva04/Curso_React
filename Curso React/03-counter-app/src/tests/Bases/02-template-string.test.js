import { getNombre } from '../../Bases/02-template-string';

describe('Pruebas ejecutadas en el archivo 02-template-string', () => {

    test('getNombre debe retornar Hola Chispas, ¿Cómo estas mi princesa?', () => {
        
        const nombre = 'Chispas';

        const saludo = getNombre( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + ', ¿Cómo estas mi princesa?' );
        console.log( saludo );
    })

    test('getNombre debe retornar Hola Carlos, ¿Cómo estas mi princesa? si no hay argumento nombre', () => {
        
        const saludo = getNombre();

        expect( saludo ).toBe( 'Hola Carlos, ¿Cómo estas mi princesa?' );
    })
    
    
});