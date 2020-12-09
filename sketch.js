var dog, doghappy, dogsad, database, foods, foodstock

//Create variables here

function preload()
{

  doghappy = loadImage("images/dogImg1.png")
  dogsad = loadImage("images/dogImg.png")
}

function setup() {
  database = firebase.database()
	createCanvas(800, 700);
  dog = createSprite(200,100)
  dog.addImage(dogsad)
  foodstock = database.ref('food')
  dog.scale = 0.15
  foodstock.on("value",readstock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){

writeStock(foods)
dog.addImage(doghappy)

}
  drawSprites();
  fill(255,255,254)
  text("food remaining"+foods,170,200)
  //add styles here

}

function readstock(data){
  foods = data.val()
}

function writeStock(x){

if(x<=0){

x = 0 

}
else{

x = x-1

}

database.ref('/').update({

food:x

})

}


