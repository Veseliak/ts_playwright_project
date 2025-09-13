import { test, expect } from '@playwright/test';

test.skip('Advance interaction', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/workshop_3/index.html');
  await page.hover('button#hover-me');
  expect(await page.textContent('button#hover-me')).toContain('Text Changed!');

  await page.click('button#context-menu', { button: 'right' });
  expect(await page.getByText('Context Menu Appears!').textContent()).toContain(
    'Context Menu Appears!',
  );
  await page.dblclick('button#double-click');
  expect(await page.locator('img').count()).toBe(1);
});

test.skip('Drag and Drop', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/workshop_3/index.html');
  //   await page.dragAndDrop('div.drag-source', 'div.drop-target');
  await page.locator('div.drag-source').hover();
  await page.mouse.down();
  await page.locator('div.drop-target').hover();
  await page.mouse.up();

  await page.waitForTimeout(3000);
  expect(await page.textContent('div.drop-target')).toContain('Success');
});

test.skip('Handling iframe', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/workshop_3/index.html');
  const input = '#iframe-input';
  const frame = await page.frame({ name: 'iframeName' });
  if (frame) {
    await frame.type(input, 'Hello world!');
    expect(await frame.locator(input).inputValue()).toContain('Hello world!');
  } else {
    console.error('Frame not available');
  }
});
