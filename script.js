var swiper = new Swiper('.mySwiper', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

// var swiperPortifolio = new Swiper('.sPortifolio', {
// 	slidesPerView: 1, // Configuração padrão
// 	spaceBetween: 30,
// 	autoplay: {
// 		delay: 2500,
// 		disableOnInteraction: false,
// 	},
// 	breakpoints: {
// 		// Quando a largura da janela for >= 768px
// 		768: {
// 			slidesPerView: 2,
// 		},
// 		// Quando a largura da janela for >= 1024px
// 		1024: {
// 			slidesPerView: 4,
// 		}
// 	}
// });

var swiperPortifolio = new Swiper('.sPortifolioSwiper', {
	slidesPerView: 1, // Exibe 1 slide por vez no mobile
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true, // Loop ativado para continuar girando no desktop e mobile
	breakpoints: {
		// Quando a largura da janela for >= 768px
		768: {
			slidesPerView: 2, // Exibe 2 slides por vez em telas maiores que 768px
			loop: true, // Garantir que o loop continue no desktop
		},
		// Quando a largura da janela for >= 1024px
		1024: {
			slidesPerView: 4, // Exibe 4 slides por vez em telas maiores que 1024px
			loop: true, // Loop ativado no desktop
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
	console.log("Menu toggled");
	nav.classList.toggle('active');
});

// Função para alternar as caixas de acordeão
function toggleAccordion(id) {
	const box = document.querySelector(`.clickable-box[data-clickable="${id}"]`);
	const content = box.querySelector('.clickable-content');
	const icon = box.querySelector('i');

	// Alterna a classe 'active' para animação
	box.classList.toggle('active');

	if (box.classList.contains('active')) {
		icon.classList.remove('fa-circle-chevron-down');
		icon.classList.add('fa-circle-chevron-up');
	} else {
		icon.classList.remove('fa-circle-chevron-up');
		icon.classList.add('fa-circle-chevron-down');
	}

	console.log("Accordion toggled");
}



