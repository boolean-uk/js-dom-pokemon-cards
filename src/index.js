
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
const pokeName = data[0].name
console.log("pokemon", pokeName)

// makes a value into a list item
function createPokeList (value) {
    const li = document.createElement("li");
    li.innerText = value;
    li.setAttribute("class", "card")
    const ul = document.querySelector(".cards")
    return ul.append(li);
}

// collects the stat from the data
const pokeStat = (value) => {
    const pokeHPName = data[0].stats[0].stat.name
        console.log("stat name", pokeHPName)
    const pokeHPAmount = data[0].stats[0].base_stat
        console.log("stat value", pokeHPAmount)
    const statContainer = `${pokeHPName}:${pokeHPAmount}`    
    createPokeList(statContainer)
}




console.log("pokemon List", createPokeList(pokeName))
console.log("pokemon HP stats", pokeStat())



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