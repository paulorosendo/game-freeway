//var actor
let yActor = 366;
let xActor = 85;
let collid = false;
let points = 0;

function showActor(){
  image(imgActor, xActor, yActor, 30, 30);
  
}

function movementActor(){

  if(keyIsDown(UP_ARROW)){
      yActor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(canMove()){
      yActor += 3;
    }
  }
  
  
//   if(keyIsDown(LEFT_ARROW)){
//     xActor -= 3;     
//   }
  
//   if(keyIsDown(RIGHT_ARROW)){
//     xActor += 3;     
//   }
}

function checkCollision(){
  // collideRectCircle
  //(x1, y1, width1, height1, cx, cy, diameter)
  
  for(let i = 0; i < imgCars.length; i++){
    collid = collideRectCircle (xCar[i],
                                yCar[i],
                                sizeCar[0],
                                sizeCar[1],
                                xActor,
                                yActor,
                                15                           
                               )
    if(collid){
      collided();
      soundCollided.play();
    }
        
  }
  
}

function returnPosition(){
  yActor = 366;
}

function collided(){
  returnPosition();
  if( points > 0){
    points -= 1;
  }
  
}

function includePoints(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60))
  text(points, width / 5,27 );
  
}


function score(){
  if(yActor  < 15){
    points++;
    soundPoints.play();
    returnPosition();

  }
}


function canMove(){
  return yActor < 366;
}