const { test, expect } = require('@playwright/test');

test.describe('Pruebas del Formulario de Contacto', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/formulario-bootstrap/src/index.html');
  });

  test('debe mostrar todos los campos del formulario', async ({ page }) => {
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('debe validar campos obligatorios', async ({ page }) => {
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#name:invalid')).toBeVisible();
    await expect(page.locator('#email:invalid')).toBeVisible();
    await expect(page.locator('#message:invalid')).toBeVisible();
  });

  test('debe validar formato de email', async ({ page }) => {
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('invalid-email');
    await page.locator('#message').fill('Test message');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#email:invalid')).toBeVisible();
  });

  test('debe mostrar mensaje de éxito con datos válidos', async ({ page }) => {
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#message').fill('This is a valid test message');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#successMessage')).toBeVisible();
  });
});