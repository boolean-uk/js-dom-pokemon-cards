
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonUL = document.querySelector(".cards")

//about 50lines of code expected- 

for (let i = 0; i < data.length; i++) {
    const pokemonObj = data[i]

    const pokemonLi = document.createElement('li')
    pokemonLi.style.listStyle = `none`
    pokemonLi.setAttribute('class', 'card')
    pokemonUL.append(pokemonLi)

    const pokemonName = document.createElement('h2')
    pokemonName.setAttribute('class', 'card--title')
    let pName = pokemonObj.name
    pName = pName[0].toUpperCase() + pName.slice(1)
    pokemonName.innerText = pName
    pokemonLi.append(pokemonName)

    const pokeImage = new Image(256);
    pokeImage.src = pokemonObj.sprites.other['official-artwork'].front_default
    pokeImage.setAttribute('class', 'card--img')
    pokemonLi.append(pokeImage)

    const pokeStats = document.createElement('ul');
    pokeStats.style.listStyle = `none`
    pokeStats.setAttribute('class', 'card--text');
    pokemonLi.append(pokeStats);

    const pokeHP = document.createElement('li');
    pokeHP.innerText = "HP:  " + pokemonObj.stats[0].base_stat;
    pokeStats.append(pokeHP);

    const pokeAtt = document.createElement('li');
    pokeAtt.innerText = "ATTACK:  " + pokemonObj.stats[1].base_stat;
    pokeStats.append(pokeAtt);

    const pokeDef = document.createElement('li');
    pokeDef.innerText = "DEFENCE:  " + pokemonObj.stats[2].base_stat;
    pokeStats.append(pokeDef);

    const pokeSpecAtt = document.createElement('li');
    pokeSpecAtt.innerText = "SPECIAL-ATTACK:  " + pokemonObj.stats[3].base_stat;
    pokeStats.append(pokeSpecAtt);

    const pokeSpecDef = document.createElement('li');
    pokeSpecDef.innerText = "SPECIAL-DEFENCE:  " + pokemonObj.stats[4].base_stat;
    pokeStats.append(pokeSpecDef);

    const pokeSpeed = document.createElement('li');
    pokeSpeed.innerText = "SPEED:  " + pokemonObj.stats[5].base_stat;
    pokeStats.append(pokeSpeed);

    const pokeGames = document.createElement('ol')
    pokeGames.setAttribute('class', 'games') /*fix later*/
    pokeGames.innerText = "GAMES:  "
    pokemonLi.append(pokeGames)

    for (let j = 0; j < pokemonObj.game_indices.length; j++) {
        const pokeVersions = document.createElement('li')
        let pVersions = pokemonObj.game_indices[j].version.name
        pVersions = pVersions[0].toUpperCase() + pVersions.slice(1)
        pokeVersions.innerText = pVersions
        pokeGames.append(pokeVersions)
    }

}