const apiKey = 'jqx9ygiCmNoYtY6Xv48KcUxcwBBBGSO0';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp => resp.json())
    .then(({ data }) => {
        // console.log(data.images.fixed_width_small_still.url) 
        const { url } = data.images.fixed_width_small_still;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)