const header = window.document.querySelector('.header');

window.addEventListener('load', () => {
    header.classList.remove('fixed');
    window.addEventListener('scroll', () => {
        
        if (window.scrollY > 200) {
            header.classList.add('fixed'); // > 0 ou outro valor desejado
        } else {
            header.classList.remove('fixed');
        }
    });
});
