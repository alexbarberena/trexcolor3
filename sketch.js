var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft,upLinkRight; 
var upLinkLeftImg,upLinkRightImg;
var downLinkLeftImg,downLinkRightImg;
var downLinkLeft,downLinkRight;


function preload(){
  
  /***********************************************************
    Aqui esta el error, ya que la computadora no sabe como cargar       la imagen, ya que no la encuentra directamente:
    
    1. La computadora necesita saber en cual de todas las carpetas
        esta la imagen que queremos, en este caso se encuentra
        en la carpeta "other"
        
    2. Una vez dentro de la carpeta, elegimos el nombre de la
        imagen que vamos a cargar con el formato que tiene
        nombreImagen.png
    
    *************************************************************/
  //asi debe de quedar
   earthImg=loadImage("other/earth2.png"); 
   
   satellitteImg=loadImage("other/satellite.png");
   
   groundStationLeftImg=loadImage("other/gstation1.png");
   groundStationRightImg=loadImage("other/gstation2.png");
   
   upLinkLeftImg=loadImage("leftd/dleft1.png");
   upLinkRightImg=loadImage("rightd/dright1.png");

   downLinkLeftImg=loadImage("leftu/upleft1.png");
   downLinkRightImg=loadImage("rightu/upright1.png");
}

function setup(){
  createCanvas(700,500);
  
  earth=createSprite(350,820,50,50);
  earth.addImage(earthImg);
  earth.scale=0.6;

  satellitte=createSprite(350,70,50,50);
  satellitte.addImage(satellitteImg);
  satellitte.scale=0.09;

  groundStationLeft=createSprite(70,400,50,50);
  groundStationLeft.addImage(groundStationLeftImg)
  groundStationLeft.scale=0.05;

  groundStationRight=createSprite(600,400,50,50);
  groundStationRight.addImage(groundStationRightImg);
  groundStationRight.scale=0.05;

  upLinkLeft=createSprite(200,250,50,50); 
  upLinkLeft.addImage("upLinkLeft",upLinkLeftImg);
  upLinkLeft.scale=0.08;

  upLinkRight=createSprite(455,250,50,50); 
  upLinkRight.addImage("upLinkRight",upLinkRightImg);
  upLinkRight.scale=0.08;

  
  downLinkLeft=createSprite(200,250,50,50); 
  downLinkLeft.addImage("downLinkLeft",downLinkLeftImg);
  downLinkLeft.scale=0.08;

  downLinkRight=createSprite(455,250,50,50); 
  downLinkRight.addImage("upLinkRight",downLinkRightImg);
  downLinkRight.scale=0.08;
}

function draw(){
  background("black")
  
  console.log("hola Pamela");
  
  upLinkLeft.visible=false;
  upLinkRight.visible=false;
  
  downLinkLeft.visible=false;
  downLinkRight.visible=false;
  
  textSize(15);
  fill("white");
  
  text("Presiona las teclas L & R",10,15);
  text("- para solicitar datos del satelite",5,30);
  text("Presiona las teclas de flecha Izquierda y Derecha",5,50);
  text("- para recibir datos del satelite",5,65);
 
  if(keyDown("L")){
    upLinkLeft.visible=true;
    text("Solicitando datos del Satelite",10,300);
  }
  
   if(keyDown("R")){
    upLinkRight.visible=true;
    text("Solicitando datos del Satelite",400,300);
   }
  
    if(keyDown("LEFT_ARROW")){
      downLinkLeft.visible=true;
      text("Transfiriendo datos a la estacion base Izquierda",10,300);
      text("Mensaje recibido:Hola Pamela",100,320);
    }
  
   if(keyDown("RIGHT_ARROW")){
     downLinkRight.visible=true;
     text("Transfiriendo datos a la estacion base Derecha",350,300);
     text("Mensaje recibido:Hola Pamela",300,320);
   
   }
  
  drawSprites();
}