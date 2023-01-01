function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}

function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

function getCountryApi() {
  var requestUrl = "https://restcountries.com/v3.1/name/peru";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getCountryApi();
