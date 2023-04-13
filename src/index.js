console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Initiallizing an array which will hold the IDs of each printed picture
const printedImagesArr = []

// Constructing the card list
const cardList = document.querySelector('.cards')
for(let i = 0; i < data.length; i++) {

    // The <li> tag which contains each card
    const card = document.createElement('li')
    card.classList.add('card')

    // The name of each Pokemon
    const title = document.createElement('h2')
    title.classList.add('card--title')
    const name = data[i].name.charAt(0).toUpperCase() + data[i].name.substring(1)
    title.innerText = name
    card.append(title)

    // The image of each Pokemon with an initial value and setting IDs
    const image = document.createElement('img')
    image.setAttribute('width', "256")
    image.setAttribute('height', "256")
    image.classList.add("card--img")
    image.setAttribute("id", i)
    image.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
    card.append(image)

    // The list of start for each pokemon
    const listOfStats = document.createElement('ul')
    listOfStats.classList.add('card--text')
    for(let j = 0; j < data[i].stats.length; j++){
        const statElementOfList = document.createElement('li')
        statElementOfList.innerText=data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
        listOfStats.append(statElementOfList)
    }
    card.append(listOfStats)

    // An array made to string which contains all game versions each Pokemon was available
    const gameVersions = document.createElement('p')
    let strVersions = 'Appeared in: '
    const arrVersions = []
    // Capitalizing first letter
    for (let j = 0; j < data[i].game_indices.length; j++) {
        let gameName = data[i].game_indices[j].version.name
        gameName = gameName.charAt(0).toUpperCase() + gameName.substring(1)
        arrVersions.push(gameName)
    }
    // Transition from array to a string separated with (,)
    for (let j = 0; j < arrVersions.length; j++) {
        if (j > 0) {
            strVersions += ', '
        }
        strVersions += arrVersions[j]
    }
    // Some style on part of the string
    gameVersions.innerHTML= '<strong>' + strVersions.substring(0,12) + '</strong>' + strVersions.substring(12)
    card.append(gameVersions)
    
    // Appending each card to the ul of body
    cardList.append(card)
}

// Looping through images of each Card on click
for (let i = 0; i < data.length; i++) { 
    // Populating the ID array of printed images
    printedImagesArr.push(document.getElementById(i)) 
    // Using the array to add Event listeners for each ID
    printedImagesArr[i].addEventListener('click', function() {                      // unamed-function

        // An array of all images' position in the data file
        const imgArray = [data[i].sprites.other["official-artwork"].front_default,
                data[i].sprites.other["dream_world"].front_default,
                data[i].sprites.front_default,
                data[i].sprites.back_default,
                data[i].sprites.front_shiny,
                data[i].sprites.back_shiny
            ]
        
        // God help us.... 
        // Apparently I can use `this` to point to the current object and grab the src path
        const currentSrc = this.getAttribute('src')
        // Here I'm using the .indexOf with the mentioned path to get the index of the imgArray used 
        const currentIndex = imgArray.indexOf(currentSrc)
        // OKAY TAKE A DEEP BREATH ..... and out.
        // So this is a trick to loop through an array but when we reach the last index it resets to 0
        // Say we have an array with length 4 and currentIndex = 3 (which is the last element)
        // after the currentIndex + 1 if we % (mod) with 4 , 4%4 = 0 . So we are back at the beginning
        // BUT IF for example currentIndex is 1 , 1 % 4 = 1 , which means as long is less than
        // the array length it will always return the same number.
        const nextIndex = (currentIndex + 1) % imgArray.length
        this.setAttribute('src' , imgArray[nextIndex] )
    })
}