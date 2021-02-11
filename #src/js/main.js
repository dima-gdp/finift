$(document).ready(function () {
	objectFitImages();
	let slider_catalog;
	let slider_product_main;
	const isMousewheel = $(window).innerWidth() <= 1320 ? false : true;

	// Menu
	$('.nav-header-top__link').click(function (ev) {
		ev.preventDefault()
		// $('.submenu-main').removeClass('submenu-main--active')
		// $(ev.target).next('.submenu-main').addClass('submenu-main--active')
	})

	const burger = $('.mob-header__btn')
	const mobMenu = $('.mob-menu');
	const mobMenuMoving = $('.mob-menu__moving');
	const mobMenuContainer = $('.mob-menu__container');

	$('.top-nav__link').click(function (ev) {
		ev.preventDefault()
		$(ev.target).next('.submenu').addClass('submenu--active')
		mobMenuMoving.addClass('transform')
		mobMenuContainer.scrollTop(0)
	})

	$('.submenu__back').click(function (ev) {
		ev.preventDefault()
		$(ev.target).closest('.submenu__header').closest('.submenu').removeClass('submenu--active')
		mobMenuMoving.removeClass('transform')
		mobMenuContainer.scrollTop(0)

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
		effect: 'fade',
		speed: 500,
		fadeEffect: {
			crossFade: true
		},
		loop: false,
		navigation: {
			nextEl: '.hero__btn-n',
			prevEl: '.hero__btn-p',
		},
		breakpoints: {
			993: {
				pagination: {
					el: '.control-hero__pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '">' + '<span>' + (index + 1) + '</span></div>';
					}
				},
			},
		}
	});

	const slider_product = new Swiper('.similar__slider', {
		slidesPerView: 4,
		spaceBetween: 60,
		mousewheel: isMousewheel,
		pagination: {
			el: '.similar__pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
				// mousewheel: false,
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			993: {
				slidesPerView: 4,
				spaceBetween: 35,
			},
			1201: {
				spaceBetween: 60,
				slidesPerView: 4,
			},
			1321: {
				slidesPerView: 3,
				spaceBetween: 60,
				// mousewheel: true,
			},
			1450: {
				slidesPerView: 4,
				spaceBetween: 35,
			},
			1681: {
				spaceBetween: 60,
				slidesPerView: 4,
			},
		},

	});

	function mobileSlider() {
		if ($(window).innerWidth() <= 992) {
			slider_product_main = new Swiper('.product-gal--2', {
				slidesPerView: 3,
				spaceBetween: 40,
				pagination: {
					el: '.product-gal__pagination',
					type: 'bullets',
					clickable: true,
				},
				// mousewheel: true,
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					376: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					420: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					769: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}
			});
		}

		else {
			if ($('.product-gal').hasClass('swiper-container-initialized')) {
				slider_catalog.destroy();
			}
		}
	}


	function desktopSlider() {
		if ($(window).innerWidth() >= 769) {
			slider_catalog = new Swiper('.catalog__slider', {
				slidesPerView: 4,
				spaceBetween: 60,
				loop: true,
				mousewheel: isMousewheel,
				breakpoints: {
					769: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					993: {
						slidesPerView: 4,
						spaceBetween: 35,
					},
					1201: {
						spaceBetween: 60,
						slidesPerView: 4,
					},
					1321: {
						slidesPerView: 3,
						spaceBetween: 60,
					},
					1450: {
						slidesPerView: 4,
						spaceBetween: 35,
					},
					1681: {
						spaceBetween: 60,
						slidesPerView: 4,
					},
				}
			});
		}

		else {
			if ($('.catalog__slider').hasClass('swiper-container-initialized')) {
				slider_catalog.destroy();
			}
		}
	}

	mobileSlider()
	desktopSlider()


	// $(window).on('resize', function () {
	// 	desktopSlider()
	// })




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
	burger.click(function () {
		mobMenu.addClass('active')
	})

	$('.mob-menu__close').click(function () {
		mobMenu.removeClass('active')
	})

	console.log(mobMenu)

	$(document).click(function (ev) {
		if (!ev.target.closest('.mob-header__btn') && !ev.target.closest('.mob-menu__container')) {
			mobMenu.removeClass('active')
		}
		if (!ev.target.closest('.header')) {
			$('.submenu-main').removeClass('submenu-main--active')
		}
	})

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