const cards = document.querySelector('.cards')

console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function pokeDex(){
  cards.innerHTML = ''

for (let i = 0 ; i < data.length ; i++){
    const pokemonCard = data[i]
    const singleCard = document.createElement('li')
    singleCard.classList.add('card')

    const h2Element = document.createElement('h2')
    h2Element.classList.add('card--title')
    h2Element.innerText = pokemonCard.name
    
    const pokeImg = document.createElement('img')
    pokeImg.classList.add('card--img')
    pokeImg.width = 256
    pokeImg.src = pokemonCard.sprites.other["official-artwork"].front_default

    
    const unorList = document.createElement('ul')
    unorList.classList.add("card--text")

// hp
    const pokeHP = document.createElement('li');
    pokeHP.innerText = `HP: ${pokemonCard.stats[0].base_stat}`

    unorList.append(pokeHP)

    // attack
    const pokeAttack = document.createElement('li');
    pokeAttack.innerText = `ATTACK: ${pokemonCard.stats[1].base_stat}`

    unorList.append(pokeAttack)

    // defense

    const pokeDef = document.createElement('li');
    pokeDef.innerText = `DEFENSE: ${pokemonCard.stats[2].base_stat}`

    unorList.append(pokeDef)

    // SPECIAL ATTACK
    const pokeSpecAtt = document.createElement('li');
    pokeSpecAtt.innerText = `SPECIAL ATTACK: ${pokemonCard.stats[3].base_stat}`

    unorList.append(pokeSpecAtt)
    
    // SPECIAL DEFENSE
    const pokeSpecDef = document.createElement('li');
    pokeSpecDef.innerText = `SPECIAL DEFENSE: ${pokemonCard.stats[4].base_stat}`

    unorList.append(pokeSpecDef)
    
    // SPEED

    const pokeSpeed = document.createElement('li');
    pokeSpeed.innerText = `SPEED: ${pokemonCard.stats[5].base_stat}`

    unorList.append(pokeSpeed)
    


singleCard.append(h2Element)
singleCard.append(pokeImg)
singleCard.append(unorList)
cards.append(singleCard)

}
}

pokeDex()
// 1. Loop over the data array
// 2. For every element in the array, create an <li></li>
// 3. Add the "card" class to the <li>'s classList
// 4. Create a <h2> element
// 5. Add the "card--title" class to the <h2>'s classList
// 6. Add "Bulbasaur" to the <h2>'s innerText
// 7. Append the <h2> element to the <li> we created
// 8. Do this for every other part of the card.html template example
// 9. Append the <li> to the <ul class="cards"> element