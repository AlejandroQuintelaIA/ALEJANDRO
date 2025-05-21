# Formulario de Contacto con Bootstrap

Este proyecto implementa un formulario de contacto responsive utilizando Bootstrap 5 con validación del lado del cliente.

## Características

- Validación en tiempo real
- Diseño responsive
- Mensajes de feedback para el usuario
- Validación de formato de email
- Control de longitud en el mensaje

## Estructura del Proyecto

```formulario-bootstrap/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── validation.js
│   └── index.html
└── README.md
```

## Cómo usar

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Prueba el formulario completando los campos

## Validaciones

- Nombre: Campo obligatorio
- Email: Campo obligatorio y formato válido
- Mensaje: Entre 10 y 200 caracteres

## URLs del Proyecto

### URLs de Acceso

- **Clonar Repositorio**: `https://github.com/AlejandroQuintelaIA/formulario-bootstrap.git`
- **Ver Código**: `https://github.com/AlejandroQuintelaIA/formulario-bootstrap`
- **GitHub Pages**: `https://AlejandroQuintelaIA.github.io/formulario-bootstrap`

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5

## Pruebas Automatizadas

El proyecto incluye pruebas automatizadas usando Playwright. Para ejecutarlas:

```bash
# Instalar dependencias
npm install

# Ejecutar pruebas
npm test

# Ejecutar pruebas con interfaz visual
npm run test:ui

# Ejecutar pruebas en modo debug
npm run test:debug
```

Las pruebas verifican:
- Visualización correcta del formulario
- Validación de campos requeridos
- Validación de formato de email
- Validación de longitud del mensaje
- Mensaje de éxito al enviar