var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  monkey = createSprite(50,150,20,20);
  monkey.scale=0.1;
  monkey.addAnimation("running", monkey_running);
  
  ground = createSprite(200,180,600,10);
   ground.x = ground.width /2; 
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  score = 0;
}


function draw() {
 background("blue");
  text("Survival Time: "+ score, 450,50);
  //ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }  
  
  if(keyDown("space")&& monkey.y >= 150){
   monkey.velocityY=-12;
  
  }
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
 generateObstacles();
  
 
  
  spawnBananas();
  drawSprites();
  
}
function generateObstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -(6 + score/100);
    
obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
    obstacleGroup.add(obstacle);
 }}

 function spawnBananas(){
  
 if (frameCount % 60 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
   banana.addImage(bananaImage);
   banana.scale=0.08;
   banana.velocityX = -3;
   banana.lifetime = 200;
   bananaGroup.add(banana);
 }}