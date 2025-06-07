// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Manejo del menú responsive (hamburguesa)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Activa/desactiva la visibilidad del menú
            navToggle.classList.toggle('active'); // Activa/desactiva la animación del icono de hamburguesa
        });

        // Cerrar el menú si se hace clic en un enlace (útil para móviles)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    // Smooth scroll para los enlaces de navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtiene el elemento al que apunta el enlace
            const targetElement = document.querySelector(this.getAttribute('href'));
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Desplazamiento suave
                });
            }
        });
    });

    // Validación básica de formulario (puedes expandirla con más lógica)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío por defecto del formulario

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Simple validación de que los campos no estén vacíos
            if (nombre && email && mensaje) {
                alert('¡Gracias por tu mensaje! BitTec Soluciones se pondrá en contacto contigo pronto.');
                this.reset(); // Limpia el formulario después del envío simulado
            } else {
                alert('Por favor, completa todos los campos para poder contactarte.');
            }
        });
    }

    // Opcional: Animaciones al hacer scroll (requiere CSS adicional para las clases 'fade-in' y 'fade-in-visible')
    // Agrega las siguientes clases al CSS si quieres usar esta funcionalidad:
    /*
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
    const elementsToAnimate = document.querySelectorAll('.service-item, .project-item, .about-content'); // Puedes añadir más elementos
    const observerOptions = {
        threshold: 0.2 // Dispara cuando el 20% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Deja de observar una vez que el elemento es visible
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(item => {
        item.classList.add('fade-in'); // Agrega esta clase para el CSS de animación inicial
        observer.observe(item);
    });
});