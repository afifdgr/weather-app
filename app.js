const request = require("postman-request");
const geocode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=8c40e000413e99e5077a81829f481ddb&query=-7.399553382160208,109.67992040301874&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("unable to find location");
//   } else {
//     console.log(
//       "Temperature currently is " + response.body.current.temperature
//     );
//   }
// });

// const geocode = "https://geocode.maps.co/reverse?lat=-7.399586&lon=109.679856";

// const geocode = "https://geocode.maps.co/search?q=banjarnegara";

// request({ url: geocode, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location service");
//   } else if (response.body.error) {
//     console.log("unable find location");
//   } else {
//     const latitude = response.body[0].lat;
//     const longtitude = response.body[0].lon;
//     console.log(latitude, longtitude);
//   }
// });

geocode("Banjarnegara", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
