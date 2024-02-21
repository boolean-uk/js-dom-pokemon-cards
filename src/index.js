//console.log(data);
const pokemonCardHTML = document.querySelector("ul")
pokemonCardHTML.className = "cards"
//You can start simple and just render a single 
//pokemon card from the first element

function pokemonCard(data) {
    const card = document.createElement("li")
    card.className = "card"
    const title = cardTitle(data)
    card.appendChild(title)
    const img = cardImg(data)
    card.appendChild(img)
    const statsList = cardStatsList(data)
    card.appendChild(statsList)
    const games = cardGames(data) // EXTENSION
    card.appendChild(games) // EXTENSION

    pokemonCardHTML.appendChild(card)
}

function cardTitle(data) {
    const title = document.createElement("h2")
    title.className = "card--title"
    title.innerHTML = `${data.name.charAt(0).toUpperCase() + data.name.slice(1)}` // Capitalize name
    return title
}

function cardImg(data) {
    const img = document.createElement("img")
    img.className = "card--img"
    img.width = '256'
    img.src = data.sprites.other['official-artwork'].front_default
    return img
}

function cardStatsList(data) {
    const statsList = document.createElement("ul")
    statsList.className = "card--text"
    for (const dataStat of data.stats) {
        const cardStat = document.createElement("li")
        cardStat.innerHTML = `${dataStat.stat.name.toUpperCase()}: ${dataStat.base_stat}`
        statsList.appendChild(cardStat)
    }
    return statsList
}

// EXTENSION
function cardGames(data) {
    const games = document.createElement("details") // collapsible element to make design more simple
    games.className = "card--text"
    const gamesSummary = document.createElement("summary")
    gamesSummary.className = "card--text"
    gamesSummary.innerHTML = `Click to see featured games:` 
    games.appendChild(gamesSummary)
    for (const dataGames of data.game_indices) {
        const cardGame = document.createElement("p")
        cardGame.innerHTML = `Pokemon ${dataGames.version.name.charAt(0).toUpperCase() 
            + dataGames.version.name.slice(1)}` // Capitalizing game titles
        games.appendChild(cardGame)
    }
    return games
}

for (const cards of data){
    pokemonCard(cards)
}
