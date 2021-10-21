var starImg,bgImg;
var star, starBody;
var hada;
var hadaphoto;
var sound;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	hadaphoto= loadAnimation("images/fairy.png","fairyImage1.png","faryImage2.png");
	bgImg = loadImage("images/starNight.png");
	sound=loadSound("JoyMusic.mp3");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada

    
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	hada=createSprite(100,600);
	hada.addAnimation("hadis",hadaphoto);
	sound.play();

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	hadaBody = Bodies.circle(100 , 600 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	World.add(world, hadaBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if (keyCode === LEFTH_ARROW) {
	Matter.Body.setStatic(hadaBody,false); 
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	
}
