var head,leg1,leg2,body,neck,shoe,shoe2,hand;



function setup() {
  createCanvas(600, 400);
  
  head =  createSprite(305,110,30,20);
  head.shapeColor = "brown";
  
 hand = createSprite(270,141,50,8);
  hand.shapeColor = "brown";
  body = createSprite(305,155,50,50);
  body.shapeColor = "blue";
  leg1 = createSprite(295,195,8,40);
  leg1.shapeColor = "red";
 
  
  leg2 = createSprite(320,195,8,40);
   leg2.shapeColor = "red";
  neck = createSprite(305,120,20,20);
  shoe = createSprite (290,215,16,6);
  shoe2 = createSprite (310,215,16,6);
  shoe.shapeColor = "black";
  shoe2.shapeColor = "black";
}

function draw() {
  background(225);
 
   head.y = World.mouseY;
  
 //body.x =World.mouseX;
  
   hand.x = World.mouseX;
  
  hand.collide(body);
  
  //neck.x =World.mouseX;
  textSize(20)
  fill("red")
  text("arrange it properly",100,100);

  text("Arrange this man " , 200,50)
 shoe.collide(leg1);
  
  leg1.collide(body);
   leg2.collide(body);
  
  head.collide(neck);
  
  shoe2.collide(leg2);
  
  drawSprites();
}