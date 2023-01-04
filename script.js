var container = document.querySelector("#container");
var searchButton = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchBar");
var userFormEl = document.querySelector("#submitForm");
var countryCardContainer = document.querySelector("#cardInfo");
var closeBtn = document.getElementsByClassName("close");

function displayCountryCard() {
  countryCardContainer.style.display = "block";
}

var j;

for (j = 0; j < closeBtn.length; j++) {
  closeBtn[j].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}
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
      allCountries = data;
      renderAllCountriestoPage();
    });
}

getAllCountries();

function renderAllCountriestoPage() {
  for (let i = 0; i < allCountries.length; i++) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "location.href='#'");
    var title = document.createElement("p");
    title.setAttribute("id", "cardTitle");
    title.textContent = allCountries[i].name;

    if (allCountries[i].flags !== undefined || allCountries[i].flags != null) {
      var cardFlag = document.createElement("img");
      cardFlag.setAttribute("src", allCountries[i].flags.png);
      cardFlag.setAttribute("onerror", "this.onerror=null; this.src=''");
      cardFlag.setAttribute("id", "cardFlagImg");

      card.appendChild(cardFlag);
    }

    card.appendChild(title);
    document.body.appendChild(card);
    container.appendChild(card);
  }
}

var formSubmitHandler = function (event) {
  event.preventDefault();
};

var buttonClickHandler = function (event) {
  event.preventDefault();

  var countryInput = searchInput.value.trim();

  if (countryInput) {
    getInputCountry(countryInput);
    // inputCardContainer.textContent = "";

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
      displayCountryCard();
    });
};

userFormEl.addEventListener("submit", formSubmitHandler);
searchButton.addEventListener("click", buttonClickHandler);
