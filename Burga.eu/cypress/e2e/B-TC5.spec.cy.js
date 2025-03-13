describe('5. Shopping Cart', () => {
    beforeEach(() => {
      cy.visit('https://eu.burga.com/');
      cy.viewport(1640, 950);
      cy.wait(10000);
      cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
    });
    it('4.1 Test the search bar for products.', () => {
      cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
      cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
      cy.get('.filter-nav__wrapper.filter-nav__wrapper--right.filter-nav__wrapper--onAtc').should('be.visible').and('contain', 'ADDED TO CART');
      cy.get(':nth-child(1) > .btn').should('be.visible').and('contain', 'CONTINUE SHOPPING').click();
      cy.wait(500);
      cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
      cy.get('h1.h-style.h-xxl.f-w700.t-ucase.f-hs').should('contain', 'Insulated Travel Mugs').and('be.visible');
      cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
      cy.wait(500);
      cy.get('.js-wbsk-sidebar-cart__open mh__button.mh__button--cart.btn-reset.block-rel.js-wbsk-sidebar-cart__cart-count-parent.mh__button--cart-has-items').should('be.visible').click();
    });
  
  
  });