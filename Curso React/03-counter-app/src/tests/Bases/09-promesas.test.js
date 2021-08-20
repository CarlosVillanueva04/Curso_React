import { getHeroeByIdAsync } from "../../Bases/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', () => {
    test('Debe retornar un heroe Async', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });

    test('Debe retornar un error si el heroe por id no existe', ( done ) => {
        
        const id = 12;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se encontro el Heroe.' );
                done();
            });
    });
});
