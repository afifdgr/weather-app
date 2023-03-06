const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello Express!<h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Muhammad",
    },
    {
      name: "Afiv",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/weather", (req, res) => {
  res.send([
    {
      forecast: "It is snowing",
      location: "Banjarnegara",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
