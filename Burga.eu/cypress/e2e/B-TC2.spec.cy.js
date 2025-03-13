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
      cy.get('.btn-reset.wbsk-ui-option-toggle.proxy-selector.proxy-selector--filter-by.flex-grid--xxs').should('be.visible').as('filterBtn');
      cy.get('@filterBtn').click();
      cy.get('.modal-sidebar').should('be.visible').and('contain', 'Filter by').and('be.not.empty');
      cy.get('[data-value="Hearts"]').should('be.visible').and('contain', 'Hearts').as('hearts');
      cy.get('@hearts').click();
      // cy.get('.flex.row-wrap.align-center.justify-left.flex-grid--s.cell-l--s.cell-r--s').should('be.visible').and('contain', 'Hearts');//kažkodėl neina pasirinkti patikrinimui ar išsifiltravo širdutės.
      cy.get('#onetrust-accept-btn-handler').should('be.visible').click();
      cy.get('.js-filter-nav__toggle.js-filter-nav__update.btn.btn--green').should('be.visible').and('contain', 'APPLY FILTER').click();
      cy.get('.wbsk-ui-option-toggle__option.is-selected').should('be.visible')
      // cy.get('.wbsk-ui-option-toggle__option-content').should('be.visible').invoke('text').should('contain', 'Alphabetically, A-Z').click();
      // cy.get('#sort-options').should('have.value', 'title-ascending');// neina pasirinkti rykiavimo reikia išspręsti. 
      
  
    });
  
  
  });