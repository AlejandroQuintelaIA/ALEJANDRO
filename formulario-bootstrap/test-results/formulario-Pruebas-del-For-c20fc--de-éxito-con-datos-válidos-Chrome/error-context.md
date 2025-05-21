# Test info

- Name: Pruebas del Formulario de Contacto >> debe mostrar mensaje de éxito con datos válidos
- Location: C:\xampp\htdocs\ALEJANDRO\formulario-bootstrap\tests\formulario.test.js:30:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/formulario-bootstrap/src/index.html
Call log:
  - navigating to "http://localhost/formulario-bootstrap/src/index.html", waiting until "load"

    at C:\xampp\htdocs\ALEJANDRO\formulario-bootstrap\tests\formulario.test.js:5:16
```

# Page snapshot

```yaml
- heading "No se puede acceder a este sitio web" [level=1]
- paragraph:
  - text: La página
  - strong: localhost
  - text: ha rechazado la conexión.
- paragraph: "Prueba a:"
- list:
  - listitem: Comprobar la conexión
  - listitem:
    - link "Comprobar el proxy y el cortafuegos":
      - /url: "#buttons"
- text: ERR_CONNECTION_REFUSED
- button "Volver a cargar"
- button "Detalles"
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test.describe('Pruebas del Formulario de Contacto', () => {
   4 |   test.beforeEach(async ({ page }) => {
>  5 |     await page.goto('/formulario-bootstrap/src/index.html');
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/formulario-bootstrap/src/index.html
   6 |   });
   7 |
   8 |   test('debe mostrar todos los campos del formulario', async ({ page }) => {
   9 |     await expect(page.locator('#name')).toBeVisible();
  10 |     await expect(page.locator('#email')).toBeVisible();
  11 |     await expect(page.locator('#message')).toBeVisible();
  12 |     await expect(page.locator('button[type="submit"]')).toBeVisible();
  13 |   });
  14 |
  15 |   test('debe validar campos obligatorios', async ({ page }) => {
  16 |     await page.locator('button[type="submit"]').click();
  17 |     await expect(page.locator('#name:invalid')).toBeVisible();
  18 |     await expect(page.locator('#email:invalid')).toBeVisible();
  19 |     await expect(page.locator('#message:invalid')).toBeVisible();
  20 |   });
  21 |
  22 |   test('debe validar formato de email', async ({ page }) => {
  23 |     await page.locator('#name').fill('Test User');
  24 |     await page.locator('#email').fill('invalid-email');
  25 |     await page.locator('#message').fill('Test message');
  26 |     await page.locator('button[type="submit"]').click();
  27 |     await expect(page.locator('#email:invalid')).toBeVisible();
  28 |   });
  29 |
  30 |   test('debe mostrar mensaje de éxito con datos válidos', async ({ page }) => {
  31 |     await page.locator('#name').fill('Test User');
  32 |     await page.locator('#email').fill('test@example.com');
  33 |     await page.locator('#message').fill('This is a valid test message');
  34 |     await page.locator('button[type="submit"]').click();
  35 |     await expect(page.locator('#successMessage')).toBeVisible();
  36 |   });
  37 | });
```