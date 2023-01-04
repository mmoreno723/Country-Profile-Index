var container = document.querySelector("#container");

// DARK AND LIGHT MODE //

function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}

function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

// SCROLL TO TOP //

let topButton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// GET ALL COUNTRIES //

function getAllCountries() {
  var requestUrl = "https://restcountries.com/v2/all";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {}
      profiles = data;
      renderAllCountriestoPage();
    });
}

getAllCountries();

function renderAllCountriestoPage() {
  for (let i = 0; i < profiles.length; i++) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "location.href='#'");
    var title = document.createElement("p");
    title.setAttribute("id", "cardTitle");
    title.textContent = profiles[i].name;

    if (profiles[i].flags !== undefined || profiles[i].flags != null) {
      var cardFlag = document.createElement("img");
      cardFlag.setAttribute("src", profiles[i].flags.png);
      cardFlag.setAttribute("onerror", "this.onerror=null; this.src=''");
      cardFlag.setAttribute("id", "cardFlagImg");

      card.appendChild(cardFlag);
    }

    card.appendChild(title);
    document.body.appendChild(card);
    container.appendChild(card);
  }
}

var searchButton = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchBar");
var userFormEl = document.querySelector("#submitForm");

var formSubmitHandler = function (event) {
  event.preventDefault();
};

var buttonClickHandler = function (event) {
  event.preventDefault();

  var countryInput = searchInput.value.trim();

  if (countryInput) {
    getInputCountry(countryInput);

    searchInput.value = "";
  } else {
    alert("Please pick a country");
  }
};

var getInputCountry = function (countryInput) {
  var requestUrl = "https://restcountries.com/v2/name/" + countryInput;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {}
      search = data;
      renderInputCountrytoPage();
    });
};
//       if (response.ok) {
//         response.json().then(function (data) {
//           console.log(data);
//           inputCountry = data;
//         });
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert("Unable to connect to REST Countries");
//     });
// };

function renderInputCountrytoPage() {
  for (let i = 0; i < search.length; i++) {
    var countryCard = document.createElement("div");
    countryCard.setAttribute("class", "countryCard");
    var text = document.createElement("p");

    text.setAttribute("class", "countryText");

    countryCard.appendChild(text);
    container.appendChild(countryCard);
    text.textContent = "";
    text.textContent = search[i].name;

    console.log(text);
  }
}

userFormEl.addEventListener("submit", formSubmitHandler);
searchButton.addEventListener("click", buttonClickHandler);
