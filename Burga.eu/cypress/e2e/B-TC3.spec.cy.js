describe('3. Product Details Page', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950)
  });

  it('3.1 Ensure product images are displayed', () => {
    cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    cy.wait(10000);
    cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Phone Cases').and('be.visible');
    cy.get('[data-proudct-index="1"] > .column-wrap > .js-prod-thumb > .col-thumb-img > .js-thumb-prod__image').should('be.visible').click();
    cy.get('.js-prod-image-gallery-carousel-container.embla.block-rel').find('img').should('be.visible');
    cy.get('.js-prod-image-gallery-thumbs-carousel-container > .embla__container').should('be.visible');
    cy.get('.js-prod-image-gallery__carousel-pagination').should('be.visible');
    cy.get('.js-wbsk-product-form.row.block-rel.d-block').should('be.visible');
    cy.get('.js-prod-accord__title.prod-accord__title.prod-accord__title--design.ct.cb.cell-r').should('be.visible').click();//po click neužsikrauna puslapis.
    cy.get('.js-prod-sticky.prod-content--sticky.block-12/12').should('be.visible').and('contain', 'Description');
    // cy.get('.js-product-phone-model-selector.btn-reset.wbsk-ui-option-toggle.proxy-selector').should('be.visible').click();
    // cy.get('.modal-sidebar').should('be.visible');
    // cy.get('.js-model-selector-search.reset-input.sidebar-search__input.sidebar-search__input--icon-left').type('iphone 13 mini{enter}');
    // // cy.wait(10000);// nepadeda
    // cy.get('[data-item="iPhone 13 Mini"]').should('be.visible').click(); //- kažkodėl neveikia, rast rada bet nepavyksta paspausti su cypress
    // // cy.get('#357762359089703').should('be.visible').and('contain', 'SELECT CASE TYPE');
    // cy.get('h3.h-style.t-xs.f-w500').should('be.visible').click()
  });







});
