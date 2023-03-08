const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://geocode.xyz/" +
    address +
    "?json=1&auth=899715294757171573965x48530";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.latt === 0 || body.longt === 0) {
      callback("unable find location", undefined);
    } else {
      callback(undefined, {
        latitude: body.latt,
        longitude: body.longt,
      });
    }
  });
};

module.exports = geocode;
