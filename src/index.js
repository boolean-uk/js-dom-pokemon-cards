const cards = document.querySelector('.cards')

//You can start simple and just render a single 
//pokemon card from the first element

for (let i = 0; i < data.length; i++) {
    const card = document.createElement('li')
    card.classList.add('card')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card--title')
    cardTitle.innerText = data[i].name
    card.append(cardTitle)

    const img = document.createElement('img')
    img.width = 256
    img.classList.add("card--img")
    img.src = data[i].sprites.other["official-artwork"].front_default
    card.append(img)
    
    const cardText = document.createElement('ul')
    cardText.classList.add("card--text")

    for (let j = 0; j < data[i].stats.length; j++) {
        const stat = document.createElement('li')
        stat.innerText = data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
        cardText.append(stat)
    }

    const gamesInfo = document.createElement('p')
    gamesInfo.classList.add("card--text")
    gamesInfo.style.color = "blue"
    gamesInfo.innerText = "Game Appearences"

    card.addEventListener('mouseover',() => {
        const gamesList = showGamesList(i)
        gamesList.classList.add('games-list')
        img.src = data[i].sprites.other["dream_world"].front_default
        card.append(gamesList)
    })
    card.addEventListener('mouseout',() => {
        document.querySelector('.games-list').remove()
        img.src = data[i].sprites.other["official-artwork"].front_default
    })

    card.append(cardText)
    card.append(gamesInfo)
    cards.append(card)
}

function showGamesList(pokemonIndex) {
    const gamesList = document.createElement('ul')
    gamesList.classList.add("card--text")

    for (let i = 0; i < data[pokemonIndex].game_indices.length; i++) {
        const game = document.createElement('li')
        game.innerText = data[pokemonIndex].game_indices[i].version.name
        gamesList.append(game)
    }
    console.log(gamesList)
    return gamesList
}

console.log(data[0]);
console.log(cards);
