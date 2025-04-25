function setup() {
    createCanvas(800, 600);
}
  
function draw() {
  background(100, 80, 150);

  fill(255);
  circle(mouseX, mouseY, 80);

  if(mouseIsPressed === true) {
    fill(0);
    circle(mouseX, mouseY, 80);
  }
}