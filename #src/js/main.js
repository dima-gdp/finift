$(document).ready(function () {
	objectFitImages();

	// Menu
	$('.nav-header-top__link').click(function (ev) {
		ev.preventDefault()
		$(ev.target).next('.submenu').addClass('submenu--active')
	})

	// let productGal = $('.product-gal')
	// let productInfo = $('.product-info')
	// let heightGal = $('.product-gal').innerHeight()
	// let heightInfo = $('.product-info').innerHeight()

	// $(document).on('scroll', function () {
	// 	if ($(document).scrollTop() > 60 && $(document).scrollTop() < heightGal - heightInfo) {
	// 		productInfo.css('position', 'fixed')
	// 	}
	// 	else {
	// 		productInfo.css('position', 'absolute')
	// 		productInfo.css('top', `${$(document).scrollTop()}px`)
	// 	}

	// 	console.log($('.product-gal').innerHeight())
	// })





	// Табы
	// function tabs(buttonsList, wrapper, tabBlock) {
	// 	$(buttonsList).on('click', 'li:not(.active)', function () {
	// 		$(this).addClass('active').siblings().removeClass('active')
	// 			.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
	// 	})
	// }

	function toggleTabs(top, bottom, topActive) {
		$(top).on('click', function (ev) {
			let text = $(this).next(bottom);

			if ($(this).hasClass(topActive)) {
				text.stop().slideUp();
				$(this).removeClass(topActive)
			}
			else {
				$(this).addClass(topActive)
				text.stop().slideDown();
			}
		})
	}

	toggleTabs('.item-delivery__top', '.item-delivery__bot', 'item-delivery__top--active')


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

	const slider_product = new Swiper('.similar__slider', {
		slidesPerView: 4,
		spaceBetween: 60,
		loop: true,
		mousewheel: true,
	});

	const slider_catalog = new Swiper('.catalog__slider', {
		slidesPerView: 4,
		spaceBetween: 60,
		loop: true,
		mousewheel: true,
	});


	// Fancy-box

	$('[data-src="#modal-buy"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

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
	if (document.getElementById('map')) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [59.21453736676941, 39.89706232681222],
				zoom: 16
			});

			var myPlacemark = new ymaps.Placemark([59.21453736676941, 39.89706232681222], {
				hintContent: 'Козленская улица, 43Ак2',
				balloonContent: 'Козленская улица, 43Ак2'
			},
				{
					preset: 'islands#redIcon',
					iconLayout: 'default#image',
					iconImageSize: [20, 28],
					// iconImageOffset: [-19, -52]
				});

			myMap.geoObjects.add(myPlacemark);
		});
	}



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