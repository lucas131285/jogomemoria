//Link do trabalho no youtube: https://youtu.be/8XSM6OWpcPU

function preload(){
  
  imagemEducadora =  loadImage("Lucineide.jpg")
 
  imagemProgramador = loadImage("WP_20180301_15_16_38_Selfie.jpg");
  
  imagemFundo = loadImage("telaFundo.jpg");
  
  fundoCarta = loadImage("fundoCarta.png");
  
  imagemGameOver = loadImage ('gameover.jpg');
} 
function setup() {
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
}
var tabuleiroAtivo=false
EscolhaMenu = 0;
EscolhaDif = 0;
//variaveis logica
var cartasComparacao = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8']
let cartas = []
let cartasMedio = []
let cartasDificil = []

const numLinhas = 4
const numColunas = 4

let versoImage
let frenteImage = []
let frenteImage1 = []
let frenteImageMedio = []
let frenteImage1Medio = []
let frenteImageDificil = []
let frenteImage1Dificil = []

let imagesDeck = []
let imagesDeckMedio = []
let imagesDeckDificil = []
let flippedCartas = []
let flippedCartasMedio = []
let flippedCartasDificil = []
let delayStartFC = null

let numTent = 0

//variaveis do temporizador
var atualiza = 0;
var tempoSegundo = 0;
var rate = 1;

// Tile Object
// --------------------------
class Carta {
  constructor(x, y, faceUpImage, v) {
    this.x = x
    this.y = y
    this.width = 100
    this.versoImage = versoImage
    this.faceUpImage = faceUpImage
    this.isFaceUp = false
    this.value = v
  }

  render() {    
    fill(0, 0, 0)    
    rect(this.x, this.y, this.width, this.width)

    if (this.isFaceUp === true) {
      image(this.faceUpImage, this.x, this.y, this.width, this.width)
    } else {
      image(this.versoImage, this.x, this.y, 100, 100)
    }
  }

  setIsFaceUp(isFaceUp) {
    this.isFaceUp = isFaceUp
  }

  isUnderMouse(x, y) {
    return x >= this.x && x <= this.x + this.width  &&
      y >= this.y && y <= this.y + this.width
  }
}


// Game functions
// --------------------------
//facil
function createCartas() {
  
  for (let i = 0; i < numColunas; i++) {
    for (let j = 0; j < numLinhas; j++) {
      cartas.push(new Carta(i * 100 + 50, j * 100+50, imagesDeck.pop(), cartasComparacao.pop()  ))
      
    }
  }
}
//medio
function createCartasMedio() {
  
  for (let i = 0; i < numColunas; i++) {
    for (let j = 0; j < numLinhas; j++) {
      cartasMedio.push(new Carta(i * 100 + 50, j * 100+50, imagesDeckMedio.pop(), cartasComparacao.pop()  ))
      
    }
  }
}

//dificil
function createCartasDificil() {
  
  for (let i = 0; i < numColunas; i++) {
    for (let j = 0; j < numLinhas; j++) {
      cartasDificil.push(new Carta(i * 100 + 50, j * 100+50, imagesDeckDificil.pop(), cartasComparacao.pop()  ))
      
    }
  }
}

function updateGameLogic() {
  if (delayStartFC && (frameCount - delayStartFC) > 30) {
    for (let i = 0; i < cartas.length; i++) {
      if (!cartas[i].isMatch && cartas[i].isFaceUp) {
        cartas[i].setIsFaceUp(false)
      }
    }
    flippedCartas = []
    delayStartFC = null
  }
}

//medio
function updateGameLogicMedio() {
  if (delayStartFC && (frameCount - delayStartFC) > 30) {
    for (let i = 0; i < cartasMedio.length; i++) {
      if (!cartasMedio[i].isMatch && cartasMedio[i].isFaceUp) {
        cartasMedio[i].setIsFaceUp(false)
      }
    }
    flippedCartasMedio = []
    delayStartFC = null
  }
}
//dificil
function updateGameLogicDificil() {
  if (delayStartFC && (frameCount - delayStartFC) > 30) {
    for (let i = 0; i < cartasDificil.length; i++) {
      if (!cartasDificil[i].isMatch && cartasDificil[i].isFaceUp) {
        cartasDificil[i].setIsFaceUp(false)
      }
    }
    flippedCartasDificil = []
    delayStartFC = null
  }
}


function loadfrenteImage() {
   frenteImage[0] = loadImage("carta1.jpg")
   frenteImage[1] = loadImage("carta2.jpg")
   frenteImage[2] = loadImage("carta3.jpg")
   frenteImage[3] = loadImage("carta4.jpg")
   frenteImage[4] = loadImage("carta5.jpg")
   frenteImage[5] = loadImage("carta6.jpg")
   frenteImage[6] = loadImage("carta7.jpg")
   frenteImage[7] = loadImage("carta8.jpg")
}

function loadfrenteImage1() {
   frenteImage1[0] = loadImage("carta1-1.jpg")
   frenteImage1[1] = loadImage("carta2-1.jpg")
   frenteImage1[2] = loadImage("carta3-1.jpg")
   frenteImage1[3] = loadImage("carta4-1.jpg")
   frenteImage1[4] = loadImage("carta5-1.jpg")
   frenteImage1[5] = loadImage("carta6-1.jpg")
   frenteImage1[6] = loadImage("carta7-1.jpg")
   frenteImage1[7] = loadImage("carta8-1.jpg")
  
}

function loadfrenteImageMedio() {
   frenteImageMedio[0] = loadImage("carta1.jpg")
   frenteImageMedio[1] = loadImage("carta2.jpg")
   frenteImageMedio[2] = loadImage("carta3.jpg")
   frenteImageMedio[3] = loadImage("carta4.jpg")
   frenteImageMedio[4] = loadImage("carta5.jpg")
   frenteImageMedio[5] = loadImage("carta6.jpg")
   frenteImageMedio[6] = loadImage("carta7.jpg")
   frenteImageMedio[7] = loadImage("carta8.jpg")
}

function loadfrenteImage1Medio() {
   frenteImage1Medio[0] = loadImage("carta1-1.jpg")
   frenteImage1Medio[1] = loadImage("carta2-1.jpg")
   frenteImage1Medio[2] = loadImage("carta3-1.jpg")
   frenteImage1Medio[3] = loadImage("carta4-1.jpg")
   frenteImage1Medio[4] = loadImage("carta5-1.jpg")
   frenteImage1Medio[5] = loadImage("carta6-1.jpg")
   frenteImage1Medio[6] = loadImage("carta7-1.jpg")
   frenteImage1Medio[7] = loadImage("carta8-1.jpg")
}
  
function loadfrenteImageDificil() {
   frenteImageDificil[0] = loadImage("carta1.jpg")
   frenteImageDificil[1] = loadImage("carta2.jpg")
   frenteImageDificil[2] = loadImage("carta3.jpg")
   frenteImageDificil[3] = loadImage("carta4.jpg")
   frenteImageDificil[4] = loadImage("carta5.jpg")
   frenteImageDificil[5] = loadImage("carta6.jpg")
   frenteImageDificil[6] = loadImage("carta7.jpg")
   frenteImageDificil[7] = loadImage("carta8.jpg")
}

function loadfrenteImage1Dificil() {
   frenteImage1Dificil[0] = loadImage("carta1-1.jpg")
   frenteImage1Dificil[1] = loadImage("carta2-1.jpg")
   frenteImage1Dificil[2] = loadImage("carta3-1.jpg")
   frenteImage1Dificil[3] = loadImage("carta4-1.jpg")
   frenteImage1Dificil[4] = loadImage("carta5-1.jpg")
   frenteImage1Dificil[5] = loadImage("carta6-1.jpg")
   frenteImage1Dificil[6] = loadImage("carta7-1.jpg")
   frenteImage1Dificil[7] = loadImage("carta8-1.jpg")  
}

function createImagesDeck(imagesES, imagesPT) {
  for (let i = 0; i < frenteImage.length; i++) {
    imagesDeck.push(imagesES[i])
    imagesDeck.push(imagesPT[i])
  }
}
  //medio
  function createImagesDeckMedio(imagesESMedio, imagesPTMedio) {
  for (let i = 0; i < frenteImageMedio.length; i++) {
    imagesDeckMedio.push(imagesESMedio[i])
    imagesDeckMedio.push(imagesPTMedio[i])
  }
  }
  //dificil
  function createImagesDeckDificil(imagesESDificil, imagesPTDificil) {
  for (let i = 0; i < frenteImageDificil.length; i++) {
    imagesDeckDificil.push(imagesESDificil[i])
    imagesDeckDificil.push(imagesPTDificil[i])
  } 
  }
  //imagesDeck.sort(function() {
  //  return 0.5 - random()
  //})


function drawScoringMessage() {
  let foundAllMatches = true

  for (let i = 0; i < cartas.length; i++) {
    foundAllMatches = foundAllMatches && cartas[i].isMatch
  }

  if (foundAllMatches) {
    fill(255, 255, 255)
    text("Você encontrou todos em " + numTent + " tentativas", 20, 360)
  }
}


//botao voltar
var xMinBotaoVoltar = 400
var larguraBotaoVoltar = 80
var xMaxBotaoVoltar = (xMinBotaoVoltar) + larguraBotaoVoltar
var alturaBotaoVoltar = 20

var yMinBotaoVoltar1 = 480
var yMaxBotaoVoltar1 = yMinBotaoVoltar1 + alturaBotaoVoltar

//botoes Menu
var xMinBotao = 150
var larguraBotao = 200
var xMaxBotao = xMinBotao + larguraBotao
var alturaBotao = 60


var yMinBotao1 = 200
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = 280
var yMaxBotao2 = yMinBotao2 + alturaBotao

var yMinBotao3 = 120
var yMaxBotao3 = yMinBotao3 + alturaBotao

//botoes dificuldade

var xMinBotaoDif = 150
var larguraBotaoDif = 200
var xMaxBotaoDif = xMinBotaoDif + larguraBotaoDif
var alturaBotaoDif = 60

var yMinBotaoDif1 = 120
var yMaxBotaoDif1 = yMinBotaoDif1 + alturaBotao

var yMinBotaoDif2 = 200
var yMaxBotaoDif2 = yMinBotaoDif2 + alturaBotao

var yMinBotaoDif3 = 280
var yMaxBotaoDif3 = yMinBotaoDif3 + alturaBotao

var tela = 0;

// funcionamento botao Voltar
function Voltar(texto, yMinVoltar, yMaxVoltar, opcao){
  if(mouseX > xMinBotaoVoltar && mouseX<xMaxBotaoVoltar && mouseY > yMinVoltar && mouseY < yMaxVoltar){
    fill(0);
    if(mouseIsPressed){
      tela = 0;
      EscolhaMenu = 0;
    }
  }
  else{
    noFill();
  }
  rect(xMinBotaoVoltar, yMinVoltar, larguraBotaoVoltar, alturaBotaoVoltar, 15);
  textSize(14);
  fill(color(255,255,255));
  text(texto, xMinBotaoVoltar+35 , yMinVoltar+15)
}

function mouseClicked(){
  if(tabuleiroAtivo){
  for (let i = 0; i < cartas.length; i++) {
    if (cartas[i].isUnderMouse(mouseX, mouseY)) {
      if (flippedCartas.length < 2 && !cartas[i].isFaceUp) {
        cartas[i].setIsFaceUp(true)
        flippedCartas.push(cartas[i])
        if (flippedCartas.length === 2) {
          numTent++          
          if (flippedCartas[0].value === flippedCartas[1].value) {
            flippedCartas[0].isMatch = true
            flippedCartas[1].isMatch = true
          }
          delayStartFC = frameCount
        }
      }
    }
  }
}
  //Medio
  if(tabuleiroAtivo){
  for (let i = 0; i < cartasMedio.length; i++) {
    if (cartasMedio[i].isUnderMouse(mouseX, mouseY)) {
      if (flippedCartasMedio.length < 2 && !cartasMedio[i].isFaceUp) {
        cartasMedio[i].setIsFaceUp(true)
        flippedCartasMedio.push(cartasMedio[i])
        if (flippedCartasMedio.length === 2) {
          numTent++          
          if (flippedCartasMedio[0].value === flippedCartasMedio[1].value) {
            flippedCartasMedio[0].isMatch = true
            flippedCartasMedio[1].isMatch = true
          }
          delayStartFC = frameCount
        }
      }
    }
  }
}
  //Dificil
  if(tabuleiroAtivo){
  for (let i = 0; i < cartasDificil.length; i++) {
    if (cartasDificil[i].isUnderMouse(mouseX, mouseY)) {
      if (flippedCartasDificil.length < 2 && !cartasDificil[i].isFaceUp) {
        cartasDificil[i].setIsFaceUp(true)
        flippedCartasDificil.push(cartasDificil[i])
        if (flippedCartasDificil.length === 2) {
          numTent++          
          if (flippedCartasDificil[0].value === flippedCartasDificil[1].value) {
            flippedCartasDificil[0].isMatch = true
            flippedCartasDificil[1].isMatch = true
          }
          delayStartFC = frameCount
        }
      }
    }
  }
}
  
  if (tela ==3){
    if(EscolhaDif==5){
      tela = 5;
      tabuleiroAtivo = true;
    }
    if(EscolhaDif==6){
      tela = 6;
      tabuleiroAtivo = true;
  }
    if(EscolhaDif==7){
      tela = 7;
      tabuleiroAtivo = true;
}
  }
  if (tela ==0){
    if(EscolhaMenu==1){
      tela = 1;
    }
    if(EscolhaMenu==2){
      tela = 2;
  }
    if(EscolhaMenu==3){
      tela = 3;
}
  }
  
}
//botao Menu
function menuBotao(texto, yMin, yMax, opcao){
  
  if(mouseX > xMinBotao && mouseX<xMaxBotao && mouseY > yMin && mouseY < yMax){
    fill(0);
    EscolhaMenu = opcao;
  }
  else{
    noFill();
  }
  rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15);
  textSize(26);
  fill(color(255,255,255));
  text(texto, xMinBotao + 100, yMin + 40)
  
}

//botaoDificuldade
function DifBotao(textoDif, yMinDif, yMaxDif, opcaoDif){
  
  if(mouseX > xMinBotaoDif && mouseX<xMaxBotaoDif && mouseY > yMinDif && mouseY < yMaxDif){
    fill(0);
    EscolhaDif = opcaoDif;
  }
  else{
    noFill();
  }
  rect(xMinBotaoDif, yMinDif, larguraBotaoDif, alturaBotaoDif, 15);
  textSize(26);
  fill(color(255,255,255));
  text(textoDif, xMinBotaoDif + 100, yMinDif + 40)
  
}


function telaCreditos(){
  background(imagemFundo);
  fill(255);
  textSize(40);
  fill(255);
  stroke(0,0,0)
  strokeWeight(2)
  fill(255);
  text("Creditos", 250, 80);
  textSize(20);
  text("Lucineide Silva de Lima", 300, 140);
  textSize(16);
  text("Função: Educadora", 300, 160);
  textSize(14);
  fill(255);
  text("Licenciatura em Pedagogia na UNINASSAU - Natal", 180, 180, 300);
  image(imagemEducadora, 50, 130, 110, 120);
  fill(255);
  textSize(20);
  text("João Lucas da Silva", 300, 300);
  textSize(16);
  text("Função: Programador", 300, 320);
  textSize(14);
  fill(255);
  text("Estudante do Bacharelado em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte", 180, 340, 300);
  image(imagemProgramador, 50, 280, 110, 120);
  
  Voltar("Volver",yMinBotaoVoltar1, yMaxBotaoVoltar1, 0);
}

function telaInstrucoes(){
  background(imagemFundo);
  textFont(NORMAL);
    textSize(32);
    fill(255);
    text("instruções", 250, 70)
    textSize(20);
    fill(255);
    stroke(0,0,0)
    strokeWeight(2)
    text("  O jogador deve memorizar os números de 1 a 8 e selecionar as combinações.",30, 120, 410);
  textSize(24);
  fill(0);
  //facil
  text("1 = 1", 80, 210)
  text("2 = 2", 80, 230)
  text("3 = 3", 80, 250)
  text("4 = 4", 80, 270)
  text("5 = 5", 80, 290)
  text("6 = 6", 80, 310)
  text("7 = 7", 80, 330)
  text("8 = 8", 80, 350)
  
  //medio
  text("1 = 1", 230, 210)
  text("2 = 2", 230, 230)
  text("3 = 3", 230, 250)
  text("4 = 4", 230, 270)
  text("5 = 5", 230, 290)
  text("6 = 6", 230, 310)
  text("7 = 7", 230, 330)
  text("8 = 8", 230, 350)
  
  //dificil
  text("1 = 1", 390, 210)
  text("2 = 2", 390, 230)
  text("3 = 3", 390, 250)
  text("4 = 4", 390, 270)
  text("5 = 5", 390, 290)
  text("6 = 6", 390, 310)
  text("7 = 7", 390, 330)
  text("8 = 8", 390, 350)
  
  Voltar("Volver",yMinBotaoVoltar1, yMaxBotaoVoltar1, 0);
}
function telaJogar(){
  if(tela==3){
    background(imagemFundo);
    textSize(36);
    fill(color(255,255,255));
    textFont(NORMAL);
    textStyle(BOLD);
    text("Dificultad", 250, 75);
    textAlign(CENTER);
    
    
    textFont(NORMAL);
    EscolhaDif = 0
    DifBotao("Fácil",yMinBotaoDif1, yMaxBotaoDif1, 5 );
    DifBotao("Medio",yMinBotaoDif2, yMaxBotaoDif2, 6);
    DifBotao("Difícil",yMinBotaoDif3, yMaxBotaoDif3, 7);
    
    
    Voltar("Volver",yMinBotaoVoltar1, yMaxBotaoVoltar1, 0);
} 
}
function facil(){


  
  background(imagemFundo);
  textFont(NORMAL);
  textSize(32);
  fill(255);
  fill(255);
  stroke(0,0,0)
  strokeWeight(2)
  text("Tempo:", 150,30);
  atualiza = atualiza + 1;
  tempoSegundo = parseInt(atualiza/30);
  text (tempoSegundo, 240,30);
  updateGameLogic()
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].render()
      if (tempoSegundo > 90){
      image (imagemGameOver, 0,0,500,450);
      text ('tempo excedido', 260,480);
           }
  }

   Voltar("Volver",yMinBotaoVoltar1, yMaxBotaoVoltar1, 0);
 
    }

function medio(){
  background(imagemFundo);
  textFont(NORMAL);
  textSize(32);
  fill(255);
  fill(255);
  stroke(0,0,0)
  strokeWeight(2)
  text("Tempo:", 150,30);
  //temporizador
  atualiza = atualiza + 1;
  tempoSegundo = parseInt(atualiza/30);
  text (tempoSegundo, 240,30);
  updateGameLogicMedio()
  for (let i = 0; i < cartasMedio.length; i++) {
    cartasMedio[i].render()
      //condições do temporizador
    if (tempoSegundo > 70){
      image (imagemGameOver, 0,0,500,450);
      text ('tempo excedido', 260,480);
  }

    }
  Voltar("Volver",yMinBotaoVoltar1, yMaxBotaoVoltar1, 0);
    }


function dificil(){

  background(imagemFundo);
  textFont(NORMAL);
  textSize(32);
  fill(255);
  fill(255);
  stroke(0,0,0)
  strokeWeight(2)
  text("Tempo:", 150,30);
  atualiza = atualiza + 1;
  tempoSegundo = parseInt(atualiza/30);
  text (tempoSegundo, 240,30);
  //temporizador
  updateGameLogicDificil()
  for (let i = 0; i < cartasDificil.length; i++) {
    cartasDificil[i].render()
    //condições do temporizador
    if (tempoSegundo > 45){
      image (imagemGameOver, 0,0,500,450);
      text ('tempo excedido', 260,480);
    }
  }

  
  Voltar("Volver",yMinBotaoVoltar1, yMaxBotaoVoltar1, 0);
}
  
function setup() {
  createCanvas(500, 500);
  versoImage = loadImage("fundoCarta.png")
  loadfrenteImage()
  loadfrenteImage1()
  createImagesDeck(frenteImage, frenteImage1) 
  createCartas()
  
  //medio
  loadfrenteImageMedio()
  loadfrenteImage1Medio()
  createImagesDeckMedio(frenteImageMedio, frenteImage1Medio) 
  createCartasMedio()
  
  //dificil
  loadfrenteImageDificil()
  loadfrenteImage1Dificil()
  createImagesDeckDificil(frenteImageDificil, frenteImage1Dificil) 
  createCartasDificil()
}

function draw() {
  
  if(tela==0){
    background(imagemFundo);
    textSize(36);
    fill(color(255,255,255));
    fill(255);
    stroke(0,0,0)
    strokeWeight(2)
    textFont(NORMAL);
    textStyle(BOLD);
    text("Jogo da Memória", 200, 75);
    textAlign(CENTER);
    
    
    textFont(NORMAL);
    EscolhaMenu = -1
    menuBotao("Instruções",yMinBotao1, yMaxBotao1, 1);
    menuBotao("Créditos",yMinBotao2, yMaxBotao2, 2);
    menuBotao("Jogar",yMinBotao3, yMaxBotao3, 3);
    
    
  }
  if(tela ==1){
    telaInstrucoes();
  }
  
  if(tela ==2){
    telaCreditos();
  }  
    if(tela ==3){
    telaJogar();
  
  }
  if(tela ==5){
    facil();
    
  }
  
  if(tela ==6){
    medio();
  }  
    if(tela ==7){
    dificil();
  
  } 
}