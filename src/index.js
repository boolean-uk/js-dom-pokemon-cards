
console.log(data);

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Function to create and render the Pokemon cards
  function renderPokemonCards(data) {
    const cardsContainer = document.querySelector('.cards');
    
    // Clear previous content
    cardsContainer.innerHTML = '';
  
    // Loop through the Pokemon data and create card elements
    data.forEach(pokemon => {
      const card = document.createElement('li');
      card.className = 'card';
  
      const pokemonName = document.createElement('h2');
      pokemonName.textContent = capitalizeFirstLetter(pokemon.name);
  
      const imageContainer = document.createElement('div');
      imageContainer.className = 'card--img';
  
      const pokemonImage = document.createElement('img');
      pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;
      imageContainer.appendChild(pokemonImage);
  
      card.appendChild(pokemonName);
      card.appendChild(imageContainer);
  
      const statsContainer = document.createElement('div');
      statsContainer.className = 'card--text';
  
      // Loop through each stat in the stats array
      pokemon.stats.forEach(statInfo => {
        const statElement = document.createElement('p');
        statElement.textContent = `${capitalizeFirstLetter(statInfo.stat.name.replace('-', ' '))}: ${statInfo.base_stat}`;
        statsContainer.appendChild(statElement);
      });
  
      card.appendChild(statsContainer);
  
      // Append the card to the cards container
      cardsContainer.appendChild(card);
    });
  }
  
  // Call the function to render the cards
  renderPokemonCards(window.data);
  
console.log(data[0]);
