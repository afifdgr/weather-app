const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8c40e000413e99e5077a81829f481ddb&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect service", undefined);
    } else if (body.success === false) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Temperature currently is " + body.current.temperature
      );
    }
  });
};

module.exports = forecast;
