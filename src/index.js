
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

console.log(data[0]);
const pokemonCardsUL = document.querySelector("ul")
//TOP LEVEL



function createTitle(pokemonData){
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card--title"
    cardTitle.innerHTML = pokemonData.name
    return cardTitle
}

function createImage(pokemonData){
    const cardImage = document.createElement('img')
    //cardImage.setAttribute('width', '256')
    
    //cardImage.setAttribute('src', pokemonData.sprites.other['official-artwork'].front_default)
    
    cardImage.width = '256'
    cardImage.src = pokemonData.image
    cardImage.className = "card--img"
    return cardImage
}

function add_stats(pokemonData){
    const stats = document.createElement('ul')
    stats.className = "card--text"
    //console.log(pokemonData.stats)
    for(const pokemonStat of pokemonData.stats){
        //console.log(pokemonStat)
        const stat = document.createElement('li')
        stat.innerHTML = `<strong>${pokemonStat.stat.name.toUpperCase()}: ${pokemonStat.base_stat}</strong>`
        stats.appendChild(stat)
    }
    return stats
}

function addGenData(pokemonData){
    //[0].sprites.versions["generation-i"]["red-blue"].back_default
    const generations = document.createElement('ul')
    generations.classList.add('pokemon-generator')

    const defaultImageBtnLi = document.createElement('li');
    defaultImageBtnLi.classList.add('pokemon-generator-item', 'pokemon-generator-center');
      
    const defaultImageBtn  = createButton("Default Image", ()=> {
        pokemonData.image = pokemonData.imageDefault
        drawPokemons()

    })
    defaultImageBtn .classList.add('pokemon-default-image-button')
    defaultImageBtnLi.appendChild(defaultImageBtn);
    generations.appendChild(defaultImageBtnLi);
    
    for (const gen in pokemonData.sprites.versions) {
        if (Object.hasOwnProperty.call (pokemonData.sprites.versions, gen)) {
            const genSprites = pokemonData.sprites.versions[gen];
            
            for (const game in genSprites) {
                if (Object.hasOwnProperty.call(genSprites, game)) {
                    const element = genSprites[game];
                    console.log(element.front_default)
                    console.log(game)
                    const img = element.front_default
                    //Game Li and text
                    const gameLi = document.createElement('li')
                    gameLi.innerHTML = `<strong>${capitalizeFirstLetter(game)}</strong>` 
                    generations.appendChild(gameLi)
                    gameLi.classList.add('pokemon-generator-item');
                    //Preview Image
                    gameLi.appendChild(smallImage(img)) 
                    //Change Image btn
                    const SetImageButton = createButton("Set image", () => {pokemonData.image = img
                     drawPokemons()} )

                     gameLi.appendChild(SetImageButton) 

                }
            }

            
        }
    }
    return generations

}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener("click", onClick);
    button.classList.add('button');
    return button;
  }

function smallImage(url){
    const smallImg = document.createElement('img')
    smallImg.width = '32'
    smallImg.src = url
    smallImg.className = "card--img"
    return smallImg
}

function backsideImage(pokemonData){
    const cardBackImage = document.createElement('img')
    cardBackImage.width = '256'
    cardBackImage.src = "https://archives.bulbagarden.net/media/upload/1/17/Cardback.jpg"
    cardBackImage.className = "card--img"
    return cardBackImage
}
function createCard(pokemonData){
    
    let card = document.createElement("li");
    card.className = "card"
    // card.addEventListener('click', (e) => {

    //     //console.log(pokemonData.frontForward);
    //     pokemonData.frontForward = !pokemonData.frontForward
    //     //console.log(pokemonData.frontForward);
    //     //console.log(pokemonData.name);
    //     drawPokemons()
    // });

    if(pokemonData.frontForward){
        const title = createTitle(pokemonData)
        card.appendChild(title)

        const img = createImage(pokemonData)
        card.appendChild(img)

        stats = add_stats(pokemonData)
        card.appendChild(stats)

        genData = addGenData(pokemonData)
        card.appendChild(genData)

        


    }
    else{
        const title = createTitle(pokemonData)
        card.appendChild(title)
        backside = backsideImage(pokemonData)
        card.appendChild(backside)
    }
    pokemonCardsUL.appendChild(card)

}
function drawPokemons(){
    pokemonCardsUL.innerHTML = ""
    for(const pokemon of data){
    createCard(pokemon)
}
}
for(const pokemon of data){
    pokemon.imageDefault = pokemon.sprites.other['official-artwork'].front_default
    pokemon.image = pokemon.sprites.other['official-artwork'].front_default
    pokemon.frontForward = true;}

drawPokemons()
