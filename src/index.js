
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



function card (){
    const cardLi = document.createElement ('li');
    const cardSelection = document.body.querySelector ('ul');
    cardLi.setAttribute('class', 'card')
    cardSelection.append(cardLi)

}


function title (num) {
    const titleHeader = document.createElement ('h2');
    const titleSelection = document.body.querySelector('li')
    titleHeader.innerText = data[num].name;
    titleHeader.setAttribute('class','card--title')
    titleSelection.append(titleHeader)

}


function img (num) {
    const pokeImg = document.createElement ('img');
    const imgSrc = data[num].sprites.other["official-artwork"].front_default
    pokeImg.setAttribute ('src', `${imgSrc}`)
    pokeImg.setAttribute('class', 'card--img');
    pokeImg.setAttribute('width', '256');
    const imgSelection = document.body.querySelector('li');
    imgSelection.append(pokeImg)
}




function listCharacteristics (num) {
    const stats = data[num].stats
    const pokeCharacteristics = document.createElement ('ul');
    pokeCharacteristics.setAttribute('class', 'card--text') 
    for (let i = 0; i < stats.length; i++) {
        const statName = document.createElement('li');
        statName.innerText = `${stats[i].stat.name}: ${stats[i].base_stat}`
        pokeCharacteristics.append(statName)
    }

}
const listCharacteristicsSel = document.body.querySelector('li');
listCharacteristicsSel.append(pokeCharacteristics);

// 

card ()
title (0)
img(0)
listCharacteristics(0)

// function render (num) {
//     //     for (let i = 0; i < data.length; i++) {
//     //         card();
//     //         title (i);
//     //         img (i);
//     //         listCharacteristics(i)
//     //     }
//     // }
    
// render ()