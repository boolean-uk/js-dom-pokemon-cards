let cards = document.querySelector(".cards")

let expandedCard = null;
data.forEach(pokemon => {
    let id = 0;
    id++;
    const card = document.createElement('li');
    card.style.listStyle = 'none'
    card.setAttribute('class', 'card');
    card.setAttribute('id', id)
    card.append(createHeader(pokemon))
    card.append(createImage(pokemon))

    const textContainer = document.createElement("div")
    textContainer.setAttribute('class', 'card--text--container')
    textContainer.append(createCardContext(pokemon))
    let gameContext = addGameContext(pokemon)
    card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');

        const cards = document.querySelectorAll('.card');
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });

        card.classList.toggle('expanded', !isExpanded);
        if (!isExpanded) {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            textContainer.append(gameContext)
        }else {
            textContainer.removeChild(gameContext)
        }
    })

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


function createCardContext(pokemon){
    const textContainer = document.createElement("ul")
    textContainer.style.listStyle = 'none'
    textContainer.setAttribute('class', 'card--text')
    pokemon.stats.forEach(stat => {
        const listItem = document.createElement("li")

        listItem.innerText = stat.stat.name.toUpperCase() + ":" + stat.base_stat
        
        textContainer.append(listItem)
    })
    return textContainer

}

function addGameContext(pokemon){
    const gameContainer = document.createElement("div")
    gameContainer.setAttribute('class', 'card--game--container')
    gameContainer.style.listStyle = 'none'

    const header = document.createElement("p")
    header.innerText = "Appeared in"
    gameContainer.append(header)
    
    const gameList = document.createElement("ul")
    gameList.setAttribute('class', 'card--game')

    gameList.style.listStyle = 'none'
    pokemon.game_indices.forEach(game_index => {
        console.log(game_index)
        const listItem = document.createElement("li")
        const gameName = game_index.version.name.toUpperCase()
        listItem.innerText = gameName
        gameList.append(listItem)
    })
    gameContainer.append(gameList)
    return gameContainer
}
