$(document).ready(function () {
	objectFitImages();

	$('.nav-header-top__link').click(function (ev) {
		ev.preventDefault()
		$(ev.target).next('.submenu').addClass('submenu--active')
	})

	// Табы
	// function tabs(buttonsList, wrapper, tabBlock) {
	// 	$(buttonsList).on('click', 'li:not(.active)', function () {
	// 		$(this).addClass('active').siblings().removeClass('active')
	// 			.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
	// 	})
	// }

	// function toggleTabs(top, bottom, topActive) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(topActive)) {
	// 			text.stop().slideUp();
	// 			$(this).removeClass(topActive)
	// 		}
	// 		else {
	// 			$(this).addClass(topActive)
	// 			text.stop().slideDown();
	// 		}
	// 	})
	// }


	// Swiper
	const slider_pag = new Swiper('.hero__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		pagination: {
			el: '.control-hero__pagination',
			type: 'bullets',
		},
		// loopedSlides: 1,
		// slideToClickedSlide: true,
		// breakpoints: {
		// 	320: {
		// 		spaceBetween: 15,
		// 	},
		// 	374: {
		// 		spaceBetween: 25,
		// 	},
		// 	577: {
		// 		spaceBetween: 35,
		// 	},
		// 	625: {
		// 		spaceBetween: 40,
		// 	},
		// 	769: {
		// 		spaceBetween: 15,
		// 	},
		// 	993: {
		// 		spaceBetween: 30,
		// 	},
		// 	1440: {
		// 		spaceBetween: 45,
		// 	},
		// }
	});


	// Fancy-box

	// $('[data-fancybox="to-modal"]').fancybox({
	// 	src: '#modal',
	// 	touch: 'false',
	// 	smallBtn: false,
	// 	buttons: '',
	// });

	// $('[data-fancybox="to-privacy"]').fancybox({
	// 	src: '#modal',
	// 	touch: 'false',
	// 	smallBtn: false,
	// 	buttons: '',
	// });

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });




	// Menu-burger
	// burger.click(function () {
	// 	mobMenu.addClass('active')
	// })

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	// $(document).click(function (ev) {
	// 	if (!ev.target.closest('.header__burger') && !ev.target.closest('h1')) {
	// 		mobMenu.removeClass('active')
	// 	}
	// })

	// Яндекс карта
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map(getMap, {
	// 		center: [52.05693880953456, 118.68705543322154],
	// 		zoom: 4
	// 	});

	// 	var myPlacemark = new ymaps.Placemark([55.54055193739615, 108.71146949572154], {
	// 		hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
	// 		balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
	// 	},
	// 		{
	// 			preset: 'islands#redIcon',
	// 			iconLayout: 'default#image',
	// 			iconImageSize: [20, 28],
	// 			iconImageOffset: [-19, -52]
	// 		});

	// 	myMap.geoObjects.add(myPlacemark);
	// });


	// Alertify
	// alertify.set('notifier', 'position', 'bottom-right');
	// alertify.set('notifier', 'delay', 10);

	// document.addEventListener('wpcf7mailsent', function (event) {
	// 	alertify.success(event.detail.apiResponse.message)
	// }, false);

	// document.addEventListener('wpcf7invalid', function (event) {
	// 	alertify.warning(event.detail.apiResponse.message);
	// }, false);

	// document.addEventListener('wpcf7mailfailed', function (event) {
	// 	alertify.error(event.detail.apiResponse.message);
	// }, false);

	// $(document).on('click', '.wpcf7-submit', function (e) {
	// 	if ($('.ajax-loader').hasClass('is-active')) {
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// });





});