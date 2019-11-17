'use strict';

window.addEventListener("load", function() {
	console.log('Loading');
	let menu = document.getElementById('navbar-items');
	let btn = document.getElementById("hamburger-btn");

	btn.onclick = function() { 
		menu.classList.toggle('is-active'); 
	};
});
