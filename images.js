// Imagens e sons do Jogo

let imgRoad;
let imgActor;

let imgCar1;
let imgCar2;
let imgCar3;

//sons
let soundTrack;
let soundCollided;
let soundPoints;

//function para puxar a informação de qual load (imagem) deve rodar


function preload(){
  imgRoad = loadImage("images/estrada.png");
  imgActor = loadImage("images/ator-1.png");
  imgCar1 = loadImage("images/carro-1.png");
  imgCar2 = loadImage("images/carro-2.png");
  imgCar3 = loadImage("images/carro-3.png");
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3]
  
  soundTrack = loadSound("sound/trilha.mp3");
  soundCollided = loadSound("sound/colidiu.mp3");
  soundPoints = loadSound("sound/pontos.wav");
}

