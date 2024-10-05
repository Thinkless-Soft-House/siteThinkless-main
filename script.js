var swiper = new Swiper('.mySwiper', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

var swiperPortifolio = new Swiper('.sPortifolio', {
	slidesPerView: 1, // Configuração padrão
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		// Quando a largura da janela for >= 768px
		768: {
			slidesPerView: 2,  
		},
		// Quando a largura da janela for >= 1024px
		1024: {
			slidesPerView: 4, 
		}
	}
});

function revealTextReformed(event) {
    const box = event.currentTarget;
    const allBoxes = document.querySelectorAll('.clickable-box');
    allBoxes.forEach(b => {
        if (b !== box) {
            b.classList.remove('active');
        }
    });
    box.classList.toggle('active');
}

var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
	nav.classList.toggle('active');
});
