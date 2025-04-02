document.addEventListener("DOMContentLoaded", function() {
    // Animación de partículas en el fondo del full-screen-container
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", straight: false }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        }
    });

    particlesJS("particles-formulario", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", straight: false }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        }
    });

   

    // Efecto de aparición en scroll
    const elements = document.querySelectorAll(".container, .full-screen-container");

    function checkScroll() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // Eventos en los botones del primer container
    document.querySelector("#btn-adquirir").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Redirigiendo a la compra...");
    });

    document.querySelector("#btn-cotizar").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Redirigiendo a la cotización...");
    });

   
    function cargarVideo(src) {
        let video = document.getElementById('videoPlayer');
        video.src = src;
        video.play();
    }

    
});
