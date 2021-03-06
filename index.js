function processImage (img) {
  // img.height, .width, .data [r,g,b,a,r,g,b,a...]
  copy(img)
}

function copy (img) {
  return img;
}

function transparent (img) {}

function tintRed (img) {}

function greyscale (img) {}

function invertColors (img) {}

function flipVertical (img) {}

function flipHorizontal (img) {}

function rotate90 (img) {}

function blur (img, blurFactor) {}




// DON'T MESS WITH WHAT'S BELOW

var fs = require('fs')
var path = require('path')
Png = require('node-png').PNG;

var inputFilePath = path.join(__dirname,'images','rainbowSheep.png')
var outputFilePath = path.join(__dirname,'images','out',Date.now()+'.png')

fs.createReadStream(inputFilePath)
.pipe(new Png({
  filterType: 4
}))
.on('parsed', function() {
  processImage(this)
  this.pack().pipe(fs.createWriteStream(outputFilePath));
});
