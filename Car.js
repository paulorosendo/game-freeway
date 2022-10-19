//controle do x do carro
let xCar = [600, 600, 600, 600, 600, 600];

//Controle do y do carro
let yCar = [40, 96, 150, 210, 270, 318];

//Controle de Velocidade do Carro
let velCar =  [2, 2.5, 3.2, 5, 3.3, 2.3];

//tamanho do carro
let sizeCar = [50, 40];

//mostrar Carros 
function showCar(){  
  for( let i = 0; i < imgCars.length; i++  ){
    
    image(
      imgCars[i],
      xCar[i],
      yCar[i],
      sizeCar[0],
      sizeCar[1]
    );
  } 
}


//Movimentar carros
function movementCar(){
  for (let i = 0; i < imgCars.length; i++){
  xCar[i] -= velCar[i] ;
  }
}


function startPosition(){  
  for(let i = 0; i < imgCars.length; i++ ){
    if(passedScreen(xCar[i])){
      xCar[i] = 600;
    }
  }  
}


function passedScreen(xCar){
  return xCar < -50
}