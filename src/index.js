const pokemon = data[0]

// image Address
// console.log(pokemon.sprites.other['official-artwork'].front_default)


const listItem = document.createElement('li')
listItem.classList.add('cards')

const h2 = document.createElement('h2')
h2.classList.add('card--title')
h2.innerText = pokemon.name

listItem.append(h2)

const image = document.createElement('img')
image.classList.add('card--img')
image.setAttribute('width', 256)
image.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)

listItem.append(image)
console.log(listItem)