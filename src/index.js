
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

console.log(data[0]);
const cards =document.querySelector('.cards')

function pokemon() {
    cards.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
       const pokemonCard = data[i]

       //list
        const singleCard = document.createElement('li')
        singleCard.classList.add('card')
       
        //h2
        const h2Element = document.createElement('h2')
        h2Element.classList.add('card--title')
        h2Element.innerText = pokemonCard.name.charAt(0).toUpperCase() + pokemonCard.name.slice(1) 
        

        //img
        const imgPokemon = document.createElement('img')
        imgPokemon.classList.add('card--img')
        imgPokemon.width = 256
        imgPokemon.src = pokemonCard.sprites.other["official-artwork"].front_default

        //Stats
        const pokemonStats = document.createElement('ul')
        pokemonStats.classList.add("card--text")

        //hp 
        const pokeHP = document.createElement('li')
       pokeHP.innerText = `HP: ${pokemonCard.stats[0].base_stat}`
        
        pokemonStats.append(pokeHP)

        //Attack
        const pokeAttack = document.createElement('li')
        pokeAttack.innerText = `ATTACK: ${pokemonCard.stats[1].base_stat}`

        pokemonStats.append(pokeAttack)

        //DEFENSE
        const pokeDefense = document.createElement('li')
        pokeDefense.innerText = `DEFENSE: ${pokemonCard.stats[2].base_stat}`

        pokemonStats.append(pokeDefense)

        //Special-Attack
        const pokeSpAttack = document.createElement('li')
        pokeSpAttack.innerText = `SPECIAL-ATTACK: ${pokemonCard.stats[3].base_stat}`

        pokemonStats.append(pokeSpAttack)

        //Special-Defense
        const pokeSpDefense = document.createElement('li')
        pokeSpDefense.innerText = `SPECIAL-DEFENSE: ${pokemonCard.stats[4].base_stat}`

        pokemonStats.append(pokeSpDefense)

        //Speed
        const pokeSpeed = document.createElement('li')
        pokeSpeed.innerText = `SPEED: ${pokemonCard.stats[5].base_stat}`
        
        pokemonStats.append(pokeSpeed)

    singleCard.append(h2Element)
    singleCard.append(imgPokemon)
    singleCard.append(pokemonStats)
    cards.append(singleCard)
    }
}
pokemon()
