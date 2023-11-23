const request = require("request");

fetchBreedDescription = function (breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (!error) {
      if (body === "[]") {
        callback("breed not found.", null);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
