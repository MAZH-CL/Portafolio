document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('Bimlist');
    const listItems = list.getElementsByTagName('li');

    // Ocultar todos los elementos de la lista inicialmente
    for (let item of listItems) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.s, transform 0.5s';
    }

    function checkScroll() {
        for (let item of listItems) {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;
            
            if (itemTop < window.innerHeight && itemBottom > 0) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        }
    }

    // Verificar la posición inicial
    checkScroll();

    // Verificar la posición al hacer scroll
    window.addEventListener('scroll', checkScroll);
});


// EFECTO TYPEWRITER

    document.addEventListener("DOMContentLoaded", function () {
        const listItems = document.querySelectorAll('#Bimlist li');
        let index = 0;

        function typeWriterEffect(text, element, delay = 10) {
            let charIndex = 0;
            element.textContent = ''; // Limpiar el contenido del elemento

            function typeCharacter() {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeCharacter, delay);
                } else {
                    index++;
                    if (index < listItems.length) {
                        startTyping(listItems[index]);
                    }
                }
            }

            typeCharacter();
        }

        function startTyping(element) {
            const text = element.textContent;
            element.textContent = '';
            element.style.visibility = 'visible'; // Hacer visible el elemento cuando empiece a escribir
            typeWriterEffect(text, element);
        }

        // Iniciar la animación con el primer elemento
        if (listItems.length > 0) {
            startTyping(listItems[0]);
        }
    });

// EFECTO MARQUESINA EN EL TITULO DE LA PAGINA

       // JavaScript para crear el efecto de marquesina en el título de la página
       let titleText = " - Portafolio de MAZH - "; // Texto que se desplazará
       let speed = 200; // Velocidad del desplazamiento en milisegundos

       function scrollTitle() {
           document.title = titleText;
           titleText = titleText.substring(1) + titleText.charAt(0); // Desplaza el primer carácter al final
           setTimeout(scrollTitle, speed);
       }

       // Inicia el efecto de marquesina al cargar la página
       window.onload = scrollTitle;


// SCRIPT PARA SCROLL HASTA ID EN LA PAGINA

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// POP UP AL ENVIAR FORMULARIO

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formulario-contacto');
    var botonEnvio = document.getElementById('Boton-envio');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Aquí puedes agregar la lógica para enviar el formulario si lo necesitas
        // Por ejemplo, usando fetch() o XMLHttpRequest

        // Muestra el pop-up
        alert('¡Tu mensaje ha sido enviado! Nos pondremos en contacto contigo.');

        // Opcional: resetea el formulario después de enviarlo
        form.reset();
    });
});