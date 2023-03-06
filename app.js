const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=8c40e000413e99e5077a81829f481ddb&query=-7.399553382160208,109.67992040301874&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log("Temperature currently is " + response.body.current.temperature);
});
