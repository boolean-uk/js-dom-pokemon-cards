
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
  

// CARD

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