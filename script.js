var container = document.querySelector("#container");

function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}

function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

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

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function getAllCountries() {
  var requestUrl = "https://restcountries.com/v2/all";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      for (let i = 0; i < data.length; i++) {
        var currency = data[i].currencies;
        var demonym = data[i].demonyms;
        var language = data[i].languages;
        var population = data[i].population;
      }
      profiles = data;
      renderDatatoPage();
    });
}

function renderDatatoPage() {
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

    // if (profiles[i].capital !== undefined || profiles[i].capital !== null) {
    //   var capital = document.createElement("p");
    //   capital.setAttribute("id", "cardCapital");
    //   capital.textContent = "Capital: " + profiles[i].capital;
    // } else if (profiles[i].capital === undefined) {
    //   capital.textContent = "Capital: N/A";
    // }
    card.appendChild(title);
    // card.appendChild(capital);
    // card.appendChild(continent);
    document.body.appendChild(card);
    container.appendChild(card);
  }
}

getAllCountries();

var searchButton = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchBar");
var userFormEl = document.querySelector("#submitForm");

var formSubmitHandler = function (event) {
  event.preventDefault();

  var countryInput = searchInput.value.trim();

  if (countryInput) {
    getCountryInfo(countryInput);

    searchInput.value = "";
  } else {
    alert("Please enter a country name");
  }
};

var buttonClickHandler = function (event) {
  var country = searchInput.value;

  if (country) {
    getFeaturedCountry(country);
  }
};

var getCountryInfo = function (country) {
  var requestUrl = "https://restcountries.com/v2/name/" + country;

  fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to REST Countries");
    });
};

var getFeaturedCountry = function (country) {
  var requestUrl = "https://restcountries.com/v2/name/" + country;

  fetch(requestUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

userFormEl.addEventListener("submit", formSubmitHandler);
searchButton.addEventListener("click", buttonClickHandler);

// searchButton.addEventListener("click", function () {
//   var inputData = {
//     countryName: searchInput.value,
//   };
//   JSON.stringify(inputData);
//   console.log(inputData);
// });

// var searchButton = document.querySelector("#searchBtn");
// function getACountry() {
//   let search = document.getElementById("searchBar");
//   // var requestUrl = `https://restcountries.com/v2/name/` + search.value + ``;
//   var requestUrl = `https://restcountries.com/v2/name/${search.value}`;

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// getACountry();
