const request = require("request");
const breed = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(url, (error, response, body) => {
  if (body === "[]") {
    console.log("Error: breed not found.");
  } else if (error) {
    console.log("Error: ", error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
