
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

for (let n = 0; n < data.length; n++) {
    const cardsEl = document.getElementsByClassName("cards")[0]
    

    const cardLi = document.createElement("li")
    cardLi.className = "card"
    cardLi.style.listStyleType = "none"
    const cardH2 = document.createElement("h2")
    
    const cardImg = document.createElement("img")


    cardImg.width = 256
    cardImg.class = "card--img"
    cardImg.src = data[n].sprites.other["official-artwork"].front_default
    
    cardLi.appendChild(cardH2)
    cardLi.appendChild(cardImg)
    cardsEl.appendChild(cardLi)
    
    const cardsUL = document.createElement("ul")

    
    cardsUL.className = "card--text"
    
    for(let i = 0; i < data[n].stats.length; i++) {
        const li = document.createElement("li")
        li.style.listStyleType = "none"
        li.innerHTML = data[n].stats[i].stat.name + ":  " + data[n].stats[i].base_stat
        cardsUL.appendChild(li)
    }
    
    cardLi.appendChild(cardsUL)
    
}

