/* <li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li> */

for (let i = 0; i < data.length; i++) {

const cardsList = document.querySelector(".cards");
const newPokemon = data[i];
const newLI = document.createElement("li");
const newH2 = document.createElement("h2");
const newIMG = document.createElement("img");

//adding class to overall LI
newLI.classList.add("card");

//adding name h2
newH2.innerText = newPokemon.name;
newH2.classList.add("card--title");
newLI.appendChild(newH2);

// adding img
newIMG.src = newPokemon.sprites.other["official-artwork"].front_default;
newIMG.classList.add("card--img");
newIMG.setAttribute("width", 256);
newLI.appendChild(newIMG);


// Adding new stats list
const createStatsList = () => {
    const newUL = document.createElement("ul")
    newUL.classList.add("card--text")

    for (let j = 0; j < 6; j++) {
    const newLI = document.createElement("li")
    newLI.innerText = `${data[i].stats[j].stat.name}: ${data[i].stats[j].base_stat}`
    newUL.appendChild(newLI)
    }
    newLI.appendChild(newUL)
}

createStatsList()

// Adding games 
const createGamesList = () => {
    const newUL = document.createElement("ul")
    newUL.classList.add("games")
    newUL.innerText = 'Appears In:'
    for (let k = 0; k < data[i].game_indices.length; k++) {
        const newLI = document.createElement("li")
        newLI.innerText = data[i].game_indices[k].version.name
        newUL.appendChild(newLI)
    }
    newLI.appendChild(newUL)
}

createGamesList()
cardsList.appendChild(newLI);
}



