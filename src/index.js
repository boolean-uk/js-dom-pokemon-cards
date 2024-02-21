
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

const createPoke = (poke) => {

return `<li class="card">
    <h2 class="card--title">${poke.name}</h2>
    <img
      width="256"
      class="card--img"
      src=${poke.sprites.other["official-artwork"].front_default}
    />
    <ul class="card--text">
      <li>HP: ${poke.stats[0].base_stat}</li>
      <li>ATTACK: ${poke.stats[1].base_stat}</li>
      <li>DEFENSE: ${poke.stats[2].base_stat}</li>
      <li>SPECIAL-ATTACK: ${poke.stats[3].base_stat}</li>
      <li>SPECIAL-DEFENSE: ${poke.stats[4].base_stat}</li>
      <li>SPEED: ${poke.stats[5].base_stat}</li>
    </ul>
  </li>`
  
}

const createAllPokes = (pokelist) => {
    return pokelist.map(p => createPoke(p))
}

document.getElementsByClassName('cards')[0].innerHTML = createAllPokes(data).join('')


console.log(data[0]);
