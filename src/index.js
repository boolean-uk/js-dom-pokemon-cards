
console.log(data[0]);


const elementPokemon = document.querySelector('.card')

const pName = document.createElement('h2')
pName.classList.add("card--title")
pName.innerText = data[0].name

elementPokemon.append(pName)