// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'https://playwright.dev/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Refine the locator to a specific paragraph containing some text you expect
  const text = await page.locator('p:has-text("Cross-browser. Playwright")');
  const image = await page.locator('img').first();

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  // Ensure textContent is not null and has a length greater than 0
  expect(textContent).not.toBeNull();
  expect(textContent?.length).toBeGreaterThan(0);

  // Ensure imageSrc is not null and starts with 'https://'
  expect(imageSrc).not.toBeNull();
  expect(imageSrc?.startsWith('/')).toBeTruthy();
});
