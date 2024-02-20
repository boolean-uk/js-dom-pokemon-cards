//You can start simple and just render a single 
//pokemon card from the first element
const cardTemplate = (pokemon)=>{
    const gameIndices = pokemon.game_indices;

    // Function to generate formatted version names as a list
    const generateGameNames = () => {
        const versionListItems = gameIndices.map((index) => `<li>${capitalizeFirstLetter(index.version.name)}</li>`);
        return `<ul>${versionListItems.join('')}</ul>`;
    };

    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    // Create an object to store the base stats by stat name
    const baseStatsByName = {};
    
    // Populate the baseStatsByName object
    pokemon.stats.forEach((stat) => {
        const statName = stat.stat.name;
        baseStatsByName[statName] = stat.base_stat;
    });
    
    const artworks = getArtworks(pokemon)

    return `
    <li class="card" data-pokemon-name="${pokemon.name}" data-current-artwork="0">
        <h2 class="card--title">${capitalizeFirstLetter(pokemon.name)}</h2>
        <img
        width="256"
        class="card--img"
        src=${artworks[0]}
        />
        <ul class="card--text">
            <li>HP: ${baseStatsByName["hp"]}</li>
            <li>ATTACK: ${baseStatsByName["attack"]}</li>
            <li>DEFENSE: ${baseStatsByName["defense"]}</li>
            <li>SPECIAL-ATTACK: ${baseStatsByName["special-attack"]}</li>
            <li>SPECIAL-DEFENSE: ${baseStatsByName["special-defense"]}</li>
            <li>SPEED: ${baseStatsByName["speed"]}</li>
        </ul>
        <div class="card--appearances">
            Appearance: ${generateGameNames()}
        </div>
        
        <button class="toggle-image-btn">Toggle Image</button>
    </li>`
}
const getArtworks = (pokemon) => [
    pokemon.sprites.other["official-artwork"].front_default,
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
    pokemon.sprites.back_shiny,
    pokemon.sprites.other.dream_world.front_default
    
].filter(Boolean);

//Map every pokemon into the cardTemplate
const CardArray = (pokemonList) => {
    return pokemonList.map(p=>cardTemplate(p))
}
//Call CardElement from Index.html, fill it with card data
document.getElementsByClassName('cards')[0].innerHTML = CardArray(data).join('');

// Event listener for toggling artworks
const cardElements = document.querySelectorAll('.card');
cardElements.forEach(cardElement => {
    const toggleBtn = cardElement.querySelector('.toggle-image-btn');
    const imgElement = cardElement.querySelector('.card--img');
    
    toggleBtn.addEventListener('click', () => {
        
        const pokemonName = cardElement.getAttribute('data-pokemon-name');
        const pokemon = data.find(p => p.name === pokemonName);
        const artworks = getArtworks(pokemon)
        const currentArtworkIndex = parseInt(cardElement.getAttribute('data-current-artwork'), 10);
        const nextArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
        console.log(artworks[currentArtworkIndex])
        imgElement.setAttribute('src', artworks[nextArtworkIndex]);
        cardElement.setAttribute('data-current-artwork', nextArtworkIndex.toString());
    });
});