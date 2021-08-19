import React from 'react';
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const PrimeraApp = ( {saludo, subtitulo} ) =>{

    // const saludo = 'Hola Chispas';
    
    // console.log( props );
    // {
    //     nombre: 'Jefrey',
    //     edad: '4'
    // }

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3) } </pre> */}
            <p> { subtitulo } </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Esto es un subtitulo.'
}

export default PrimeraApp;