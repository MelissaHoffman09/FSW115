const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

async function getData() {
  const StarWarsName = await axios.get("https://swapi.dev/api/people/");
  const StarWarsSpecies = await axios.get("https://swapi.dev/api/species/");
  const StarWarsPlanets = await axios.get("https://swapi.dev/api/planets/");
  addToDom(StarWarsName, StarWarsSpecies, StarWarsPlanets);
}
getData();

function addToDom(name, species, planets) {
  name.data.results.forEach(names => {
    const p = document.createElement("p");
    p.textContent = names.name;
    box1.appendChild(p);
  });
  species.data.results.forEach(specie => {
    const p = document.createElement("p");
    p.textContent = specie.name;
    box2.appendChild(p);
  });
  planets.data.results.forEach(planet => {
    const p = document.createElement("p");
    p.textContent = planet.name;
    box3.appendChild(p);
  });
}