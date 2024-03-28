const pokemon = data[0]

// <li class="card">
const listItem = document.createElement('li')
listItem.classList.add('card')

// <h2 class="card--title">Bulbasaur</h2>
const h2 = document.createElement('h2')
h2.classList.add('card--title')
h2.innerText = pokemon.name

// append the h2 to the <li>
listItem.append(h2)

const image = document.createElement('img')
image.classList.add('card--img')

image.setAttribute('width', 256)
image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)

// append the image to the <li>
listItem.append(image)

// <ul class="cards">
const ul = document.querySelector('.cards')

// append the <li> onto the <ul>
ul.append(listItem)

const hp = document.createElement('HP')
const attack = document.createElement('ATTACK')
const defense = document.createElement('DEFENSE')
const specialAttack = document.createElement('SPECIAL-ATTACK')
const specialDefense = document.createElement('SPECIAL-DEFENSE')
const speed = document.createElement('SPEED')
console.log(pokemon.stats[0].stat.name)
//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



{/* <li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li> */}
