import { expect, test } from '@playwright/test';

for (const locale of ['es', 'en'] as const) {
  test(`serves the /${locale} foundation route`, async ({ page }) => {
    await page.goto(`/${locale}`);

    await expect(page.getByRole('heading', { name: 'Foundation ready' })).toBeVisible();
    await expect(page.getByTestId('locale-route')).toHaveText(`Locale route: ${locale}`);
  });
}

test('redirects the root route to Spanish', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL(/\/es$/);
});
