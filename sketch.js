var canvas;

var options;
var shape1, shape2;
var n12, n3, n6, n9;
var backB;

var sqClock, ciClock, ask, ask2;
var gameState = "ask2";

function setup() {
  canvas = createCanvas(500,500);

  options = createElement('h1');

  shape1 = createButton('Square');
  shape2 = createButton('Circle');

  backB = createButton('Back');

  n1 = createElement('h2');
  n2 = createElement('h2');
  n3 = createElement('h1');
  n4 = createElement('h2');
  n5 = createElement('h2');
  n6 = createElement('h1');
  n7 = createElement('h2');
  n8 = createElement('h2');
  n9 = createElement('h1');
  n10 = createElement('h2');
  n11 = createElement('h2');
  n12 = createElement('h1');

  angleMode(DEGREES); 
}

function draw() {
  background(255, 228, 225); 
  
  
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  translate(250, 250);
  strokeWeight(7);
  rectMode(CENTER);

  options.html("Choose the shape of the clock");
  options.position(395, 140);
 
  shape1.position(560, 300);
  shape2.position(564, 360);
  backB.position(353, 112);
  backB.hide();

  n12.html("12");
  n12.position(580, 200);
  n12.hide();

  n3.html("3");
  n3.position(700, 315);
  n3.hide();

  n6.html("6");
  n6.position(584, 436);
  n6.hide();

  n9.html("9");
  n9.position(470, 315);
  n9.hide();

  if(gameState === "ask"){
    background(255, 228, 225); 
   
    options.show();
    shape1.show();
    shape2.show();
    backB.hide();
    n12.hide();
    n3.hide();
    n6.hide();
    n9.hide();
  }
   if(gameState === "sqClock"){
    background(0);

   backB.show();

   n12.show();
   n3.show();
   n6.show();
   n9.show();

    

    stroke(255, 62, 127);
    fill("Pink");
    rect(0, 0, 300, 300);

    push();
    rotate(hrAngle);
    stroke(20, 255, 192);
    line(0, 0, 0, -50);
    pop();

    push();
    rotate(mnAngle);
    stroke(223, 128, 255);
    line(0, 0, 0, -65);
    pop();

    push(); 
    rotate(scAngle);
    stroke(255, 128, 170);
    line(0, 0, 0, -100);
    pop();
  
  }
 else if(gameState === "ciClock"){
  background(0);

  backB.show();
  
  push();
  rotate(hrAngle);
  stroke(0, 255, 202);
  line(0, 0, 0, -50);
  pop();

  push();
  noFill();
  stroke(0, 255, 202); 
  rotate(-90);
  arc(0, 0, 340, 340, 0, hrAngle);
  pop();
 
  push();
  rotate(mnAngle);
  stroke(223, 128, 255);
  line(0, 0, 0, -65);
  pop();

  push();
  noFill();
  stroke(223, 128, 255);
  rotate(-90);
  arc(0, 0, 320, 320, 0, mnAngle);
  pop();
  
  push(); 
  rotate(scAngle);
  stroke(255, 128, 170);
  line(0, 0, 0, -100);
  pop();

 push();
 noFill();
 stroke(255, 128, 170);
 rotate(-90);
 arc(0, 0, 300, 300, 0, scAngle);
 pop();
 }

  button1Pressed();
  button2Pressed();
  button3Pressed();

  drawSprites();
}

function button1Pressed(){
    shape1.mousePressed(()=>{
       options.hide();
       shape1.hide();
       shape2.hide();
     
       gameState = "sqClock";

    })


}

function button2Pressed(){
  shape2.mousePressed(()=>{
     options.hide();
     shape1.hide();
     shape2.hide();
     gameState = "ciClock";

  })


}

function button3Pressed(){
  backB.mousePressed(()=>{
     gameState = "ask";

  })


}