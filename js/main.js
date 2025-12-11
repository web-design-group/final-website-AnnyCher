import './toggle-faq.js'
import './check-select.js'
import './open-modal.js'
import './delete.js'
import './card-scroll.js'
import './count-up.js'

const swiper = new Swiper('.subscription-swiper', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.subscription-button-next',
		prevEl: '.subscription-button-prev',
	},
});
