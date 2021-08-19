// const getImgPromesa = () => {
//     return new Promise((resolve, reject) => {
//         resolve('https://imagendepruebasinanimo.com')
//     });
// }

// getImgPromesa().then(console.log);

// const getImgPromesa = () => {
//     return 'https://imagendepruebasinanimo.com'
// }

// console.log(getImgPromesa());

// const getImgPromesa = async() => {
//     return 'https://imagendepruebasinanimo.com'
// }

// getImgPromesa().then(console.log);

const getImagen = async() => {
    try {
        const apiKey = 'jqx9ygiCmNoYtY6Xv48KcUxcwBBBGSO0';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.fixed_width_small_still;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (err) {
        console.error(err);
    }
}

getImagen();