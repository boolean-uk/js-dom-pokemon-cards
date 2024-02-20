let cards = document.querySelector(".cards")

data.forEach(pokemon => {
    const card = document.createElement('li');
    card.style.listStyle = 'none'
    card.setAttribute('class', 'card');
    card.append(createHeader(pokemon))
    card.append(createImage(pokemon))

    const textContainer = document.createElement("div")
    textContainer.setAttribute('class', 'card--text--container')
    textContainer.append(createCardContext(pokemon))
    textContainer.append(addGameContext(pokemon))


    card.append(textContainer)
    cards.append(card)
});
function createHeader(pokemon){
    const h2 = document.createElement("h2")
    h2.setAttribute('class', 'card--title')
    h2.innerText=pokemon.name.toUpperCase()
    return h2
}

function createImage(pokemon){
    const img = document.createElement("img")
    img.setAttribute('class', 'card--img')
    img.setAttribute('width', '256')

    img.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
    let repeater;
    img.addEventListener('mouseover', () => {
        let sec = 1
        let imageSrc = [pokemon.sprites.back_default, 
            pokemon.sprites.back_shiny,
            pokemon.sprites.front_default,
            pokemon.sprites.front_shiny,
            pokemon.sprites.other.dream_world.front_default,
        ]
        let num = 0
        repeater = setInterval(()=> {
            let len = imageSrc.length;
            img.src = imageSrc[num++]
            if(num===len){
                num=0
                clearInterval(repeater)
            }
        }, sec*1000)
    });
    img.addEventListener('mouseleave', function() {
        clearInterval(repeater)
        this.src = pokemon.sprites.other["official-artwork"].front_default
    })
    return img
}

function handleMouseOver(pokemon, image){
    let delayInseconds = 1
    let imageSrc = [pokemon.sprites.back_default, 
                    pokemon.sprites.back_shiny,
                    pokemon.sprites.front_default,
                    pokemon.sprites.front_shiny,
                    pokemon.sprites.other.dream_world.front_default,
                ]
    let num = 0
    let changeImage = function(){
        let len = imageSrc.length;
        image.src = imageSrc[num++]
        console.log(image.src)
        if(num===len){
            num = 0
        }
    }
    setInterval(changeImage, delayInseconds*1000);
}

function createCardContext(pokemon){
    const textContainer = document.createElement("ul")
    textContainer.style.listStyle = 'none'
    textContainer.setAttribute('class', 'card--text')
    pokemon.stats.forEach(stat => {
        const listItem = document.createElement("li")
        let statName = stat.stat.name.toUpperCase()
        if(statName.includes("-")){
            listItem.innerText = statName.slice(0,2).toUpperCase() + statName.slice(8,9).toUpperCase() + ":" + stat.base_stat
        }else {

            listItem.innerText = stat.stat.name.slice(0,3).toUpperCase() + ":" + stat.base_stat
        }
        textContainer.append(listItem)
    })
    return textContainer

}

function addGameContext(pokemon){
    const gameContainer = document.createElement("div")
    gameContainer.style.listStyle = 'none'
    gameContainer.setAttribute('class', 'card--game')
    const gameList = document.createElement("ul")
    gameList.style.listStyle = 'none'
    for(let i = 1; i < 7; i++){
        const listItem = document.createElement("li")
        const gameName = pokemon.game_indices[i].version.name.toUpperCase()
        listItem.innerText = gameName
        gameContainer.append(listItem)
    }
    // pokemon.game_indices.forEach(game_index => {
    //     console.log(game_index)
    //     const listItem = document.createElement("li")
    //     const gameName = game_index.version.name.toUpperCase()
    //     listItem.innerText = gameName
    //     gameContainer.append(listItem)
    // })
    return gameContainer
}
