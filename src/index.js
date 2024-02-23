console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

let cardType = []

function capitalLetter(data){
    return `${data.name.at(0).toUpperCase() + data.name.slice(1)}`
}

function modifyCardColors() {
    let grassColor = "rgb(158,220,73)"
    let fireColor = "rgb(213,111,42)"
    let waterColor = "rgb(135,197,232)"
    let normalColor = "rgb(232,238,242)"
    let bugColor = "rgb(150,221,164)"

    for(let i = 0; i < document.getElementsByClassName("card").length; i++){
        console.log(`Pokemon ${i}, ${cardType[i]}`)
        let color = normalColor

        if(cardType.at(i) == "grass")
            color = grassColor;
        if(cardType.at(i) == "fire")
            color = fireColor;
        if(cardType.at(i) == "water")
            color = waterColor;
        if(cardType.at(i) == "bug")
            color = bugColor;
        if(cardType.at(i) == "normal")
            color = normalColor;

        document.getElementsByClassName("card")[i].style.backgroundColor = color;
    }
}

function createCard(data) {
    let pokemonType = ""
    pokemonType = data.stats[6].type
    cardType.push(pokemonType)

    return `<li class="card">
    <h2 class="card--title">${capitalLetter(data)}</h2>
    <img
      width="256"
      class="card--img"
      src="${data.sprites.other["official-artwork"].front_default}"
    />
    <ul class="card--text">
      <li>HP: ${data.stats[0].base_stat}</li>
      <li>ATTACK: ${data.stats[1].base_stat}</li>
      <li>DEFENSE: ${data.stats[2].base_stat}</li>
      <li>SPECIAL-ATTACK: ${data.stats[3].base_stat}</li>
      <li>SPECIAL-DEFENSE: ${data.stats[4].base_stat}</li>
      <li>SPEED: ${data.stats[5].base_stat}</li>
    </ul>
  </li>`
}

function populateTable(pokemonList) {
    return pokemonList.map(x => createCard(x)) 
}
document.getElementsByClassName('cards')[0].innerHTML = populateTable(data).join('')
modifyCardColors();
