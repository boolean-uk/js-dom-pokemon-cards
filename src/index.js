
const cardsList = document.querySelector('.cards')

const capitalise = (str) => {
  const firstLetter = str[0].toUpperCase()
  const restString = str.slice(1)
  return firstLetter + restString
}

const changeImageOnHover = (pokemon, img) => {
  img.setAttribute("src", pokemon.sprites.other.dream_world.front_default)
}

const changeImageBack = (pokemon, img) => {
  img.setAttribute("src", pokemon.sprites.other["official-artwork"].front_default)
}

const getImageSet = (pokemon) => {
  let imageSet = []
  let images = Object.values(pokemon.sprites)
  images.forEach((img) => {
    if (typeof img === 'string'){
      imageSet.push(img)
    }
  })
  return imageSet
}

const createNewCard = (pokemon) => {
  const pokemonCard= document.createElement('li')
  pokemonCard.classList.add('card')

  const title = document.createElement('h2')
  title.innerText = capitalise(pokemon.name)
  title.classList.add('card--title')
  pokemonCard.append(title)

  const img = document.createElement('img')
  img.setAttribute("width", "256")
  img.classList.add('card--img')
  img.setAttribute("src", pokemon.sprites.other["official-artwork"].front_default)
  pokemonCard.append(img)
  cardsList.append(pokemonCard)

  const btnIcons = document.createElement('button')
  btnIcons.innerText = 'Show all images'
  pokemonCard.append(btnIcons)

  const imageContainer = document.createElement('div')

  const images = getImageSet(pokemon)
  images.forEach(img => {
    const icon = document.createElement('img')
    icon.setAttribute("src", img)
    imageContainer.append(icon)
  })

  btnIcons.addEventListener('click', () => {
    if (btnIcons.innerText === 'Show all images') {
      imageContainer.classList.remove('hide')
      btnIcons.innerText = 'Hide all images'
    } else {
      imageContainer.classList.add('hide')
      btnIcons.innerText = 'Show all images'
    }

  })

  img.addEventListener('mouseover', () => {
    changeImageOnHover(pokemon, img)
  })

  img.addEventListener('mouseout', () => {
    changeImageBack(pokemon, img)
  })

  imageContainer.classList.add('hide')
  pokemonCard.append(imageContainer)


  const statsTitle = document.createElement('h3')
  statsTitle.innerText = 'Info'.toUpperCase()
  statsTitle.classList.add('card--text')
  pokemonCard.append(statsTitle)

  const statsList = document.createElement('ul')
  statsList.classList.add('card--text')
  pokemonCard.append(statsList)


  const stats = pokemon.stats
  stats.forEach(element => {
    const statLi = document.createElement('li')
    statLi.innerHTML = element.stat.name.toUpperCase() + ": " + element.base_stat
    statsList.append(statLi)
  })
  console.log(stats)
  // stat.innerHTML = data[i].stats[j].stat.name.toUpperCase() + ":  " + data[i].stats[j].base_stat
  // pokemonStatList.append(statListItem)

}

data.forEach((pokemon) => {
  createNewCard(pokemon)
})
