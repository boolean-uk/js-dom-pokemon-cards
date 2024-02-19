let cards = document.querySelector(".cards");

function init() {
  data.forEach((obj) => {
    let li = document.createElement("li");
    li.classList.add("card");

    let h2 = document.createElement("h2");
    h2.classList.add("card--title");
    h2.textContent = obj.name;

    let img = document.createElement("img");
    img.setAttribute("width", "256");
    img.classList.add("card--img");
    img.setAttribute("src", obj.sprites.front_default);

    let ul = document.createElement("ul");
    ul.classList.add("card--text");
    obj.stats.forEach((stat) => {
      let liStat = document.createElement("li");
      liStat.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
      ul.appendChild(liStat);
    });

    let gameInfo = document.createElement("div");
    gameInfo.classList.add("card--game-info");
    obj.game_indices.forEach((gameIndex) => {
        let gameListItem = document.createElement("li");
        gameListItem.textContent = gameIndex.version.name;
        gameInfo.appendChild(gameListItem);
    });


    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(ul);
    li.appendChild(gameInfo);
    
    cards.appendChild(li);

    li.addEventListener("click", () => toggleImages(obj, li))

    cards.style.listStyle = "none";
  });
}

function collectSprites(spritesObj) {
    let spriteUrls = [];
    for (const key in spritesObj) {
        if (typeof spritesObj[key] === "string") {
            spriteUrls.push(spritesObj[key]);
        } else if (typeof spritesObj[key] === "object") {
            spriteUrls = spriteUrls.concat(collectSprites(spritesObj[key]));
        }
    }
    return spriteUrls;
}

function toggleImages(obj, li) {
    const img = li.querySelector('.card--img');
    const spriteUrls = collectSprites(obj.sprites);
    let currentIndex = spriteUrls.indexOf(img.getAttribute("src"));
    let nextIndex = (currentIndex + 1) % spriteUrls.length;
    img.setAttribute("src", spriteUrls[nextIndex]);
}



window.addEventListener("load", init);
