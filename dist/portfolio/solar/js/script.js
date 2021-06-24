function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
    // SLIDER 

	const slider = document.querySelector(container),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    width = window.getComputedStyle(slidesWrapper).width; 

    slider.style.position = 'relative';
    slidesWrapper.style.overflow = 'hidden';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => slide.style.width = width);

    let slideIndex = 1,
		offset = 0;

    function changeSlide() {
		slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
    }	
    
    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
    
    changeSlide();
    }); 

    prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
        offset -= deleteNotDigits(width);
    }
    
    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
    
    changeSlide();
    }); 
}

slider({
	container: '.info-slider',
	wrapper: '.info-slider__wrap', 
	field: '.info-slider__inner',
	slide: '.info-slider__item', 
	prevArrow: '.info-slider__prev',
	nextArrow: '.info-slider__next'
});

slider({
	container: '.clients__slider',
	wrapper: '.clients-slider__wrap', 
	field: '.clients-slider__inner',
	slide: '.clients-slider__item', 
	prevArrow: '.clients-slider__prev',
	nextArrow: '.clients-slider__next'
});


function tabs(tabsSelector, tabsContentSelector, tabsParrentSelector, activeClass) {
	const tabs = document.querySelectorAll(tabsSelector),
	tabsContent = document.querySelectorAll(tabsContentSelector),
	tabsParrent = document.querySelector(tabsParrentSelector);

	function  hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
	});
	
	tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function  showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParrent.addEventListener('click', (event) => {
		event.preventDefault();
		const target = event.target;
	
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

tabs('.info-tabs__item', '.info-tabs__content', '.info-tabs', 'info-tabs__item--active');