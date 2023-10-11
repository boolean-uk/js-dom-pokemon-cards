
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]);


data.forEach((data) =>{
    const cards = document.querySelector('.cards')
    cards.style.listStyle = 'none'

    const card = document.createElement('li')
    cards.append(card)
   
  
    card.setAttribute('class', '.card ')
    const h2 = document.createElement('h2')
  

    const imageTag = document.createElement('img')

    imageTag.setAttribute('class', 'card--img')

    const images = data.sprites.other["official-artwork"].front_default;

    imageTag.setAttribute('src', images)

    const cardTitle = data.name
    const ul = document.createElement('ul')


    const HP = document.createElement('li')
    HP.setAttribute('class', '.card--text')
    HP.innerText = `HP: ${data.stats[0].base_stat}`
    ul.append(HP)

    const Attack = document.createElement('li')
    Attack.setAttribute('class', '.card--text')
    Attack.innerText = `ATTACK: ${data.stats[1].base_stat}`
    ul.append(Attack)

    const Defense = document.createElement('li')
    Defense.setAttribute('class', '.card--text')
    Defense.innerText = `DEFENSE: ${data.stats[2].base_stat}`
    ul.append(Defense)

    const SpecialDefense = document.createElement('li')
    SpecialDefense.setAttribute('class', '.card--text')
    SpecialDefense.innerText = `SPECIAL DEFENCE: ${data.stats[3].base_stat}`
    ul.append(SpecialDefense)

    const Speed = document.createElement('li')
    Speed.setAttribute('class', '.card--text')
    Speed.innerText = `SPEED: ${data.stats[4].base_stat}`
    ul.append(Speed)
    ul.style.listStyle = 'none'


    card.append(h2)
    h2.append(cardTitle)
    card.append(imageTag)
    card.append(ul)



   



})




//console.log(frontDefault);

