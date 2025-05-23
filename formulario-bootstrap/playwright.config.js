const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'http://localhost:8080',
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure'
    },
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' },
        }
    ],
});