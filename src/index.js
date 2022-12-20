
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonUL = document.querySelector(".cards")

for (let i = 0; i < data.length; i++) {
    const pokemonObj = data[i]
    // CARD
    const singleCard = document.createElement("li")
    singleCard.setAttribute('class', 'card')
    pokemonUL.append(singleCard)

    // HEADING
    const cardHeading = document.createElement("h2")
    cardHeading.setAttribute('class', 'card--title')
    cardHeading.innerText = pokemonObj.name
    singleCard.append(cardHeading)

    // IMAGE
    const cardImage = document.createElement("img")
    cardImage.setAttribute('width', "256")
    cardImage.setAttribute('class', "card--img")
    cardImage.setAttribute('src', pokemonObj.sprites.other['official-artwork'].front_default)
    singleCard.append(cardImage)

    // STAT BLOCK
    const statsUL = document.createElement("ul")
    statsUL.setAttribute('class', 'card--text')
    singleCard.append(statsUL)
    

    // LOOP TO ADD INDIVIDUAL STATS
    for (let j = 0; j < pokemonObj.stats.length; j++) {
        const statsName = pokemonObj.stats[j].stat.name
        const statNum = pokemonObj.stats[j].base_stat
        const stats = document.createElement("li")
        // const statstring = `${statsName}: ${statNum}`
        // stats.innerText = statstring.toUpperCase()
        stats.innerText = `${statsName}: ${statNum}`.toUpperCase()
        statsUL.append(stats)
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
    for (k = 0; k < pokemonObj.game_indices.length; k++) {
        const versionName = pokemonObj.game_indices[k].version.name
        const versionLi = document.createElement("li")
        versionLi.innerText = versionName
        gameUl.append(versionLi)
    }
}