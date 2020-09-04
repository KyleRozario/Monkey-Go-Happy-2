var bananaImage,obstacleImage,backgroundMain,backgroundImage,score;
var player,invisibleGround,banana,obstacle,foodGroup,
    obstacleGroup;

function preload() { 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 backgroundImage = loadImage("jungle.jpg");
 playerImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_01.png","Monkey_01.png","Monkey_01.png");
  
} 

function setup() {  
  createCanvas(400,400);
  
  backgroundMain = createSprite(200,200,400,400);
  backgroundMain.addImage("jungle",backgroundImage);
  
  invisibleGround = createSprite(400,350,800,10);
  invisibleGround.velocityX = -4;
  invisibleGround.visible = false;
  invisibleGround.x = invisibleGround.width/2;
  
  
  player = createSprite(100,340,20,50);
  player.addAnimation("monkey",playerImage);
  
   obstacleGroup = new Group();
   foodGroup = new Group();

  score = 0;
  
}

function draw() {
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  player.scale = 0.1;
  player.collide(invisibleGround);

  if(invisibleGround.x < 0){
  invisibleGround.x = invisibleGround.width/2;
  }
  
   if(keyDown("space")){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY+0.6;
  
  
  if(foodGroup.isTouching(player)){
    score = score+1;
    foodGroup.destroyEach();
  }
  
  switch(score){
    case 10: player.scale = 0.12;
            break;
    case 20: player.scale = 0.14;
            break;
    case 30: player.scale = 0.16;
            break;
    case 40: player.scale = 0.18;
            break; 
      default: break;
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.1;
  }
  
  drawSprites ();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
}

function spawnBanana() {
  if(getFrameCount % 80 === 0){
    var banana = createSprite(395,randomNumber(120,200),20,20);
    banana.scale = 0.05;
    banana.velocityX = -4;
    banana.lifetime = 95;
    banana.setAnimation("Banana");
    
    foodGroup.add(banana);

  }
}

  function spawnObstacles() {
    if(getFrameCount % 300 === 0){
      var obstacle = createSprite(Math.round(random(185,395)),340,20,20);
      obstacle.setAnimation("Stone");
      obstacle.scale = 0.15;
      obstacle.velocityX = -5;
      obstacle.lifetime = 95;
      
      obstacleGroup.add(obstacle);
        
   }
  }




  








