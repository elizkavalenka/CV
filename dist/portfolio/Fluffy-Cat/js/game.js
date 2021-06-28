const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const cat = new Image();
const bg = new Image(); // Создание объекта
const fg = new Image(); // Создание объекта
const pipeUp = new Image(); // Создание объекта
const pipeBottom = new Image(); // Создание объекта

cat.src = "img/cat.png"; 
bg.src = "img/bg.png"; 
fg.src = "img/fg.png"; 
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

//Sound effects
const fly = new Audio();
const scoreAudio = new Audio();

fly.src = "audio/fly.mp3";
scoreAudio.src = "audio/score.mp3";

//MoveUp on keyboard click
['keydown', 'click'].forEach((e) => document.addEventListener(e, moveUp));
function moveUp() {
	yPos -= 27;
	fly.play();
}

//Creating pipe's
const pipe = [];
pipe[0] = {
	x: canvas.width,
	y: 0
} 

let score = 0;

//Cat position
let xPos = 10;
let yPos = 150;
const gravity = 1.1;
const gap = 100;

function draw() {
	context.drawImage(bg, 0, 0);
		
	pipe.forEach(element => {
		context.drawImage(pipeUp, element.x, element.y);
		context.drawImage(pipeBottom, element.x, element.y + pipeUp.height + gap);
		
		element.x--;
		if (element.x == 125) {
			pipe.push({
				x: canvas.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
			
		}
		if (xPos + cat.width >= element.x 
			&& xPos <= element.x + pipeUp.width
			&& (yPos <= element.y + pipeUp.height
			|| yPos + cat.height >= element.y + pipeUp.height + gap)
			|| yPos + cat.height >= canvas.height - fg.height) {
				location.reload();
		}
		if (element.x == 5) {
			score++;
			scoreAudio.play();
		}
		
	})
	
	context.drawImage(fg, 0, canvas.height - fg.height);
	context.drawImage(cat, xPos, yPos);
	
	context.fillStyle = "#000";
	context.font = "24px Verdana";
	context.fillText(`Счет: ${score}`, 10, canvas.height - 20);
	
	yPos += gravity;
	requestAnimationFrame(draw);
}
pipeBottom.onload = draw;