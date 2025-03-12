//Page testing Burga.eu

describe('1. Home Page', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
  });

  it('1.1 Verify the home page loads successfully', () => {
    cy.get('.gbl-has-b2b--').should('be.visible');
    cy.get('.flex.col-wrap.align-bottom.justify-center.grid.grid--f').should('be.visible');
  });

  it('1.2 Confirm navigation menus are accessible', () => {
    cy.get('.js-global-sidebar-nav__toggle').should('be.visible').click();
    cy.get('#shopify-section-global__sidebar-nav').should('be.visible');
    cy.get('.modal-close.btn-reset.sidebar-nav__close.d-block.global-icon-button.global-icon-button--close.btn-reset').should('be.visible').click();
  });

  it('1.3 Search button is visible', () => {
    cy.get('.mh__button.mh__button--search.btn-reset.js-wbsk-sidebar-search__open').should('be.visible').click();
    cy.get('.block-fh.wbsk-ui-scroll-flex.js-sidebar-search__wrapper').should('be.visible');
    cy.get('.js-sidebar-search__input.reset-input.sidebar-search__input.sidebar-search__input--icon-left').type('samsung s20+');
    cy.wait(5000);
    cy.get('.f-w600.d-block.cell-l.cell-r.t-ucase').should('be.visible').and('contain', 'Suggestions');
    cy.get('.f-w600.d-block.cell-l.cell-r.row.t-ucase').should('be.visible').and('contain', 'Products');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('a.d-block.btn.btn--bdr').should('be.visible').and('contain', 'VIEW ALL  RESULTS');
    cy.get('.js-sidebar-search__clear.btn.btn--xs.sidebar-search-clear').should('be.visible').click();
    cy.get('input[placeholder="Type to search"]').should('be.visible');
    cy.get('.modal-close.sidebar-search-close.global-icon-button.global-icon-button--close.btn-reset').should('be.visible').click();
  });

  // it('1.4 Change the region is visible and accessible', () => {
  //   cy.viewport(1640, 950);
  //   cy.get('.ter-toggle').should('be.visible').and('contain', 'EUR').click();
  //   cy.get('.ter-select-wrapper.tac.block-rel').should('be.visible');
  //   cy.get('.js-ter-select-close').should('contain', "NO, I'D LIKE TO STAY HERE").click();
  //   cy.get('.ter-toggle').should('be.visible').and('contain', 'EUR').click();
  //   cy.get('.ter-select-wrapper.tac.block-rel').should('be.visible');
  //   cy.get('.is-selected > .wbsk-ui-option-toggle__input').click({ force: true });
  //   cy.get('.wbsk-ui-option-toggle__options-wrap.wbsk-ui-option-toggle__options-wrap--drop-at-mobile.bdr.bdr-grey.wbsk-ui-option-toggle__options-wrap--is-open').should('be.visible');
  //   cy.get(':nth-child(2) > .wbsk-ui-option-toggle__input').click({ force: true });
  //   cy.get('.js-ter-select-navigate').should('contain', 'GO TO STORE').click();
  //   // cy.location('hostname', { timeout: 10000 }).should('include', 'us.burga.com');
  //   // cy.origin('https://us.burga.com', () => {
  //   //   cy.url().should('include', 'us.burga.com');
  //   // cy.get('#united-states-usd').should('be.visible').and('contain', 'USD');
  //   // });// neina patikrinti ar sėkminai nusikreipė į kitą puslapį nes cypress meta klaidą, nors kaip ir teisigai rodo,
  //   //  kad tikis eu.burga.com, o gauna us.burga.com. 
  // });

  it('1.5 Select brad and model to displaying search products information', () => {
    cy.viewport(1640, 950);
    cy.get('.mh__model-select.cell-l--s').should('be.visible').click();//ka=kod4l kai visus testus leidžiu šis testas nepraeina, o kai tik jį leidžiu praeina.
    cy.get('.modal-sidebar').should('contain', 'SELECT MODEL').and('be.visible');
    cy.get('[data-item="iPhone 13 Mini"]').should('be.visible').click();
    cy.get('.mh__model-select > .btn-reset > span').should('be.visible').and('contain', 'iPhone 13 Mini');
  });

  it('1.6 Notification of offers and discounts', () => {
    cy.get('.js-news-center-toggle').should('be.visible').click();
    cy.get('.modal-sidebar').should('be.visible').and('contain', 'Notifications').and('be.not.empty');
  });

  it('1.7 Access to account', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
  });

  it('1.8 Cart button', () => {
    cy.get('.js-wbsk-sidebar-cart__open').should('be.visible').click();
    cy.get('.modal-sidebar').should('contain', 'Your Cart').and('be.visible');
  });

  it('1.9 Does the main logo redirects to the home page when clickedn', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
    cy.get('.block-abc.tac.mh__logo').should('be.visible').click();
    cy.get('.gbl-has-b2b--').should('be.visible');
    cy.get('.flex.col-wrap.align-bottom.justify-center.grid.grid--f').should('be.visible');
  });

});


describe('2. Product Categories', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950)
  });
  it('2.1 Access various product categories', () => {
    //Dėkliukai
    cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Phone Cases').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    //Ring holderiai
    cy.get('.embla__container > [href="/collections/ring-holders"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Ring Holders').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    // ausinių dėklai
    cy.get('.embla__container > [href="/collections/airpods-3-cases"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'AirPods 3 Cases').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    // briksai
    cy.get('.embla__container > [href="/collections/magnetic-power-banks"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Magnetic Power Banks').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    //planšų dėklai
    cy.get('.embla__container > [href="/collections/ipad-cases"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'iPad Cases').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    // gertuvės
    cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Insulated Travel Mugs').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    //laptopų dėklai
    cy.get('.embla__container > [href="/collections/hard-macbook-cases"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Macbook Cases').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    // laikrodžių aksesuarai
    cy.get('.embla__container > [href="/collections/watch-bands"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Watch Bands').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    //notebooks
    cy.get('.embla__container > [href="/collections/notebooks"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Notebooks').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    // akiniai
    cy.get('.embla__container > [href="/pages/eyewear"]').should('be.visible').click();
    cy.get('.r-1c0teq4').should('be.visible');
    cy.get('.flex.row-wrap.align-bottom.justify-left.cell-l--s.cell-r--s').should('be.visible').and('be.not.empty');
    cy.get('.block-abc.tac.mh__logo').should('be.visible').click();
    //ekrano apsaugos
    cy.get('.embla__container > [href="/collections/screen-protectors"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Screen and Lens Protectors').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    //krovikliai
    cy.get('.embla__container > [href="/collections/charging"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Charging').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
    //aksesuarai
    cy.get('.embla__container > [href="/collections/accessories"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Accessories').and('be.visible');
    cy.get('#shopify-section-template--22816476365134__products').should('be.visible').and('be.not.empty');
  });

  it.only('2.2 Ensure product information is visible (choose one of the categories to check)', () => {
    cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Phone Cases').and('be.visible');
    cy.get('[data-proudct-index="1"]').should('be.visible');
    cy.get('[data-proudct-index="1"] > .column-wrap > .js-prod-thumb > div.cell-l--s > .h-style').should('be.visible');
    cy.get('.p-thumb-sub.row--s.t-s.t-grey.js-col-thumb__variant_title').should('be.visible');
    cy.get('.cell-l--s.cell-r--s.t-m.f-w500.flex.row-wrap.align-center.gap--d3').should('be.visible');
    cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').should('be.visible');
    cy.get('.btn-reset.wbsk-ui-option-toggle.proxy-selector.proxy-selector--filter-by.flex-grid--xxs').should('be.visible').click();
    cy.get('.modal-sidebar').should('be.visible').and('contain', 'Filter by').and('be.not.empty');
    cy.get('[data-value="Hearts"]').should('be.visible').and('contain', 'Hearts').click();
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.js-filter-nav__toggle.js-filter-nav__update.btn.btn--green').should('be.visible').and('contain', 'APPLY FILTER').click();
  });


});