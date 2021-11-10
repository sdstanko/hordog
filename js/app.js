
const hitsSlider = new Swiper('.hits__body', {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1,
  navigation: {
    nextEl: '.hits__next',
    prevEl: '.hits__prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    }
  },
});

const goodiesSlider = new Swiper('.goodies__body', {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  navigation: {
    nextEl: '.goodies__next',
    prevEl: '.goodies__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    }
  },
});

const toysSlider = new Swiper('.toys__body', {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  navigation: {
    nextEl: '.toys__next',
    prevEl: '.toys__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    }
  },
});

const discountSlider = new Swiper('.discount__body', {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1,
  navigation: {
    nextEl: '.discount__next',
    prevEl: '.discount__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    }
  },
});

const newsSlider = new Swiper('.news__body', {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1,
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    }
  },
});

const reviewsSlider = new Swiper('.reviews__body', {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
    
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },

  },
});

const promoSlider = new Swiper('.promo__inner', {
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    800: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  },
});

const promoSecondSlider = new Swiper('.promo__second', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 2,
});
let menuItem = document.querySelector('.menu__item');
let menuInner = menuItem.querySelector('.menu__inner');
let menuCategory = menuItem.querySelector('.menu__category');


menuInner.addEventListener("click", function () {
	menuInner.classList.toggle('active');
	menuCategory.classList.toggle('active');
});


let menuSublist = document.querySelectorAll('.menu__sublist');

menuCategory.addEventListener("click", function (event) {
	if (event.target.closest('.menu__sublist')) {

		if (event.target.classList.contains('menu__select')) {
			event.target.classList.toggle('active');
			event.target.nextElementSibling.classList.toggle('active');
			event.target.closest('.menu__sublist').classList.toggle('active');
		}
	}
});




let menuBtn = document.querySelector('.header__btn');
let menuClose = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');

menuBtn.addEventListener("click", function() {
	menu.classList.add('active');
	body.classList.add('lock');
});

menuClose.addEventListener("click", function() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
		body.classList.remove('lock');
	}
});