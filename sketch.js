var Bullet;
var CrashWall;
var Speed, Weight, Thickness;
var Damage;
var Reliability;

function setup() {
  createCanvas(1600, 600);

  Bullet = createSprite(50, 200, 47, 10);

  //Initializing random variables 
  Speed = random(55, 90);
  Weight = random(400, 1500);
  Thickness = random(22, 83);


  Bullet.shapeColor = color(255);
}

function draw() {
   background(0);

   CrashWall = createSprite(1200, 200, Thickness, height/2);
   CrashWall.shapeColor = color(80, 80, 80);

  //Making the bullet move
  Bullet.velocityX = Speed;

  //Checking collision of Bullet with CrashWall 
    if (CrashWall.x-Bullet.x < (Bullet.width+CrashWall.width)/2) {
    Bullet.velocityX=0;

  //Initializing Damage for material testing
    Damage = ((0.5 * Weight * Speed * Speed)/(Thickness * Thickness * Thickness));

  //Changing Colours of Bullets
    if (Damage > 10) {
      CrashWall.shapeColor = color(255, 0, 0); //Making the CrashWall Red
      fill(255)
      textSize(19);
      text(`This weapon is Recommended for official use and has passed the test of weapon reliabilty`, 430, 550);
    }

    if (Damage < 10) {
      CrashWall.shapeColor = color(0, 255, 0); //Making the CrashWall Green
      fill(255)
      textSize(19);
      text(`This weapon is not Recommended for official use and has been rejected for the test of weapon reliabilty`, 430, 550);
    }

    //Making Texts Appear for the simulation
    fill(255);
    textSize(25);
    text(`Speed:${Speed}`, 430, 450);
    text(`Weight:${Weight}`, 430, 475);
    text(`Thickness:${Thickness}`, 430, 500);
    text(`Damage:${floor(Damage)}`, 430, 525);
  }
  drawSprites();
}