

var rain;
var rainImg;

function setup() {
  createCanvas(800,400);

}
function draw() {
  background(0);  
  if(frameCount%1===0){
  

   Rain();
   
  }
  drawSprites();
}
function Rain(){
  rain = createSprite(random(10,700),100,random(10,40),random(10,40));
  rain.velocityY=5;
  strokeWeight(5);
  stroke("black");
  fill("white");
}