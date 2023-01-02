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
        let name = data[i].name.common;
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
    title.textContent = profiles[i].name.common;

    card.appendChild(title);
    document.body.appendChild(card);
    container.appendChild(card);

    if (profiles[i].flags !== undefined || profiles[i].flags != null) {
      var cardFlag = document.createElement("img");
      cardFlag.setAttribute("src", profiles[i].flags.png);
      cardFlag.setAttribute("onerror", "this.onerror=null; this.src=''");
      cardFlag.setAttribute("id", "cardFlagImg");

      card.appendChild(cardFlag);
    }
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
