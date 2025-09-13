import { expect, test } from '@playwright/test';

// test('Automation form submitions', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/');
//   const newTodo = await page.getByPlaceholder('What needs to be done?');
//   await newTodo.fill('Learn Playwright');
//   await newTodo.press('Enter');
//   await newTodo.fill('Learn TS');
//   await newTodo.press('Enter');

//   const firstTodo = await page.getByTestId('todo-item').nth(0);
//   await firstTodo.getByRole('checkbox').check();
//   await page.waitForTimeout(3000);

//   const second_todo = await page.getByTestId('todo-item').nth(1);
//   await expect(second_todo).not.toHaveClass(/completed/);
//   await expect(firstTodo).toHaveClass(/completed/);
//   await page.waitForTimeout(3000);
// });

// test('Heandling form', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/');
//   const placeholder = '[placeholder="What needs to be done?"]';
//   await page.fill(placeholder, 'Some text');
//   await page.press(placeholder, 'Enter');
//   //   await page.fill(placeholder, 'Some text1');
//   //   await page.press(placeholder, 'Enter');

//   const checkbox = await page.locator('.toggle');
//   checkbox.check();
//   await page.waitForTimeout(3000);
// });
