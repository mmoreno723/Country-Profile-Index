function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}

function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

// var card = document.createElement("div");

// var countryName = document.createElement("p")
// countryName.textContent =

function getAllCountries() {
  var requestUrl = "https://restcountries.com/v3.1/all";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        var name = data[i].name.common;
        var continent = data[i].continents;
        var currency = data[i].currencies;
        var demonym = data[i].demonyms;
        var language = data[i].languages;
        var population = data[i].population;
        console.log(name);
        console.log(population);
        // var countryCapital = data[i].capital[0];
        // console.log(countryCapital);
      }
    });
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
