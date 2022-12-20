console.log(data);
console.log(data[0]);

const pokemonList = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    const pokemonData = data[i]
    // CREATING THE CARD
    const singleCard = document.createElement("li")
    singleCard.setAttribute("class", "card")
    pokemonList.append(singleCard)
    // POKEMON NAME
    const pokemonName = document.createElement("h2")
    pokemonName.setAttribute("class", "card--title")
    pokemonName.innerText = pokemonData.name
    singleCard.append(pokemonName)
    // POKEMON IMG
    const pokemonImg = document.createElement("img")
    pokemonImg.setAttribute("width", "256")
    pokemonImg.setAttribute("class", "card--img")
    pokemonImg.setAttribute("src", pokemonData.sprites.other['official-artwork'].front_default)
    singleCard.append(pokemonImg)
    // NEW LIST
    const pokemonStats = document.createElement("ul")
    pokemonStats.setAttribute("class", "card--text")
    singleCard.append(pokemonStats)
    // LOOP TO APPEND THE STATS
    for (j = 0; j < pokemonData.stats.length; j++) {
        const statName = pokemonData.stats[j].stat.name
        const statLevel = pokemonData.stats[j].base_stat
        const currentStat = document.createElement("li")
        currentStat.innerText = `${statName}: ${statLevel}`.toUpperCase()
        pokemonStats.append(currentStat)
    }
    // GAME VERSIONS DETAIL BUTTON
    const gameVersions = document.createElement("details")
    const summary = document.createElement("summary")
    summary.innerText = "Game Versions"
    gameVersions.append(summary)
    singleCard.append(gameVersions)
    // NEW LIST FOR VERSIONS
    const gameUl = document.createElement("ul")
    gameVersions.append(gameUl)
    // LOOP TO ADD ALL GAME VERSIONS TO LIST
    for (k = 0; k < pokemonData.game_indices.length; k++) {
        const versionName = pokemonData.game_indices[k].version.name
        const versionLi = document.createElement("li")
        versionLi.innerText = versionName
        gameUl.append(versionLi)
    }
}