var canvas;
var cenario, form;
var database, gameState;


function preload() {
  cenario = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //criar o objeto jogo
  
  //chamar o método start do objeto jogo

  
}

function draw() {
  background(cenario);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
