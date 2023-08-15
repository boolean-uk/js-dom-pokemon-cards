const container = document.querySelector('.cards')
const slideIndices = {}   // key: slideIndex, value: slideNo
for (const [key, value] of Object.entries(slideIndices)) {
  showSlides(key, value)
}

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function showSlides(slideNo, slideIndex) {
  let slides = document.getElementsByClassName(`mySlides${slideIndex}`)

  if (slideNo > slides.length) {
    slideNo = 1
  } else if (slideNo < 1) {
    slideNo = slides.length
  }
  slideIndices[slideIndex] = slideNo

  for (let i = 0; i < slides.length; ++i) {
    slides[i].style.display = 'none'
  }
  slides[slideNo-1].style.display = 'block'
}

function drawSlideshow(data) {
  // append index of element to list of indices
  const slideIndex = data.id
  slideIndices[slideIndex] = 1
  const slideshowContainer = document.createElement('div')
  slideshowContainer.classList.add('slideshow-container')
  // array of image links to display
  const imageLinks = [
    data.sprites.other['official-artwork']['front_default'],
    data.sprites.other.dream_world.front_default
    //, data.sprites.versions["generation-iii"]["emerald"].front_default
  ]

  // create div for each image
  imageLinks.forEach((element, index) => {
    const imageDiv = document.createElement('div')
    imageDiv.classList.add(`mySlides${slideIndex}`, 'fade')
    imageDiv.style.display = (index === 0) ? 'block' : 'none'
    // create image of slideshow
    const image = document.createElement('img')
    image.style.width = '256px'
    image.classList.add('card--img')
    image.src = element
    imageDiv.append(image)
    slideshowContainer.append(imageDiv)
  })
  // create previous and next buttons
  const buttons = ['prev', 'next']
  buttons.forEach((element, index) => {
    const button = document.createElement('a')
    button.classList.add(element)
    const isPrevButton = index === 0
    if (index === 0) {  // implement previous button
      button.innerHTML = `&#10094;`
      button.onclick = function decrementSlides() {
          showSlides(slideIndices[slideIndex] - 1, slideIndex)
        }
    } else {  // implement next button
      button.innerHTML = `&#10095;`
      button.onclick = function incrementSlides() {
          showSlides(slideIndices[slideIndex] + 1, slideIndex)
        }
    }
    slideshowContainer.append(button)
  })
  
  return slideshowContainer
}

function drawCard(data) {  // render a single pokemon card
  // create card element
  const card = document.createElement('li')
  card.classList.add('card')

  // create title of card
  const title = document.createElement('h2')
  title.innerText = capitalise(data.name)
  title.classList.add('card--title')
  card.append(title)

  // create slideshow of images
  const slideshow = drawSlideshow(data)
  card.append(slideshow)

  const text = document.createElement('ul')
  // create list of stats of card
  text.classList.add('card--text')
  data.stats.forEach(element => {
    const stats = document.createElement('li')
    stats.innerHTML = element.stat.name.toUpperCase() + ': ' + element.base_stat
    text.append(stats)
  })
  // create list of appearances of card
  const appearances = document.createElement('li')
  let currentGameIndex = null
  let appearancesText = 'APPEARS IN:'
  let printDelimeter = false
  data.game_indices.forEach(element => {
    if (element.game_index !==  currentGameIndex) {
      currentGameIndex = element.game_index
      appearancesText += ` GAME #${currentGameIndex}: `
      printDelimeter = false
    }
    if (printDelimeter) {
      appearancesText += ', '
    }
    appearancesText += element.version.name
    printDelimeter = true
  })
  appearances.innerHTML = appearancesText
  text.append(appearances)
  card.append(text)

  container.append(card)
}

function drawCards(cardsArray) {
  cardsArray.forEach(element => drawCard(element));
}

drawCards(data)