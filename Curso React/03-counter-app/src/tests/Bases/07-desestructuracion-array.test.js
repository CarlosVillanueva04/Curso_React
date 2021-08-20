import { retornaArreglo } from "../../Bases/07-desestructuracion-array"

describe('Pruebas en desestructuración arrays', () => {
    
    test('Debe de retornar un string y un número.', () => {
        
        const [ letras, numeros] = retornaArreglo(); //['ABC', 254]

        // expect( arr ).toEqual( ['ABC', 254] );
        console.log( typeof numeros );
        
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 254 );
        expect( typeof numeros ).toBe( 'number' );

    })
    
})
