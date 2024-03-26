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

{/* <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul> */}
// const hp = pokemon.stats

//   const infoList = {

//   }

const ul = document.querySelector('ul')
ul.append(listItem)
console.log(ul)
