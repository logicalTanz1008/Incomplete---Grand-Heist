const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Enter Your Name
var START = 4;
//Main Home Screen
var HOME = 3;
//When You Press attack Button
var ATTACK = 2;
//When You Press any Bank Name
var BANKATTACK = 1;
//After Attack is Over
var END = 0;
var gameState = START;

var playerName;
var introButton, introGreeting, introInput;
var attackButton;
var playerInfo;
var bgimg, bgimg2, bgimg3;
var moneyText;
var money = 0;
var Bank1AttackStrategyButton;
var backButton, backButtonimg;

var map1bank1Button, map1bank2Button, map1bank3Button, map1bank4Button, map1bank5Button;
var map1bank6Button, map1bank7Button, map1bank8Button, map1bank9Button, map1bank10Button;

var bank1attackintro, bank2attackintro, bank3attackintro, bank4attackintro, bank5attackintro;
var bank6attackintro, bank7attackintro, bank8attackintro, bank9attackintro, bank10attackintro;

var Map1, Map1img;
var WesternAllianceBankLayout, WesternAllianceBankLayoutimg;

function preload() {
  bgimg = loadImage("images/LayoutGH.png");
  bgimg2 = loadImage("Screen 1/image.jpg");
  bgimg3 = loadImage("Attack/attackButtonbg.jpg")

  Map1img = loadImage("images/Grand Heist-Map1.jpg");
  WesternAllianceBankLayoutimg = loadImage("images/Map1-Bank1-Layout.jpeg");
  backButtonimg = loadImage("images/backarrow.png");
}

function setup() {

  console.log(gameState);

  Map1 = createSprite(displayWidth / 2 + 200, displayHeight / 2 - 20);
  Map1.addImage("Map", Map1img);
  Map1.visible = false;

  backButton = createSprite(50, 50, 10, 10);
  backButton.addImage("backArrow", backButtonimg);
  backButton.scale = 0.05;
  backButton.visible = false;

  console.log(displayHeight);
  console.log(displayWidth);


  createCanvas(displayWidth, displayHeight);

  introInput = createInput();
  introInput.position(displayWidth / 2 - 80, displayHeight / 2 + 30);

  introButton = createButton('Next');
  introButton.position(displayWidth / 2 - 20, displayHeight / 2 + 75);
  introButton.mousePressed(start);

  introGreeting = createElement('h1', 'What do we call you?');
  introGreeting.position(displayWidth / 2 - 140, displayHeight / 2 - 50);

  textAlign(CENTER);
  textSize(50);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(bgimg);

  if (mousePressedOver(backButton)) {
    gameState = HOME;
  }

  drawSprites();

}



function start() {

  gameState = HOME;

  bgimg = bgimg2;
  var playerName = introInput.value();

  Map1.visible = false;

  if (playerName == "") {
    playerName = prompt("Enter a valid Name")
  }

  introGreeting.html(playerName);
  introGreeting.position(displayWidth / 2 - 600, displayHeight / 2 - 360);
  introInput.value('');
  introInput.hide();
  introButton.hide();

  attackButton = createButton('Attack');
  attackButton.position(displayWidth / 2 - 20, displayHeight / 2 + 150)
  attackButton.mousePressed(attack);

  moneyText = createElement('h2', money);
  moneyText.position(displayWidth / 2 + 490, displayHeight / 2 - 350);

}

function attack() {

  background(bgimg3);

  attackButton.hide();
  introGreeting.hide();

  backButton.visible = true;

  Map1.visible = true;

  map1bank1Button = createButton('Western Alliance Bank');
  map1bank1Button.position(displayWidth / 2 - 600, displayHeight / 2 - 160);
  map1bank1Button.mousePressed(Bank1Attack);

  map1bank2Button = createButton('Amegy Bank');
  map1bank2Button.position(displayWidth / 2 - 600, displayHeight / 2 - 120);
  map1bank2Button.mousePressed(Bank2Attack);

  map1bank3Button = createButton('BancorpSouth Bank');
  map1bank3Button.position(displayWidth / 2 - 600, displayHeight / 2 - 80);
  map1bank3Button.mousePressed(Bank3Attack);

  map1bank4Button = createButton('Raymond James Bank');
  map1bank4Button.position(displayWidth / 2 - 600, displayHeight / 2 - 40);
  map1bank4Button.mousePressed(Bank4Attack);

  map1bank5Button = createButton('Washington Federal');
  map1bank5Button.position(displayWidth / 2 - 600, displayHeight / 2);
  map1bank5Button.mousePressed(Bank5Attack);

  map1bank6Button = createButton('MB Financial Bank');
  map1bank6Button.position(displayWidth / 2 - 600, displayHeight / 2 + 40);
  map1bank6Button.mousePressed(Bank6Attack);

  map1bank7Button = createButton('Rabobank');
  map1bank7Button.position(displayWidth / 2 - 600, displayHeight / 2 + 80);
  map1bank7Button.mousePressed(Bank7Attack);

  map1bank8Button = createButton('FirstBank');
  map1bank8Button.position(displayWidth / 2 - 600, displayHeight / 2 + 120);
  map1bank8Button.mousePressed(Bank8Attack);

  map1bank9Button = createButton('Astoria Bank');
  map1bank9Button.position(displayWidth / 2 - 600, displayHeight / 2 + 160);
  map1bank9Button.mousePressed(Bank9Attack);

  map1bank10Button = createButton('Bank of Hawaii');
  map1bank10Button.position(displayWidth / 2 - 600, displayHeight / 2 + 200);
  map1bank10Button.mousePressed(Bank10Attack);

}

function Bank1Attack() {

  Map1.visible = false;
  moneyText.hide();

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  Bank1AttackStrategyButton = createButton('Attack Strategy');
  Bank1AttackStrategyButton.position(displayWidth / 2 + 200, displayHeight / 2 - 280);
  Bank1AttackStrategyButton.mousePressed(Bank1AttackStrategy);

  bank1attackintro = createElement('h2', 'Western Alliance Bank');
  bank1attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

}

function Bank2Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank2attackintro = createElement('h2', 'Amegy Bank');
  bank2attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);
}

function Bank3Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank3attackintro = createElement('h2', 'BancorpSouth Bank');
  bank3attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);
}

function Bank4Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank4attackintro = createElement('h2', 'Raymond James Bank');
  bank4attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);
}

function Bank5Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank5attackintro = createElement('h2', 'Washington Federal Bank');
  bank5attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

}

function Bank6Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank6attackintro = createElement('h2', 'MB Financial Bank');
  bank6attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

  backButton.visible = false;

}

function Bank7Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank7attackintro = createElement('h2', 'Rabo Bank');
  bank7attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

}

function Bank8Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank8attackintro = createElement('h2', 'First Bank');
  bank8attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

}

function Bank9Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank9attackintro = createElement('h2', 'Astoria Bank');
  bank9attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

}

function Bank10Attack() {

  Map1.visible = false;

  map1bank1Button.hide();
  map1bank2Button.hide();
  map1bank3Button.hide();
  map1bank4Button.hide();
  map1bank5Button.hide();
  map1bank6Button.hide();
  map1bank7Button.hide();
  map1bank8Button.hide();
  map1bank9Button.hide();
  map1bank10Button.hide();

  bank10attackintro = createElement('h2', 'Bank of Hawaii');
  bank10attackintro.position(displayWidth / 2 - 600, displayHeight / 2 - 300);

}

function Bank1AttackStrategy() {


}



