
const createPokemon = (pokemon) =>
{
    let card = setUpPokemon(pokemon)
    walkThroughNestedImages(card, pokemon.sprites)
    displayGameInformation(card, pokemon.game_indices)
    return card
}

function setUpPokemon(pokemon) {
  const li = document.createElement(`li`)
  li.className = `card`

  const title = document.createElement(`h2`)
  title.className = `card--title`
  title.textContent = capitalize(pokemon.name)

  const img = document.createElement(`img`)
  img.width = 256
  img.className = `card--img`
  img.src = pokemon.sprites.other.official_artwork.front_default

  const ul = document.createElement(`ul`)
  ul.className = `card--text`
  
  pokemon.stats.forEach(stat => {
    const li = document.createElement('li')
    li.textContent = `${capitalize(stat.stat.name.replace('-', ' '))}: ${stat.base_stat}`
    ul.appendChild(li)
  })

  li.appendChild(title)
  li.appendChild(img)
  li.appendChild(ul)

  return li
}

function walkThroughNestedImages(card, sprites) {
  let timers = []
  card.addEventListener(`mouseenter`, () => {
    let delay = 0

    function walk(nodeObject) {
      Object.values(nodeObject).forEach(n => {
        if (typeof n === `string`) {
          timer = setTimeout(() => {
            const img = card.querySelector(`.card--img`)
            img.src = n
          }, delay)
          timers.push(timer)
          delay += 1000
        } else if (typeof n === `object` && n) {
          walk(n)
        }
      })
    }

    walk(sprites)
  })

  card.addEventListener(`mouseleave`, () => {
    const img = card.querySelector(`.card--img`)
    timers.forEach(timer => clearTimeout(timer))
    img.src = sprites.other.official_artwork.front_default
  })
}

function displayGameInformation(card, games) {
  let isShowingGames = false

  const tempCard = Object.assign(card.innerHTML)

  card.addEventListener('click', function() {
    if (!isShowingGames) {
      card.style.animation = 'squish 0.3s forwards'
      setTimeout(() => {
         

        const title = document.createElement(`h2`)
        title.className = `card--title`
        title.textContent = card.querySelector('.card--title').textContent + ' appears in: '

        card.innerHTML = ''

        const ul = document.createElement('ul')
        ul.className = 'card--text'
        games.forEach(game => {
          const li = document.createElement('li')
          li.textContent = capitalize(game.version.name)
          ul.appendChild(li)
        })

        card.appendChild(title)
        card.appendChild(ul)
        card.style.animation = 'expand 0.3s forwards'
        isShowingGames = true
      }, 300)
    } else {
      card.style.animation = 'squish 0.3s forwards'
      setTimeout(() => {
        card.innerHTML = tempCard
        card.style.animation = 'expand 0.3s forwards'
        isShowingGames = false
      }, 300)
    }
  })
}


function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1)
}

const createAllPokemon = (pokemonlist) =>
{
    return pokemonlist.map(p => createPokemon(p))
}

document.addEventListener(`DOMContentLoaded`, function() {
  const cardsContainer = document.getElementsByClassName(`cards`)[0]
  const pokemonCards = createAllPokemon(data)
  pokemonCards.forEach(card => cardsContainer.appendChild(card))
})