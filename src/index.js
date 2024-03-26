let list = document.querySelector("ul")

data.forEach(element => {

    const pokemon_name = element.name
    const pokemon_image_default = element.sprites.other['official-artwork'].front_default
    const pokemon_hp = element.stats.find(stat => stat.stat.name === 'hp').base_stat
    const pokemon_attack = element.stats.find(stat => stat.stat.name === 'attack').base_stat
    const pokemon_defense = element.stats.find(stat => stat.stat.name === 'defense').base_stat
    const pokemon_special_attack = element.stats.find(stat => stat.stat.name === 'special-attack').base_stat
    const pokemon_special_defense = element.stats.find(stat => stat.stat.name === 'special-defense').base_stat
    const pokemon_speed = element.stats.find(stat => stat.stat.name === 'speed').base_stat

    let list_item = document.createElement("li")
    list_item.className = "card"
    list_item.id = pokemon_name
    list_item.onmouseenter = togglePicture
    list_item.onmouseleave = togglePicture

    list_item.innerHTML = `<h2 class="card--title">${pokemon_name}</h2>
    <img
      width="256"
      class="card--img"
      src=${pokemon_image_default}
    />
    <ul class="card--text">
      <li>HP: ${pokemon_hp}</li>
      <li>ATTACK: ${pokemon_attack}</li>
      <li>DEFENSE: ${pokemon_defense}</li>
      <li>SPECIAL-ATTACK: ${pokemon_special_attack}</li>
      <li>SPECIAL-DEFENSE: ${pokemon_special_defense}</li>
      <li>SPEED: ${pokemon_speed}</li>
    </ul>`

    let games = document.createElement("p")
    games.className = 'card--text'
    games.innerHTML = '<h4>Games</h4>'
    games.append(Object.keys(element.sprites.versions))
    list_item.append(games)
    list.append(list_item)
})

function togglePicture(event){
    let id = event.target.id
    let card = document.getElementById(id)
    let image = card.getElementsByTagName("img")[0]
    if(event.type === 'mouseenter'){
        image.src = data.find(element => element.name === id).sprites.back_shiny
    }else{
        image.src = data.find(element => element.name === id).sprites.other['official-artwork'].front_default
    }
}