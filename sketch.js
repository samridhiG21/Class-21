var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(200, 200, 60, 60);
  gameObject1.shapeColor = "green";
  gameObject1.velocityX = 4;

  gameObject2 = createSprite(300, 200, 60, 60);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(400, 200, 60, 60);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(1200, 200, 60, 60);
  gameObject4.shapeColor = "green";
  gameObject4.velocityX = -4;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
    //movingRect.scale = 0.5;
    //gameObject1.scale = 2;
  }else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  bounceOff(gameObject4,gameObject1);
 
  drawSprites();
}

