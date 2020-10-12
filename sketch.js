var movingRect;
var rect ;


function setup() {
  createCanvas(800,400);

  movingRect =createSprite(800, 200, 150, 50); 
  movingRect.shapeColor = ("black"); 
  rect =createSprite(400, 200, 50, 150);
  rect.shapeColor = ("black"); 

}

function draw() {
  background("lightGreen");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log (rect.x +"; " + movingRect.x);

  if (rect.x - movingRect.x<rect.width/2+movingRect.width/2 
    &&movingRect.x - rect.x<rect.width/2+movingRect.width/2
    &&rect.y - movingRect.y<rect.height/2+movingRect.height/2 
    &&movingRect.y - rect.y<rect.height/2+movingRect.height/2){
    movingRect.shapeColor = ("red");
    rect.shapeColor = ("red");
  }else {
    movingRect.shapeColor = ("black");
    rect.shapeColor = ("black");
  }

  drawSprites();
}