describe('3. Product Details Page', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950);
    cy.wait(10000);
    cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
  });

  it.only('3.1 Ensure product images are displayed', () => {
    cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Phone Cases').and('be.visible');
    cy.get('[data-proudct-index="1"] > .column-wrap > .js-prod-thumb > .col-thumb-img > .js-thumb-prod__image').should('be.visible').click();
    cy.get('.js-prod-image-gallery-carousel-container.embla.block-rel').find('img').should('be.visible');
    cy.get('.js-prod-image-gallery-thumbs-carousel-container > .embla__container').should('be.visible');
    cy.get('.js-prod-image-gallery__carousel-pagination').should('be.visible');
    cy.get('.js-wbsk-product-form.row.block-rel.d-block').should('be.visible');
    cy.get('.prod-stock__text').should('be.visible').and('not.be.empty');
    cy.get('.js-product-phone-model-selector').eq(0).should('be.visible');//neina pasirinti telefono jo modelio pakeitimui, kad ir kok5 trigger pasirenku metama klaida: TypeError: The following error originated from your application code, not from Cypress.

  //   > Cannot read properties of undefined (reading 'internalEngine')
  
  // When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
  
  // This behavior is configurable, and you can choose to turn this off by listening to the `uncaught:exception` event.
 
    // cy.get('.modal-sidebar').should('be.visible');
    // cy.get('.js-model-selector-search.reset-input.sidebar-search__input.sidebar-search__input--icon-left').type('iphone 13 mini{enter}');
    // // cy.wait(10000);// nepadeda
    // cy.get('[data-item="iPhone 13 Mini"]').should('be.visible').click(); //- kažkodėl neveikia, rast rada bet nepavyksta paspausti su cypress
    // // cy.get('#357762359089703').should('be.visible').and('contain', 'SELECT CASE TYPE');
    // cy.get('h3.h-style.t-xs.f-w500').should('be.visible').click()
  });

  it('3.2 Verify that you can see Description', () =>{
    cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Phone Cases').and('be.visible');
    cy.get('.js-prod-sticky.prod-content--sticky.block-12/12').should('be.visible').and('contain', 'Description');
  });




});
