
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const allPokeIds=[]
const cardContainer =document.querySelector(".cards")

for(let i=0;i<data.length;i++){
    const monster=data[i];
    const card= document.createElement("li")
    card.setAttribute("class","card")
    cardContainer.append(card)
    const cardTitle=document.createElement("h2")
      
  // cardTitle.style.textTransform ="captalize"
    cardTitle.setAttribute("class","card--title")
    cardTitle.innerText=monster.name
    card.append(cardTitle)
    const pokeimg= document.createElement("img")
    pokeimg.setAttribute("width","256")
    pokeimg.setAttribute("class","card--img")
    pokeimg.setAttribute("src",monster.sprites.other["official-artwork"].front_default )
    card.append(pokeimg)
    const cardtxt=document.createElement("ul")
    cardtxt.setAttribute("class","card--text")
    card.append(cardtxt)

    for(let j=0; j<monster.stats.length;j++){
        const  namestats= monster.stats[j].stat.name 
        const numberstats= monster.stats[j].base_stat
        const stats= document.createElement("li")
        stats.innerText=`${namestats}: ${numberstats}`
        cardtxt.append(stats)

    }
}

