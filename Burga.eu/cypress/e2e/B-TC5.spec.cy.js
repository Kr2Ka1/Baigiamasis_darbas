function addProductsToCart() {
  cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
  cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
  cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
  cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
}

describe('5. Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950);
    cy.wait(10000);
    cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
  });
  it('5.1 Add products to the cart.', () => {
    cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
    cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
    cy.get('.filter-nav__menu-header > .h-style').should('be.visible').and('contain', 'ADDED TO CART');
    cy.get('.filter-nav__menu-header > .js-atc-modal-close').should('be.visible').click();
  });
  it('5.2 View items in the cart', () => {
    addProductsToCart();
    cy.get('.mh__cart-counter.block-abc.js-wbsk-sidebar-cart__cart-count').should('be.visible').and('not.be.empty').and('contain', '2');
  });
  it('5.3 Update product quantities.', () => {
    addProductsToCart();
    cy.get('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart').should('be.visible').click();
    cy.get('.modal-sidebar').should('be.visible');
    cy.get('.flex.row-wrap.align-center.justify-space.block-rel > .t-grey.lh-reset').should('be.visible').and('contain', '2 Items');
    cy.get('span.qty-selector__ctrl.qty-selector__ctrl--plus').eq(1).click();
    cy.get('.flex.row-wrap.align-center.justify-space.block-rel > .t-grey.lh-reset').should('be.visible').and('contain', '3 Items');
    cy.get('span.qty-selector__ctrl.qty-selector__ctrl--minus').eq(0).click();
    cy.get('.flex.row-wrap.align-center.justify-space.block-rel > .t-grey.lh-reset').should('be.visible').and('contain', '2 Items');
  });

  it('5.4 Remove products from the cart', () => {
    addProductsToCart();
    cy.get('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart').should('be.visible').click();
    cy.get('.modal-sidebar').should('be.visible');
    cy.get('.flex.row-wrap.align-center.justify-space.block-rel > .t-grey.lh-reset').should('be.visible').and('contain', '2 Items');
    cy.get('.cart-item__content > .js-sidebar-cart__remove.sidebar-cart__remove').eq(0).should('be.visible').click();
    cy.get('.flex.row-wrap.align-center.justify-space.block-rel > .t-grey.lh-reset').should('be.visible').and('contain', '1 Item');
  });

  it('5.5 Proceed to checkout, without signing in ', () => {
    addProductsToCart();
    cy.get('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart').should('be.visible').click();
    cy.get('.modal-sidebar').should('be.visible');
    cy.get('.js-goto-checkout').should('be.visible').click();
    cy.get('.i4DWM').should('be.visible').and('not.be.empty');
    cy.get('.gdtca').should('be.visible').and('not.be.empty').and('contain', 'Delivery');
    cy.get('._1mjy8kn1').should('be.visible').and('not.be.empty');
    cy.get('._19gi7yt0').should('be.visible').and('not.be.empty');
    cy.get('._7ozb2uq').eq(7).should('be.visible').type('Discount{enter}');//neturiu galiojančio nuolaidos kodo negaliu pridėti nuolaidos ir patikrinti ar prisideda.
    cy.get('span._7ozb2u1j > p#error-for-ReductionsInput0').should('be.visible').and('contain', 'Enter a valid discount code or gift card');
    // cy.get('[id=error-for-ReductionsInput0]').should('be.visible').and('contain', 'Enter a valid discount code or gift card');//ne visada randa pagal id pasilieku abi opcijas
    cy.get('#shippingAddressForm').should('be.visible');
  });

  
});