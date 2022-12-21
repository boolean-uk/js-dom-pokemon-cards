
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonUL = document.querySelector('ul')
pokemonUL.setAttribute('class', 'cards')
// document.body.ul.append(pokemonUL)

for (let i=0; i < 1; i++) {
    const pokemonObj = data[i]
    // Create Li
    const newPokemon = document.createElement('li')
    newPokemon.setAttribute('class', 'card')
    // Append list item into UL (HOW???)
    pokemonUL.append(newPokemon)

    // Get Pokemon Name 
    const name = document.createElement('h1')
    name.innerText = data[i].name
    name.setAttribute('class', 'pokemonName')
    newPokemon.append(name)

    // Get Pokemon Sprite
    const sprite = document.createElement('img')
    sprite.setAttribute("src", pokemonObj.sprites.other['official-artwork'].front_default)
    sprite.setAttribute('class', 'pokemonArtwork')
    console.log(sprite)
    newPokemon.append(sprite)

    // Get Pokemon HP
    const hpStatName = document.createElement('p')
    hpStatName.innerText = `${data[i].stats[0].stat.name}: ${data[i].stats[0].base_stat}`
    hpStatName.setAttribute('class', 'PokemonHpStatName')
    console.log(hpStatName)
    newPokemon.append(hpStatName)

    // Get Pokemon ATTACK
    const attackStatName = document.createElement('p')
    attackStatName.innerText = `${data[i].stats[1].stat.name}: ${data[i].stats[1].base_stat}` 
    attackStatName.setAttribute('class', 'PokemonAttackStatName')
    console.log(attackStatName)
    newPokemon.append(attackStatName)
 

    // Get Pokemon DEF
    const defStat = document.createElement('p')
    defStat.innerText = `${data[i].stats[2].stat.name}: ${data[i].stats[2].base_stat}`
    defStat.setAttribute('class', 'PokemonDefStatName')
    console.log(defStat)
    newPokemon.append(defStat)



    // Get Pokemon SPK ATTACK
    const spattackStatName = document.createElement('p')
    spattackStatName.innerText = `${data[i].stats[3].stat.name}: ${data[i].stats[3].base_stat}`
    spattackStatName.setAttribute('class', 'PokemonSpattackStatName')
    console.log(spattackStatName)
    newPokemon.append(spattackStatName)

    // Get Pokemon SPK DEF
    const spdefStatName = document.createElement('p')
    spdefStatName.innerText = `${data[i].stats[4].stat.name}: ${data[i].stats[4].base_stat}`
    spdefStatName.setAttribute('class', 'PokemonSpdefStatName')
    console.log(spdefStatName)
    newPokemon.append(spdefStatName)


    // Get Pokemon SPEED
    const speedStatName = document.createElement('p')
    speedStatName.innerText = `${data[i].stats[5].stat.name}: ${data[i].stats[5].base_stat}`
    speedStatName.setAttribute('class', 'PokemonSpeedStatName')
    console.log(speedStatName)
    newPokemon.append(speedStatName)

}

