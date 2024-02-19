const pokemonCardsUL = document.querySelector("ul")

function CardTitle(pokemonData){
    const Title = document.createElement("h2");
    Title.className = "card--title"
    Title.innerHTML = pokemonData.name
    return Title
}

function CardImage(pokemonData){
    const Image = document.createElement('img')
    Image.width = '256'
    Image.src = pokemonData.sprites.other['official-artwork'].front_default
    Image.className = "card--img"
    return Image
}

function Cardstats(pokemonData){
    const stats = document.createElement('ul')
    stats.className = "card--text"
    for(const pokemonStat of pokemonData.stats){
        const stat = document.createElement('li')
        stat.innerHTML = `${pokemonStat.stat.name.toUpperCase()}: ${pokemonStat.base_stat}`
        stats.appendChild(stat)
    }
    return stats
}

function Cardgames(pokemonData){
    const games = document.createElement('ul')
     games.className = "card--game-info"
    for (const pokemonGames of pokemonData.game_indices) {
        const game = document.createElement('li')
        game.innerHTML = pokemonGames.version.name
        games.appendChild(game)
    }
    return games
}

 

function Card(pokemonData){
    const card = document.createElement("li");
    card.className = "card"

    const title = CardTitle(pokemonData)
    card.appendChild(title)

    const img = CardImage(pokemonData)
    card.appendChild(img)

    const stats = Cardstats(pokemonData)
    card.appendChild(stats)

   const games = Cardgames(pokemonData)
   card.appendChild(games)

    pokemonCardsUL.appendChild(card)
}

for(const pokemon of data){
    Card(pokemon)
}