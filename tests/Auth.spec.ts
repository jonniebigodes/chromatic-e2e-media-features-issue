import { expect, takeSnapshot, test} from '@chromatic-com/playwright'


// Check if the desribe block is already present in Chromatic documentation
test.describe('Authentication - with high contrast', () => {
    test.use({
      forcedColors: 'active',
      disableAutoSnapshot: true,
    })

    test('User can log in high contrast mode', async ({page}, testInfo) => {
      const email = 'test@email.com'
      const password = 'password'

      await page.goto('/login')
        // Take a snapshot of the initial state of the login page
      await page.screenshot({
          path: "./test-results/InitialLoginStateHighContrast.png",
          fullPage: true,
      })
      await takeSnapshot(page, 'Playwright - High Contrast - Initial state of the login page', testInfo)

      await page.locator('input[name="email"]').fill(email)
      await page.locator('input[name="password"]').fill(password)

      await page.getByRole('button', { name: 'Login' }).click()

      // Take a snapshot of the filled form
      // Take a snapshot of the initial state of the login page
      await page.screenshot({
        path: "./test-results/FinalLoginStateHighContrast.png",
        fullPage: true,
      })
      await takeSnapshot(page, 'Playwright - High Contrast - Filled form', testInfo)
    })
})

test.describe('Authentication - with reduced motion', () => {
    test.use({
      prefersReducedMotion: "reduce",
      disableAutoSnapshot: true,
    })

    test('User can log in with reduced motion', async ({page}, testInfo) => {
       const email = 'test@email.com'
       const password = 'password'

      await page.goto('/login')
        // Take a snapshot of the initial state of the login page
      await page.screenshot({
        path: "./test-results/InitialLoginStateReducedMotion.png",
        fullPage: true,
      })
      await takeSnapshot(page, 'Playwright - Reduced Motion - Initial state of the login page', testInfo)


      await page.locator('input[name="email"]').fill(email);
      await page.locator('input[name="password"]').fill(password);

      await page.getByRole('button', { name: 'Login' }).click()
      await page.screenshot({
          path: "./test-results/FinalLoginStateReducedMotion.png",
          fullPage: true,
      })
      await takeSnapshot(page, 'Playwright - Reduced Motion - Filled form', testInfo)
    })
})