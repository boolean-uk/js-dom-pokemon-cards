
console.log(data[0]);


const elementPokemon = document.querySelector('.card')
//elementPokemon.innerText = "Bulnasdnisd"
//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0])

const pName = document.createElement('h2')
pName.classList.add("card--title")
pName.innerText = data[0].name

elementPokemon.append(pName)


const image = document.createElement('img')
image.classList.add("card--img")
image.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" )
elementPokemon.append(image)

const text = document.createElement('ul')
text.classList.add("card--text")

for(let i=0; i<= 5; i++) {
    const hp = document.createElement('li')
    text.classList.add("card--text")
text.innerText = data[0].stats[i].stat.name + data[0].stats[i].base_stat 
//text.innerText = 
elementPokemon.append(text)

}










