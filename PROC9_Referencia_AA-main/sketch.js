var box;
var x = randomNumber(1-10);
function setup() {
  createCanvas(1600,900);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  x = x + 1;
   background(x,x,x);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x+5;
    background(255, 233, 0);
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x+-5;
    background(255,0,0);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y+-5;
    background(124,252,0);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y+5;
    background(240,248,255);
  }
  
  drawSprites();
}




