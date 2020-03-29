(function(){
	const menuBtn = document.querySelector('.menu-btn');
	const mobileMenu = document.querySelector('.mobile-menu');

	const toggleMenu = () => {
		mobileMenu.classList.toggle('active');
	}

	menuBtn.addEventListener('click', toggleMenu)
})();