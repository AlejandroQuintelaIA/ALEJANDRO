formulario - bootstrap
├── src
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── validation.js
│   │       └── document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.classList.add('was-validated');
        
        if (form.checkValidity()) {
            // Mostramos el mensaje de éxito
            successMessage.classList.remove('d-none');
            
            // Limpiamos el formulario
            form.reset();
            form.classList.remove('was-validated');
            
            // Ocultamos el mensaje después de 3 segundos
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 3000);
        }
    });
});
│   └── index.html
├── .gitignore
├── package.json
└── README.md