var ginger=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background (209, 238, 238);
}
//The draw function happens over and over again
function draw() {
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight (3); 
  fill(232,92,37 ); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,50,50); // center of canvas, 20px dia
  ginger=ginger+2;
  fill (231, 138, 71, 235, mouseX);
  stroke (152,140,132);
  strokeWeight (6)
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  
}


function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
  textSize (70);
  textFont ("Georgia");
  fill (226,29,29);
  text ('INTUITION',60,60);

}

