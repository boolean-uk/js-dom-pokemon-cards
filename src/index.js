main()

function main(){
    createCards()
} 


console.log(data);


function createCards(){

const cards = document.querySelector(".cards")
console.log(cards)

for (pokemon of data){

    //Create list
    const card = document.createElement("li")
    card.classList.add("card")

    //Create name 
    const cardName = document.createElement("h2")
    cardName.classList.add("card--title")
    cardName.innerHTML = pokemon.name

    //Create image 
    const image = document.createElement("img")
    image.classList.add("card--img")
    image.setAttribute("width", "256")
    image.src = pokemon.sprites.other["official-artwork"].front_default

    //Create card text
    const textList = document.createElement("ul")
    textList.classList.add("card--text")
    for (line of pokemon.stats){
        const stat = document.createElement("li")
        stat.innerText = line.stat.name + ": " + line.base_stat
        textList.append(stat)
    }

    //EXT1 adding games the pokemon appeard in 
    const gameList = document.createElement("ul")
    gameList.classList.add("card--text")
    const games = document.createElement("li")
    games.innerText = "Appears in: "
    games.classList.add("bold")
    gameList.append(games)

    for (line of pokemon.game_indices){
        const game = document.createElement("li")
        game.innerText = line.version.name
        gameList.append(game)
    }
    
    //Append to list
    card.append(cardName)
    card.append(image)
    card.append(textList)
    card.append(gameList)

    //Change Image
    card.addEventListener('click', function() {
        changeImage(card)
    });

    //Append list to card
    cards.append(card)
}

function changeImage(card) {
    const image = card.querySelector('.card--img');
    for (pokemon of data){
        if (pokemon.name === card.querySelector('.card--title').innerHTML){
            if (image.src === pokemon.sprites.other["official-artwork"].front_default){

                image.src = pokemon.sprites.other.dream_world.front_default
            } else {

                image.src = pokemon.sprites.other["official-artwork"].front_default
            }
        }
    }

  }

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

}