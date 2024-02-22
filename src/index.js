const CARD_PARENT = document.querySelector('.cards')
var cardTemplate

// this only works if the server is running, if it doesn't.
// then you will get an error on the console telling you it is not running in an http envirnoment
const _XMLRequest = new XMLHttpRequest()
_XMLRequest.open('GET', '../templates/card.html')
_XMLRequest.onreadystatechange = function () {
    if (this.readyState !== 4 || this.status !== 200) return // make sure we were successful by loading this page
    cardTemplate = this.responseText
    getAllCards()
}
_XMLRequest.send()

function getAllCards() {
    var _currentCardIndex = 0

    for (const card of data) {
        var _cardDisplay = new DOMParser().parseFromString(cardTemplate, 'text/html')

        _cardDisplay.querySelector('.card--title').innerHTML = capitaliseString(card.name)
        const _img = _cardDisplay.querySelector('.card--img')
        _img.setAttribute('src', card.sprites.other.dream_world.front_default)
        
        const _stats = _cardDisplay.querySelector('.card--text')
        _stats.innerHTML = ''

        for (const stat of card.stats)
            _stats.innerHTML += '<li>' + capitaliseString(stat.stat.name) + ': ' + stat.base_stat + '</li>'

        const _games = _cardDisplay.querySelector('.card--games')
        for (const game of card.game_indices)
            _games.innerHTML += capitaliseString(game.version.name) + ', '

        const _displayOptions = _cardDisplay.querySelector('.display-select')
        for (const [key, display] of Object.entries(card.sprites.other))
            _displayOptions.innerHTML += '<option value="' + _currentCardIndex + '|-|' + key + '">' + key + '</option>'

        CARD_PARENT.innerHTML += _cardDisplay.documentElement.innerHTML

        _currentCardIndex += 1
    }
}

function capitaliseString(str) {
    if (str.length === 0) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function selectImgFor(elm) {
    const _allCards = document.querySelectorAll('.card')
    const _info = elm.options[elm.selectedIndex].value.split('|-|')
    
    _allCards[_info[0]].querySelector('.card--img').setAttribute('src', data[_info[0]].sprites.other[_info[1]].front_default)
}
