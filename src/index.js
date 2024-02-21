// Helper functions
function capitalizeFirstLetter(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return '';
    }
}

function togglePokemonImage(pokemonImg, pokemonId) {
    const currentSrc = pokemonImg.getAttribute('src');
    if (currentSrc.includes('official-artwork')) {
        pokemonImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`);
    } else {
        pokemonImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`);
    }
}

// Eventlisteners
function createToggleButton(gamesSection) {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Show Games';
    toggleButton.addEventListener('click', () => {
        if (gamesSection.style.display === 'none') {
            gamesSection.style.display = 'block';
            toggleButton.innerText = 'Hide Games';
        } else {
            gamesSection.style.display = 'none';
            toggleButton.innerText = 'Show Games';
        }
    });
    return toggleButton;
}


// Selected Root Elements
const pokemonListUL = document.querySelector(".cards");

// Functions for building the interface
function renderPokemons() {
    // Reset all Pokemon
    pokemonListUL.innerHTML = "";
    // Loop through the data array of Pokemon to create new li element for each
    for (let i = 0; i < data.length; i++) {
        // Get the current Pokemon
        const pokemon = data[i];
        // Create a <li></li>
        const pokemonLi = document.createElement('li');
        pokemonLi.classList.add('card');
        // Create a <h2> element for the Pokemon name
        const pokemonName = document.createElement('h2');
        pokemonName.classList.add('card--title');
        pokemonName.innerText = capitalizeFirstLetter(pokemon.name)
        pokemonLi.appendChild(pokemonName);
        // Create an <img> element for the Pokemon image
        const pokemonImg = document.createElement('img');
        pokemonImg.classList.add('card--img');
        pokemonImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`);
        pokemonImg.setAttribute('width', '256');
        // Add event listener to swap image source
        pokemonImg.addEventListener('click', () => {
            togglePokemonImage(pokemonImg, pokemon.id);
        });
        // Append the Pokemon Image to the Pokemons
        pokemonLi.appendChild(pokemonImg);
        // Create a <ul> element for the stats
        const statsUl = document.createElement('ul');
        statsUl.classList.add('card--text');
        // Add each stat as a <li> element
        pokemon.stats.forEach(stat => {
            const statLi = document.createElement('li');
            statLi.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            statsUl.appendChild(statLi);
        });
        // Append the stats <ul> to the Pokemon <li>
        pokemonLi.appendChild(statsUl);
        // Create a <section> element for the games
        const gamesSection = document.createElement('section');
        gamesSection.classList.add('card--games');
        // Hide the games section initially
        gamesSection.style.display = 'none'; 
        // Create a <ul> element for the games
        const gamesUl = document.createElement('ul');
        // Add each game as a <li> element
        pokemon.game_indices.forEach(game => {
            const gameLi = document.createElement('li');
            gameLi.innerText = game.version.name;
            gamesUl.appendChild(gameLi);
        });
        // Append the games <ul> to the games section
        gamesSection.appendChild(gamesUl);
        // Append the games section to the Pokemon <li>
        pokemonLi.appendChild(gamesSection);
        // Create a toggle button and append it to the Pokemon <li>
        const toggleButton = createToggleButton(gamesSection);
        pokemonLi.appendChild(toggleButton);
        // Add the list element Pokemon to the pokemonListUL
        pokemonListUL.appendChild(pokemonLi);
    }
}

// Render
function main() {
    renderPokemons();
}

main()