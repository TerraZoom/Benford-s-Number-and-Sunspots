var video;
var vScale = 16;
var slider;

function setup(){
  var rows = 30; 
  var cols = 40;

  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  slider = createSlider(0,255,77); // beginning, end, start

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      createCheckbox();
    }
  }

}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x+y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;
      var threshold = slider.value();

      var w = map(bright,0,255, 0, vScale);
      noStroke();
      fill(bright);
      rectMode(CENTER);
      rect(x*vScale, y*vscale, vScale, vScale);
    }
  }
}
