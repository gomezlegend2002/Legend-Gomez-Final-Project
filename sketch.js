var leg=100;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,65,150); //an RGB color for the canvas' background
  //circle
  strokeWeight(3);
  stroke(255,255,255); // an RGB color for the circle's border
  fill(50,12,16,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,40,40); // center of canvas, 20px dia


textSize(20); //Text on top left
textFont("Georgia");
textStyle(ITALIC);
textAlign(CENTER);
text("Stealth...", 40,40);

 fill(leg,190,100); 
  rect(150,250,40,55); //ninja's targets

  rect(250,250,40,55);

    


}

function mousePressed(){
  leg=255;
}


