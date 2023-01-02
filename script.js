var container = document.querySelector("#container");

function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}

function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

function getAllCountries() {
  var requestUrl = "https://restcountries.com/v3.1/all";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        var continent = data[i].continents;
        var currency = data[i].currencies;
        var demonym = data[i].demonyms;
        var language = data[i].languages;
        var population = data[i].population;
        // console.log(name);
      }
      profiles = data;
      renderDatatoPage();
    });
}

function renderDatatoPage() {
  for (let i = 0; i < profiles.length; i++) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var title = document.createElement("p");
    title.setAttribute("id", "cardTitle");
    title.textContent = profiles[i].name.common;

    let continent = document.createElement("p");
    continent.setAttribute("id", "cardContinent");
    continent.textContent = "Continent: " + profiles[i].continents;

    if (profiles[i].flags !== undefined || profiles[i].flags != null) {
      var cardFlag = document.createElement("img");
      cardFlag.setAttribute("src", profiles[i].flags.png);
      cardFlag.setAttribute("onerror", "this.onerror=null; this.src=''");
      cardFlag.setAttribute("id", "cardFlagImg");

      card.appendChild(cardFlag);
    }

    if (profiles[i].capital !== undefined || profiles[i].capital !== null) {
      var capital = document.createElement("p");
      capital.setAttribute("id", "cardCapital");
      capital.textContent = "Capital: " + profiles[i].capital;
    } else if (
      profiles[i].capital === undefined ||
      profiles[i].capital === null
    ) {
      capital.textContent = "Capital: N/A";
    }

    card.appendChild(title);
    card.appendChild(capital);
    card.appendChild(continent);
    document.body.appendChild(card);
    container.appendChild(card);
  }
}

getAllCountries();

// function getACountry() {
//   var requestUrl = "https://restcountries.com/v3.1/name/brasil";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// getACountry();
