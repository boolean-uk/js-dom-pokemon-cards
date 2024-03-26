//You can start simple and just render a single 
//pokemon card from the first element

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


for (let i = 0; i < data.length; i++) {
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

    const unorderedList = document.createElement('ul')
    unorderedList.classList.add('card--text')
    listItem.append(unorderedList)

    const hp = document.createElement('li')
    hp.append(document.createTextNode(`HP: ${pokemon.stats[0].base_stat}`))
    unorderedList.append(hp)

    const attack = document.createElement('li')
    attack.append(document.createTextNode(`ATTACK: ${pokemon.stats[1].base_stat}`))

    unorderedList.append(attack)

    const defense = document.createElement('li')
    defense.append(document.createTextNode(`DEFENSE: ${pokemon.stats[2].base_stat}`))
    unorderedList.append(defense) 

    const specialAttack = document.createElement('li')
    specialAttack.append(document.createTextNode(`SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}`))
    unorderedList.append(specialAttack) 

    const specialDefense = document.createElement('li')
    specialDefense.append(document.createTextNode(`SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}`))
    unorderedList.append(specialDefense) 

    const speed = document.createElement('li')
    speed.append(document.createTextNode(`SPEED: ${pokemon.stats[5].base_stat}`))
    unorderedList.append(speed)  



    const ul = document.querySelector('.cards')
    ul.append(listItem)
}
    