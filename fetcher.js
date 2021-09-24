const request = require("request");
const fs = require('fs');

const URL = process.argv[2];
const filePath = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.log('error:', error);
      return;
    }
    console.log('Downloaded and saved ${body.length} bytes of data to ${filePath}')
  });
});

  //1 character is equal to 1 byte.

  //It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.