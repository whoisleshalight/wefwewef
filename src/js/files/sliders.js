/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});


		
	// }
	if (document.querySelector('.swiper-reviews')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper-reviews', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			pagination: {
				el: '.swiper-reviews-pagination',
				clickable: true,
			},
			// Пагінація
			/*
			
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-reviews-prev',
				nextEl: '.swiper-reviews-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 40,
					autoHeight: true,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				900: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			
			},
			/*
			// Брейкпоінти
	
			*/
			// Події
			on: {

			}
		});


		
	}

	if (document.querySelector('.portfolio-swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		let isMobileLoppp = false;
		if(window.innerWidth<= 767.98){
			isMobileLoppp= true;
		}
		new Swiper('.portfolio-swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 40,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: isMobileLoppp,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			pagination: {
				el: '.portfolio-swiper-pagination',
				clickable: true,
			},
			// Пагінація
			/*
			
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.portfolio-swiper-button-prev',
				nextEl: '.portfolio-swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 40,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
			/*
			// Брейкпоінти
	
			*/
			// Події
			on: {

			}
		});


		
	}

	//========================================================================================================================================================
	if (document.querySelector('.expertise-swiper-one')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		let onesw = new Swiper('.expertise-swiper-one', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,
			simulateTouch: false,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			pagination: {
				el: '.expertise-swiper-one-pagination',
				clickable: true,
			},
			// Пагінація
			/*
			
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.expertise-swiper-one-button-prev',
				nextEl: '.expertise-swiper-one-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 80,
					autoHeight: true,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				1070: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
			},
			/*
			// Брейкпоінти
	
			*/
			// Події
			on: {

			}
		});
		let boxSliderOne = document.querySelector('.item-expertise-one');

		onesw.on('slideChange', function () {
			if(window.innerWidth>=767.98){
				if (onesw.activeIndex !== 0) {
					if(boxSliderOne){
						if(!boxSliderOne.classList.contains('_swipe-slide')){
							boxSliderOne.classList.add('_swipe-slide');
						}	
					}
				}else{
					if(boxSliderOne){
						if(boxSliderOne.classList.contains('_swipe-slide')){
							boxSliderOne.classList.remove('_swipe-slide');
						}	
					}
				}
			}else{
				if (onesw.activeIndex !== 0) {
					if(boxSliderOne){
						if(!boxSliderOne.classList.contains('_swipe-slide-mobile')){
							boxSliderOne.classList.add('_swipe-slide-mobile');
						}	
					}
				}else{
					if(boxSliderOne){
						if(boxSliderOne.classList.contains('_swipe-slide-mobile')){
							boxSliderOne.classList.remove('_swipe-slide-mobile');
						}	
					}
				}
			}
		
		 });
		
	}
	//========================================================================================================================================================
	if (document.querySelector('.expertise-swiper-two')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		let twosw = new Swiper('.expertise-swiper-two', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,
			simulateTouch: false,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			pagination: {
				el: '.expertise-swiper-two-pagination',
				clickable: true,
			},
			// Пагінація
			/*
			
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.expertise-swiper-two-button-prev',
				nextEl: '.expertise-swiper-two-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 80,
					autoHeight: true,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				1070: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
			},
			/*
			// Брейкпоінти
	
			*/
			// Події
			on: {

			}
		});
		let boxSliderOne = document.querySelector('.item-expertise-two');

		twosw.on('slideChange', function () {
			if(window.innerWidth>=767.98){
				if (twosw.activeIndex !== 0) {
					if(boxSliderOne){
						if(!boxSliderOne.classList.contains('_swipe-slide')){
							boxSliderOne.classList.add('_swipe-slide');
						}	
					}
				}else{
					if(boxSliderOne){
						if(boxSliderOne.classList.contains('_swipe-slide')){
							boxSliderOne.classList.remove('_swipe-slide');
						}	
					}
				}
			}else{
				if (twosw.activeIndex !== 0) {
					if(boxSliderOne){
						if(!boxSliderOne.classList.contains('_swipe-slide-mobile')){
							boxSliderOne.classList.add('_swipe-slide-mobile');
						}	
					}
				}else{
					if(boxSliderOne){
						if(boxSliderOne.classList.contains('_swipe-slide-mobile')){
							boxSliderOne.classList.remove('_swipe-slide-mobile');
						}	
					}
				}
			}
		
		 });
		
	}
	//========================================================================================================================================================
	if (document.querySelector('.expertise-swiper-three')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		let threesw = new Swiper('.expertise-swiper-three', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,
			simulateTouch: false,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			pagination: {
				el: '.expertise-swiper-three-pagination',
				clickable: true,
			},
			// Пагінація
			/*
			
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.expertise-swiper-three-button-prev',
				nextEl: '.expertise-swiper-three-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 80,
					autoHeight: true,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				1070: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
			},
			/*
			// Брейкпоінти
	
			*/
			// Події
			on: {

			}
		});
		let boxSliderOne = document.querySelector('.item-expertise-three');

		threesw.on('slideChange', function () {
			if(window.innerWidth>=767.98){
				if (threesw.activeIndex !== 0) {
					if(boxSliderOne){
						if(!boxSliderOne.classList.contains('_swipe-slide')){
							boxSliderOne.classList.add('_swipe-slide');
						}	
					}
				}else{
					if(boxSliderOne){
						if(boxSliderOne.classList.contains('_swipe-slide')){
							boxSliderOne.classList.remove('_swipe-slide');
						}	
					}
				}
			}else{
				if (threesw.activeIndex !== 0) {
					if(boxSliderOne){
						if(!boxSliderOne.classList.contains('_swipe-slide-mobile')){
							boxSliderOne.classList.add('_swipe-slide-mobile');
						}	
					}
				}else{
					if(boxSliderOne){
						if(boxSliderOne.classList.contains('_swipe-slide-mobile')){
							boxSliderOne.classList.remove('_swipe-slide-mobile');
						}	
					}
				}
			}
	
		 });
		
	}
	//========================================================================================================================================================
	

}


window.addEventListener("load", function (e) {
	initSliders();
});