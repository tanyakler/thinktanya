// Grab elements
const selectElement = selector => {
    const elem = document.querySelector(selector)
    if(elem) return elem;
    throw new Error(`Something went wrong, make sure that ${selector} 
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


// change concepts image on hover
// const conceptImageHovers = selectElement()
(function() {
    var images = {
    "1": "assets/images/tiffanyHoliday.jpg",
    "2": "assets/images/concepts/hygthMV/hygtgHeader.JPG",
    "3": "assets/images/concepts/gutsadvent/header.png",
    "4": "assets/images/concepts/sclevain/levainHeader.png",
    "5": "assets/images/concepts/gossamer/gossamerHeader.png",
    "6": "assets/images/concepts/honeyplum/honeyplumHeader.png",
    "7": "assets/images/concepts/guizio/mbguizioHeader.png"

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


// honeyplum concept
// click on image to change it

//desktop
    var honeyplumDesktop = document.getElementById('honeyplumDesktop');
    var honeyplumDesktopLabel = document.getElementById('honeyplumDesktopLabel');
    if (honeyplumDesktop) {
    honeyplumDesktop.addEventListener("click", function() {
        if (honeyplumDesktop.src.endsWith("olddesktop.png")) {
            honeyplumDesktop.src = "./assets/images/concepts/honeyplum/desktop1.png";
            honeyplumDesktopLabel.textContent = "HOMEPAGE REDESIGN 1";
        } else if (honeyplumDesktop.src.endsWith("desktop1.png")) {
            honeyplumDesktop.src = "./assets/images/concepts/honeyplum/desktoppopup.png";
            honeyplumDesktopLabel.textContent = "HOMEPAGE REDESIGN POP UP";
        } else if (honeyplumDesktop.src.endsWith("desktoppopup.png")) {
            honeyplumDesktop.src = "./assets/images/concepts/honeyplum/desktop2.png";
            honeyplumDesktopLabel.textContent = "HOMEPAGE REDESIGN 2";
        } else if (honeyplumDesktop.src.endsWith("desktop2.png")) {
            honeyplumDesktop.src = "./assets/images/concepts/honeyplum/desktop3.png";
            honeyplumDesktopLabel.textContent = "HOMEPAGE REDESIGN 3";
        }else {
            honeyplumDesktop.src = "./assets/images/concepts/honeyplum/olddesktop.png";
            honeyplumDesktopLabel.textContent = "ORIGINAL";

        }
        
      })};

//mobile
    var honeyplumMobile = document.getElementById('honeyplumMobile');
    var honeyplumMobile1 = document.getElementById('honeyplumMobile1');
    var honeyplumMobile2 = document.getElementById('honeyplumMobile2');
    var honeyplumMobile3 = document.getElementById('honeyplumMobile3');
    var honeyplumMobileLabel = document.getElementById('honeyplumMobileLabel');
    if (honeyplumMobile) {
    honeyplumMobile.addEventListener("click", function() {
        if (honeyplumMobile1.src.endsWith("mobileOLD.png")) {
            honeyplumMobile1.src = "./assets/images/concepts/honeyplum/mobile1.png";
            honeyplumMobile2.src = "./assets/images/concepts/honeyplum/mobile2.png";
            honeyplumMobile3.src = "./assets/images/concepts/honeyplum/mobile3.png";
            honeyplumMobileLabel.textContent = "HOMEPAGE REDESIGNS";
        } else if (honeyplumMobile1.src.endsWith("mobile1.png")) {
            honeyplumMobile1.src = "./assets/images/concepts/honeyplum/mobilecollections.png";
            honeyplumMobile2.src = "./assets/images/concepts/honeyplum/mobilepopup.png";
            honeyplumMobile3.src = "./assets/images/concepts/honeyplum/mobilenew.png";
            honeyplumMobileLabel.textContent = "COLLECTIONS, POP UP, WHAT'S NEW REDESIGNS";
        } else {
            honeyplumMobile1.src = "./assets/images/concepts/honeyplum/mobileOLD.png";
            honeyplumMobile2.src = "./assets/images/concepts/honeyplum/mobileOLD2.png";
            honeyplumMobile3.src = "./assets/images/concepts/honeyplum/mobileOLD3.png";
            honeyplumMobileLabel.textContent = "ORIGINAL";

        }
      })};




// madison beer x guizio concept
//desktop
    var mbguizioDesktop = document.getElementById('mbguizioDesktop');
    var mbguizioDesktopLabel = document.getElementById('mbguizioDesktopLabel');
    if (mbguizioDesktop){
    mbguizioDesktop.addEventListener("click", function() {
        if (mbguizioDesktop.src.endsWith("homepage.png")) {
            mbguizioDesktop.src = "./assets/images/concepts/guizio/mbpage.png";
            mbguizioDesktopLabel.textContent = "madison beer collection";
        } else if (mbguizioDesktop.src.endsWith("mbpage.png")) {
            mbguizioDesktop.src = "./assets/images/concepts/guizio/collection1.png";
            mbguizioDesktopLabel.textContent = "madison beer collection items 1";
        } else if (mbguizioDesktop.src.endsWith("collection1.png")) {
            mbguizioDesktop.src = "./assets/images/concepts/guizio/collection2.png";
            mbguizioDesktopLabel.textContent = "madison beer collection items 2";
        } else if (mbguizioDesktop.src.endsWith("collection2.png")) {
            mbguizioDesktop.src = "./assets/images/concepts/guizio/collection3.png";
            mbguizioDesktopLabel.textContent = "madison beer collection items 3";
        }else {
            mbguizioDesktop.src = "./assets/images/concepts/guizio/homepage.png";
            mbguizioDesktopLabel.textContent = "homepage";

        }
      })};




// index page
var indeximg = document.getElementById('indeximg');
if (indeximg){
    indeximg.addEventListener("click", function() {
        if (indeximg.src.endsWith("mobile-index.png")) {
            indeximg.src = "./assets/images/mobile-index2.png";
        } else if (indeximg.src.endsWith("mobile-index2.png")) {
            indeximg.src = "./assets/images/mobile-index3.png";
        } else if (indeximg.src.endsWith("mobile-index3.png")) {
            indeximg.src = "./assets/images/mobile-index4.png";
        } else if (indeximg.src.endsWith("mobile-index4.png")) {
            indeximg.src = "./assets/images/mobile-index5.png";
        } else if (indeximg.src.endsWith("mobile-index5.png")) {
            indeximg.src = "./assets/images/mobile-index.png";
        } else if (indeximg.src.endsWith("desktop-index.png")) {
            indeximg.src = "./assets/images/desktop-index2.png";
        } else if (indeximg.src.endsWith("desktop-index2.png")) {
            indeximg.src = "./assets/images/desktop-index3.png";
        } else if (indeximg.src.endsWith("desktop-index3.png")) {
            indeximg.src = "./assets/images/desktop-index4.png";
        } else if (indeximg.src.endsWith("desktop-index4.png")) {
            indeximg.src = "./assets/images/desktop-index5.png";
        } else {
            indeximg.src = "./assets/images/desktop-index.png";
        }
    })
};

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