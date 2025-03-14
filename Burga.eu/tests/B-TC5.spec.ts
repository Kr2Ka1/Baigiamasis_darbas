import { test, expect } from '@playwright/test';

test.describe('5. Shopping Cart', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://eu.burga.com/');
        await page.setViewportSize({ width: 1640, height: 950 });
        await page.waitForTimeout(10000);
        await page.locator('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
    });

    test('4.1 Test the search bar for products.', async ({ page }) => {
        await page.locator('.embla__container > [href="/collections/all"]').waitFor();
        await page.locator('.embla__container > [href="/collections/all"]').click();
        
        await page.locator('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().waitFor();
        await page.locator('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().click();
        
        await expect(page.locator('.filter-nav__wrapper.filter-nav__wrapper--right.filter-nav__wrapper--onAtc')).toBeVisible();
        await expect(page.locator('.filter-nav__wrapper.filter-nav__wrapper--right.filter-nav__wrapper--onAtc')).toContainText('ADDED TO CART');
        
        await page.locator(':nth-child(1) > .btn').waitFor();
        await expect(page.locator(':nth-child(1) > .btn')).toContainText('CONTINUE SHOPPING');
        await page.locator(':nth-child(1) > .btn').click();
        
        await page.waitForTimeout(500);

        await page.locator('.embla__container > [href="/collections/travel-mugs"]').waitFor();
        await page.locator('.embla__container > [href="/collections/travel-mugs"]').click();
        
        await expect(page.locator('h1.h-style.h-xxl.f-w700.t-ucase.f-hs')).toBeVisible();
        await expect(page.locator('h1.h-style.h-xxl.f-w700.t-ucase.f-hs')).toContainText('Insulated Travel Mugs');
        
        await page.locator('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().waitFor();
        await page.locator('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().click();
        
        await page.waitForTimeout(500);

        await page.locator('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart.btn-reset.block-rel.js-wbsk-sidebar-cart__cart-count-parent.mh__button--cart-has-items').waitFor();
        await page.locator('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart.btn-reset.block-rel.js-wbsk-sidebar-cart__cart-count-parent.mh__button--cart-has-items').click();
    });
});
