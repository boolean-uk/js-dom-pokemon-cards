//You can start simple and just render a single 
//pokemon card from the first element
const cardTemplate = (pokemon)=>{
    const gameIndices = pokemon.game_indices;

    // Function to generate version names
    const generateGameNames = () => {
        const versionNames = gameIndices.map((index) => index.version.name);
        return versionNames.join(', ');
    };
    // Create an object to store the base stats by stat name
    const baseStatsByName = {};
    
    // Populate the baseStatsByName object
    pokemon.stats.forEach((stat) => {
        const statName = stat.stat.name;
        baseStatsByName[statName] = stat.base_stat;
    });
    return `
    <li class="card">
        <h2 class="card--title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img
        width="256"
        class="card--img"
        src=${pokemon.sprites.other["official-artwork"].front_default}
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
    </li>`
}
//Map every pokemon into the cardTemplate
const CardArray = (pokemonList) => {
    return pokemonList.map(p=>cardTemplate(p))
}
console.log(CardArray(data))
//Call CardElement from Index.html, fill it with card data
document.getElementsByClassName('cards')[0].innerHTML = CardArray(data).join('');