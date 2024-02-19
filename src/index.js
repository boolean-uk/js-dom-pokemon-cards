
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]);


function RenderImage(pokemon, game)
{
    //Change data of the pokemon
    const versions = pokemon.sprites.versions
    let sprite = ""
    if (game === 'red' || game === 'blue') sprite = versions['generation-i']['red-blue'].front_default
    else if (game === 'yellow') sprite = versions['generation-i']['yellow'].front_default
    else if (game === 'gold') sprite = versions['generation-ii']['gold'].front_default
    else if (game === 'silver') sprite = versions['generation-ii']['silver'].front_default
    else if (game === 'crystal') sprite = versions['generation-ii']['crystal'].front_default
    else if (game === 'emerald') sprite = versions['generation-iii']['emerald'].front_default
    else if (game === 'firered' || game === 'leafgreen') sprite = versions['generation-iii']['firered-leafgreen'].front_default
    else if (game === 'ruby' || game === 'sapphire') sprite = versions['generation-iii']['ruby-sapphire'].front_default
    else if (game === 'diamond' || game === 'pearl') sprite = versions['generation-iv']['diamond-pearl'].front_default
    else if (game === 'heartgold' || game === 'soulsilver') sprite = versions['generation-iv']['heartgold-soulsilver'].front_default
    else if (game === 'platinum') sprite = versions['generation-iv']['platinum'].front_default
    else if (game === 'black' || game === 'white') sprite = versions['generation-v']['black-white'].front_default
    else if (game === 'omegaruby' || game === 'alphasapphire') sprite = versions['generation-vi']['omegaruby-alphasapphire'].front_default
    else if (game === 'x' || game === 'y') sprite = versions['generation-vi']['x-y'].front_default
    else if (game === 'ultra-sun' || game === 'ultramoon') sprite = versions['generation-vii']['ultra-sun-ultra-moon'].front_default
    else sprite = pokemon.sprites.other["official-artwork"].front_default

    pokemon.currentSprite = sprite
    renderCards()

}


function Render(pokemon, li)
{

    var img = document.createElement('img');
    //   img.src = pokemon.sprites.other["official-artwork"].front_default
    if (typeof pokemon.currentSprite === 'undefined')
    pokemon.currentSprite = pokemon.sprites.other["official-artwork"].front_default
       img.src = pokemon.currentSprite

       img.width = 256
       img.setAttribute("class", "card--img")
    li.appendChild(img)
}



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


    const pokemonLi = document.createElement('li')
    pokemonLi.setAttribute("class", "card")
    
    const pokemonName = document.createElement("h2")
    const textNode = document.createTextNode(pokemon.name)
    pokemonName.setAttribute("class", "card--text")
    pokemonName.appendChild(textNode)

    gamesUL = document.createElement('ul')
    pokemon.game_indices.forEach((x) => {
        var game = x.version.name
        gameli = document.createElement('li')
        gameli.appendChild(document.createTextNode(`${game}`))
        gameli.addEventListener('click', () => RenderImage(pokemon, game))
        gamesUL.appendChild(gameli)
    })



    pokemonLi.appendChild(pokemonName)

    Render(pokemon, pokemonLi)


    pokemonLi.appendChild(statUL)
    pokemonLi.appendChild(gamesUL)
    ul.appendChild(pokemonLi)
}

function renderCards()
{

    const UL = document.querySelector('.cards')
    UL.innerHTML = "" 
    //For each pokemon in data run createcars
    data.forEach(x => CreateCard(x, UL))

}

function main()
{
    renderCards()
    console.log("Running main")
}

main()