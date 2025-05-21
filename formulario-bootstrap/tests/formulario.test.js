const { test, expect } = require('@playwright/test');

test.describe('Pruebas del Formulario de Contacto', () => {
    // Antes de cada prueba, navegar al formulario
    test.beforeEach(async ({ page }) => {
        await page.goto('/src/index.html');
    });

    // Test 1: Verificar que el formulario se muestra correctamente
    test('debe mostrar todos los elementos del formulario', async ({ page }) => {
        await expect(page.locator('h2')).toHaveText('Formulario de Contacto');
        await expect(page.locator('#name')).toBeVisible();
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#message')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    // Test 2: Validación de campos vacíos
    test('debe mostrar errores cuando los campos están vacíos', async ({ page }) => {
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('#name:invalid')).toBeVisible();
        await expect(page.locator('#email:invalid')).toBeVisible();
        await expect(page.locator('#message:invalid')).toBeVisible();
    });

    // Test 3: Validación de email inválido
    test('debe validar formato de email incorrecto', async ({ page }) => {
        await page.locator('#name').fill('Usuario Test');
        await page.locator('#email').fill('emailinvalido');
        await page.locator('#message').fill('Mensaje de prueba');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('#email:invalid')).toBeVisible();
    });

    // Test 4: Envío exitoso del formulario
    test('debe mostrar mensaje de éxito con datos válidos', async ({ page }) => {
        await page.locator('#name').fill('Usuario Test');
        await page.locator('#email').fill('test@ejemplo.com');
        await page.locator('#message').fill('Este es un mensaje de prueba válido');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('#successMessage')).toBeVisible();
    });

    // Test 5: Validación de longitud del mensaje
    test('debe validar longitud mínima del mensaje', async ({ page }) => {
        await page.locator('#name').fill('Usuario Test');
        await page.locator('#email').fill('test@ejemplo.com');
        await page.locator('#message').fill('Corto');
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('#message:invalid')).toBeVisible();
    });
});