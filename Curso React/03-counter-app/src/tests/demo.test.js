describe('pruebas ejecutadas en el archivo demo.test.js', () =>{
    
    test('deben ser iguales los strings', () => {
        
        // const isActive = true;
    
        // if ( isActive ) {
        //     throw new Error('No esta activo.');
        // }
    
        // 1. Inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        expect( mensaje ).toBe( mensaje2 );
    
    
    })

});
