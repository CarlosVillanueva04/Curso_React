import { getHeroeById, getHeroesByOwner } from "../../Bases/08-import-export"
import heroes from "../../data/heroes";

describe('Pruebas en 08-import-export', () => {

    test('Debe retornar un heroe con id existente', () => {
        const id = 1;
        const heroeId = getHeroeById(id); 

        const heroeData = heroes.find( h => h.id === id);

        expect( heroeId ).toEqual( heroeData );
    });

    test('Debe retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroeId = getHeroeById( id ); 

        expect( heroeId ).toBe( undefined );
    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroeOwner = getHeroesByOwner( owner );
        const heroeData = heroes.filter( h => h.owner === owner);

        // console.log( heroeOwner , heroeData );
        expect( heroeOwner ).toEqual( heroeData );
    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroeOwner = getHeroesByOwner( owner );
        // const heroeData = heroes.filter( h => h.owner === owner);

        // console.log( heroeOwner , heroeData );
        expect( heroeOwner.length ).toBe( 2 );
    });
});