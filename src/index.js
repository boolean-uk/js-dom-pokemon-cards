
console.log(data);
const pokemonList = document.querySelector('.cards')
//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
for(let i=0;i<data.length;i++){
    //create a pokemon card
    const pokemon = document.createElement("li")
    pokemon.classList.add("card")
    //create the h2 header with the name
    const head2 = document.createElement("h2")
    head2.classList.add("card--title")
    head2.innerText = data[i].name
    pokemon.append(head2)
    //create the sprite of the pokemon
    const image = document.createElement("img")
    image.classList.add("card--img")
    image.setAttribute("width", "256")
    const images = [data[i].sprites.other["official-artwork"].front_default, data[i].sprites.front_shiny ]
    image.setAttribute("src", images[0])
    //swaping the pictures with every click
    image.addEventListener("click",function(){
        [images[0], images[1]] = [images[1], images[0]];
        image.setAttribute("src", images[0])
    })
    pokemon.append(image)
    //create the stat list
    const list = document.createElement("ul")
    list.classList.add("card--text")

    const hp = document.createElement("li")
    const atk = document.createElement("li")
    const def = document.createElement("li")
    const spatk = document.createElement("li")
    const spdef = document.createElement("li")
    const spd = document.createElement("li")
    //while there is a name in the stats array, i chose a more bruteforce slow method of doing this
    //because i didn't originally see the name of each attribute in the array lol
    hp.innerText = "HP: "+ data[i].stats[0].base_stat
    atk.innerText = "ATTACK: "+ data[i].stats[1].base_stat
    def.innerText = "DEFENCE: "+ data[i].stats[2].base_stat
    spatk.innerText = "SPECIAL ATTACK: "+ data[i].stats[3].base_stat
    spdef.innerText = "SPECIAL DEFENCE: "+ data[i].stats[4].base_stat
    spd.innerText = "SPEED: "+ data[i].stats[5].base_stat
    list.append(hp)
    list.append(atk)
    list.append(def)
    list.append(spatk)
    list.append(spdef)
    list.append(spd)
    pokemon.append(list)

    //extension 1: new section that contains the pokemon't first appearance
    const extra = document.createElement("p")
    
    extra.innerText = "First appeared in the game: " + data[i].game_indices[0].version.name
    pokemon.append(extra)
    pokemonList.append(pokemon)
}

console.log(pokemonList);
