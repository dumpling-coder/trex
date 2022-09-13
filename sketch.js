
var trex ,trex_running;
var ground,ground_moving ;
function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png", "trex4.png")
 ground_moving = loadImage ("ground2.png")

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(150,150,150,75) ;
  ground = createSprite(200,180,400,20) ;
  //create a trex sprite
 trex.addAnimation ("running", trex_running) ;
ground.addImage("moving", ground_moving) ;
ground.x = ground.width/2 ;
 edges = createEdgeSprites() ;

}

function draw(){
  background("white")
  drawSprites() ;
   if(keyDown("space")) {
  trex.velocityY = -10
  ground.velocityX = -2
   }
   trex.velocityY = trex.velocityY+0.5
   trex.collide(ground) ;
   if (ground.x<0){
    ground.x = ground.width/2 ;
   }


}
