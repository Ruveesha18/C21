var fixedrect, movingrect;
var gameobj1, gameobj2, gameobj3,gameobj4;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";

  gameobj1=createSprite(100,100,50,50);
  gameobj1.shapeColor="green";


  gameobj2=createSprite(200,100,50,50);
  gameobj2.shapeColor="green";

  gameobj3=createSprite(300,100,50,50);
  gameobj3.shapeColor="green";

  gameobj4=createSprite(400,100,50,50);
  gameobj4.shapeColor="green";
}

function draw() {
  background(255,255,255); 

  movingrect.x=mouseX;
  movingrect.y=mouseY; 
  
if(isTouching(movingrect,gameobj1)){
  gameobj1.shapeColor="blue";
    movingrect.shapeColor="blue";

  }
  else{
    gameobj1.shapeColor="green";
    movingrect.shapeColor="green";
  }
  drawSprites();
}
 


function isTouching(obj1,obj2){

  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<obj2.width/2+obj1.width/2
    && obj2.y-obj1.y<obj2.height/2+obj1.height/2
    && obj1.y-obj2.y<obj2.height/2+obj1.height/2){
    
    return true;
  }
  else{
    return false;
  }

}