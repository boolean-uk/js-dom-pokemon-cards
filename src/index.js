
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
}

function getGames(pokemon){
    let games = []
    pokemon.game_indices.forEach(game => {
        games.push(`<li>${capitalize(game.version.name)}</li>`)
    })
    return games.join('')
}

function createCard(pokemon){

    let stats = {}

    pokemon.stats.forEach(stat => {
        const statType = stat.stat.name
        stats[statType] = stat.base_stat
    });


    return `<li class="card">
        <h2 class="card--title">${capitalize(pokemon.name)}</h2>
        <img
            width="256"
            class="card--img"
            src="${pokemon.sprites.other['official-artwork'].front_default}"
        />
        <ul class="card--text">
            <li>HP: ${stats['hp']}</li>
            <li>ATTACK: ${stats['attack']}</li>
            <li>DEFENSE: ${stats['defense']}</li>
            <li>SPECIAL-ATTACK: ${stats['special-attack']}</li>
            <li>SPECIAL-DEFENSE: ${stats['special-defense']}</li>
            <li>SPEED: ${stats['speed']}</li>
        </ul>
        Games:
        <ul>
            ${getGames(pokemon)}
        </ul>
    </li>`
}

function populateTable(pokemonList) {
    return pokemonList.map(x => createCard(x))
}

document.getElementsByClassName('cards')[0].innerHTML = populateTable(data).join('')