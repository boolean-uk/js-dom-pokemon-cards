for (let i = 0; i < data.length; i++) {
    const pokemon = data[i]

    // <li class="card">
    const listItem = document.createElement('li')
    listItem.style.listStyleType = 'none'
    listItem.classList.add('card')

    // <h2 class="card--title">Bulbasaur</h2>
    const h2 = document.createElement('h2')
    h2.classList.add('card--title')
    h2.innerText = pokemon.name
    h2.style.textTransform = 'capitalize'

    // append the h2 to the <li>
    listItem.append(h2)

    /* <img
        width="256"
        class="card--img"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    /> */
    const image = document.createElement('img')
    image.classList.add('card--img')
    image.setAttribute('width', 256)
    image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
    
    // append the img to the <li>
    listItem.append(image)

    // <ul class="cards">
    const ul = document.querySelector('.cards')

    // append the <li> onto the <ul>
    ul.append(listItem)

    // <ul class="card--text">
    const unordedList = document.createElement('ul')
    unordedList.classList.add('card--text')
    unordedList.style.listStyleType = 'none'
    unordedList.style.lineHeight = '2'
    
    // append the <ul> to the <li>
    listItem.append(unordedList)

    // <li>HP: 45</li>
    const hp = document.createElement('li')
    hp.innerText = 'HP: '
    const hpValue = pokemon.stats[0].base_stat

    // append the hpValue to the hp
    hp.append(hpValue)

    // append the hp to the <ul>
    unordedList.append(hp)

    // <li>ATTACK: 49</li>
    const attack = document.createElement('li')
    attack.innerText = 'ATTACK: '
    const attackValue = pokemon.stats[1].base_stat

    // append the attackValue to the attack
    attack.append(attackValue)

    // append the attack to the <ul>
    unordedList.append(attack)

    // <li>DEFENSE: 49</li>
    const defense = document.createElement('li')
    defense.innerText = 'DEFENSE: '
    const defenseValue = pokemon.stats[2].base_stat

    // append the defenseValue to the defense
    defense.append(defenseValue)

    // append the defense to the <ul>
    unordedList.append(defense)

    // <li>SPECIAL-ATTACK: 65</li>
    const specialattack = document.createElement('li')
    specialattack.innerText = 'SPECIAL-ATTACK: '
    const specialattackValue = pokemon.stats[3].base_stat

    // append the specialattackValue to the specialattack
    specialattack.append(specialattackValue)

    // append the specialattack to the <ul>
    unordedList.append(specialattack)

    // <li>SPECIAL-DEFENSE: 65</li>
    const specialdefense = document.createElement('li')
    specialdefense.innerText = 'SPECIAL-DEFENSE: '
    const specialdefenseValue = pokemon.stats[4].base_stat

    // append the specialdefenseValue to the specialdefense
    specialdefense.append(specialdefenseValue)

    // append the specialdefense to the <ul>
    unordedList.append(specialdefense)

    // <li>SPEED: 45</li>
    const speed = document.createElement('li')
    speed.innerText = 'SPEED: '
    const speedValue = pokemon.stats[5].base_stat

    // append the speedValue to the speed
    speed.append(speedValue)

    // append the speed to the <ul>
    unordedList.append(speed)
}