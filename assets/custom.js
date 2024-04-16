import { ItcCustomSelect } from "./itc-custom-select.js";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".slider-main__slider")) {
        const productsSlider = new Swiper(".slider-main__slider", {
            slidesPerView: 'auto',
            spaceBetween: 16,
            // loop: true,
            grabCursor: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                draggable: true,
              },
              navigation: {
                nextEl: ".slider-top__button-next",
                prevEl: ".slider-top__button-prev",
            },
        });
    }
    // ============================================

    if (document.querySelector(".endless-slider__items")) {
        const endlessSlider = new Swiper('.endless-slider__items', {
            spaceBetween: 74,
            grabCursor: false,
            a11y: false,
            allowTouchMove: false,
            freeMode: false,
            freeModeMomentum: false,
            speed: 4000,
            loop: true,
            slidesPerView: "auto",
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        });
    }
    // ============================================

    // select-1 – id элемента
        const selectElement = document.querySelector('.itc-select[data-select-index]');
        if (selectElement) {
            const index = selectElement.getAttribute('data-select-index');
            if (index) {
                const select = new ItcCustomSelect(`#select-${index}`);
            } else {
                console.error("Data attribute 'data-select-index' not found on select element.");
            }
        } else {
            console.error("Select element not found on the page.");
        }
        // ============================================

        function calculateHeroHeight() {
            let announcementBarHeight = document.querySelector('.announcement-bar-new').offsetHeight;
            let headerCustomHeight = document.querySelector('.header_custom').offsetHeight;
        
            // Calculate the height for the hero banner
            let heroHeight = `calc(100vh - (${announcementBarHeight + headerCustomHeight}px))`;
        
            // Apply the calculated height to the hero banner elements
            let heroElements = document.querySelectorAll('.hero-banner__image, .hero-banner__video');
            heroElements.forEach(function(element) {
                element.style.height = heroHeight;
            });
        }
      
        // Call the function initially and on window load, resize, and orientation change events
        window.addEventListener('load', calculateHeroHeight);
        window.addEventListener('resize', calculateHeroHeight);
        window.addEventListener('orientationchange', calculateHeroHeight);
        // ============================================
      
});