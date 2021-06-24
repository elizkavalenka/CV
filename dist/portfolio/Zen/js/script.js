const btn = document.querySelector('button'),
	  partners = document.querySelector('.cashback__partners');


btn.addEventListener('click', toggleItem);

function toggleItem() {
	partners.classList.toggle('hide');
}