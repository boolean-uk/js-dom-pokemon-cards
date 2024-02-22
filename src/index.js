console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function createCard(data) {
    return `<li class="card">
    <h2 class="card--title">${data.name}</h2>
    <img
      width="256"
      class="card--img"
      src="${data.sprites.other["official-artwork"].front_default}"
    />
    <ul class="card--text">
      <li>HP: ${data.stats[0].base_stat}</li>
      <li>ATTACK: ${data.stats[1].base_stat}</li>
      <li>DEFENSE: ${data.stats[2].base_stat}</li>
      <li>SPECIAL-ATTACK: ${data.stats[3].base_stat}</li>
      <li>SPECIAL-DEFENSE: ${data.stats[4].base_stat}</li>
      <li>SPEED: ${data.stats[5].base_stat}</li>
    </ul>
  </li>`
}

function populateTable(pokemonList) {
    return pokemonList.map(x => createCard(x))
}

document.getElementsByClassName('cards')[0].innerHTML = populateTable(data).join('')