import heroes from '../data/heroes.js'
// export { getHeroeById as default };
// console.log(heroes);
// console.log(mascotas);

// const getHeroeById = (id) => {
//     return heroes.find((heroes) => {
//         if (heroes.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

export const getHeroeById = (id) => {
    return heroes.find(heroes => heroes.id === id)
}

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner === owner)
}

// console.log(getHeroesByOwner('DC'));