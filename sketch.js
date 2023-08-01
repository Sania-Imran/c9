
function setup() {

  createCanvas(400,400);
var wall= createSprite (200,200,50,50)

}

function draw() 



{
  

  background(30); 
  if(KeyIsDown(RIGHT_ARROW)){
    wall.position.x=wall.position.x+5
  }

  drawSprites()

}




