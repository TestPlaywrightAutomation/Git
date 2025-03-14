import { test, expect } from '@playwright/test';
for(let i=0;i<20;i++){
test(`Test${i}`, async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(page).toHaveTitle(/Playwright/);
});}

