function setup() {
  createCanvas(800,400);
  square1=createSprite(200, 200, 50, 50);
  square2=createSprite(400,200,60,60)
  square1.shapeColor="red"
  square2.shapeColor="blue"
}

function draw() {
  background(0);  
  square2.x=World.mouseX
  square2.y=World.mouseY
 // console.log(square2.x-square1.x)
  if(square2.x-square1.x < square1.width/2+square2.width/2 &&
    square1.x-square2.x< square1.width/2+square2.width/2 &&
    square2.y-square1.y < square1.height/2+square2.height/2 &&
    square1.y-square2.y< square1.height/2+square2.height/2 )
    {
  square2.shapeColor="green"
  }
  else{
    square2.shapeColor="blue"
  }
  drawSprites();
}