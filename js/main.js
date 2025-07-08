document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector('.burger');
    const headerNavigation = document.querySelector('.header__nav');


    headerBurger?.addEventListener('click', (e) => {
        const target = e.currentTarget;

        target.classList.toggle('is-active');
        headerNavigation?.classList.toggle('is-active');
    })
}); 