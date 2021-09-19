var car1, car2, car3;
var gameState=0;
var START2=1;
var GARAGE=1.5;
var PLAY=2;
var END=3
var START=0;
var carSpeed=0;
var distance=0;
var visibility=0;
var timer=0;
function preload()
{
  track=loadImage("track.jpg");
  track2_i=loadImage("track2.png");
  red_i=loadImage("r_car.png");
  blue_i=loadImage("b_car.png");
  green_i=loadImage("g_car.png");
  car1_i=loadImage("red_car.png");
  car2_i=loadImage("green_car.png");
  car3_i=loadImage("blue_car.png");
  right_i=loadImage("right.png");
  left_i=loadImage("left.png");
  accelerator_i=loadImage("accelerator.png");
  brake_i=loadImage("brake.png");
  speed_i=loadImage("speedometer.png");
  boost_i=loadImage("boost.png");
  bg=loadImage("bg.jpg");
  bg2=loadImage("bg2.jpg")
  logo=loadImage("logo.png");
  box=loadImage("box.png");
  board=loadImage("board.png");
  board_red=loadImage("board_red.png");
  board_yellow=loadImage("board_yellow.png");
  board_green=loadImage("board_green.png");
  ribbons=loadImage("ribbons.png");
  results=loadImage("result.png");
  result1=loadImage("result1.png");
  result2=loadImage("result2.png");
  result3=loadImage("result3.png");
  first=loadImage("1st.png");
  second=loadImage("2nd.png");
  third=loadImage("3rd.png");
}
function setup()
{
  createCanvas(displayWidth,displayHeight);

  track2 = createSprite(displayWidth+700,displayHeight/2+50,displayWidth,displayHeight);
  track2.addImage(track2_i);
  track2.scale = 1.71;

  car1 = createSprite(displayWidth+400,displayHeight-190,20,50);
  car1.addImage(blue_i);
  car1.scale = 0.4;

  car3_ = createSprite(displayWidth+200,displayHeight+200,200,200);
  car3_.addImage(car3_i);
  car3_.scale = 0.73;

  car2_ = createSprite(displayWidth+200,displayHeight+200,200,200);
  car2_.addImage(car2_i);
  car2_.scale = 0.73;

  car1_ = createSprite(displayWidth+200,displayHeight+200,200,200);
  car1_.addImage(car1_i);
  car1_.scale = 0.73;

  red = createSprite(displayWidth+200,displayHeight+200,200,200);
  red.addImage(box);
  red.scale = 0.5;

  green = createSprite(displayWidth+200,displayHeight+200,200,200);
  green.addImage(box);
  green.scale = 0.5;

  blue = createSprite(displayWidth+200,displayHeight+200,200,200);
  blue.addImage(box);
  blue.scale = 0.5;

  car2 = createSprite(displayWidth+400,displayHeight-190,20,50);
  car2.addImage(red_i);
  car2.scale = 0.4;

  car3 = createSprite(displayWidth+400,displayHeight-190,20,50);
  car3.addImage(green_i);
  car3.scale = 0.4;

  right = createSprite(displayWidth+200,displayHeight+200,200,200);
  right.addImage(right_i);
  right.scale = 0.4;

  right_ = createSprite(displayWidth+200,displayHeight+200,200,200);
  right_.addImage(right_i);
  right_.scale = 0.4;
  right_.debug=false;
  right_.setCollider("rectangle",30,0,230,400)

  left = createSprite(displayWidth+200,displayHeight+200,200,200);
  left.addImage(left_i);
  left.scale = 0.4;

  left_ = createSprite(displayWidth+200,displayHeight+200,200,200);
  left_.addImage(left_i);
  left_.scale = 0.4;
  left_.debug=false;
  left_.setCollider("rectangle",30,0,230,400)

  accelerator = createSprite(displayWidth+400,displayHeight-130,20,50);
  accelerator.addImage(accelerator_i);
  accelerator.scale = 0.6;

  brake = createSprite(displayWidth+400,displayHeight-60,20,50);
  brake.addImage(brake_i);
  brake.scale = 0.6;

  speed = createSprite(displayWidth+400,displayHeight-90,20,50);
  speed.addImage(speed_i);
  speed.scale = 0.4;

  boost = createSprite(displayWidth+400,displayHeight-60,20,50);
  boost.addImage(boost_i);
  boost.scale = 0.6;
 
}
function draw()
{
  if(gameState===0)
  {
    background(bg);
    visibility=visibility+5;
    tint(255,visibility);
    image(logo,displayWidth/2,displayHeight/2,500,500)
  }
  if(mouseWentDown("leftButton") && gameState===0)
  {
    gameState=1.5;
  }
  if(mouseWentDown("rightButton") && gameState===1.5)
  {
    gameState=1;
  }
  if(gameState===1.5)
  {
    
    background(bg2);
    push();
    strokeWeight(10)
    stroke("#1F76BB")
    fill("white");
    textFont("magneto");
    textSize(70);
    text("Choose your car",displayWidth/4+20,displayHeight-displayHeight+180)
    pop();
    drawSprites();
    red.x=displayWidth/4-100;
    red.y=displayHeight-60;
    fill("red");
    textFont("magneto");
    textSize(70);
    text("Red",red.x-80,red.y)
    fill("green");
    textFont("magneto");
    textSize(70);
    text("Green",green.x-110,green.y)
    green.x=displayWidth/2+5;
    green.y=displayHeight-60;
    blue.x=displayWidth-220;
    blue.y=displayHeight-60;
    fill("blue");
    textFont("magneto");
    textSize(70);
    text("Blue",blue.x-90,blue.y)
    car1_.x=displayWidth/2+5;
    car1_.y=displayHeight/2+80
    car2_.x=displayWidth/2+5;
    car2_.y=displayHeight/2+80
    car3_.x=displayWidth/2+5;
    car3_.y=displayHeight/2+80
    right.x=displayWidth-250
    right.y=displayHeight/2+80
    left.x=displayWidth-displayWidth+250;
    left.y=displayHeight/2+80
  }
  if(mousePressedOver(right) && gameState===1.5 && car1_.x===displayWidth/2+5)
  {
    car1_.velocityX=1000;
    right.velocityX=1000;
    right_.x=displayWidth-170;
    right_.y=displayHeight/2+80;
    left.velocityX=-100
    left_.x=displayWidth+170;
    left_.y=displayHeight/2+80;
    console.log(car2_.x)
  }
 
  if(mousePressedOver(right_) && gameState===1.5 && car2_.x===displayWidth/2+5)
  {
    car2_.velocityX=1000;
    right_.x=displayWidth+1000;
  }
  if(mousePressedOver(left) && gameState===1.5 || mousePressedOver(left_) && gameState===1.5)
  {
    car3_.addImage(car2_i);
    console.log(car2.velocityX)
    car2_.velocityX=-1000;
    left.velocityX=-1000;   
    right_.x=displayWidth-250
    right_.y=displayHeight/2+80
    left_.x=displayWidth-displayWidth+250;
    left_.y=displayHeight/2+80
  }
  if(mousePressedOver(left_) && gameState===1.5 && car2_.velocityX===-1000)
  {
    car3_.addImage(car1_i);
    car1_.velocityX=-1000; 
  }
  else if(mousePressedOver(right_) && gameState===1.5)
  {
    car3_.addImage(car3_i);
    car1_.velocityX=-1000; 
  }
  if(mousePressedOver(red))
  {
    gameState=1;
  }
  if(mousePressedOver(green))
  {
    car2.addImage(green_i);
    car3.addImage(red_i);
    gameState=1;
  }
  if(mousePressedOver(blue))
  {
    car2.addImage(blue_i);
    car1.addImage(red_i);
    gameState=1;
  }
  if(gameState===1)
  {

    background(track);
    
    car1.x=displayWidth/4-100;
    car2.x=displayWidth/2+5;
    car3.x=displayWidth-220;
    accelerator.x=displayWidth/4-200;
    brake.x=displayWidth/4-80;
    boost.x=displayWidth/4+40
    speed.x=displayWidth-190
    track2.x=displayWidth/2+3.5;
    car1_.x=displayWidth+400;
    car1_.y=displayHeight+400
    car2_.x=displayWidth+400;
    car2_.y=displayHeight+400
    car3_.x=displayWidth+400;
    car3_.y=displayHeight+400
    red.x=displayWidth+400;
    red.y=displayHeight+400;
    green.x=displayWidth+400;
    green.y=displayHeight+400;
    blue.x=displayWidth+400;
    blue.y=displayHeight+400;
    right.x=displayWidth+400
    right.y=displayHeight+400
    left.x=displayWidth+400;
    left.y=displayHeight+400
    right_.x=displayWidth+400
    right_.y=displayHeight+400
    left_.x=displayWidth+400;
    left_.y=displayHeight+400
    console.log(track2.velocityY);
    drawSprites();
    fill("white");
    textFont("Algerian");
    textSize(20)
    text("SPEED:"+carSpeed+" Km/Hr", speed.x-70,speed.y)
    textSize(30)
    text("DISTANCE:"+distance+"/1000", speed.x-120,speed.y-displayHeight/2);
    //image(go,displayWidth/4+20,displayHeight-displayHeight+180,200,200)
    timer=timer+1;
    image(ribbons,displayWidth-displayWidth,displayHeight-displayHeight-50,displayWidth,150)
    image(board,displayWidth/3,displayHeight-displayHeight,454,215)
}
console.log(timer)
if(timer>20 && timer<40)
{
  image(board_red,displayWidth/3,displayHeight-displayHeight,454,215)
  strokeWeight(10);
  stroke("black");
  fill("#ED1B24");
  textFont("Niagara Engraved");
  textSize(165)
  text("3",displayWidth/3+200,displayHeight-displayHeight+170)
}
if(timer>40 && timer<60)
{
  image(board_yellow,displayWidth/3,displayHeight-displayHeight,454,215)
  strokeWeight(8);
  stroke("black");
  fill("#E96442");
  textFont("Niagara Engraved");
  textSize(165)
  text("2",displayWidth/3+200,displayHeight-displayHeight+170)
}
if(timer>60 && timer<80)
{image(board_yellow,displayWidth/3,displayHeight-displayHeight,454,215)
   strokeWeight(10);
  stroke("black");
  fill("yellow");
  textFont("Niagara Engraved");
  textSize(165)
  text("1",displayWidth/3+200,displayHeight-displayHeight+170)
}
if(timer>80)
{
  gameState=2;
}
if(gameState===2)
{
  drawSprites();
  image(ribbons,displayWidth-displayWidth,displayHeight-displayHeight,displayWidth,150)
  image(board_green,displayWidth/3,displayHeight-displayHeight+40,454,215)
  strokeWeight(8);
  push();
  stroke("black");
  fill("#16B800");
  textFont("Niagara Engraved");
  textSize(165)
  text("GO!!!",displayWidth/3+150,displayHeight-displayHeight+220)
  pop();
  car1.velocityY=round(random(-49,-52));
    car3.velocityY=round(random(-50,-53));
  fill("white");
  textFont("Algerian");
  textSize(20)
  text("SPEED:"+carSpeed+" Km/Hr", speed.x-70,speed.y)
  textSize(30)
  text("DISTANCE:"+distance+"/1000", speed.x-120,speed.y-displayHeight/2)
  //car1.x=camera.position.x;
  camera.position.x=car2.x;
  camera.position.y=car2.y-100; 
  //car3.x=camera.position.x-270;

  if(track2.y>car2.y+100)
  {
     track2.y=car2.y-200
  }
  if(mousePressedOver(accelerator))
  {
    car2.velocityY=-50;
    accelerator.velocityY=-50;
    brake.velocityY=-50;
    boost.velocityY=-50;
    speed.velocityY=-50;
    carSpeed=carSpeed+1;
    track2.velocityY=car2.velocityY*(-1);
    if(carSpeed>50)
    {
      carSpeed=50
    }
    if(frameCount%3===0 && car2.velocityY<-40)
  {
    distance=distance+1;
  }
  }
  if(mousePressedOver(boost) && distance<500)
  {
    car2.velocityY=-54;
    accelerator.velocityY=-54;
    brake.velocityY=-54;
    boost.velocityY=-54;
    speed.velocityY=-54;
    track2.velocityY=car2.velocityY*(-1);
    carSpeed=carSpeed+1;
    if(carSpeed>54)
    {
      carSpeed=54
    }
   
  }
   if(frameCount%3===0 && track2.velocityY)
  {
    distance=distance+1;
  }
  
  if(mousePressedOver(brake))
  {
    car2.velocityY=car2.velocityY+1;
    accelerator.velocityY=accelerator.velocityY+1;
    brake.velocityY=brake.velocityY+1;
    boost.velocityY=boost.velocityY+1;
    speed.velocityY=speed.velocityY+1;
    carSpeed=carSpeed-1;
    track2.velocityY=car2.velocityY*(-1);

  }
  
  if(car1.y<0)
{
  //car1.y=displayHeight-190;
}
if(car2.y<0)
{
  //car2.y=displayHeight-190;
}
if(car3.y<0)
{
  //car3.y=displayHeight-190;
}
if(distance>1000)
{
  distance=1000;
}
}
if(distance>500)
{
  car1.velocityY=round(random(-53,-56))
  car3.velocityY=round(random(-53,-56))
  if(mousePressedOver(boost) && distance>500)
  {
    car2.velocityY=-55;
    accelerator.velocityY=-55;
    brake.velocityY=-55;
    boost.velocityY=-55;
    speed.velocityY=-55;
    track2.velocityY=car2.velocityY*(-1);
    carSpeed=carSpeed+1;
    if(carSpeed>55)
    {
      carSpeed=55
    }
  }
}
if(distance===1000)
{
   car1.velocityY=0;
   car2.velocityY=0;
   car3.velocityY=0;
   track2.y=car2.y-150
   track2.velocityY=0;
   accelerator.velocityY=0;
   brake.velocityY=0;
   boost.velocityY=-0;
   speed.velocityY=-0;
   console.log(results)
   gameState=3;
}

if(gameState===3)
{
  drawSprites();
 // image(results,car2.x-635,car2.y-400,1300,700);
  if(distance===1000 && car2.y<car1.y && car2.y<car3.y )
{
  image(result1,car2.x-635,car2.y-460,1300,700);
  image(first,car2.x-150,car2.y-300,300,370);
}
if(distance===1000 && car2.y>car3.y && car2.y<car1.y )
{
  image(result2,car2.x-635,car2.y-460,1300,700);
  image(second,car2.x-150,car2.y-300,300,370);
}
if(distance===1000 && car2.y>car1.y && car2.y>car3.y )
{
  image(result3,car2.x-635,car2.y-460,1300,700);
  image(third,car2.x-150,car2.y-300,300,370);
}
}
if(distance>1000)
{
  distance=1000;
}
}
