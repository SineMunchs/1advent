let img;
let str = "1Advent";
let fontSize = 4;  // Changed from textSize to fontSize
let direction = 1;

function preload() {
  img = loadImage("1.png");
}

function setup() {
  createCanvas(1024, 1024);
  frameRate(2);
  textAlign(CENTER, CENTER);
}

function ASCII_art(input, ts) {
  textSize(ts);  // This is now using p5.js's textSize() function
  
  for (let y = 0; y < input.height; y += (ts-2)) {
    for (let x = 0; x < input.width; x += (ts-2)) {
      let c = input.get(x, y);
      let grayscale = 0.299 * red(c) + 0.587 * green(c) + 0.114 * blue(c);
      let index = floor(map(grayscale, 0, 255, 0, str.length - 1));
      fill(c);
      text(str.charAt(index), x, y);
    }
  }
}

function draw() {
  background(255);
  fontSize += direction;
  
  if (fontSize >= 15 || fontSize <= 4) {
    direction *= -1;
  }
  
  ASCII_art(img, fontSize);
  
  // Debug info (uncomment if needed)
  /*
  textAlign(LEFT);
  fill(0, 0, 255);
  textSize(30);
  text("FontSize: " + fontSize, 120, 50);
  text("Sampling rate: " + (1.0/((fontSize-2)*(fontSize-2))).toFixed(3), 40, 100);
  */
  
  // Uncomment to save frames
  // saveFrame("######.png");
}