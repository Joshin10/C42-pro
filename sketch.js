var iss
var spaceCraft
function preload(){
  spaceImg=loadImage("spacebg.jpg")
  spaceCradt=loadImage("spacecraft1.png")
  spaceCraf=loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png")
  issImg=loadImage("iss.png")
}
function setup() {
  createCanvas(1150,640);
 // spaceImg=loadImage("spacebg.jpg")
  spaceCraft=createSprite(50, 300, 50, 50);
  spaceCraft.addAnimation("space",spaceCraf)
  spaceCraft.scale=0.3
  iss=createSprite(285,240,100,100)
 iss.addImage(issImg) 
 iss.scale=0.8
}

function draw() {
  background(spaceImg);  
 // iss.display();
if(spaceCraft.isTouching(iss)){
spaceCraft.x=spaceCraft.x + random(-1.1)
if( spaceCraft.y<=(iss.y+70) && spaceCraft.x <= (iss.x-10)){
  hasDocked=true
  textSize(25)
  fill("white")
  text("Docking Succesful",200,300)
}
}
if(keyDown("UP_ARROW")){
  spaceCraft.y=spaceCraft.y-2
}
if(keyDown("DOWN_ARROW")){
  spaceCraft.y=spaceCraft.y+2
}
if(keyDown("LEFT_ARROW")){
  spaceCraft.x=spaceCraft.x-2
}
if(keyDown("RIGHT_ARROW")){
  spaceCraft.x=spaceCraft.x+2
}
drawSprites();
}