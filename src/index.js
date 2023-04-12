
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardsList = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {

  const current = data[i]

  const newCard = document.createElement('li')
  newCard.style.listStyleType = 'none'
  newCard.setAttribute('class', 'card')
  cardsList.append(newCard)

  const cardTitle = document.createElement('h2')
  cardTitle.setAttribute('class', 'card--title')
  cardTitle.innerText = current.name[0].toUpperCase() + current.name.slice(1)
  newCard.append(cardTitle)

  const cardImage = document.createElement('img')
  cardImage.setAttribute('width', '256')
  cardImage.setAttribute('class', 'card--img')
  cardImage.setAttribute(
    'src',
    current.sprites.other['official-artwork'].front_default
    )
  newCard.append(cardImage)
  newCard.addEventListener('click', imageToggle)

  function imageToggle() {
    if (cardImage.getAttribute('src') === current.sprites.other['official-artwork'].front_default) {
      cardImage.setAttribute('src', current.sprites.other.dream_world.front_default)
    } else {
      cardImage.setAttribute('src', current.sprites.other['official-artwork'].front_default)
    }
  }

  const cardList = document.createElement('ul')
  cardList.setAttribute('class', 'card--text')
  cardList.style.listStyleType = 'none'
  newCard.append(cardList)
  for (let j = 0; j < 6; j++) {
    const cardListElement = document.createElement('li')
    const currentStatName = current.stats[j].stat.name
    const currentStatValue = current.stats[j].base_stat
    cardListElement.innerText = currentStatName + ': ' + currentStatValue
    cardList.append(cardListElement)
  }

  const gamesList = document.createElement("details")
  const gamesListSummary = document.createElement('summary')
  gamesList.append(gamesListSummary)
  gamesListSummary.innerText = "Game Appearances"
  for (let k = 0; k < current.game_indices.length; k++) {
      const gameName = current.game_indices[k].version.name
      const capitalName = gameName[0].toUpperCase() + gameName.slice(1)
      const gameVersion = document.createElement("li")
      gameVersion.innerText = `Pokemon ${capitalName}`
      gamesList.append(gameVersion)
  }
  newCard.append(gamesList)
  
}


