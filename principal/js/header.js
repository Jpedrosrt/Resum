const header = window.document.querySelector('.header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('fixed'); // > 0 ou outro valor desejado
    } else {
        header.classList.remove('fixed');
    }
});