axios.get('https://rickandmortyapi.com/api/location')
    .then(response => {
        const planets = response.data.results;
        for(let i = 0; i < planets.length; i++) {
            const h1 = document.createElement('h1')
            h1.textContent = planets[i].name
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))