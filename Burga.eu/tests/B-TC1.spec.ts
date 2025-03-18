import { test, expect } from '@playwright/test';

test.describe('1. Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://eu.burga.com/');
    });

    test('1.1 Verify the home page loads successfully', async ({ page }) => {
        await expect(page.locator('.gbl-has-b2b--')).toBeVisible();
        await expect(page.locator('.flex.col-wrap.align-bottom.justify-center.grid.grid--f')).toBeVisible();
    });

    test('1.2 Confirm navigation menus are accessible', async ({ page }) => {
        await page.locator('.js-global-sidebar-nav__toggle').click();
        await expect(page.locator('#shopify-section-global__sidebar-nav')).toBeVisible();
        await page.locator('.modal-close.btn-reset.sidebar-nav__close').click();
    });

    test('1.3 Search button is visible', async ({ page }) => {
        await page.locator('.mh__button.mh__button--search').click();
        await expect(page.locator('.block-fh.wbsk-ui-scroll-flex.js-sidebar-search__wrapper')).toBeVisible();
        await page.locator('.js-sidebar-search__input').fill('samsung s20+');
        await page.waitForTimeout(5000);
        await expect(page.locator('.f-w600.d-block.cell-l.cell-r.t-ucase')).toContainText('Suggestions');
        await expect(page.locator('.f-w600.d-block.cell-l.cell-r.row.t-ucase')).toContainText('Products');
        await page.locator('#onetrust-accept-btn-handler').click();
        await expect(page.locator('a.d-block.btn.btn--bdr')).toContainText('VIEW ALL RESULTS');
        await page.locator('.js-sidebar-search__clear').click();
        await expect(page.locator('input[placeholder="Type to search"]')).toBeVisible();
        await page.locator('.modal-close.sidebar-search-close').click();
    });

    // test('1.4 Change the region is visible and accessible', async ({ page }) => {
    //     await page.setViewportSize({ width: 1640, height: 950 });
    //     await page.waitForTimeout(10000);
    //     await page.locator('.needsclick.klaviyo-close-form').click();
    //     await page.locator('.ter-toggle').click();
    //     await expect(page.locator('.ter-select-wrapper.tac.block-rel')).toBeVisible();
    //     await page.locator('.js-ter-select-close').click();
    //     await page.locator('.ter-toggle').click();
    //     await page.locator('.is-selected > .wbsk-ui-option-toggle__input').click();
    //     await page.locator(':nth-child(2) > .wbsk-ui-option-toggle__input').click();
    //     await page.locator('.js-ter-select-navigate').click();
    //     await page.waitForTimeout(10000);
    //     await page.locator('.needsclick.klaviyo-close-form').click();
    //     await page.waitForURL('https://us.burga.com');
    //     await expect(page.locator('#united-states-usd')).toContainText('USD');
    // });

    test('1.5 Select brand and model to display search products information', async ({ page }) => {
        await page.setViewportSize({ width: 1640, height: 950 });
        await page.locator('.mh__model-select.cell-l--s').click();
        await expect(page.locator('.modal-sidebar')).toContainText('SELECT MODEL');
        await page.locator('[data-item="iPhone 13 Mini"]').click();
        await expect(page.locator('.mh__model-select > .btn-reset > span')).toContainText('iPhone 13 Mini');
    });

    test('1.6 Notification of offers and discounts', async ({ page }) => {
        await page.locator('.js-news-center-toggle').click();
        await expect(page.locator('.modal-sidebar')).toContainText('Notifications');
    });

    test('1.7 Access to account', async ({ page }) => {
        await page.locator('.js-mh__account-link').click();
        await expect(page.locator('.h-style.h-m.row.f-w500')).toContainText('CREATE AN ACCOUNT');
        await expect(page.locator('h1.h-style.h-l.f-w500.row')).toContainText('WELCOME BACK');
    });

    test('1.8 Cart button', async ({ page }) => {
        await page.locator('.js-wbsk-sidebar-cart__open').click();
        await expect(page.locator('.modal-sidebar')).toContainText('Your Cart');
    });

    test('1.9 Main logo redirects to the home page', async ({ page }) => {
        await page.locator('.js-mh__account-link').click();
        await expect(page.locator('.h-style.h-m.row.f-w500')).toContainText('CREATE AN ACCOUNT');
        await page.locator('.block-abc.tac.mh__logo').click();
        await expect(page.locator('.gbl-has-b2b--')).toBeVisible();
        await expect(page.locator('.flex.col-wrap.align-bottom.justify-center.grid.grid--f')).toBeVisible();
    });
});
