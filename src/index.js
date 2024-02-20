const CARD_IMAGE_WIDTH = 256
const DATA = data

const cards = []
const cardsListObject = document.getElementsByClassName('cards')[0]
let clickedCardIndex = -1
init()

function init() {
    addCardsToDocument()
}

function addCardsToDocument() {
    DATA.forEach(element => {
        const cardsObject = addCardToDocument(element)
        cards.push({'documentObject': cardsObject, 'data': element, 'index': element.index})
        cardsListObject.append(cardsObject)
    })
}

function addCardToDocument(cardData) {
    const card = document.createElement('li')
    card.classList.add('card')
    card.append(addCardHeaderToDocument(cardData.name))
    card.append(addCardImgToDocument(cardData.sprites.other["official-artwork"].front_default))
    card.append(addCardStatsToDocument(cardData.stats))
    return card
}

function addCardHeaderToDocument(text) {
    const cardHeader = document.createElement('h2')
    cardHeader.classList.add('card--title')
    cardHeader.innerText = text
    return cardHeader
}

function addCardImgToDocument(srcURL) {
    const cardImg = document.createElement('img')
    cardImg.classList.add('card--img')
    cardImg.width = CARD_IMAGE_WIDTH
    cardImg.src = srcURL
    return cardImg
}

function addCardStatsToDocument(statsList) {
    const cardStats = document.createElement('ul')
    cardStats.classList.add('card--text')
    statsList.forEach(element => {
        const stat = document.createElement('li')
        stat.innerText = element.stat.name.toUpperCase() + ": " + element.base_stat
        cardStats.append(stat)
    })
    return cardStats
}
