//You can start simple and just render a single 
//pokemon card from the first element

// console.log(data);

// const ul = document.querySelector('.cards')
// const li = document.createElement('li')
// li.setAttribute('class', 'card')
// ul.appendChild(li)

// const h2 = document.createElement('h2')
// h2.setAttribute('class', 'card--title')
// h2.innerText = "Bulbasaur"
// li.appendChild(h2)

// const img = document.createElement('img')
// img.setAttribute('width', '256')
// img.setAttribute('class', 'card--img')
// img.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
// li.appendChild(img)

// const cardUl = document.createElement('ul')
// cardUl.setAttribute('class', 'card--text')
// li.appendChild(cardUl)

// const cardLiOne = document.createElement('li')
// cardLiOne.innerText = 'HP: 45'
// cardUl.appendChild(cardLiOne)

// const cardLiTwo = document.createElement('li')
// cardLiTwo.innerText = 'ATTACK: 49'
// cardUl.appendChild(cardLiTwo)

// const cardLiThree = document.createElement('li')
// cardLiThree.innerText = 'DEFENSE: 49'
// cardUl.appendChild(cardLiThree)

// const cardLiFour = document.createElement('li')
// cardLiFour.innerText = 'SPECIAL-ATTACK: 65'
// cardUl.appendChild(cardLiFour)

// const cardLiFive = document.createElement('li')
// cardLiFive.innerText = 'SPECIAL-DEFENSE: 65'
// cardUl.appendChild(cardLiFive)

// const cardLiSix = document.createElement('li')
// cardLiSix.innerText = 'SPEED: 45'
// cardUl.appendChild(cardLiSix)

// console.log(ul)
// console.log(li)
// console.log(h2)
// console.log(cardUl)

function renderPokemonCard(){
    for(let i = 0; i < data.length; i++){
const ul = document.querySelector('.cards')
const li = document.createElement('li')
li.setAttribute('class', 'card')
ul.appendChild(li)

const h2 = document.createElement('h2')
h2.setAttribute('class', 'card--title')
h2.innerText = data[i].name
li.appendChild(h2)

const img = document.createElement('img')
img.setAttribute('width', '256')
img.setAttribute('class', 'card--img')
img.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data[i].id}.png`)
li.appendChild(img)

const cardUl = document.createElement('ul')
cardUl.setAttribute('class', 'card--text')
li.appendChild(cardUl)

const cardLiOne = document.createElement('li')
cardLiOne.innerText = `HP: ${data[i].stats[0].base_stat}`
cardUl.appendChild(cardLiOne)

const cardLiTwo = document.createElement('li')
cardLiTwo.innerText = `ATTACK: ${data[i].stats[1].base_stat}`
cardUl.appendChild(cardLiTwo)

const cardLiThree = document.createElement('li')
cardLiThree.innerText = `DEFENSE: ${data[i].stats[2].base_stat}`
cardUl.appendChild(cardLiThree)

const cardLiFour = document.createElement('li')
cardLiFour.innerText = `SPECIAL-ATTACK: ${data[i].stats[3].base_stat}`
cardUl.appendChild(cardLiFour)

const cardLiFive = document.createElement('li')
cardLiFive.innerText = `SPECIAL-DEFENSE: ${data[i].stats[4].base_stat}`
cardUl.appendChild(cardLiFive)

const cardLiSix = document.createElement('li')
cardLiSix.innerText = `SPEED: ${data[i].stats[5].base_stat}`
cardUl.appendChild(cardLiSix)
    }
}

renderPokemonCard()

console.log(data[0]);
