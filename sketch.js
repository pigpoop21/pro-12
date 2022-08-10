var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
   appleImage = loadImage("apple.png");
   orangeLeafImage = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  spawnorangeLeaf();
  spawnapple();

  drawSprites();
}

function spawnorangeLeaf() {
  //write code here to spawn the orangeLeafs
  if (frameCount % 60 === 0) {
    var orangeLeaf = createSprite(600,120,40,10);
    orangeLeaf.x = Math.round(random(50,300));
    orangeLeaf.addImage(orangeLeafImage);
    orangeLeaf.scale = 0.08;
    orangeLeaf.velocityY = 3;
    
     //assign lifetime to the variable
    orangeLeaf.lifetime = 200;
    
    //adjust the depth
    
    //add each orangeLeaf to the group
  }
}

function spawnapple() {
  //write code here to spawn the orangeLeafs
  if (frameCount % 90 === 0) {
    var apple = createSprite(600,120,40,10);
    apple.x = Math.round(random(50,300));
    apple.addImage(appleImage);
    apple.scale = 0.08;
    apple.velocityY = 3;
    
     //assign lifetime to the variable
     apple.lifetime = 200;
    
    //adjust the depth
    
    //add each orangeLeaf to the group
  }
}