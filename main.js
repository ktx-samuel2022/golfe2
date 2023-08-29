
// Crie uma variável canvas
var canvas = new fabric.Canvas("myCanvas");

//Defina as posições iniciais da bola e do buraco.
bolaY=0;
bolaX=0;
buracoY=400;
buracoX=800;
largura = 5;
altura = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		buraco = Img;
		buraco.scaleToWidth(50);
		buraco.scaleToHeight(50);
		buraco.set({
			top:buracoY,
			left:buracoX
		});
		canvas.add(buraco);
	});
	novaImagem();
}

function novaImagem(){
	fabric.Image.fromURL("ball.png", function(Img) {
		bola = Img;
		bola.scaleToWidth(50);
		bola.scaleToHeight(50);
		bola.set({
			top:bolaY,
			left:bolaX
		});
		canvas.add(bola);
	});
}

window.addEventListener("keydown", aperteiTecla);

function aperteiTecla(e){
	tecla = e.keyCode;
	console.log(tecla);

	//escreva aqui esse código para verificar se a bola está no buraco
	if(bolaX == buracoX && bolaY == buracoY){
		//adicione os códigos para remover a bola e mostrar a mensagem
		canvas.remove(bola);
		document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!"
		document.getElementById("myCanvas").style.borderColor = "red"

	}

	else{
		//adicione para mover a bola quando o jogador apertar para cima
		if(tecla == '38' && bolaY >= 0){
		cima();
		console.log("cima");
		}
		//adicione para mover a bola quando o jogador apertar para baixo		
		if(tecla == '39' && bolaX <= 1100){
			direita();
			console.log("direita");
			}
		//adicione para mover a bola quando o jogador apertar para esquerda
		if(tecla == '37' && bolaX >= 0){
			esquerda();
			console.log("esquerda");
			}
		//adicione para mover a bola quando o jogador apertar para direita		
		if(tecla == '40' && bolaY <= 500){
			baixo();
			console.log("baixo");
			}
	}
}	
//adicione aqui as funções cima, esquerda, direita e baixo
function cima(){
	bolaY -= altura
	canvas.remove(bola)
	novaImagem()
}
function baixo(){
	bolaY += altura
	canvas.remove(bola)
	novaImagem()
}function esquerda(){
	bolaX -= largura
	canvas.remove(bola)
	novaImagem()
}function direita(){
	bolaX += largura
	canvas.remove(bola)
	novaImagem()
}
