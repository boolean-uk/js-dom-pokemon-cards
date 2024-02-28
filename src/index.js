

// Selected Root Element
const cardListUL = document.querySelector(".cards")

function renderAllCards() {

    cardListUL.innerHTML = ""

    for(let i = 0; i < data.length; i++) {
        const card = data[i]

        const cardLi = document.createElement('li')
        cardLi.setAttribute('class', 'card')

        createNameElement(cardLi, card)

        createImageElement(cardLi, card)

        createAllStats(cardLi, card)

        createGamesAppearedIn(cardLi, card)

        cardListUL.appendChild(cardLi)
    }
}

function renderOneCard() {
    const card = data[0]

    const cardLi = document.createElement('li')
    cardLi.setAttribute('class', 'card')

    createNameElement(cardLi, card)

    createImageElement(cardLi, card)

    createAllStats(cardLi, card)

    cardListUL.appendChild(cardLi)
}

function createNameElement(cardLi, card) {
    const cardH2 = document.createElement('h2')
    cardH2.setAttribute('class', 'card--title')
    const name = card.name
    const firstChar = name.slice(0)[0].toUpperCase()
    cardH2.innerText = firstChar + name.slice(1)
    cardLi.appendChild(cardH2)
}

function createImageElement(cardLi, card) {
    const cardImage = document.createElement('img')
    cardImage.style.width = '256px'
    cardImage.setAttribute('class', 'card--img')
    cardImage.src = card.sprites.other["official-artwork"].front_default
    cardLi.appendChild(cardImage)
}

function createAllStats(cardLi, card) {
    const cardUL = document.createElement('ul')
    cardUL.setAttribute('class', 'card--text')
    for (let i = 0; i < card.stats.length; i++) {
        const statLI = document.createElement('li')
        const statName = card.stats[i].stat.name.toUpperCase()
        const statNumber = card.stats[i].base_stat
        statLI.innerText = statName + ': ' + statNumber
        cardUL.appendChild(statLI)
    }
    cardLi.appendChild(cardUL)
}

function createGamesAppearedIn(cardLi, card) {
  const cardUL = document.createElement("ul");
  cardUL.setAttribute("class", "card--games");
  for (let i = 0; i < card.game_indices.length; i++) {
    const gameLI = document.createElement("li");
    const gameName = card.game_indices[i].version.name;
    gameLI.innerText = gameName
    cardUL.appendChild(gameLI);
  }
  cardLi.appendChild(cardUL);
}

function main() {
    //renderOneCard()
    renderAllCards()
}

main()