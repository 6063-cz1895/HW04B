let x1, y1, x2, y2, x3, y3; // Define variables for all following codes

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('darkgreen');
  noStroke();
}

function draw() {
}
//mousePressed+release->bezier
function mousePressed() {
  x1 = mouseX; // Starting point for bezier
  y1 = mouseY; 
  
  x2 = random(width); //the points between are random
  y2 = random(height);
  x3 = random(width);
  y3 = random(height);

  fill(random(255), random(255), random(255)); // Random color for bezier
}

function mouseReleased() {
  bezier(x1, y1, x2, y2, x3, y3, mouseX, mouseY); // x4 and y4 are defined by mouse release function
}

function mouseDragged() {
  let size = random(10, 50); // Random size between 10 and 50
  fill(random(255), random(255), random(255)); // Random color for shapes
  
  if (random(2) < 1) { //here comes my favorite part random rectangle or circle, draw a random number between 0-2, if larger than 1->circle, if less than 1, rectangle!
    rect(mouseX, mouseY, size, size); // Sizes are (random, random)
  } else {
    ellipse(mouseX, mouseY, size); 
  }
}
//If you don't like what you have, mouse wheel to get rid of it
function mouseWheel() {
  background('darkgreen'); // Draw new background when mouse wheel is used
}
//create your abstract art and save it!! Lol
function keyPressed() {
  if (key == 's') {
    saveCanvas('myCanvas', 'jpg');
  }
}