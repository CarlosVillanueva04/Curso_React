import { getUser, getUsuarioActivo } from "../../Bases/05-funciones";

describe( 'Pruebas ejecutadas en el archivo 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            id: 'Clave0102',
            username: 'Team TNS'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    })
    
    test('getUsuarioActivo debe retornar un objeto con argumento enviado', () => {
        
        const nombre = 'Team TNS';

        const userActivoTest = {
            id: 'Clave0102',
            username: nombre
        }

        const userActivo = getUsuarioActivo( 'Team TNS' );

        expect( userActivo ).toEqual( userActivoTest );
    })
    
});