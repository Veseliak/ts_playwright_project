import { test, expect } from '@playwright/test';

test('Automating Form Submission @githubAction', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const newTodo = await page.getByPlaceholder('What needs to be done?');
  await newTodo.fill('Learn Playwright');
  await newTodo.press('Enter');
  await newTodo.fill('Learn TS');
  await newTodo.press('Enter');

  const firstTodo = await page.getByTestId('todo-item').nth(0);
  await firstTodo.getByRole('checkbox').check();

  const second_todo = await page.getByTestId('todo-item').nth(1);
  await expect(firstTodo).toHaveClass('completed');
  await expect(second_todo).not.toHaveClass('completed');

  await page.waitForTimeout(3000);
});

test('Handling Form @githubAction', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await page.fill('[placeholder = "What needs to be done?"]', 'John Due');
  await page.locator('[placeholder = "What needs to be done?"]').press('Enter');

  const checkbox = await page.locator('.toggle');
  await checkbox.check();
});
