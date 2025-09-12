import { test } from '@playwright/test';

// test('Basic Navigation', async ({ page }) => {
//   await page.goto('https://gitlab.com/');
//   await page.waitForTimeout(300);
//   await page.reload();
// });

// test('Interacting with some element on GitLab page', async ({ page }) => {
//   await page.goto('https://gitlab.com/');
//   await page.click('#onetrust-accept-btn-handler');
//   await page
//     .locator('#be-navigation-desktop')
//     .getByRole('link', { name: 'Get free trial' })
//     .click();
//   //   await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
//   //   await page.locator('[data-testid="new-user-last-name-field"]').fill('Snow');
//   await page.getByTestId('new-user-first-name-field').fill('John');
//   await page.getByTestId('new-user-last-name-field').fill('Snow');
//   await page.waitForTimeout(300);
// });

test('Using various locator methods', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.click('#onetrust-accept-btn-handler');
  await page.setViewportSize({ width: 800, height: 400 });
  await page.getByRole('button', { name: 'Main Menu' }).click();
  //   await page.getByRole('link', {name:'Sign in')});
  await page.click(':has-text("Sign in" )');
});
