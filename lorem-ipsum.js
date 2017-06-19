console.log("Hello, Clement");

const express = require('express')
const app = express();

var loremIpsum = require('lorem-ipsum')
var loremApp = loremIpsum({count: 3, units: 'paragraphs', format: 'html'});

app.get('/', function(req, res) {
  res.send(loremApp);
});

app.listen(3000, function () {
  console.log("Started app.");
})
