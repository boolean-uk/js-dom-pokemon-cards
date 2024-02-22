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

// Function to create a Pokemon list item
function createPokemonListItem(pokemon) {
    const pokemonLi = document.createElement('li');
    pokemonLi.classList.add('card');

    const pokemonName = document.createElement('h2');
    pokemonName.classList.add('card--title');
    pokemonName.innerText = capitalizeFirstLetter(pokemon.name);
    pokemonLi.appendChild(pokemonName);

    const pokemonImg = createPokemonImage(pokemon.id);
    pokemonLi.appendChild(pokemonImg);

    const statsUl = createStatsList(pokemon.stats);
    pokemonLi.appendChild(statsUl);

    const gamesSection = createGamesSection(pokemon.game_indices);
    pokemonLi.appendChild(gamesSection);

    const toggleButton = createToggleButton(gamesSection);
    pokemonLi.appendChild(toggleButton);

    return pokemonLi;
}

// Function to create a Pokemon image element
function createPokemonImage(pokemonId) {
    const pokemonImg = document.createElement('img');
    pokemonImg.classList.add('card--img');
    pokemonImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`);
    pokemonImg.setAttribute('width', '256');
    pokemonImg.addEventListener('click', () => {
        togglePokemonImage(pokemonImg, pokemonId);
    });
    return pokemonImg;
}

// Function to create a list of stats for a Pokemon
function createStatsList(stats) {
    const statsUl = document.createElement('ul');
    statsUl.classList.add('card--text');
    stats.forEach(stat => {
        const statLi = document.createElement('li');
        statLi.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
        statsUl.appendChild(statLi);
    });
    return statsUl;
}

// Function to create a section for the games of a Pokemon
function createGamesSection(gameIndices) {
    const gamesSection = document.createElement('section');
    gamesSection.classList.add('card--games');
    gamesSection.style.display = 'none'; // Hide the games section initially
    const gamesUl = document.createElement('ul');
    gameIndices.forEach(game => {
        const gameLi = document.createElement('li');
        gameLi.innerText = game.version.name;
        gamesUl.appendChild(gameLi);
    });
    gamesSection.appendChild(gamesUl);
    return gamesSection;
}

// Function to render the list of Pokemons
function renderPokemons() {
    pokemonListUL.innerHTML = "";
    data.forEach(pokemon => {
        const pokemonLi = createPokemonListItem(pokemon);
        pokemonListUL.appendChild(pokemonLi);
    });
}

// Render
function main() {
    renderPokemons();
}

main();