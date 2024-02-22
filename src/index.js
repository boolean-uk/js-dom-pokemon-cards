
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

  document.addEventListener("DOMContentLoaded", function() {
    
    const pokemonList = document.querySelector(".cards");
  
    // Function to create a Pokémon card
    function createPokemonCard(pokemon) {
      // Create a card element
      const card = document.createElement('li');
      card.classList.add('card');
  
      // Set up card content
      card.innerHTML = `
      <h2 class="card--title">${pokemon.name}</h2>
      <img class="card--img" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
      <ul class="card--stats"> 
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
        <li>DEFENCE: ${pokemon.stats[2].base_stat}</li>
        <li>SPECIAL ATTACK: ${pokemon.stats[3].base_stat}</li>
        <li>SPECIAL DEFENCE: ${pokemon.stats[4].base_stat}</li>
        <li>SPEED: ${pokemon.stats[5].base_stat}</li>
      </ul>
      <div>
      <p>Games: </p>
       <select class="card--games-dropdown">
            ${getPokemonGamesDropdown(pokemon)}
       </select>
       </div>
    ` ;

     // Set the style for the card
     card.style.width = '300px'; // Adjust card width as needed
     card.style.height = 'auto'; // Let the height adjust automatically
     card.style.margin = '20px'; // Add margin to create space between cards

      // Return the created card
      return card;
    }

    function getPokemonGamesDropdown(pokemon) {
    let options = '';
    pokemon.game_indices.forEach(game => {
        options += `<option value="${game.version.name}">${game.version.name}</option>`;
    });
    return options;
}

    function createPokemonCards() {
        // Loop through each Pokémon in the data
        data.forEach(pokemon => {
          // Create a Pokémon card for each Pokémon
          const card = createPokemonCard(pokemon);
          // Append the created card to the .cards container
          pokemonList.appendChild(card);
        });
      }
      
    // Call the function to create Pokémon cards
    createPokemonCards();
});
