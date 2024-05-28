function setup() { // isso é realizado uma única vez no carregamento e configura o sistema que estou criando
  createCanvas(400, 400); // tamanho da tela
  background("blue"); // define a cor do fundo

}

function draw() { //função responsável por desenhar 
  
  stroke ("black") // da a cor para a borda da figura menor
  fill("purple") // define a cor da forma geométrica menor
  
  if (mouseIsPressed) {
  rect(mouseX, mouseY, 20, 35) // os dois primeiros números são o eixo x e y, os outros dois são a altura e largura
}
  
} 