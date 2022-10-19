
//definindo tamanho do escopo
function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}


//executar dentro do escopo 
function draw() {
  background(imgRoad);
  showActor();
  showCar();
  movementCar();
  movementActor();
  startPosition();
  checkCollision();
  includePoints();
  score();
}




