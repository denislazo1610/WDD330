let page = 1;
let apiURL = `https://swapi.dev/api/starships/?page=${page}`;
fetching(apiURL);

const previous = document.getElementById("prev");
const next = document.getElementById("next");

previous.addEventListener("click", function () {
  const shipList = document.getElementById("list");
  if (page > 1) {
    while (shipList.firstChild) {
      shipList.removeChild(shipList.firstChild);
    }
    page = page - 1;
    apiURL = `https://swapi.dev/api/starships/?page=${page}`;
    fetching(apiURL);
  } else {
    alert("You are already on the first page.");
  }
});

next.addEventListener("click", function () {
  const shipList = document.getElementById("list");
  if (page < 4) {
    while (shipList.firstChild) {
      shipList.removeChild(shipList.firstChild);
    }
    page = page + 1;
    apiURL = `https://swapi.dev/api/starships/?page=${page}`;
    fetching(apiURL);
  } else {
    alert("You are already on the last page");
  }
});

function fetching(apiURL) {
  fetch(apiURL)
    .then((response) => {
      if (response.ok) {
        const jsonData = response.json();
        return jsonData;
      }

      throw Error(response.statusText);
    })
    .then((responses) => {
      const shipList = document.getElementById("list");

      for (let i = 0; i < responses.results.length; i++) {
        const ship = document.createElement("li");
        ship.innerHTML = `<h2>${responses.results[i].name}</2>`;
        shipList.appendChild(ship);
      }
    });
}
