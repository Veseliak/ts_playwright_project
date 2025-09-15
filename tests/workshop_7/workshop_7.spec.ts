import { test, expect } from '@playwright/test';

const selectors = {
  firstName: '#firstName',
  age: '#age',
  isStudent: '#isStudent',
};

test.describe('Variable Declarations and Types', () => {
  test.skip('Declarations and Types', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_7/index.html');
    let firstName: string = 'John';
    let age: number = 30;
    let isStudent: boolean = false;
    await page.fill(selectors.firstName, firstName);
    await page.fill(selectors.age, age.toString());
    await page.check('#isStudent');
    await page.click('#applyData');

    expect(await page.textContent('#displayFirstName')).toBe(firstName);
    expect(await page.textContent('#displayAge')).toBe(age.toString());
    expect(await page.isChecked('#isStudent')).toBe(true);
    await page.waitForTimeout(3000);
  });
});

test.describe('Type Definitions and Interfaces', () => {
  type User = {
    firstName: string;
    age: number;
    isStudent: boolean;
  };

  let user: User = {
    firstName: 'Alice',
    age: 22,
    isStudent: true,
  };

  test.skip('Type Def and Interface', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_7/index.html');
    await page.fill(selectors.firstName, user.firstName);
    await page.fill(selectors.age, user.age.toString());
    await page.click('#applyData');
    expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
    expect(await page.textContent('#displayAge')).toBe(user.age.toString());
    expect(await page.isChecked('#isStudent')).not.toBe(user.isStudent);
    await page.waitForTimeout(3000);
  });
});
