




function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
  createSprite(400, 200, 50, 50);


  rect1=new TrafficLight(400,200,100,20);
  
}

function draw() {
  background("black");  
  
   
  
  
  rect1.display();
  
  drawSprites();
}