
//import { data } from './data.js';
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



const createPokemonName = (name) => {
    return `<h2 class="card--title">${name}</h2>`;
  };

  const createPokemonImage = (sprites) => {
    return `<img width="256" class="card--img" src="${sprites.other['official-artwork'].front_default}">`;
  };

  const createPokemonStats = (stats) => {
    return `<ul class="card--text">
    <li>HP: ${stats[0].base_stat}</li>
    <li>Attack: ${stats[1].base_stat}</li>
    <li>Defense: ${stats[2].base_stat}</li>
    <li>Special Attack: ${stats[3].base_stat}</li>
    <li>Special Defense: ${stats[4].base_stat}</li>
    <li>Speed: ${stats[5].base_stat}</li>
  </ul>`;
  }
  


  const gamesFeaturedIn1 = (game_indices) => {
    const games = [];
        game_indices.forEach(game => {
        games.push(game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1))
    })
    return games
  }


const createPokemonCard = (pokemon) => {
    const {name, sprites, stats, game_indices} = pokemon
    const nameHtml = createPokemonName(name)
    const imgHtml = createPokemonImage(sprites)
    const statsHtml = createPokemonStats(stats)
    const games = gamesFeaturedIn1(game_indices);
    const gamesListHtml = games.map(game => `<li>${game}</li>`).join('');
   
     return `<li class="card">
    ${nameHtml}
    ${imgHtml}  
    ${statsHtml}
    <div>
            <h3>Featured in games:</h3>
            <details>
            <summary>Games</summary>
            ${gamesListHtml}
            </details>
        </div>
    </li>`
}

const createAllPokemon = (pokemonData) =>
{
    const cardsContainer = document.querySelector('.cards')
    cardsContainer.innerHTML = pokemonData.map(createPokemonCard).join('')
}

createAllPokemon(data);




