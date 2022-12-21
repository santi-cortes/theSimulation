function preload() {
  textura_tierra = loadImage("https://i.ibb.co/PD4LyP5/planeta.jpg");
  textura_luna = loadImage("https://i.ibb.co/WPvVybx/luna.jpg");
  textura_fondo_estrellas = loadImage("https://i.ibb.co/NNTFKmL/nocheHD.jpg");
}

function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background("black");

  noStroke(); // No dibujar mallas en las esferas

  texture(textura_fondo_estrellas);
  sphere(800);

  for (let i = 0; i < 3; i++) {
    directionalLight(255, 255, 255 - i * 25, -1, 1, -1);
  }

  orbitControl();
  rotateZ(-0.3);

  push();
  rotateY(frameCount * 0.005);
  texture(textura_tierra);
  sphere(100);
  pop();

  push();
  rotateY((-frameCount * 0.05) / 10);
  translate(0, 0, 170);
  rotateY(-frameCount * 0.001);
  texture(textura_luna);
  sphere(25);
  pop();
}
