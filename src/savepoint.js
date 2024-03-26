for (let i = 0; i < data.length; i++) {
    const cardsList = document.querySelector(".cards");
    
    const newPokemon = data[i];
    const newLI = document.createElement("li");
    
    //adding class to overall LI
    const addCardClass = () => {
    newLI.classList.add("card");
    newLI.setAttribute('id', `${data[i].name}`)
    }
    addCardClass()
    
    //adding name h2
    const addName = () => {
        const newH2 = document.createElement("h2");
        newH2.innerText = newPokemon.name;
        newH2.classList.add("card--title");
        newLI.appendChild(newH2);
    }
    addName()
    
    // adding img
    const addImg = () => {
        newPokemon.currentIMG = newPokemon.sprites.other["official-artwork"].front_default;
        const newIMG = document.createElement("img");
        newIMG.src = newPokemon.currentIMG
        newIMG.classList.add("card--img");
        newIMG.setAttribute("width", 256);
        newLI.appendChild(newIMG);
    }
    addImg()
    
    // Adding new stats list
    const createStatsList = () => {
        const newUL = document.createElement("ul")
        newUL.classList.add("card--text")
    
        for (let j = 0; j < 6; j++) {
        const newLI = document.createElement("li")
        newLI.innerText = `${data[i].stats[j].stat.name}: ${data[i].stats[j].base_stat}`
        newUL.appendChild(newLI)
        }
        newLI.appendChild(newUL)
    }
    createStatsList()
    
    // Adding games 
    const createGamesList = () => {
        const newUL = document.createElement("ul")
        newUL.classList.add("games")
        newUL.innerText = 'Appears In:'
        for (let k = 0; k < data[i].game_indices.length; k++) {
            const newLI = document.createElement("li")
            newLI.innerText = data[i].game_indices[k].version.name
            newLI.addEventListener('click', () => updateIMG(`${newLI.innerText}`, data[i].name))
            newUL.appendChild(newLI)
        }
        newLI.appendChild(newUL)
    }
    createGamesList()
    
    cardsList.appendChild(newLI);
    }
    
    
    