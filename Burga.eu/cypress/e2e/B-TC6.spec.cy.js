function addProductsToCart() {
  cy.get('.embla__container > [href="/collections/all"]').should('be.visible').click();
  cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
  cy.get('.embla__container > [href="/collections/travel-mugs"]').should('be.visible').click();
  cy.get('.btn-reset.col-thumb-btn.col-thumb-btn--atc').first().should('be.visible').click();
}


describe('6. Checkout Process', () => {
    beforeEach(() => {
      cy.visit('https://eu.burga.com/');
      cy.viewport(1640, 950)
    }); 
    it('6.5 Proceed to checkout, without signing in ', () => {
      addProductsToCart();
      cy.get('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart').should('be.visible').click();
      cy.get('.modal-sidebar').should('be.visible');
      cy.get('.js-goto-checkout').should('be.visible').click();
      cy.get('.ZHJU6').should('be.visible');//segmetą randa.
      // cy.get('.ZHJU6').should('be.visible').should('have.prop', 'tagName', 'SELECT').select('Lithuania').should('have.value', 'LT');//nepavyksta niekaip paselectinti šalies, randa daugiau nei vieną ir neleidžia pasirinkti vieno//ai bandymas
      // bėda kad rada daugiau nei vieną ir neina pasirinkti nei vieno konkrečiai, nepadeda net eq(0).!!!!!!!!!!!!!!!
      cy.get('._7ozb2uq').eq(0).should('have.attr', 'placeholder', 'Email').should('be.visible').type('Vard@test.lko')
      cy.get('#marketing_opt_in').should('be.visible').click();
      cy.get('._7ozb2uq').eq(1).should('have.attr', 'placeholder', 'First name').should('be.visible').type('Vardenė');
      cy.get('._7ozb2uq').eq(2).should('have.attr', 'placeholder', 'Last name').should('be.visible').type('Pavardenė');
      cy.get('._7ozb2uq').eq(3).should('have.attr', 'placeholder', 'Address').should('be.visible').type('Testinė g. 5');
      cy.get('._7ozb2uq').eq(4).should('have.attr', 'placeholder', 'City').should('be.visible').type('Testaunas');
      cy.get('._7ozb2uq').eq(5).should('have.attr', 'placeholder', 'Postal code').should('be.visible').type('01234');
      cy.get('._7ozb2uq').eq(6).should('have.attr', 'placeholder', 'Phone').should('be.visible').type('61234567');
      cy.get('.yyi4nyv').eq(0).should('be.visible').and('not.be.empty').and('contain', 'Standard Delivery');
      // cy.get('[id=card-fields-number-7g50f7n73ey00000]').should('have.attr', 'placeholder', 'Card number').should('be.visible').type('1234567890123456');//niekaip neranda elemento. net cypress taikinio nurodytas neaptinkamas.
      // cy.get('p[id=error-for-number]').should('be.visible').and('contain', 'Enter a valid card number');//taip pat neina pasirinkti
      // cy.get('#expiry').eq(2).should('be.visible').type('1227');//irgi neranda
    });

    it.only('5.6 If data is entered incorrectly, errors are displayed. ', () => {
      addProductsToCart();
      cy.get('.js-wbsk-sidebar-cart__open.mh__button.mh__button--cart').should('be.visible').click();
      cy.get('.modal-sidebar').should('be.visible');
      cy.get('.js-goto-checkout').should('be.visible').click();
      cy.get('#email').eq(0).should('have.attr', 'placeholder', 'Email').should('be.visible').type('Vard.test.lko')
      cy.get('#marketing_opt_in').should('be.visible').click();
      // cy.get('#error-for-email').should('be.visible').and('contain', 'Missing a valid contact method.');//kartais rada kartais ne klaidos pranešimo
      cy.get('._7ozb2uq').eq(1).should('have.attr', 'placeholder', 'First name').should('be.visible').type('Vardenė');
      cy.get('._7ozb2uq').eq(2).should('have.attr', 'placeholder', 'Last name').should('be.visible').type('Pavardenė');
      cy.get('._7ozb2uq').eq(3).should('have.attr', 'placeholder', 'Address').should('be.visible').type('Testinė g. 5');
      cy.get('._7ozb2uq').eq(4).should('have.attr', 'placeholder', 'City').should('be.visible').type('Testaunas');
      cy.get('._7ozb2uq').eq(5).should('have.attr', 'placeholder', 'Postal code').should('be.visible').type('MHHJJ{enter}');
      //cy.get('[id=error-for-TextField4]').should('exist'); meta keistą klaidą:AssertionError: Timed out retrying after 4000ms: expected '<p#error-for-email.ksaxnz0._1fragemn5>' to contain 'Missing a valid contact method.' - net neieškat šios info.
      cy.get('[id=error-for-TextField4]').should('exist').should('be.visible').and('contain', 'Enter a valid postal code for Lithuania');
      // cy.get('._7ozb2uq').eq(6).should('have.attr', 'placeholder', 'Phone').should('be.visible').type('6123456755{enter}');
      // cy.get('#error-for-TextField5.ksaxnz0 _1fragemn5').should('be.visible').and('contain', 'Enter a valid phone number');
      // cy.get('.yyi4nyv').eq(0).should('be.visible').and('not.be.empty').and('contain', 'Standard Delivery');
    });
  
  
  });