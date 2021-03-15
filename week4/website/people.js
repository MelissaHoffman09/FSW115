var character1 = document.getElementById("button1");
character1.addEventListener("click", people);

function people() {
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
}

  
  
/*var Schwifty = document.getElementById("RickandMortyButton");
Schwifty.addEventListener("click", rick_morty);

function rick_morty() {
  axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
    for (let i = 0; i < response.data.results.length; i++) {
      const name = document.createElement("h2");
      name.textContent = response.data.results[i].name;
      document.getElementById("rickmorty").appendChild(name);
    

      name.style.textDecorationLine = "underline"

    }
  });
}
*/