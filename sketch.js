var fixedRect, movingRect,car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(400,100,70,120);
  car.shapeColor  = "blue";
  car.velocityX = 2;

  wall = createSprite(900,100,70,120);
  wall.shapeColor="orange";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,wall)){
   wall.shapeColor = "white";
   car.velocityX = 0;
   text("Check out!!",800,500);
 }

  
  drawSprites();
}
function isTouching(object1,object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 +object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
  return true
}
else {
 return false
}
}