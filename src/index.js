
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]);

function CreateCard(pokemon, ul)
{
    const stats = pokemon.stats
    var statUL = document.createElement('ul')
    statUL.setAttribute("class", "card--text")
    for (let i = 0; i < stats.length; i++)
    {
        var pokemonStat  = stats[i]
        var statLi = document.createElement('li');
        statLi.appendChild(document.createTextNode(`${pokemonStat.stat.name.toUpperCase()}: ${pokemonStat.base_stat}`))
        statUL.appendChild(statLi)
    }
    var img = document.createElement('img');
    img.src = pokemon.sprites.other["official-artwork"].front_default
    img.width = 256
    img.setAttribute("class", "card--img")
    const pokemonLi = document.createElement('li')
    pokemonLi.setAttribute("class", "card")
    
    const pokemonName = document.createElement("h2")
    const textNode = document.createTextNode(pokemon.name)
    pokemonName.setAttribute("class", "card--text")
    pokemonName.appendChild(textNode)

    pokemonLi.appendChild(pokemonName)
    pokemonLi.appendChild(img)
    pokemonLi.appendChild(statUL)
    ul.appendChild(pokemonLi)
}

function renderCards()
{
    const UL = document.querySelector('.cards')
    //For each pokemon in data run createcars
    for (let i = 0; i < data.length; i++)
    {
        CreateCard(data[i], UL)
    }

}

function main()
{
    renderCards()
    console.log("Running main")
}

main()