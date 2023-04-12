console.log(data)

// You can start simple and just render a single
// pokemon card from the first element
console.log(data[0])

const cardUL = document.querySelector('ul')

for (let i = 0; i < data.length; i++) {
  const entry = data[i]
  console.log(entry)

  // create cards:
  const cardTile = document.createElement('li')
  cardTile.setAttribute('class', 'card')
  cardUL.append(cardTile)

  // Card title
  const pokeName = document.createElement('h2')
  pokeName.innerText = entry.name
  pokeName.setAttribute('class', 'card--title')
  cardTile.append(pokeName)

  // Image
  const pokemonImg = document.createElement('img')
  pokemonImg.setAttribute('width', '256')
  pokemonImg.setAttribute('class', 'card--img')
  pokemonImg.setAttribute(
    'src',
    entry.sprites.other['official-artwork'].front_default
  )
  cardTile.append(pokemonImg)
  // new UL

  const pokeStats = document.createElement('ul')
  pokeStats.setAttribute('class', 'card--text')
  cardTile.append(pokeStats)

  // List items
  //   const statsName = document.createElement('li')
  for (let j = 0; j < entry.stats.length; j++) {
    const statsData = entry.stats[j]
    const statsName = statsData.stat.name
    const statsPoints = statsData.base_stat
    const statsList = document.createElement('li')
    statsList.innerText = `${statsName}: ${statsPoints}`
    pokeStats.append(statsList)
  }
}
