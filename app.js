const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Banjarnegara", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(-7.3995793101922835, 109.67985841779118, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
