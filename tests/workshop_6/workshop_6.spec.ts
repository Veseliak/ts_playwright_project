import { test, expect } from '@playwright/test';

const testData = {
  firstName: 'John',
  lastName: 'Doe',
  address: '123 Main St',
  phoneNumber: '1234567890',
};

test.describe('User Registration Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_6/index.html');
  });
  test.skip('Registring with valid data', async ({ page }) => {
    await page.fill('#firstName', testData.firstName);
    await page.fill('#lastName', testData.lastName);
    await page.fill('#address', testData.address);
    await page.fill('#number', testData.phoneNumber);
    await page.click('#register');

    const firstNameTest = await page.locator('#displayFirstName').textContent();
    const lastNameTest = await page.locator('#displayLastName').textContent();
    const addressTest = await page.locator('#displayAddress').textContent();
    const numberTest = await page.locator('#displayNumber').textContent();
    await page.waitForTimeout(3000);

    await expect(firstNameTest).toEqual(testData.firstName);
    await expect(lastNameTest).toEqual(testData.lastName);
    await expect(addressTest).toEqual(testData.address);
    await expect(numberTest).toEqual(testData.phoneNumber);
  });

  test.skip('Register with empty field', async ({ page }) => {
    await page.fill('#firstName', testData.firstName);
    await page.fill('#lastName', testData.lastName);
    await page.click('#register');
    const error = await page.locator('#error p').textContent();
    expect(error).toBe('Please fill in all fields.');
  });

  test.skip('Register with all empty fields', async ({ page }) => {
    await page.click('#register');
    const error = await page.locator('#error p').textContent();
    expect(error).toBe('Please fill in all fields.');
  });
});
