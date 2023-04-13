
console.log(data[0]);


const elementPokemon = document.querySelector('.card')
//elementPokemon.innerText = "Bulnasdnisd"
//You can start simple and just render a single 
//pokemon card from the first element

const pName = document.createElement('h2')
pName.classList.add("card--title")
pName.innerText = data[0].name

elementPokemon.append(pName)