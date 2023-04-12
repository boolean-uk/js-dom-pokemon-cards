
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


// input
    // some function that can access data for pokemon
// output
    // retrieved data in a card
// logic
    // 1 - make card
        // - making list items (card)
        // - append li to ul (class="cards")
    
    // 2 - repeat cards
        // - loop through each element of array
        // - makes a card for it
        // - appends to the ul



// selects a pokemon from the data array  


// class for name = card--title
// loop through data array to select pokemon
const pokedex = (data) => {
    for (let i = 0; i <= data.length; i++ ) {
        const pokeName = data[i].name
        createPokeList(pokeName)
    }
    
}

// makes a value into a list item
function createPokeList (value) {
    const li = document.createElement("li");
    li.innerText = value;
    li.setAttribute("class", "card")
    const ul = document.querySelector(".cards")
    return ul.append(li);
}




// loop through all of the stats to find

// collects the stat name and value from data
const pokeStat = () => {
    const pokeStatName = data[0].stats[0].stat.name
    const pokeStatAmount = data[0].stats[0].base_stat
    const statContainer = `${pokeStatName}:${pokeStatAmount}`    
    // createPokeList(statContainer)
}




// console.log("pokemon List", createPokeList())
// console.log("pokemon HP stats", pokeStat())
pokedex(data)


// CARD

// function card (value) {
//     const li = document.createElement("li");
//     return li;
// }



// // console.log("card",card(data[0].name))

// function renderCard (value) {
//     const ul = document.querySelector("ul")
//     ul.innerHTML = "";
//     card(data[0].name)
//     body.cards.append(li)
// }

// console.log(renderCard(3))



// NAME PATH
    // data[nth]
    // .name (should give name)

// ART PATH
    // data[nth pokemon in list]
    // .sprites() -- property in pokemon object
    // .other -- another object, inside sprites
    // ['official-artwork'] -- only 1 item in that object


// STATS PATH
    // data[nth]
    // .stats -- array of objects
        // [0-5] -- 6 stats (hp, att...)
        // for each one - select the correct object
            
        // eg - for HP
        // add name:
            // .stats[0].stat.name 
        // add stat no:
            // .stats[0].base_stat