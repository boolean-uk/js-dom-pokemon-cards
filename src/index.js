//- Inside `index.js`, you should loop through this array and render a "card" for each pokemon type. Use the example image as a reference. 
//You can start simple and just render a single 
//pokemon card from the first element
for (let i = 0; i < data.length; i++){
    const pokemon = data[i]

const listItem = document.createElement('li')
listItem.classList.add('card')

const h2 = document.createElement('h2')
h2.classList.add('card--title')
h2.innerText = pokemon.name

listItem.append(h2)

const image = document.createElement('img')
image.classList.add('card--img')

image.setAttribute('width', 256)
image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)


listItem.append(image)

// const div = document.createElement('div')
// div.innerText = pokemon.stats[0].base_stat
// listItem.append(div)

const statsList = document.createElement('ul')
const firstRow = document.createElement('li')
const secondRow = document.createElement('li')
const thirdRow = document.createElement('li')
const forthRow = document.createElement('li')
const fifthRow = document.createElement('li')

firstRow.innerText = "HP: " + pokemon.stats[0].base_stat
secondRow.innerText = "Attack: " + pokemon.stats[1].base_stat
thirdRow.innerText = "Defense: " + pokemon.stats[2].base_stat
forthRow.innerText = "Special-Attack: " + pokemon.stats[3].base_stat
fifthRow.innerText = "Special-defence: " + pokemon.stats[4].base_stat

listItem.append(statsList)
statsList.append(firstRow)
statsList.append(secondRow)
statsList.append(thirdRow)
statsList.append(forthRow)
statsList.append(fifthRow)


const ul = document.querySelector('.cards')

ul.append(listItem)


// const stats = document.createElement('stats')
// stats.classList.add('card--text')

// stats.append()


}





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
