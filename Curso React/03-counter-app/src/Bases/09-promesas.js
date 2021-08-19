// import heroes from './data/heroes';

import { getHeroeById } from "./Bases/08-import-export";
// import getHeroeById from './Bases/08-import-export';
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         // console.log(p1);
//         // resolve(p1);
//         reject('No se encontro el Heroe.');
//     }, 2000);
// });

// promesa.then((heroe) => {
//         console.log('Then de la promesa: ', heroe);
//     })
//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            // console.log(p1);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se encontro el Heroe.');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.warn());