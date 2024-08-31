import { expect, test } from '@playwright/test';

test.describe('home', () => {
  test('deve conter o componente de exemplo', async ({ page }) => {
    await page.goto('/');

    const exampleComponent = page.getByText('Componente de Exemplo');

    await expect(exampleComponent).toBeVisible();
  });
});
