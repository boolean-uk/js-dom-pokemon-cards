console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

// SELECT ROOT ELEMENT
const ulElement = document.querySelector(".cards");

function renderingCards() {
  for (const pokemon of data) {
    const liElement = document.createElement("li");
    liElement.className = "card";

    liElement.innerHTML = `
    <h2 class="card--title">${pokemon.name}</h2>
    <img width="256" class="card--img" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}" />
    <ul class="card--text">
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
        <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
        <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
        <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
        <li>SPEED: ${pokemon.stats[5].base_stat}</li>
    </ul>
    <p class="card--text">Generations</p>
    <ul class="card--text">
        <li>${pokemon.sprites.vertions}</li)>
    </ul>
  `;
    ulElement.appendChild(liElement);
  }
}
function main() {
  console.log("Runninv main()");
  renderingCards();
}

main();

/*<li class="card">
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
</li>*/
