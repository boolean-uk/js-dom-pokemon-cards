let list = document.querySelector("ul")

data.forEach(element => {
    let list_item = document.createElement("li")
    list_item.className = "card"
    
    const pokemon_name = element.name
    const pokemon_image_url = element.sprites.other['official-artwork'].front_default
    const pokemon_hp = element.stats.find(stat => stat.stat.name === 'hp').base_stat
    const pokemon_attack = element.stats.find(stat => stat.stat.name === 'attack').base_stat
    const pokemon_defense = element.stats.find(stat => stat.stat.name === 'defense').base_stat
    const pokemon_special_attack = element.stats.find(stat => stat.stat.name === 'special-attack').base_stat
    const pokemon_special_defense = element.stats.find(stat => stat.stat.name === 'special-defense').base_stat
    const pokemon_speed = element.stats.find(stat => stat.stat.name === 'speed').base_stat

    list_item.innerHTML = `<h2 class="card--title">${pokemon_name}</h2>
    <img
      width="256"
      class="card--img"
      src=${pokemon_image_url}
    />
    <ul class="card--text">
      <li>HP: ${pokemon_hp}</li>
      <li>ATTACK: ${pokemon_attack}</li>
      <li>DEFENSE: ${pokemon_defense}</li>
      <li>SPECIAL-ATTACK: ${pokemon_special_attack}</li>
      <li>SPECIAL-DEFENSE: ${pokemon_special_defense}</li>
      <li>SPEED: ${pokemon_speed}</li>
    </ul>`

  list.append(list_item)

})