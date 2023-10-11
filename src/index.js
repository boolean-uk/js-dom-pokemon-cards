
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardsContainer = document.querySelector('.cards');

function createPokemonCard(pokemon) {
  const card = document.createElement('li');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = pokemon.sprites.other['official-artwork'].front_default;
  img.alt = pokemon.name;

  const name = document.createElement('h2');
  name.textContent = pokemon.name;

  card.appendChild(img);
  card.appendChild(name);
  return card;
}

function renderPokemonCards() {
  data.forEach(pokemon => {
    const card = createPokemonCard(pokemon);
    cardsContainer.appendChild(card);
  });
}

renderPokemonCards();






//const firstPokemon = data[0];

// `firstPokemon.name`
// `firstPokemon.sprites.other["official-artwork"].front_default`
// `firstPokemon.stats[0].stat.name`
// `firstPokemon.stats[0].base_stat`

//firstPokemon.stats.forEach((statData) =>)




