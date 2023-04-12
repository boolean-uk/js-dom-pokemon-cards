console.log(data)

// You can start simple and just render a single
// pokemon card from the first element
console.log(data[0])

const cardUL = document.querySelector('ul')
cardUL.style.listStyle = 'none'

for (let i = 0; i < data.length; i++) {
  const entry = data[i]
  console.log(entry)

  // create cards:
  const cardTile = document.createElement('li')
  cardTile.setAttribute('class', 'card')
  cardUL.append(cardTile)

  // Card title
  const pokeName = document.createElement('h2')
  pokeName.innerText = entry.name.toUpperCase()
  pokeName.setAttribute('class', 'card--title')
  cardTile.append(pokeName)

  // Image
  const pokemonImg = document.createElement('img')
  pokemonImg.setAttribute('width', '256')
  pokemonImg.setAttribute('height', '256')
  pokemonImg.setAttribute('class', 'card--img')
  pokemonImg.setAttribute(
    'src',
    entry.sprites.other['official-artwork'].front_default
  )
  cardTile.append(pokemonImg)

  const pokemonImg1 = document.createElement('img')
  pokemonImg1.setAttribute('width', '256')
  pokemonImg1.setAttribute('height', '256')
  pokemonImg1.setAttribute('class', 'card--img1')
  pokemonImg1.setAttribute('src', entry.sprites.other.dream_world.front_default)
  cardTile.append(pokemonImg1)
  // new UL

  const pokeStats = document.createElement('ul')
  pokeStats.setAttribute('class', 'card--text')
  cardTile.append(pokeStats)

  // List items
  //   const statsName = document.createElement('li')
  for (let j = 0; j < entry.stats.length; j++) {
    const statsData = entry.stats[j]
    const statsName = statsData.stat.name.toUpperCase()
    const statsPoints = statsData.base_stat
    const statsList = document.createElement('li')
    statsList.style.listStyle = 'none'
    statsList.innerText = `${statsName}: ${statsPoints}`
    pokeStats.append(statsList)
  }

  // Games title
  const pokeGamesTitle = document.createElement('h2')
  pokeGamesTitle.innerText = 'Games'
  cardTile.append(pokeGamesTitle)
  // Games List
  const pokeGames = document.createElement('ul')
  pokeGames.setAttribute('class', 'card--text')
  cardTile.append(pokeGames)
  for (let z = 0; z < entry.game_indices.length; z++) {
    const gamesData = entry.game_indices[z]
    const gamesName = gamesData.version.name.toUpperCase()
    // const gamesPoints = gamesData.game_index
    const gamesList = document.createElement('li')
    gamesList.style.listStyle = 'none'
    gamesList.innerText = `${gamesName}`
    pokeGames.append(gamesList)
  }
}
