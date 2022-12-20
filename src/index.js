console.log(data);

const target = document.querySelector('ul.cards')

const slideId = []

const getName = (pokemon) => {
    return capatilize(pokemon.name)
}

const capatilize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const createName = (pokemon) => {
    const element = document.createElement('h2')
    element.innerText = getName(pokemon)
    return element
}

const getMainImg = (pokemon) => {
    return pokemon.sprites.other['official-artwork'].front_default
}

const getVersionImg = (version, pokemon) => {
    const gen = Object.values(version)
    console.log(gen[0].front_default)
    const img = document.createElement('img')
    img.setAttribute('width', '256')
    img.setAttribute('class', `card--img-${pokemon.name}`)
    img.setAttribute('style', 'display: block')
    img.setAttribute('src', gen[0].front_default)
    return img
}

const createImg = (pokemon, i) => {
    const element = document.createElement('div')
    element.setAttribute('class','imgcontainer')
    const mainImg = document.createElement('img')
    mainImg.setAttribute('width', '256')
    mainImg.setAttribute('class', `card--img-${pokemon.name}`)
    mainImg.setAttribute('style', 'display: block')
    mainImg.setAttribute('src', getMainImg(pokemon))
    element.append(mainImg)
    const versions = Object.values(pokemon.sprites.versions)
    versions.forEach(version => {
        element.append(getVersionImg(version, pokemon))
    })
    const arrows = document.createElement('div')
    arrows.setAttribute('class', 'arrows')
    const prev = document.createElement('a')
    prev.setAttribute('class', 'prev')
    prev.setAttribute('onclick', `plusSlides(1, ${i})`)
    prev.innerHTML = '&#10094;'
    arrows.append(prev)
    const next = document.createElement('a')
    next.setAttribute('class', 'next')
    next.setAttribute('onclick', `plusSlides(-1, ${i})`)
    next.innerHTML = '&#10095'
    arrows.append(next)
    element.append(arrows)
    slideId.push(`card--img-${pokemon.name}`)
    return element
}

const createStats = (pokemon) => {
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'card--text')
    pokemon.stats.forEach(element => {
        const li = document.createElement('li')
        li.innerText = `${element.stat.name.toUpperCase()}: ${element.base_stat}`
        ul.append(li)
    })
    return ul
}

const createFound = (pokemon) => {
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    summary.innerText = 'Found in Version'
    details.append(summary)
    pokemon.game_indices.forEach(element => {
        const p = document.createElement('p')
        p.innerText = capatilize(element.version.name)
        details.append(p)
    })
    return details
}

const populateList = (data) => {
    let i = 0
    data.forEach(pokemon => {
        const card = document.createElement('li')
        card.setAttribute('class', 'card')
        const title = createName(pokemon)
        card.append(title)
        const img = createImg(pokemon, i)
        card.append(img)
        const ul = createStats(pokemon)
        card.append(ul)
        const details = createFound(pokemon)
        card.append(details)
        target.append(card)
        ++i
    })
}

populateList(data)

let slideIndex = []

const fillSlideIndex = (data) => {
        data.forEach(element => {
            slideIndex.push(1)
        })
}

fillSlideIndex(data)

const showAllSlides = (slideIndex) => {
    for (let i = 0; i < slideIndex.length; i++) {
        showSlides(1, i)
    }
}

showAllSlides(slideIndex)

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "flex";
  console.log(slideIndex[no])
}

console.log(data[0]);
