import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests/',
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3000/',
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    use: {
        baseURL: 'http://localhost:3000/',
    },
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
                // Test against Chrome Stable channel.
                channel: 'chrome',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1200, height: 750 },
            },
        },
        // Test against mobile viewports.
        {
            name: 'Mobile Chrome',
            use: devices['Pixel 5'],
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12'],
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 800, height: 600 },
            },
        },
    ],
};
export default config;
