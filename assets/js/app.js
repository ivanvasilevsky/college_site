let ticket = document.querySelector('.ticket__img');
let ticketBlock = document.querySelector('.ticket__block');

ticket.onclick = function() {
	ticketBlock.classList.toggle('active');
	this.classList.toggle('active');
};


let burger = document.querySelector('.header__burger__img');
let burgerMenu = document.querySelector('.header__burger__menu');

burger.onclick = function() {
	burgerMenu.classList.toggle('active');
	this.classList.toggle('active');
};



let width = 400;


const mediaQuery = window.matchMedia('(max-width: 600px)')
if (mediaQuery.matches) {
	width = 380;
};

const mediaQueryWto = window.matchMedia('(max-width: 400px)')
if (mediaQueryWto.matches) {
	width = 350;
};

const mediaQueryThree = window.matchMedia('(max-width: 330px)')
if (mediaQueryThree.matches) {
	width = 300;
};

let offset = -width;

let slideInner = document.querySelector('.slider__inner');
let slideItem = document.querySelectorAll('.slide__item');
slideItem.forEach(function(item) {
   item.style.width = width + 'px';
})

slideInner.style.width = width + 'px';

document.addEventListener("DOMContentLoaded", function(){
	sliderLine.style.left = offset + 'px';
});


const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slide__next').addEventListener('click', function(){
	offset = offset - width;
	if (offset == (-width * 3)) {
		offset = -0;
	}
	sliderLine.style.left = offset + 'px';
});

document.querySelector('.slide__back').addEventListener('click', function(){
	offset = offset + width;
	if (offset == width) {
		offset = (-width * 2);
	}
	sliderLine.style.left = offset + 'px';
});



let twist = document.querySelectorAll('.twist');
let twistChat = document.querySelector('.twist__chat');

document.body.addEventListener("click", () => {
	twist.forEach(function(item) {
   	item.classList.add('active');
	})
	twistChat.classList.add('hidden');
})