const container = document.querySelector('.cards')

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function drawCard(data) {  // render a single pokemon card
  // create card element
  const card = document.createElement('li')
  card.classList.add('card')

  // create title of card
  const title = document.createElement('h2')
  title.innerText = capitalise(data.name)
  title.classList.add('card--title')
  card.append(title)

  // create image of card
  const image = document.createElement('img')
  image.style.width = '256px'
  image.classList.add('card--img')
  image.src = data.sprites.other['official-artwork']['front_default']
  card.append(image)

  const text = document.createElement('ul')
  // create list of stats of card
  text.classList.add('card--text')
  data.stats.forEach(element => {
    const stats = document.createElement('li')
    stats.innerHTML = element.stat.name.toUpperCase() + ': ' + element.base_stat
    text.append(stats)
  })
  // create list of appearances of card
  const appearances = document.createElement('li')
  let currentGameIndex = null
  let appearancesText = ''
  let printDelimeter = false
  data.game_indices.forEach(element => {
    if (element.game_index !==  currentGameIndex) {
      currentGameIndex = element.game_index
      appearancesText += `\nAPPEARS IN GAME #${currentGameIndex}: `
      printDelimeter = false
    }
    if (printDelimeter) {
      appearancesText += ', '
    }
    appearancesText += element.version.name
    printDelimeter = true
  })
  appearances.innerHTML = appearancesText
  text.append(appearances)
  card.append(text)

  container.append(card)
}

function drawCards(cardsArray) {
  cardsArray.forEach(element => drawCard(element));
}

drawCards(data)