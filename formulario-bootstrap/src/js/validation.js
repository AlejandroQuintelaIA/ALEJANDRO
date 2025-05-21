formulario - bootstrap
├── src
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── validation.js
│   │       └── document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // Mostramos el mensaje de éxito
            successMessage.classList.remove('d-none');
            form.reset();

            // Ocultamos el mensaje después de 3 segundos
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 3000);
        }

        form.classList.add('was-validated');
    });
});
│   └── index.html
├── .gitignore
├── package.json
└── README.md