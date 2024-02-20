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
        });
    }
});