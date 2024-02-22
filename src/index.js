
console.log(data);

// Get cardlist
const cardList = document.querySelector('.cards')


function renderCards() {
    cardList.innerHTML = ''
    
    // Iterate through cards
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        // Make list item
        const cardLi = document.createElement('li')
        cardLi.setAttribute('class', 'card')
        // Get card data
        const cardData = data[i]
        // Add title
        cardLi.appendChild(makeCardTitle(cardData))
        // Add image
        cardLi.appendChild(makeImageElement(cardData))
        // Add text
        cardLi.appendChild(makeTextList(cardData))
        // Add game section
        cardLi.appendChild(makeGameSection(cardData))
        // Add card to cardList
        cardList.appendChild(cardLi)
    }
}

function makeCardTitle(card) {
    // Make title element
    const cardTitle = document.createElement('h2')
    cardTitle.setAttribute('class', 'card--title')
    // Set card title
    cardTitle.innerText = capitalizeTitle(card.name)
    return cardTitle
}

function makeImageElement(card) {
    // Make image element
    const cardImage = document.createElement('img')
    cardImage.setAttribute('width', '256')
    cardImage.setAttribute('class', 'card--img')
    // Get image link
    const imageLink = card.sprites.other["official-artwork"].front_default
    // Set image link
    cardImage.setAttribute('src', imageLink)
    return cardImage
}

function makeTextList(card) {
    // Make list
    const cardInfoUL = document.createElement('ul') 
    cardInfoUL.setAttribute('class', 'card--text')
    // Add text to list
    for (let j = 0; j < 6; j++) {
        cardInfoUL.appendChild(addLiWithText(card, j))
    }
    return cardInfoUL
}

function addLiWithText(card, j) {
    // Make list item
    const textLi = document.createElement('li')
    // Add text to list item
    textLi.innerText = card.stats[j].stat.name.toUpperCase() + ': ' + card.stats[j].base_stat
    return textLi
}

function capitalizeTitle(title) {
    return title[0].toUpperCase() + title.slice(1)
}

function makeGameSection(card) {
    const gamesSection = document.createElement('div')
    // Make a title for  the games section
    const sectionTitle = document.createElement('h3')
    sectionTitle.innerText = 'Games ' + capitalizeTitle(card.name) + ' appeared in:'
    gamesSection.appendChild(sectionTitle)
    
    const games = card.game_indices
    let gamesString = ''
    // Iterate through games
    for (let k = 0; k < games.length; k++) {
        if (k !== 0) {
            gamesString += ', '
        }
        gamesString += games[k].version.name
    }
    // Add the games to a paragraph element
    const gamesPara = document.createElement('p')
    gamesPara.setAttribute('class', 'card--text')
    gamesPara.innerText = gamesString
    // Add games info to the games section
    gamesSection.appendChild(gamesPara)
    return gamesSection
}

function main() {
    renderCards()
}

main()
