import { test, expect } from '@playwright/test';

test.skip('Navigate to new window and back', async ({ context, page }) => {
  await page.goto('http://127.0.0.1:5500/tests/workshop_5/index.html');
  const pagePromise = context.waitForEvent('page');
  await page.click('#openNewWindow');
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await expect(newPage.getByRole('heading', { name: 'Welcome to the New Page' })).toBeVisible();
  await page.waitForTimeout(3000);
});

test.skip('Add Cookie', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/workshop_5/index.html');
  await page.click('#setCookie');
  const cookies = await page.context().cookies('http://127.0.0.1:5500/tests/workshop_5/index.html');
  const sessionCookies = cookies.find((cookies) => cookies.name === 'session');
  console.log('Session cookies', sessionCookies);
  await expect(sessionCookies).toBeDefined();
});

test.only('Delete cookies', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/workshop_5/index.html');
  await page.click('#setCookie');
  const cookies = await page.context().cookies('http://127.0.0.1:5500/tests/workshop_5/index.html');
  const sessionCookies = cookies.find((cookies) => cookies.name === 'session');
  console.log('Session cookies', sessionCookies);
  await page.click('#deleteCookie');
  const deletedCookies = await page
    .context()
    .cookies('http://127.0.0.1:5500/tests/workshop_5/index.html');
  const deletedSessionCookies = deletedCookies.find((cookies) => cookies.name === 'session');
  console.log('Session cookies', deletedSessionCookies);
  await expect(deletedSessionCookies).toBeUndefined();
});
