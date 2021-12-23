
let tree;
let pumpkin;
let skeleton; 
let leaves; 
let grass; 
let ground; 
//img
let pumpkintexture; 
let treetexture; 
let leavestexture; 

function preload(){
  tree = loadModel('treetoptrunkex1.obj');
  leaves = loadModel('leavesyep.obj')
  pumpkin = loadModel('pumpkin.obj');
  grass = loadModel('uploads_files_2616453_grass.obj');
  ground = loadModel('untitled.obj');
  tree1 = loadModel('tree (1).obj');
  pumpkintexture = loadImage('Pumpkin_vcols.jpg');
  treetexture = loadImage('bark.jpg'); 
  leavestexture = loadImage('JA02_Leaf03Back_dif_au.png');
  skeleton = loadImage('giphy (8).gif');

}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  
}

function draw() {
  background(250, 166, 62);
//let dirX = (mouseX / width - 0.5) * 2;
  //let dirY = (mouseY / height - 0.5) * 2;
  
   var color1 = color(255, 204, 102);
  var color2 = color(255, 0, 0);
  
  //directionalLight(250, 250, 250, -1);
  noStroke()

  //camera
//	var x = map(mouseX, 0, width, -200, 200);
//	var y = map(mouseY, 0, height, -200, 200);
//	camera(0, 0, 200, x, y, 0, 0, 1, 0);
		
  
  //ground
  push();
  translate(0, 90, 200);
  rotateY( frameCount * 0.01);
  scale(50); 
  fill(95, 125, 64);
  model(ground)
  pop();
  
  //grass
  push();
  translate(0, 95, 200);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(40); 
  fill(69, 99, 63);
  model(grass)
  pop();
  
  push();
  translate(190, 95, 200);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(40); 
  fill(69, 99, 63);
  model(grass)
  pop();
  
  push();
  translate(-190, 95, 200);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(40); 
  fill(69, 99, 63);
  model(grass)
  pop();
  
  push();
  translate(200, 95, 400);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(40); 
  fill(69, 99, 63);
  model(grass)
  pop();
  
  push();
  translate(-300, 95, 600);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(40); 
  fill(69, 99, 63);
  model(grass)
  pop();
  
  //pumpkin
  push();
  translate(-20, 78, 200);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(100); 
  //fill(69, 99, 63);
  texture(pumpkintexture);
  model(pumpkin)
  pop();
  
  push();
  translate(60, 76, 650);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(60); 
  //fill(69, 99, 63);
  texture(pumpkintexture);
  model(pumpkin)
  pop();
  
  push();
  translate(-60, 76, 500);
  rotateY(frameCount * 0.01);
  rotateX(-2.95);
  scale(130); 
  //fill(69, 99, 63);
  texture(pumpkintexture);
  model(pumpkin)
  pop();
  
  //tree
  
  push();
  translate(0, 95, 500);
  rotateY(frameCount * 0.01);
  rotateX(-3.20);
  scale(25000); 
  //fill(69, 99, 63);
  //texture(pumpkintexture);
  //texture(tree);
  fill(92, 61, 18);
  model(tree)
  texture(leavestexture)
  model(leaves)
  pop();
  
  //tree
  
  push();
  translate(200, 95, 100);
  rotateY(frameCount * 0.01);
  rotateX(-3.20);
  scale(25000); 
  //fill(69, 99, 63);
  //texture(pumpkintexture);
  //texture(tree);
  fill(92, 61, 18);
  model(tree)
  texture(leavestexture)
  model(leaves)
  pop();

  //tree
  
  push();
  translate(-300,95, 2);
  rotateY(frameCount * 0.01);
  rotateX(-3.20);
  scale(25000); 
  //fill(69, 99, 63);
  //texture(pumpkintexture);
  //texture(tree);
  fill(100, 61, 18);
  model(tree)
  texture(leavestexture)
  model(leaves)
  pop();
  
  //skeleton
  
  translate(-240, -7, 385);
  texture(skeleton);
  push();
  scale(3);
//  rotateY(frameCount * 0.01);
  plane(70);
  pop();

  
  
}