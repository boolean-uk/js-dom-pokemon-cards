// li.classList.add('card')
const ul = document.querySelector('ul')

let value0 = 0
let value1 = 0
let value2 = 0
let value3 = 0
let value4 = 0
let value5 = 0
let value6 = 0
let value7 = 0
let value8 = 0
let value9 = 0
let value10 = 0
let value11 = 0
let value12 = 0
let value13 = 0
let value14 = 0
let value15 = 0
let value16 = 0
let value17 = 0
let value18 = 0
let value19 = 0



for (let i = 0; i < 20; i++) {
    const li = document.createElement('li')
    li.setAttribute('class', 'card')
    // <li class='card'> </li>
    const title = document.createElement('h2')
    title.setAttribute('class', 'card--title')

    // <h2 class='card--title> </h2>'

    title.innerText = data[i].name
    li.append(title)

    const image = document.createElement('img')
    image.setAttribute('width', '256')
    image.setAttribute('class', 'card--img')
    image.classList.add('image' + i)
    let imageSrc = data[i].sprites.other["official-artwork"].front_default

    image.setAttribute('src', `${imageSrc}`)

    li.append(image)

    const scrollLeftButton = document.createElement('button')
    scrollLeftButton.setAttribute('class', 'left' + i)
    scrollLeftButton.classList.add('left')
    scrollLeftButton.innerHTML = '&#x2190;'
    const scrollRightButton = document.createElement('button')
    scrollRightButton.setAttribute('class', 'right' + (i + 20))
    scrollRightButton.classList.add('right')
    scrollRightButton.innerHTML = '&#x2192'


    li.append(scrollLeftButton)
    li.append(scrollRightButton)


    const newUl = document.createElement('ul')
    newUl.setAttribute('class', 'card--text')
    li.append(newUl)

    
    const hpLi = document.createElement('li')
    const attackLi = document.createElement('li')
    const defenceLi = document.createElement('li')
    const specialAttackLi = document.createElement('li')
    const specialDefLi = document.createElement('li')
    const speedLi = document.createElement('li')

    let hp = data[i].stats[0].base_stat
    hpLi.innerText = `HP: ${hp}`
    
    let attack = data[i].stats[1].base_stat
    attackLi.innerText = `ATTACK: ${attack}`
    
    let defence = data[i].stats[2].base_stat
    defenceLi.innerText = `DEFENCE: ${defence}`
    
    let specialAtt = data[i].stats[3].base_stat
    specialAttackLi.innerText = `SPECIAL-ATTACK: ${specialAtt}`
    
    let specialDef = data[i].stats[4].base_stat
    specialDefLi.innerText = `SPECIAL-DEFENSE: ${specialDef}`
    
    let speed = data[i].stats[5].base_stat
    speedLi.innerText = `SPEED: ${speed}`

    newUl.append(hpLi)
    newUl.append(attackLi)
    newUl.append(defenceLi)
    newUl.append(specialAttackLi)
    newUl.append(specialDefLi)
    newUl.append(speedLi)

    const newSection = document.createElement('p')
    let array = []
    for (let j = 0; j < 20; j++) {
        gameName = data[i].game_indices[j].version.name
        array.push(gameName)
    }
    let sentence = array.join(' ')
    newSection.innerText = sentence
    li.append(newSection)

    ul.append(li)
}
let poke = []
for (let i = 0; i < 20; i++) {
    let array = []
    poke.push(array)
}


for (let i = 0; i < 20; i++) {
    poke[i].push(data[i].sprites.back_default)
    poke[i].push(data[i].sprites.back_shiny)
    poke[i].push(data[i].sprites.front_default)
    poke[i].push(data[i].sprites.front_shiny)
    poke[i].push(data[i].sprites.other["official-artwork"].front_default)
}

const left0 = document.querySelector('.left0')
const right0 = document.querySelector('.right20')
const image0 = document.querySelector('.image0')

function pics0 () {
    if (value0 === 5) {
        return
    }
    value0 += 1
    console.log(value0)
    if (value0 === 1) {
        image0.setAttribute('src', `${poke[0][0]}`)
    }
    if (value0 === 2) {
        image0.setAttribute('src', `${poke[0][1]}`)
    }
    if (value0 === 3) {
        image0.setAttribute('src', `${poke[0][2]}`)
    }
    if (value0 === 4) {
        image0.setAttribute('src', `${poke[0][3]}`)
    }
    if (value0 === 5) {
        image0.setAttribute('src', `${poke[0][4]}`)
    }
}

function pics0R () {
    if (value0 === 0) {
        return
    }
    value0 -= 1
    console.log(value0)
    if (value0 === 4) {
        image0.setAttribute('src', `${poke[0][0]}`)
    }
    if (value0 === 3) {
        image0.setAttribute('src', `${poke[0][1]}`)
    }
    if (value0 === 2) {
        image0.setAttribute('src', `${poke[0][2]}`)
    }
    if (value0 === 1) {
        image0.setAttribute('src', `${poke[0][3]}`)
    }
    if (value0 === 0) {
        image0.setAttribute('src', `${poke[0][4]}`)
    }
}

left0.addEventListener('click', pics0R)
right0.addEventListener('click', pics0)


const left1 = document.querySelector('.left1')
const right1 = document.querySelector('.right21')
const image1 = document.querySelector('.image1')

function pics1 () {
    if (value1 === 5) {
        return
    }
    value1 += 1
    console.log(value1)
    if (value1 === 1) {
        image1.setAttribute('src', `${poke[1][0]}`)
    }
    if (value1 === 2) {
        image1.setAttribute('src', `${poke[1][1]}`)
    }
    if (value1 === 3) {
        image1.setAttribute('src', `${poke[1][2]}`)
    }
    if (value1 === 4) {
        image1.setAttribute('src', `${poke[1][3]}`)
    }
    if (value1 === 5) {
        image1.setAttribute('src', `${poke[1][4]}`)
    }
}

function pics1R () {
    if (value1 === 0) {
        return
    }
    value1 -= 1
    console.log(value1)
    if (value1 === 4) {
        image1.setAttribute('src', `${poke[1][0]}`)
    }
    if (value1 === 3) {
        image1.setAttribute('src', `${poke[1][1]}`)
    }
    if (value1 === 2) {
        image1.setAttribute('src', `${poke[1][2]}`)
    }
    if (value1 === 1) {
        image1.setAttribute('src', `${poke[1][3]}`)
    }
    if (value1 === 0) {
        image1.setAttribute('src', `${poke[1][4]}`)
    }
}

left1.addEventListener('click', pics1R)
right1.addEventListener('click', pics1)

const left2 = document.querySelector('.left2')
const right2 = document.querySelector('.right22')
const image2 = document.querySelector('.image2')

function pics2 () {
    if (value2 === 5) {
        return
    }
    value2 += 1
    console.log(value2)
    if (value2 === 1) {
        image2.setAttribute('src', `${poke[2][0]}`)
    }
    if (value2 === 2) {
        image2.setAttribute('src', `${poke[2][1]}`)
    }
    if (value2 === 3) {
        image2.setAttribute('src', `${poke[2][2]}`)
    }
    if (value2 === 4) {
        image2.setAttribute('src', `${poke[2][3]}`)
    }
    if (value2 === 5) {
        image2.setAttribute('src', `${poke[2][4]}`)
    }
}

function pics2R () {
    if (value2 === 0) {
        return
    }
    value2 -= 1
    console.log(value2)
    if (value2 === 4) {
        image2.setAttribute('src', `${poke[2][0]}`)
    }
    if (value2 === 3) {
        image2.setAttribute('src', `${poke[2][1]}`)
    }
    if (value2 === 2) {
        image2.setAttribute('src', `${poke[2][2]}`)
    }
    if (value2 === 1) {
        image2.setAttribute('src', `${poke[2][3]}`)
    }
    if (value2 === 0) {
        image2.setAttribute('src', `${poke[2][4]}`)
    }
}

left2.addEventListener('click', pics2R)
right2.addEventListener('click', pics2)

const left3 = document.querySelector('.left3')
const right3 = document.querySelector('.right23')
const image3 = document.querySelector('.image3')

function pics3 () {
    if (value3 === 5) {
        return
    }
    value3 += 1
    console.log(value3)
    if (value3 === 1) {
        image3.setAttribute('src', `${poke[3][0]}`)
    }
    if (value3 === 2) {
        image3.setAttribute('src', `${poke[3][1]}`)
    }
    if (value3 === 3) {
        image3.setAttribute('src', `${poke[3][2]}`)
    }
    if (value3 === 4) {
        image3.setAttribute('src', `${poke[3][3]}`)
    }
    if (value3 === 5) {
        image3.setAttribute('src', `${poke[3][4]}`)
    }
}

function pics3R () {
    if (value3 === 0) {
        return
    }
    value3 -= 1
    console.log(value3)
    if (value3 === 4) {
        image3.setAttribute('src', `${poke[3][0]}`)
    }
    if (value3 === 3) {
        image3.setAttribute('src', `${poke[3][1]}`)
    }
    if (value3 === 2) {
        image3.setAttribute('src', `${poke[3][2]}`)
    }
    if (value3 === 1) {
        image3.setAttribute('src', `${poke[3][3]}`)
    }
    if (value3 === 0) {
        image3.setAttribute('src', `${poke[3][4]}`)
    }
}

left3.addEventListener('click', pics3R)
right3.addEventListener('click', pics3)

const left4 = document.querySelector('.left4')
const right4 = document.querySelector('.right24')
const image4 = document.querySelector('.image4')

function pics4 () {
    if (value4 === 5) {
        return
    }
    value4 += 1
    console.log(value4)
    if (value4 === 1) {
        image4.setAttribute('src', `${poke[4][0]}`)
    }
    if (value4 === 2) {
        image4.setAttribute('src', `${poke[4][1]}`)
    }
    if (value4 === 3) {
        image4.setAttribute('src', `${poke[4][2]}`)
    }
    if (value4 === 4) {
        image4.setAttribute('src', `${poke[4][3]}`)
    }
    if (value4 === 5) {
        image4.setAttribute('src', `${poke[4][4]}`)
    }
}

function pics4R () {
    if (value4 === 0) {
        return
    }
    value4 -= 1
    console.log(value4)
    if (value4 === 4) {
        image4.setAttribute('src', `${poke[4][0]}`)
    }
    if (value4 === 3) {
        image4.setAttribute('src', `${poke[4][1]}`)
    }
    if (value4 === 2) {
        image4.setAttribute('src', `${poke[4][2]}`)
    }
    if (value4 === 1) {
        image4.setAttribute('src', `${poke[4][3]}`)
    }
    if (value4 === 0) {
        image4.setAttribute('src', `${poke[4][4]}`)
    }
}

left4.addEventListener('click', pics4R)
right4.addEventListener('click', pics4)

const left5 = document.querySelector('.left5')
const right5 = document.querySelector('.right25')
const image5 = document.querySelector('.image5')

function pics5 () {
    if (value5 === 5) {
        return
    }
    value5 += 1
    console.log(value5)
    if (value5 === 1) {
        image5.setAttribute('src', `${poke[5][0]}`)
    }
    if (value5 === 2) {
        image5.setAttribute('src', `${poke[5][1]}`)
    }
    if (value5 === 3) {
        image5.setAttribute('src', `${poke[5][2]}`)
    }
    if (value5 === 4) {
        image5.setAttribute('src', `${poke[5][3]}`)
    }
    if (value5 === 5) {
        image5.setAttribute('src', `${poke[5][4]}`)
    }
}

function pics5R () {
    if (value5 === 0) {
        return
    }
    value5 -= 1
    console.log(value5)
    if (value5 === 4) {
        image5.setAttribute('src', `${poke[5][0]}`)
    }
    if (value5 === 3) {
        image5.setAttribute('src', `${poke[5][1]}`)
    }
    if (value5 === 2) {
        image5.setAttribute('src', `${poke[5][2]}`)
    }
    if (value5 === 1) {
        image5.setAttribute('src', `${poke[5][3]}`)
    }
    if (value5 === 0) {
        image5.setAttribute('src', `${poke[5][4]}`)
    }
}

left5.addEventListener('click', pics5R)
right5.addEventListener('click', pics5)

const left6 = document.querySelector('.left6')
const right6 = document.querySelector('.right26')
const image6 = document.querySelector('.image6')

function pics6 () {
    if (value6 === 5) {
        return
    }
    value6 += 1
    console.log(value6)
    if (value6 === 1) {
        image6.setAttribute('src', `${poke[6][0]}`)
    }
    if (value6 === 2) {
        image6.setAttribute('src', `${poke[6][1]}`)
    }
    if (value6 === 3) {
        image6.setAttribute('src', `${poke[6][2]}`)
    }
    if (value6 === 4) {
        image6.setAttribute('src', `${poke[6][3]}`)
    }
    if (value6 === 5) {
        image6.setAttribute('src', `${poke[6][4]}`)
    }
}

function pics6R () {
    if (value6 === 0) {
        return
    }
    value6 -= 1
    console.log(value6)
    if (value6 === 4) {
        image6.setAttribute('src', `${poke[6][0]}`)
    }
    if (value6 === 3) {
        image6.setAttribute('src', `${poke[6][1]}`)
    }
    if (value6 === 2) {
        image6.setAttribute('src', `${poke[6][2]}`)
    }
    if (value6 === 1) {
        image6.setAttribute('src', `${poke[6][3]}`)
    }
    if (value6 === 0) {
        image6.setAttribute('src', `${poke[6][4]}`)
    }
}

left6.addEventListener('click', pics6R)
right6.addEventListener('click', pics6)

const left7 = document.querySelector('.left7')
const right7 = document.querySelector('.right27')
const image7 = document.querySelector('.image7')

function pics7 () {
    if (value7 === 5) {
        return
    }
    value7 += 1
    console.log(value7)
    if (value7 === 1) {
        image7.setAttribute('src', `${poke[7][0]}`)
    }
    if (value7 === 2) {
        image7.setAttribute('src', `${poke[7][1]}`)
    }
    if (value7 === 3) {
        image7.setAttribute('src', `${poke[7][2]}`)
    }
    if (value7 === 4) {
        image7.setAttribute('src', `${poke[7][3]}`)
    }
    if (value7 === 5) {
        image7.setAttribute('src', `${poke[7][4]}`)
    }
}

function pics7R () {
    if (value7 === 0) {
        return
    }
    value7 -= 1
    console.log(value7)
    if (value7 === 4) {
        image7.setAttribute('src', `${poke[7][0]}`)
    }
    if (value7 === 3) {
        image7.setAttribute('src', `${poke[7][1]}`)
    }
    if (value7 === 2) {
        image7.setAttribute('src', `${poke[7][2]}`)
    }
    if (value7 === 1) {
        image7.setAttribute('src', `${poke[7][3]}`)
    }
    if (value7 === 0) {
        image7.setAttribute('src', `${poke[7][4]}`)
    }
}

left7.addEventListener('click', pics7R)
right7.addEventListener('click', pics7)

const left8 = document.querySelector('.left8')
const right8 = document.querySelector('.right28')
const image8 = document.querySelector('.image8')

function pics8 () {
    if (value8 === 5) {
        return
    }
    value8 += 1
    console.log(value8)
    if (value8 === 1) {
        image8.setAttribute('src', `${poke[8][0]}`)
    }
    if (value8 === 2) {
        image8.setAttribute('src', `${poke[8][1]}`)
    }
    if (value8 === 3) {
        image8.setAttribute('src', `${poke[8][2]}`)
    }
    if (value8 === 4) {
        image8.setAttribute('src', `${poke[8][3]}`)
    }
    if (value8 === 5) {
        image8.setAttribute('src', `${poke[8][4]}`)
    }
}

function pics8R () {
    if (value8 === 0) {
        return
    }
    value8 -= 1
    console.log(value8)
    if (value8 === 4) {
        image8.setAttribute('src', `${poke[8][0]}`)
    }
    if (value8 === 3) {
        image8.setAttribute('src', `${poke[8][1]}`)
    }
    if (value8 === 2) {
        image8.setAttribute('src', `${poke[8][2]}`)
    }
    if (value8 === 1) {
        image8.setAttribute('src', `${poke[8][3]}`)
    }
    if (value8 === 0) {
        image8.setAttribute('src', `${poke[8][4]}`)
    }
}

left8.addEventListener('click', pics8R)
right8.addEventListener('click', pics8)

const left9 = document.querySelector('.left9')
const right9 = document.querySelector('.right29')
const image9 = document.querySelector('.image9')

function pics9 () {
    if (value9 === 5) {
        return
    }
    value9 += 1
    console.log(value9)
    if (value9 === 1) {
        image9.setAttribute('src', `${poke[9][0]}`)
    }
    if (value9 === 2) {
        image9.setAttribute('src', `${poke[9][1]}`)
    }
    if (value9 === 3) {
        image9.setAttribute('src', `${poke[9][2]}`)
    }
    if (value9 === 4) {
        image9.setAttribute('src', `${poke[9][3]}`)
    }
    if (value9 === 5) {
        image9.setAttribute('src', `${poke[9][4]}`)
    }
}

function pics9R () {
    if (value9 === 0) {
        return
    }
    value9 -= 1
    console.log(value9)
    if (value9 === 4) {
        image9.setAttribute('src', `${poke[9][0]}`)
    }
    if (value9 === 3) {
        image9.setAttribute('src', `${poke[9][1]}`)
    }
    if (value9 === 2) {
        image9.setAttribute('src', `${poke[9][2]}`)
    }
    if (value9 === 1) {
        image9.setAttribute('src', `${poke[9][3]}`)
    }
    if (value9 === 0) {
        image9.setAttribute('src', `${poke[9][4]}`)
    }
}

left9.addEventListener('click', pics9R)
right9.addEventListener('click', pics9)

const left10 = document.querySelector('.left10')
const right10 = document.querySelector('.right30')
const image10 = document.querySelector('.image10')

function pics10 () {
    if (value10 === 5) {
        return
    }
    value10 += 1
    console.log(value10)
    if (value10 === 1) {
        image10.setAttribute('src', `${poke[10][0]}`)
    }
    if (value10 === 2) {
        image10.setAttribute('src', `${poke[10][1]}`)
    }
    if (value10 === 3) {
        image10.setAttribute('src', `${poke[10][2]}`)
    }
    if (value10 === 4) {
        image10.setAttribute('src', `${poke[10][3]}`)
    }
    if (value10 === 5) {
        image10.setAttribute('src', `${poke[10][4]}`)
    }
}

function pics10R () {
    if (value10 === 0) {
        return
    }
    value10 -= 1
    console.log(value10)
    if (value10 === 4) {
        image10.setAttribute('src', `${poke[10][0]}`)
    }
    if (value10 === 3) {
        image10.setAttribute('src', `${poke[10][1]}`)
    }
    if (value10 === 2) {
        image10.setAttribute('src', `${poke[10][2]}`)
    }
    if (value10 === 1) {
        image10.setAttribute('src', `${poke[10][3]}`)
    }
    if (value10 === 0) {
        image10.setAttribute('src', `${poke[10][4]}`)
    }
}

left10.addEventListener('click', pics10R)
right10.addEventListener('click', pics10)

const left11 = document.querySelector('.left11')
const right11 = document.querySelector('.right31')
const image11 = document.querySelector('.image11')

function pics11 () {
    if (value11 === 5) {
        return
    }
    value11 += 1
    console.log(value11)
    if (value11 === 1) {
        image11.setAttribute('src', `${poke[11][0]}`)
    }
    if (value11 === 2) {
        image11.setAttribute('src', `${poke[11][1]}`)
    }
    if (value11 === 3) {
        image11.setAttribute('src', `${poke[11][2]}`)
    }
    if (value11 === 4) {
        image11.setAttribute('src', `${poke[11][3]}`)
    }
    if (value11 === 5) {
        image11.setAttribute('src', `${poke[11][4]}`)
    }
}

function pics11R () {
    if (value11 === 0) {
        return
    }
    value11 -= 1
    console.log(value11)
    if (value11 === 4) {
        image11.setAttribute('src', `${poke[11][0]}`)
    }
    if (value11 === 3) {
        image11.setAttribute('src', `${poke[11][1]}`)
    }
    if (value11 === 2) {
        image11.setAttribute('src', `${poke[11][2]}`)
    }
    if (value11 === 1) {
        image11.setAttribute('src', `${poke[11][3]}`)
    }
    if (value11 === 0) {
        image11.setAttribute('src', `${poke[11][4]}`)
    }
}

left11.addEventListener('click', pics11R)
right11.addEventListener('click', pics11)

const left12 = document.querySelector('.left12')
const right12 = document.querySelector('.right32')
const image12 = document.querySelector('.image12')

function pics12 () {
    if (value12 === 5) {
        return
    }
    value12 += 1
    console.log(value12)
    if (value12 === 1) {
        image12.setAttribute('src', `${poke[12][0]}`)
    }
    if (value12 === 2) {
        image12.setAttribute('src', `${poke[12][1]}`)
    }
    if (value12 === 3) {
        image12.setAttribute('src', `${poke[12][2]}`)
    }
    if (value12 === 4) {
        image12.setAttribute('src', `${poke[12][3]}`)
    }
    if (value12 === 5) {
        image12.setAttribute('src', `${poke[12][4]}`)
    }
}

function pics12R () {
    if (value12 === 0) {
        return
    }
    value12 -= 1
    console.log(value12)
    if (value12 === 4) {
        image12.setAttribute('src', `${poke[12][0]}`)
    }
    if (value12 === 3) {
        image12.setAttribute('src', `${poke[12][1]}`)
    }
    if (value12 === 2) {
        image12.setAttribute('src', `${poke[12][2]}`)
    }
    if (value12 === 1) {
        image12.setAttribute('src', `${poke[12][3]}`)
    }
    if (value12 === 0) {
        image12.setAttribute('src', `${poke[12][4]}`)
    }
}

left12.addEventListener('click', pics12R)
right12.addEventListener('click', pics12)

const left13 = document.querySelector('.left13')
const right13 = document.querySelector('.right33')
const image13 = document.querySelector('.image13')

function pics13 () {
    if (value13 === 5) {
        return
    }
    value13 += 1
    console.log(value13)
    if (value13 === 1) {
        image13.setAttribute('src', `${poke[13][0]}`)
    }
    if (value13 === 2) {
        image13.setAttribute('src', `${poke[13][1]}`)
    }
    if (value13 === 3) {
        image13.setAttribute('src', `${poke[13][2]}`)
    }
    if (value13 === 4) {
        image13.setAttribute('src', `${poke[13][3]}`)
    }
    if (value13 === 5) {
        image13.setAttribute('src', `${poke[13][4]}`)
    }
}

function pics13R () {
    if (value13 === 0) {
        return
    }
    value13 -= 1
    console.log(value13)
    if (value13 === 4) {
        image13.setAttribute('src', `${poke[13][0]}`)
    }
    if (value13 === 3) {
        image13.setAttribute('src', `${poke[13][1]}`)
    }
    if (value13 === 2) {
        image13.setAttribute('src', `${poke[13][2]}`)
    }
    if (value13 === 1) {
        image13.setAttribute('src', `${poke[13][3]}`)
    }
    if (value13 === 0) {
        image13.setAttribute('src', `${poke[13][4]}`)
    }
}

left13.addEventListener('click', pics13R)
right13.addEventListener('click', pics13)

const left14 = document.querySelector('.left14')
const right14 = document.querySelector('.right34')
const image14 = document.querySelector('.image14')

function pics14 () {
    if (value14 === 5) {
        return
    }
    value14 += 1
    console.log(value14)
    if (value14 === 1) {
        image14.setAttribute('src', `${poke[14][0]}`)
    }
    if (value14 === 2) {
        image14.setAttribute('src', `${poke[14][1]}`)
    }
    if (value14 === 3) {
        image14.setAttribute('src', `${poke[14][2]}`)
    }
    if (value14 === 4) {
        image14.setAttribute('src', `${poke[14][3]}`)
    }
    if (value14 === 5) {
        image14.setAttribute('src', `${poke[14][4]}`)
    }
}

function pics14R () {
    if (value14 === 0) {
        return
    }
    value14 -= 1
    console.log(value14)
    if (value14 === 4) {
        image14.setAttribute('src', `${poke[14][0]}`)
    }
    if (value14 === 3) {
        image14.setAttribute('src', `${poke[14][1]}`)
    }
    if (value14 === 2) {
        image14.setAttribute('src', `${poke[14][2]}`)
    }
    if (value14 === 1) {
        image14.setAttribute('src', `${poke[14][3]}`)
    }
    if (value14 === 0) {
        image14.setAttribute('src', `${poke[14][4]}`)
    }
}

left14.addEventListener('click', pics14R)
right14.addEventListener('click', pics14)

const left15 = document.querySelector('.left15')
const right15 = document.querySelector('.right35')
const image15 = document.querySelector('.image15')

function pics15 () {
    if (value15 === 5) {
        return
    }
    value15 += 1
    console.log(value15)
    if (value15 === 1) {
        image15.setAttribute('src', `${poke[15][0]}`)
    }
    if (value15 === 2) {
        image15.setAttribute('src', `${poke[15][1]}`)
    }
    if (value15 === 3) {
        image15.setAttribute('src', `${poke[15][2]}`)
    }
    if (value15 === 4) {
        image15.setAttribute('src', `${poke[15][3]}`)
    }
    if (value15 === 5) {
        image15.setAttribute('src', `${poke[15][4]}`)
    }
}

function pics15R () {
    if (value15 === 0) {
        return
    }
    value15 -= 1
    console.log(value15)
    if (value15 === 4) {
        image15.setAttribute('src', `${poke[15][0]}`)
    }
    if (value15 === 3) {
        image15.setAttribute('src', `${poke[15][1]}`)
    }
    if (value15 === 2) {
        image15.setAttribute('src', `${poke[15][2]}`)
    }
    if (value15 === 1) {
        image15.setAttribute('src', `${poke[15][3]}`)
    }
    if (value15 === 0) {
        image15.setAttribute('src', `${poke[15][4]}`)
    }
}

left15.addEventListener('click', pics15R)
right15.addEventListener('click', pics15)

const left16 = document.querySelector('.left16')
const right16 = document.querySelector('.right36')
const image16 = document.querySelector('.image16')

function pics16 () {
    if (value16 === 5) {
        return
    }
    value16 += 1
    console.log(value16)
    if (value16 === 1) {
        image16.setAttribute('src', `${poke[16][0]}`)
    }
    if (value16 === 2) {
        image16.setAttribute('src', `${poke[16][1]}`)
    }
    if (value16 === 3) {
        image16.setAttribute('src', `${poke[16][2]}`)
    }
    if (value16 === 4) {
        image16.setAttribute('src', `${poke[16][3]}`)
    }
    if (value16 === 5) {
        image16.setAttribute('src', `${poke[16][4]}`)
    }
}

function pics16R () {
    if (value16 === 0) {
        return
    }
    value16 -= 1
    console.log(value16)
    if (value16 === 4) {
        image16.setAttribute('src', `${poke[16][0]}`)
    }
    if (value16 === 3) {
        image16.setAttribute('src', `${poke[16][1]}`)
    }
    if (value16 === 2) {
        image16.setAttribute('src', `${poke[16][2]}`)
    }
    if (value16 === 1) {
        image16.setAttribute('src', `${poke[16][3]}`)
    }
    if (value16 === 0) {
        image16.setAttribute('src', `${poke[16][4]}`)
    }
}

left16.addEventListener('click', pics16R)
right16.addEventListener('click', pics16)

const left17 = document.querySelector('.left17')
const right17 = document.querySelector('.right37')
const image17 = document.querySelector('.image17')

function pics17 () {
    if (value17 === 5) {
        return
    }
    value17 += 1
    console.log(value17)
    if (value17 === 1) {
        image17.setAttribute('src', `${poke[17][0]}`)
    }
    if (value17 === 2) {
        image17.setAttribute('src', `${poke[17][1]}`)
    }
    if (value17 === 3) {
        image17.setAttribute('src', `${poke[17][2]}`)
    }
    if (value17 === 4) {
        image17.setAttribute('src', `${poke[17][3]}`)
    }
    if (value17 === 5) {
        image17.setAttribute('src', `${poke[17][4]}`)
    }
}

function pics17R () {
    if (value17 === 0) {
        return
    }
    value17 -= 1
    console.log(value17)
    if (value17 === 4) {
        image17.setAttribute('src', `${poke[17][0]}`)
    }
    if (value17 === 3) {
        image17.setAttribute('src', `${poke[17][1]}`)
    }
    if (value17 === 2) {
        image17.setAttribute('src', `${poke[17][2]}`)
    }
    if (value17 === 1) {
        image17.setAttribute('src', `${poke[17][3]}`)
    }
    if (value17 === 0) {
        image17.setAttribute('src', `${poke[17][4]}`)
    }
}

left17.addEventListener('click', pics17R)
right17.addEventListener('click', pics17)

const left18 = document.querySelector('.left18')
const right18 = document.querySelector('.right38')
const image18 = document.querySelector('.image18')

function pics18 () {
    if (value18 === 5) {
        return
    }
    value18 += 1
    console.log(value18)
    if (value18 === 1) {
        image18.setAttribute('src', `${poke[18][0]}`)
    }
    if (value18 === 2) {
        image18.setAttribute('src', `${poke[18][1]}`)
    }
    if (value18 === 3) {
        image18.setAttribute('src', `${poke[18][2]}`)
    }
    if (value18 === 4) {
        image18.setAttribute('src', `${poke[18][3]}`)
    }
    if (value18 === 5) {
        image18.setAttribute('src', `${poke[18][4]}`)
    }
}

function pics18R () {
    if (value18 === 0) {
        return
    }
    value18 -= 1
    console.log(value18)
    if (value18 === 4) {
        image18.setAttribute('src', `${poke[18][0]}`)
    }
    if (value18 === 3) {
        image18.setAttribute('src', `${poke[18][1]}`)
    }
    if (value18 === 2) {
        image18.setAttribute('src', `${poke[18][2]}`)
    }
    if (value18 === 1) {
        image18.setAttribute('src', `${poke[18][3]}`)
    }
    if (value18 === 0) {
        image18.setAttribute('src', `${poke[18][4]}`)
    }
}

left18.addEventListener('click', pics18R)
right18.addEventListener('click', pics18)

const left19 = document.querySelector('.left19')
const right19 = document.querySelector('.right39')
const image19 = document.querySelector('.image19')

function pics19 () {
    if (value19 === 5) {
        return
    }
    value19 += 1
    console.log(value19)
    if (value19 === 1) {
        image19.setAttribute('src', `${poke[19][0]}`)
    }
    if (value19 === 2) {
        image19.setAttribute('src', `${poke[19][1]}`)
    }
    if (value19 === 3) {
        image19.setAttribute('src', `${poke[19][2]}`)
    }
    if (value19 === 4) {
        image19.setAttribute('src', `${poke[19][3]}`)
    }
    if (value19 === 5) {
        image19.setAttribute('src', `${poke[19][4]}`)
    }
}

function pics19R () {
    if (value19 === 0) {
        return
    }
    value19 -= 1
    console.log(value19)
    if (value19 === 4) {
        image19.setAttribute('src', `${poke[19][0]}`)
    }
    if (value19 === 3) {
        image19.setAttribute('src', `${poke[19][1]}`)
    }
    if (value19 === 2) {
        image19.setAttribute('src', `${poke[19][2]}`)
    }
    if (value19 === 1) {
        image19.setAttribute('src', `${poke[19][3]}`)
    }
    if (value19 === 0) {
        image19.setAttribute('src', `${poke[19][4]}`)
    }
}

left19.addEventListener('click', pics19R)
right19.addEventListener('click', pics19)
// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
