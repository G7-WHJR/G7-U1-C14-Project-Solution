// An array of all the colors used in this code.
var colors = ["violet","indigo", "blue", "green", "yellow", "orange", "red"];
var currentColor;

function setup() {
  //size of the canvas to draw on
  createCanvas(innerWidth, innerHeight);

  // Set the background to white, and move the line to setup();
  background("white");

}


function draw() {
  var y =0; 
  for (i = 0; i < colors.length; i++){
    //make an object for each color box:
     currentColor = new Band(0,y,400,60,colors[i]);  
     currentColor.appear();
     y = y + 50;
 }
}
