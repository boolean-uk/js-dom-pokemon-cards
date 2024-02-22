function main() {
  const list = document.querySelector('.cards')
  for (let i = 0; i < data.length; i++) {
    list.appendChild(renderCard(i))
  }
}

function renderCard(index) {
  const pokemon = data[index]

  // Item in the list
  const cardItem = document.createElement('li')
  cardItem.className = 'card'

  // Item header
  const header = document.createElement('h2')
  header.className = 'card--title'
  header.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  // Image
  const image = document.createElement('img')
  image.className = 'card--img'
  image.src = pokemon.sprites.other["official-artwork"].front_default

  // Stats
  const statList = document.createElement('ul')
  statList.className = 'stat--list'
  for (const i in pokemon.stats) {
    const statListElement = document.createElement('li')
    statListElement.textContent = `${pokemon.stats[i].stat.name.toUpperCase()}: ${pokemon.stats[i].base_stat}`
    statList.appendChild(statListElement)
  }

  // Game data
  const gameData = pokemon.game_indices
  const gamesElement = document.createElement('p')
  gamesElement.className = 'games--list'
  for (const key in gameData) {
    gamesElement.textContent += getFormattedGame(gameData[key].version.name) + ', '
  }
  gamesElement.textContent = gamesElement.textContent.slice(0, -2)

  // Add elements to card
  cardItem.appendChild(header)
  cardItem.appendChild(image)
  cardItem.appendChild(statList)
  cardItem.appendChild(gamesElement)

  return cardItem
}

function getFormattedGame(name) {
  const mapping = {
    'red': 'Red',
    'blue': 'Blue',
    'yellow': 'Yellow',
    'gold': 'Gold',
    'silver': 'Silver',
    'crystal': 'Crystal',
    'ruby': 'Ruby',
    'sapphire': 'Sapphire',
    'emerald': 'Emerald',
    'firered': 'FireRed',
    'leafgreen': 'LeafGreen',
    'diamond': 'Diamond',
    'pearl': 'Pearl',
    'platinum': 'Platinum',
    'heartgold': 'HeartGold',
    'soulsilver': 'SoulSilver',
    'black': 'Black',
    'white': 'White',
    'black-2': 'Black 2',
    'white-2': 'White 2'
  };
  return mapping[name.toLowerCase()] || name;
}

main()