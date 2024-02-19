document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".cards");

  function toggleImage(img, currentIndex) {
    const versions = data[currentIndex].sprites.versions;
    const versionNames = Object.keys(versions);
    const currentVersionIndex = img.dataset.versionIndex
      ? parseInt(img.dataset.versionIndex)
      : 0;
    const nextVersionIndex = (currentVersionIndex + 1) % versionNames.length;
    const nextVersionName = versionNames[nextVersionIndex];
    const nextVersion = versions[nextVersionName];
    const nextImageUrl = Object.values(nextVersion)[0].front_default;
    img.src = nextImageUrl;
    img.dataset.versionIndex = nextVersionIndex;

    const genName = img.parentElement.querySelector(".card--generation");
    genName.textContent = `GENERATION: ${nextVersionName.toUpperCase()}`;
  }

  data.forEach(function (pokemon, index) {
    const card = document.createElement("li");
    card.classList.add("card");

    card.innerHTML = `
      <h2 class="card--title">${pokemon.name}</h2>
      <img id="img-${index}" class="card--img" src="${
      pokemon.sprites.other["official-artwork"].front_default
    }" alt="${pokemon.name}" data-version-index="0" width="256" height="256"/>
      <ul class="card--text">
        <li>HP: ${
          pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat
        }</li>
        <li>Attack: ${
          pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat
        }</li>
        <li>Defense: ${
          pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat
        }</li>
        <li>Special Attack: ${
          pokemon.stats.find((stat) => stat.stat.name === "special-attack")
            .base_stat
        }</li>
        <li>Special Defense: ${
          pokemon.stats.find((stat) => stat.stat.name === "special-defense")
            .base_stat
        }</li>
        <li>Speed: ${
          pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat
        }</li>
        <li class="card--generation">GENERATION: ${Object.keys(
          pokemon.sprites.versions
        )[0].toUpperCase()}</li>
      </ul>
    `;

    const image = card.querySelector(`#img-${index}`);
    image.addEventListener("click", function () {
      toggleImage(image, index);
    });

    container.appendChild(card);
  });
});
