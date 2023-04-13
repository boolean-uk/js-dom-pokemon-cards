
const cards = document.querySelector('.cards')
const pCards = document.createElement('ul')
pCards.classList.add("cards")

for (let j=0; j < data.length; j++) {
    const elementPokemon = document.querySelector('.card')
    const firstPokemon = document.createElement('li')
    firstPokemon.classList.add("card")
    cards.appendChild(elementPokemon)
    pCards.appendChild(firstPokemon)


    const pName = document.createElement('h2')

    const cardtitle = document.querySelector('.card--text')
    pName.classList.add("cardtitle")
    pName.innerText = data[j].name
    
    elementPokemon.append(pName)
    
    const image = document.createElement('img')
    image.classList.add("card--img")
    image.setAttribute("src", data[j].sprites.other["official-artwork"].front_default)
    elementPokemon.append(image)
    
    const text = document.createElement('ul')
    text.classList.add("card--text")
    
    for(let i=0; i<= 5; i++) {
        const stat = document.createElement('li')
        stat.append(data[j].stats[i].stat.name + data[j].stats[i].base_stat)
        text.appendChild(stat)
        elementPokemon.append(text)
    }
   
}