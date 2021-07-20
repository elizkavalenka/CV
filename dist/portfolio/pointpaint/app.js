const board = document.querySelector('#board'),
	  height = document.documentElement.clientHeight,
	  width = document.documentElement.clientWidth,
	  SQUARES_NUMBER = (height * width) / 100;
	 
	 
console.log(height);
console.log(SQUARES_NUMBER);

const colors = ['#f6bd60','#f7ede2','#f5cac3','#84a59d','#f28482','#8e9aaf','#cbc0d3','#efd3d7','#feeafa','#dee2ff'];


 for (let i = 0; i <  SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));
	
	board.append(square);
}
 
function setColor(elem) {
	let color = getColor();
	elem.style.backgroundColor = color;
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
	elem.style.backgroundColor = '#bcb8b1';
	elem.style.boxShadow = `0 0 2px #bcb8b1`;
}
 
function getColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index]
}