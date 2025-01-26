// Now it’s your turn. I have conveniently included a spongegar.png image into the
// client folder.
// You need to create a new file called imageResponses.js. When a user goes to
// the URL /dankmemes, this needs to send back the spongegar image and have it
// display in the browser. This will work very similarly to how the HTML functions
// worked since you are reading in from a file.
// You’ll need to look up the media type (also called MIMEtype) for PNG images for
// the browser to display it properly

const fs = require('fs'); // pull in the file system module

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(image);
    response.end();
};

module.exports.getImage = getImage;