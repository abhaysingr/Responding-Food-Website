const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

const initUI = () => {
    new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: "#next",
            prevEl: "#prev",
        },
    });

    cartIcon.addEventListener("click", () => {
        cartTab.classList.add("cart-tab-active");
    });

    closeBtn.addEventListener('click', () => {
        cartTab.classList.remove("cart-tab-active");
    });

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add('mobile-menu-active');
    });

    // Add event listener to close mobile menu when a link is clicked
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.remove('mobile-menu-active');
        }
    });
};

export { initUI };