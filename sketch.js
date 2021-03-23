var dog;
var wall;
var hunger = 0;
function preload(){
  
  dogImg = loadImage("dog.png");

}

function setup() {
  createCanvas(600, 200);
  
  
  dog = createSprite(120,100,20,50);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  
  
}

function draw(){
  background("green");
  fill("White");
  textSize(20);
  text("Dog Hunger Is " + hunger, 300, 100);
  text("Press Space To Feed",300, 120)
  text("Dog Can Eat At 500",300, 140)
  if (hunger < 1000){
    hunger=hunger+1;
  }
  if (keyWentDown("SPACE") && hunger > 500 && hunger<1000){
    hunger = hunger - 10;
  }
  if (hunger === 1000){

       background("grey")
       fill("White");
       textSize(20);
       text("Doggy Died", 300,100);
    
  }
  
  
  drawSprites();
}

