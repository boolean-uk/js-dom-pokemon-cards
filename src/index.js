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

function cardCreate(index, container) {
  const card = document.createElement("li")
  card.className = "card"

  dataReference = structuredClone(data[index])

  const pokemonName = document.createElement("h2")
  pokemonName.className = "card--title"
  nameFix = capitlisation(dataReference.name)
  pokemonName.innerHTML = nameFix

  const image = document.createElement("img")
  image.src = dataReference.sprites.other["official-artwork"].front_default
  image.className = "card--img"
  image.width = "256"

  const cardText = document.createElement("ul")
  cardText.className = "card--text"
  for (let i = 0; i < 6; i++) {
    const stat = document.createElement("li")
    stat.innerHTML =
      dataReference.stats[i].stat.name.toUpperCase() +
      ": " +
      dataReference.stats[i].base_stat
    cardText.appendChild(stat)
  }

  const appearsIn = document.createElement("h2")
  appearsIn.className = "card--title"
  appearsIn.innerHTML = "APPEARS IN"

  const generations = document.createElement("ul")
  generations.className = "card--text"
  const generationArr = Object.keys(dataReference.sprites.versions)

  for (let i = 0; i < generationArr.length; i++) {
    const gen = document.createElement("li")
    gen.innerHTML = "Generation " + generationArr[i].split("-")[1].toUpperCase()
    generations.appendChild(gen)
  }

  container.appendChild(card)
  card.appendChild(pokemonName)
  card.appendChild(image)
  card.appendChild(cardText)
  card.appendChild(appearsIn)
  card.appendChild(generations)
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

heading = document.getElementById("heading")

heading.addEventListener("click", () => {
  imageSwap()
})
