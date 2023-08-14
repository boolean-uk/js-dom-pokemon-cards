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
  // create list of stats of card
  const text = document.createElement('ul')
  text.classList.add('card--text')
  for (let i = 0; i < data.stats.length; ++i) {
    // create stats of card
    const stats = document.createElement('li')
    const elem = data.stats[i]
    stats.innerHTML = elem.stat.name.toUpperCase() + ': ' + elem.base_stat
    text.append(stats)
  }
  card.append(text)

  container.append(card)
}

function drawCards(cardsArray) {
  cardsArray.forEach(element => drawCard(element));
}

// drawCard(data[0])  // experiment by rendering first card of cards array
drawCards(data)