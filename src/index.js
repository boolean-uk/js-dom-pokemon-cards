//You can start simple and just render a single
//pokemon card from the first element

function capitlisation(inputString) {
  if (typeof inputString !== "string") {
    throw console.error("Not a string")
  }
  const splitString = inputString.split("")
  splitString[0] = splitString[0].toUpperCase()
  const outputString = splitString.join("")
  return outputString
}

function createName(dataReference) {
  const pokemonName = document.createElement("h2")
  pokemonName.className = "card--title"
  nameFix = capitlisation(dataReference.name)
  pokemonName.innerHTML = nameFix
  return pokemonName
}

function createImg(dataReference) {
  const image = document.createElement("img")
  image.setAttribute(
    "src",
    dataReference.sprites.other["official-artwork"].front_default
  )
  image.setAttribute("width", 256)
  image.className = "card--img"
  return image
}

function createText(dataReference) {
  cardText = document.createElement("ul")
  cardText.className = "card--text"
  for (let i = 0; i < dataReference.stats.length; i++) {
    const stat = document.createElement("li")
    stat.innerHTML =
      dataReference.stats[i].stat.name.toUpperCase() +
      ": " +
      dataReference.stats[i].base_stat
    cardText.appendChild(stat)
  }
  return cardText
}

function createGameList(dataReference) {
  const games = document.createElement("ul")
  games.className = "card--text"

  const gamesArr = dataReference.game_indices
  for (let i = 0; i < gamesArr.length; i++) {
    const game = document.createElement("li")
    game.innerHTML = capitlisation(gamesArr[i].version.name)
    games.appendChild(game)
  }


  return games
}

function cardCreate(index, container) {
  const card = document.createElement("li")
  card.className = "card"

  const dataReference = structuredClone(data[index])

  const pokemonName = createName(dataReference)

  const image = createImg(dataReference)

  const cardText = createText(dataReference)

  const appearsIn = document.createElement("h2")
  appearsIn.className = "card--title"
  appearsIn.innerHTML = "APPEARS IN"

  games = createGameList(dataReference)

  card.appendChild(pokemonName)
  card.appendChild(image)
  card.appendChild(cardText)
  card.appendChild(appearsIn)
  card.appendChild(games)
  container.appendChild(card)
}

function imageSwap() {
  allCards = document.querySelectorAll(".card--img")
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].src =
      allCards[i].src ===
      data[i].sprites.other["official-artwork"].front_default
        ? data[i].sprites.front_default
        : data[i].sprites.other["official-artwork"].front_default
  }
}

cardsContainer = document.querySelector(".cards")

for (let i = 0; i < data.length; i++) {
  cardCreate(i, cardsContainer)
}

heading = document.querySelector("#heading")

heading.addEventListener("click", () => {
  imageSwap()
})
