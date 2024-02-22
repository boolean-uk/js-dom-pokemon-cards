

//You can start simple and just render a single 
//pokemon card from the first element

for (let n = 0; n < data.length; n++) {
    const cardsEl = document.getElementsByClassName("cards")[0]
    

    const cardLi = document.createElement("li")
    cardLi.className = "card"
    cardLi.style.listStyleType = "none"

    const cardH2 = document.createElement("h2")

    cardH2.className = "card--title"
    let name = data[n].name
    name = name[0].toUpperCase() + name.slice(1,name.length)
    cardH2.innerHTML = name

    const cardImg = document.createElement("img")


    let index = 0


    let spritesList = Object.values(data[n].sprites).filter((sprite) => sprite !== null);

    cardImg.width = 256
    cardImg.class = "card--img"
    cardImg.src = data[n].sprites.other["official-artwork"].front_default
    cardImg.onclick = () => {
        index = (index + 1) % (spritesList.length - 2);
        cardImg.src = spritesList[index]
    }

    cardLi.appendChild(cardH2)
    cardLi.appendChild(cardImg)
    cardsEl.appendChild(cardLi)
    
    const cardsUL = document.createElement("ul")

    
    cardsUL.className = "card--text"
    
    for(let i = 0; i < data[n].stats.length; i++) {
        const li = document.createElement("li")
        li.style.listStyleType = "none"
        li.innerHTML = data[n].stats[i].stat.name.toUpperCase() + ":  " + data[n].stats[i].base_stat
        cardsUL.appendChild(li)
    }
    

    const versionHeader = document.createElement("h3")
 
    versionHeader.innerHTML = "Appeared in"

    const version = document.createElement("p")

    for (let i = 0; i < data[n].game_indices.length; i++) {
        version.innerHTML += data[n].game_indices[i].version.name
        if(i === data[n].game_indices.length - 1) {
            version.innerHTML += "\n"
        } else {
            version.innerHTML += ",\n"

        }
    }

    cardsUL.appendChild(versionHeader)
    cardsUL.appendChild(version)
    cardLi.appendChild(cardsUL)
    
}

