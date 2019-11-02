const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/snorlax');
fetchPromise.then(connection => {
    console.log('Connected');
    console.log(connection);
    const jsonPromise = connection.json();
    jsonPromise.then(img => {
        console.log('done');;
        let x = document.getElementById('pokemon_image');
        x.src = img.sprites.front_default;
    })
});