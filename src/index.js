
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

function capitlisation(inputString) {
    if (typeof inputString !== 'string') {
      throw console.error('Not a string')
    }
    const splitString = inputString.split('')
    splitString[0] = splitString[0].toUpperCase()
    const outputString = splitString.join('')
    return outputString
  }

const card = document.createElement("li")
card.className = "card"

const pokemonName = document.createElement("h2")
pokemonName.className = "card--title"
nameFix = capitlisation(data[0].name)
pokemonName.innerHTML = nameFix

const image = document.createElement("img")
image.src = data[0].sprites.other["official-artwork"].front_default
image.className = "card--img"
image.width="256"

const cardText = document.createElement("ul")
cardText.className = "card--text"
for(let i = 0; i < 6; i++) {
    const stat = document.createElement("li")
    stat.innerHTML = data[0].stats[i].stat.name.toUpperCase() + ": " + data[0].stats[i].base_stat
    cardText.appendChild(stat)
}
cardsContainer = document.querySelector(".cards")
cardsContainer.appendChild(card)
card.appendChild(pokemonName)
card.appendChild(image)
card.appendChild(cardText)

console.log(data[0]);
