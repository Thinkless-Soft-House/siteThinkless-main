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

menuToggle.addEventListener('click', () => {
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

// Inicialize o Swiper
if (typeof Swiper !== 'undefined') {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
	});
}

  
const portfolioSwiper = new Swiper('.sPortifolioSwiper', {
	// Configurações do Swiper para o portfólio
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
	loop: true,
	spaceBetween: 10, // Espaçamento entre os slides (ajuste conforme necessário)
	speed: 500, // Velocidade de transição (em milissegundos)
	// Outras configurações que você deseja
  });