const CARD_IMAGE_WIDTH = 256
const CARD_BACKGROUND_COLORS = ['#965f77', '#83ac69', '#db9576', '#e1e1a6', '#e1e1a6']
const DATA = data

const cardBrowserObj = document.getElementsByClassName('cards')[0]
const mainPageObj = document.getElementsByClassName('main-page')[0]

const cards = []
const sidebar = {}

init()

function init() {
    addCardsToDocument()
    initializeSidebar()
    addClickEventForBackground()
    addClickEventsForCards()
}

function addCardsToDocument() {
    DATA.forEach((value) => {
        const name = toTitleCase(value.name)
        const defaultImageURL = value.sprites.other["official-artwork"].front_default
        const statsData = value.stats
        const cardsObject = addCardToDocument(name, defaultImageURL, statsData)
        const availableImageURLs = extractAllStringsFromObject(value.sprites)
        cards.push({ 'id': value.id, 'name': name, 'defaultImage': defaultImageURL, 'stats': statsData, 'games': value.game_indices, 'images': availableImageURLs, 'obj': cardsObject })
        cardBrowserObj.append(cardsObject)
    })
}

function initializeSidebar() {
    sidebar.obj = document.getElementsByClassName('sidebar')[0]
    sidebar.titleObj = document.getElementsByClassName('sidebar--title')[0]
    sidebar.imgObj = document.getElementsByClassName('sidebar--img')[0]
    sidebar.imgObj.addEventListener('click', function(event){
        toggleSidebarImage()
        event.stopPropagation();
    })
    sidebar.statsObj = document.getElementById('sidebar--stats')
    sidebar.gamesObj = document.getElementById('sidebar--games')
    sidebar.selectedCard = null
    sidebar.nextImageIndex = 0
}

function addClickEventsForCards() {
    cards.forEach(card => {
        card.obj.addEventListener('click', function(event) {
            if (sidebar.selectedCard !== null && sidebar.selectedCard.id === card.id) {
                deselectCard()
            }
            else {
                selectCard(card)
            }
            event.stopPropagation();
        })
    })
}

function addClickEventForBackground() {
    mainPageObj.addEventListener('click', function() {
        deselectCard();
    })
}

function selectCard(card) {
    sidebar.selectedCard = card
    populateSidebar()
    mainPageObj.classList.add('sidebar-visible')
}

function deselectCard() {
    resetSidebar()
    mainPageObj.classList.remove('sidebar-visible')
}

function populateSidebar() {
    sidebar.titleObj.innerText = sidebar.selectedCard.name
    sidebar.obj.style.backgroundColor = sidebar.selectedCard.obj.style.backgroundColor
    sidebar.imgObj.src = sidebar.selectedCard.defaultImage
    addStatsToSidebar()
    addGamesToSidebar()
    sidebarChangeImageLoop()
}

function resetSidebar() {
    sidebar.selectedCard = null
    sidebar.nextImageIndex = 0
}

function sidebarChangeImageLoop() {
    if (sidebar.selectedCard !== null) {
        toggleSidebarImage()
        setTimeout(() => {sidebarChangeImageLoop()}, 1500)
    }
}

function toggleSidebarImage() {
    sidebar.imgObj.src = sidebar.selectedCard.images[sidebar.nextImageIndex]
    if (sidebar.nextImageIndex == sidebar.selectedCard.images.length -1) {
        sidebar.nextImageIndex = Math.floor(Math.random() *sidebar.selectedCard.images.length)
    } else {
        sidebar.nextImageIndex++
    }
}

function addStatsToSidebar() {
    removeAllListItemObjects(sidebar.statsObj)
    const listItems = []
    sidebar.selectedCard.stats.forEach(element => {
        listItems.push("<b>" + element.stat.name.toUpperCase() + "</b>: " + element.base_stat)
    })
    attachListItemObjectsFromInnerHTMLs(sidebar.statsObj, listItems)
}

function addGamesToSidebar() {
    gamesStr = ""
    sidebar.selectedCard.games.forEach(element => {
        gamesStr += "<i>" + toTitleCase(element.version.name) + "</i>, "
    })
    sidebar.gamesObj.innerHTML = gamesStr.slice(0, gamesStr.length -2)
}


function addCardToDocument(name, imageURL, statsData) {
    const card = document.createElement('li')
    card.classList.add('card')
    card.style.backgroundColor = CARD_BACKGROUND_COLORS[Math.floor(Math.random() * CARD_BACKGROUND_COLORS.length)]
    card.append(addCardHeaderToDocument(name))
    card.append(addCardImgToDocument(imageURL))
    card.append(addCardStatsToDocument(statsData))
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
    cardImg.width = cardImg.height = CARD_IMAGE_WIDTH
    cardImg.src = srcURL
    return cardImg
}

function addCardStatsToDocument(statsList) {
    const cardStats = document.createElement('ul')
    cardStats.classList.add('card--text')
    const listItems = []
    statsList.forEach(element => {
        listItems.push("<b>" + element.stat.name.toUpperCase() + "</b>: " + element.base_stat)
    })
    attachListItemObjectsFromInnerHTMLs(cardStats, listItems)
    return cardStats
}

function attachListItemObjectsFromInnerHTMLs(parent, htmlStrs) {
    htmlStrs.forEach(value => {
        const obj = document.createElement('li')
        obj.innerHTML = value
        parent.append(obj)
    })
}

function removeAllListItemObjects(listObj) {
    while (listObj.firstChild) {
        listObj.removeChild(listObj.firstChild)
    }
}

function extractAllStringsFromObject(obj, allStrings = []) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        allStrings.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        extractAllStringsFromObject(obj[key], allStrings);
      }
    }
    return allStrings;
  }

function toTitleCase(str) {
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join('')
}
