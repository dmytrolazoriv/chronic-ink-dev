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
});