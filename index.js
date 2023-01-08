const express = require("express");
const app = express();
const countryData = require("./countries.json");
const PORT = 3001;

// app.get("/", (req, res) => {
//   res.send("Visit http://localhost:3001/country");
// });

app.get("/api/country", (req, res) => res.json(countryData));

app.get("/api/country/:term", (req, res) => {
  const requestedCountry = req.params.term;

  for (let i = 0; i < countryData.length; i++) {
    if (requestedCountry === countryData[i].term.name) {
      return res.json(requestedCountry[i]);
    }
  }
  return res.json("No match found");
});

app.get("/greet/:name", (req, res) => res.send(`Name: ${req.params.name}`));

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
