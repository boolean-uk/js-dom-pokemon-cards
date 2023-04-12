


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



const masterUl = document.querySelector("body > ul")

// const cardContent2 = document.createElement('li')
//

// masterUl.append(cardContent2)
// masterUl.append(cardContent)

for (let i = 0; i < data.length; i++) {
    const cardContent = document.createElement('li')
    cardContent.classList.add('card', `${i}`)
    masterUl.appendChild(cardContent)
    
    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card--title')
    cardTitle.innerText = data[i]['name']
    cardContent.appendChild(cardTitle)

    const cardImg = document.createElement('img')
    cardImg.classList.add('card--img')
    cardImg.src = data[i]['sprites']['front_default']
    cardContent.appendChild(cardImg)
    cardImg.width = 256;

}



console.log(data.length)
