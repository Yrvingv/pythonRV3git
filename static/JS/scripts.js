document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    
    function showSlide(idx) {
        if (idx >= slides.length) {
            index = 0;
        } else if (idx < 0) {
            index = slides.length - 1;
        } else {
            index = idx;
        }
        carouselContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    function moveSlide(step) {
        showSlide(index + step);
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));

    // Auto-slide every 3 seconds
    setInterval(() => moveSlide(1), 5000);

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            alert('Tallas disponibles: S, M, L, XL');
            slide.style.transform = 'scale(1.5)';
            setTimeout(() => {
                slide.style.transform = 'scale(1)';
            }, 2000);
        });
    });
});
// Obtener referencia al header

const header = document.querySelector('header');

// Obtener referencia a la imagen principal
const principalImage = document.querySelector('.principal-img');

// Obtener la posición vertical de la parte inferior de la imagen principal, restando 600px
const principalImageBottom = principalImage.offsetTop + principalImage.offsetHeight - 600;

// Función para controlar la visibilidad del header
function toggleHeaderVisibility() {
    if (window.pageYOffset >= principalImageBottom) {
        header.style.display = 'none'; // Ocultar el header cuando se desplaza más allá del umbral
    } else {
        header.style.display = 'block'; // Mostrar el header mientras está antes del umbral
    }
}

// Escuchar eventos de scroll para llamar a la función toggleHeaderVisibility
window.addEventListener('scroll', toggleHeaderVisibility);
