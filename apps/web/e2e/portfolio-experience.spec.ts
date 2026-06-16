import { expect, test } from '@playwright/test';

const localeExpectations = {
  es: {
    heading: 'Salvador Rodríguez Blanco',
    contact: 'Contactar por correo',
    title: /Desarrollador Full Stack en Málaga/,
    description: /desarrollador Full Stack en Málaga/,
  },
  en: {
    heading: 'Salvador Rodríguez Blanco',
    contact: 'Contact by email',
    title: /Full Stack Developer in Málaga/,
    description: /Málaga-based Full Stack Developer/,
  },
} as const;

for (const locale of ['es', 'en'] as const) {
  test(`serves accessible SEO content for /${locale}`, async ({ page }) => {
    await page.goto(`/${locale}`);

    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page).toHaveTitle(localeExpectations[locale].title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      localeExpectations[locale].description,
    );
    await expect(
      page.getByRole('heading', { level: 1, name: localeExpectations[locale].heading }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: localeExpectations[locale].contact }).first(),
    ).toHaveAttribute('href', /^mailto:/);
    await expect(page.locator('main section')).toHaveCount(5);
  });
}

test('supports keyboard navigation and visible skip-link behavior', async ({ page }) => {
  await page.goto('/es');

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Saltar al contenido principal' });
  await expect(skipLink).toBeFocused();
  await skipLink.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Contactar por correo' }).first()).toBeFocused();
});

test('keeps content within a mobile viewport and exposes the primary action', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/en');

  const viewportMetrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(viewportMetrics.scrollWidth).toBe(viewportMetrics.clientWidth);
  await expect(page.getByRole('link', { name: 'Contact by email' }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'ES' })).toBeVisible();
});

test('persists locale selection across a return to the root route', async ({ page }) => {
  await page.goto('/es');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page).toHaveURL(/\/en$/);

  await page.goto('/');
  await expect(page).toHaveURL(/\/en$/);
});

test('uses safe isolation for verified external social links', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/salvador-rodr%C3%ADguez-blanco-326505396',
  );

  for (const name of ['LinkedIn', 'GitHub', 'X']) {
    const link = page.getByRole('link', { name: new RegExp(name) });
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
});
