
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



function card (num){
    const cardLi = document.createElement ('li');
    const cardSelection = document.body.querySelector ('ul');
    cardLi.setAttribute('class', 'card')
    title (num,cardLi)
    img(num, cardLi)
    listCharacteristics(num, cardLi)
    cardSelection.append(cardLi)

}


function title (num, cardLi) {
    const titleHeader = document.createElement ('h2');
   let name = data[num].name;
   name = name[0].toUpperCase() + name.slice(1);
    titleHeader.innerText = name;
    titleHeader.setAttribute('class','card--title')
    cardLi.append(titleHeader)

}


function img (num, cardLi) {
    const pokeImg = document.createElement ('img');
    const imgSrc = data[num].sprites.other["official-artwork"].front_default
    pokeImg.setAttribute ('src', `${imgSrc}`)
    pokeImg.setAttribute('class', 'card--img');
    pokeImg.setAttribute('width', '256');
   
    cardLi.append(pokeImg)
}




function listCharacteristics (num, cardLi) {
    const stats = data[num].stats
    const pokeCharacteristics = document.createElement ('ul');
    pokeCharacteristics.setAttribute('class', 'card--text') 
    for (let i = 0; i < stats.length; i++) {
        const statName = document.createElement('li');
        statName.innerText = `${stats[i].stat.name}: ${stats[i].base_stat}`
        pokeCharacteristics.append(statName)
    }
cardLi.append(pokeCharacteristics)
}




function render (num) {
        for (let i = 0; i < data.length; i++) {
            card(i);
           
        }
    }
    
render ()