axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        const people = response.data.results;
        for(let i = 0; i < people.length; i++) {
            const h1 = document.createElement('h1')
            h1.textContent = people[i].name
            document.body.appendChild(h1)
        }
    })
    
    .catch(error => console.log(error))