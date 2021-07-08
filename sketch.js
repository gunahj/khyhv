var bg,sleep,brush,gym,eat,drink,move,bath;
var bg1
var astrounat
var INSTRUCTIONS
var RIGHTARROW
var LEFTARROW
var UPARROW
var DOWNNARROW
var MKEY
var lb,rb,ub,db
function preload(){
  bg= loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat =loadAnimation ("eat1.png","eat2.png");
  drink = loadAnimation ("drink1.png","drink2.png");
  move = loadAnimation ("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png")
  
}

function setup() {
  createCanvas(800,400);

  edges=createEdgeSprites();
  
 bg1= createSprite(370, 200, 100, 50);
 bg1.addImage("h",bg)
 bg1.scale=0.2

 astrounat=createSprite(370,260)
 astrounat.addImage("s",sleep)
 astrounat.scale=0.1

 

 INSTRUCTIONS=":"
 stroke("black");
  fill("black");
 RIGHTARROW="BATHING"
 stroke("black");
  fill("black");
 LEFTARROW="EATING"
 stroke("black");
  fill("black");
 UPARROW="BRUSHING"
 stroke("black");
  fill("black");
 DOWNNARROW="GYMMING"
 stroke("black");
  fill("black");
 MKEY="MOVING"
 stroke("black");
  fill("black");

  

}

function draw() {
  background(0);  
  
  drawSprites();
  text("INSTRUCTIONS"+INSTRUCTIONS,20,20)
  text("RIGHT ARROW:"+RIGHTARROW,20,40)
  text("UP ARROW:"+UPARROW,20,60)
  text("DOWN ARROW:"+DOWNNARROW,20,80)
  text("LEFT ARROW:"+LEFTARROW,20,100)
  text("M KEY:"+MKEY,20,120)
  
if(keyDown("UP_ARROW")){
  astrounat.addAnimation("brush",brush)
  astrounat.changeAnimation("brush")
  astrounat.y=250
  astrounat.velocityY=0
  astrounat.velocityX=0
}

if(keyDown("RIGHT_ARROW")){
  astrounat.addAnimation("bath",bath)
  astrounat.changeAnimation("bath")
  astrounat.y=250
  astrounat.velocityY=0
  astrounat.velocityX=0
}

if(keyDown("LEFT_ARROW")){
  astrounat.addAnimation("eat",eat)
  astrounat.changeAnimation("eat")
  astrounat.y=250
  astrounat.velocityY=0
  astrounat.velocityX=0
}

if(keyDown("DOWN_ARROW")){
  astrounat.addAnimation("gym",gym)
  astrounat.changeAnimation("gym")
  astrounat.y=250
  astrounat.velocityY=0
  astrounat.velocityX=0

  
}
if(keyDown("m")){
  astrounat.addAnimation("move1",move)
  astrounat.changeAnimation("move1")
  astrounat.y=250
  astrounat.velocityY=1
  astrounat.velocityX=1
  
  
}

astrounat.bounceOff(edges);

}