
for (let i = 0; i < data.length; i++) {
    const newPokemon = data[i];
    createCard(data[i])
}

const createCard = (currentPoke) => {
    currentPoke = currentPoke
    const cardsList = document.querySelector(".cards");
    const newLI = document.createElement("li");

    const liWithClass = addCardClass(newLI)
    const liWithName = addName(liWithClass)
    const liWithImg = addImg(liWithName)
    const liWithStats = createStatsList(liWithImg, currentPoke)
    const finalLi = createGamesList(liWithStats, currentPoke)
}





// Adding games 
const createGamesList = (listWithStats, currentPoke) => {
    const newUL = document.createElement("ul")
    newUL.classList.add("games")
    newUL.innerText = 'Appears In:'
    for (let i = 0; i < currentPoke.game_indices.length; i++) {
        const newLI = document.createElement("li")
        newLI.innerText = currentPoke.game_indices[i].version.name
        newLI.addEventListener('click', () => updateIMG(`${newLI.innerText}`, currentPoke.name))
        newUL.appendChild(newLI)
    }
    newLI.appendChild(newUL)
}

createGamesList()

cardsList.appendChild(newLI);





//adding class to overall LI
const addCardClass = (LI) => {
    LI.classList.add("card");
}

//adding name h2
const addName = () => {
    const newH2 = document.createElement("h2");
    newH2.innerText = newPokemon.name;
    newH2.classList.add("card--title");
    newLI.appendChild(newH2);
}

// adding img
const addImg = (liWithName) => {
    newPokemon.currentIMG = newPokemon.sprites.other["official-artwork"].front_default;
    const newIMG = document.createElement("img");
    newIMG.src = newPokemon.currentIMG
    newIMG.classList.add("card--img");
    newIMG.setAttribute("width", 256);
    liWithName.appendChild(newIMG);
}


// Adding new stats list
const createStatsList = (li, currentPoke) => {
    const newUL = document.createElement("ul")
    newUL.classList.add("card--text")

    for (let i = 0; i < 6; i++) {
    const newLI = document.createElement("li")
    newLI.innerText = `${currentPoke.stats[i].stat.name}: ${currentPoke.stats[i].base_stat}`
    newUL.appendChild(newLI)
    }
    li.appendChild(newUL)
}