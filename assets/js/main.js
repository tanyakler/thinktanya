// Grab elements
const selectElement = selector => {
    const elem = document.querySelector(selector)
    if(elem) return elem;
    throw new Error(`Soemthing went wrong, make sure that ${selector} 
    exists or is typed orrectly`);
};

//Nav styles on scroll

// Open menu 
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);


// change concepts imaage on hover
// const conceptImageHovers = selectElement()
(function() {
    var images = {
   "1": "assets/images/concepts/gutsadvent/header.png",
   "2": "assets/images/concepts/hygthMV/hygtgHeader.JPG",
   "3": "assets/images/tiffanyHoliday.jpeg"
};
    var conceptbackground = document.getElementById('conceptbackground');
    var arr = document.getElementsByClassName('concept-list');
    for(var i=0; i<arr.length; i++) {
    	arr[i].onmouseover = function(e) {
            var a = e.target;
            var imgId = a.getAttribute('data-image-id');
            var imgSrc = images[imgId];
            var style = ['background-image: url(', imgSrc, ');'].join('');
            conceptbackground.setAttribute('style', style);
        }
    }
})();
// Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});