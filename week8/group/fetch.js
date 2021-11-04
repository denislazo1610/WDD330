let page = 1;
let apiURL = `https://swapi.dev/api/starships/?page=${page}`;
fetching(apiURL);

const previous = document.getElementById("prev");
const next = document.getElementById("next");

previous.addEventListener("click", function () {
  console.log("previous is being clicked");
  if (page > 1) {
    console.log("Going prev");
    page = page - 1;
    apiURL = `https://swapi.dev/api/starships/?page=${page}`;
    fetching(apiURL);
  } else {
    alert("You are already on the first page.");
  }
});

next.addEventListener("click", function () {
  console.log("next is being clicked");
  if (page < 4) {
    console.log("going up", page);
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
        console.log(jsonData);
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

// fetch(apiURL)
//   .then((response) => {
//     if (response.ok) {
//       const jsonData = response.json();
//       console.log(jsonData);
//       return jsonData;
//     }

//     throw Error(response.statusText);
//   })
//   .then((responses) => {
//     const shipList = document.getElementById("list");

//     for (let i = 0; i < responses.results.length; i++) {
//       const ship = document.createElement("li");
//       ship.innerHTML = `<h2>${responses.results[i].name}</2>`;
//       shipList.appendChild(ship);
//     }
//   });
