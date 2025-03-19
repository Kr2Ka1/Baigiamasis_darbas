describe('3. Product Details Page', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950);
    cy.wait(10000);
    cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
    cy.get('#onetrust-accept-btn-handler').click();
  });

  it('3.1 Ensure product images are displayed', () => {
    // cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    // cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Phone Cases').and('be.visible');
    // cy.get('[data-proudct-index="1"] > .column-wrap > .js-prod-thumb > .col-thumb-img > .js-thumb-prod__image').should('be.visible').click();
    // cy.wait(1000);
    // cy.get('.js-prod-image-gallery-carousel-container.embla.block-rel').find('img').should('be.visible');
    // cy.get('.js-prod-image-gallery-thumbs-carousel-container > .embla__container').should('be.visible');
    // cy.get('.js-prod-image-gallery__carousel-pagination').should('be.visible');
    // cy.get('.js-wbsk-product-form.row.block-rel.d-block').should('be.visible');
    // cy.get('.prod-stock__text').should('be.visible').and('not.be.empty');
    //3.1.5 telefono modelio keitimas
    // cy.get('.js-product-phone-model-selector').should('be.visible');//neina pasirinti telefono jo modelio pakeitimui, kad ir kokį trigger pasirenku metama klaida: TypeError: The following error originated from your application code, not from Cypress.
    // cy.get('[data-key="Case Type"]').should('be.visible').and('contain', 'SELECT CASE TYPE').and('not.be.empty');//3.1.6 TC
    cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Insulated Travel Mugs').and('be.visible');
    cy.get('[href="/products/tricked-me-travel-mug"]').should('be.visible').click();
    cy.get('[alt="Tricked Me - Travel Mug 1"]').should('be.visible');
    cy.get('.prod-main-gallery--has-thumbs.block-rel').should('be.visible');
    cy.get('.js-prod-image-gallery__carousel-pagination.embla__pagination').should('be.visible');
    cy.get('.js-pre-order.order-three').should('be.visible').and('contain', 'PRE ORDER');
    cy.get('.js-prod-design-selector').should('be.visible').and('not.be.empty').and('contain', 'More Designs');
    cy.get('.js-prod-drinkware-type-target').should('be.visible').and('contain', 'Type:').and('not.be.empty');
    cy.get('[data-key="Size"]').should('be.visible').and('contain', 'Size:').and('not.be.empty');
    cy.get('[data-key="Lid Type"]').should('be.visible').and('contain', 'Lid Type:', 'Flap').and('not.be.empty');
    cy.get('.js-prod-pre-order-wrapper').should('be.visible').and('contain', '€39,95');
    cy.get('.align-stretch > :nth-child(2) > .js-selector-radio', { timeout: 1000 }).click({ force: true });
    cy.wait(1000);
    cy.get('[data-key="Lid Type"]').should('be.visible').and('contain', 'Lid Type:', 'Straw').and('not.be.empty');



  });

  it('3.2 Verify that you can see Description', () => {
    cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Insulated Travel Mugs').and('be.visible');
    cy.get('[href="/products/tricked-me-travel-mug"]').should('be.visible').click();
    cy.scrollTo(0, 600);
    cy.get('.js-wbsk-product-upsell-wrapper').should('contain', 'Add accessories').and('be.visible');
    cy.get('#shopify-section-product__tag-accordion-sections').should('be.visible').and('contain', 'Description', 'Shipping', 'FAQ');
    // cy.get(':nth-child(2) > .js-prod-accord__title').should('be.visible').and('contain', 'Shipping');//kelis kartus rado, dabar eberanda pagal šį pasirinkimą
    // cy.get(':nth-child(3) > .js-prod-accord__title').should('be.visible').and('contain', 'FAQ');
    cy.get('.js-prod-accord__title.prod-accord__title.prod-accord__title--design').click();
    cy.wait(500);
    cy.get('.prod-accord__content.js-prod-accord__content.rte-content.rte-content--s').eq(0).scrollIntoView().should('be.visible').and('not.be.empty');
    cy.get('.js-prod-accord__title.prod-accord__title.prod-accord__title--design').click();
    cy.get('.js-prod-accord__title.prod-accord__title.prod-accord__title--shipping').scrollIntoView().click();
    cy.get('.r-14dq55h').scrollIntoView().should('be.visible').and('not.be.empty');
    cy.get('.js-prod-accord__title.prod-accord__title.prod-accord__title--faq').scrollIntoView().click();
    cy.get('.prod-accord__content.prod-accord__content--faq-mini-accordion.js-prod-accord__content').should('be.visible').and('not.be.empty');
  });

  it('3.3 Add to cart button', () => {
    cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
    cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Insulated Travel Mugs').and('be.visible');
    cy.get('[href="/products/tricked-me-travel-mug"]').should('be.visible').click();
    cy.wait(1000);
    cy.get('[value="700ml"]').should('exist').invoke('css', 'opacity', '1').and('be.visible').click({force: true});
    cy.get('#addtocartmain').scrollIntoView().should('contain', 'ADD TO CART').and('be.visible').click();
    cy.get('.filter-nav__wrapper.filter-nav__wrapper--right.filter-nav__wrapper--onAtc').should('be.visible').and('contain', 'ADDED TO CART');

  });



});
