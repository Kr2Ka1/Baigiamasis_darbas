describe('4. Search Functionality', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950);
    cy.wait(10000);
    cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
  });

  it('4.1 Test the search bar for products.', () => {
    //shearch with suggestions
    cy.get('.mh__button.mh__button--search.btn-reset.js-wbsk-sidebar-search__open').should('be.visible').click();
    cy.get('.block-fh.wbsk-ui-scroll-flex.js-sidebar-search__wrapper').should('be.visible');
    cy.get('.js-sidebar-search__input.reset-input.sidebar-search__input.sidebar-search__input--icon-left').type('pink');
    cy.wait(5000);
    cy.get('.f-w600.d-block.cell-l.cell-r.t-ucase').should('be.visible').and('contain', 'Suggestions');
    cy.get(':nth-child(2) > .search-hint__btn').should('be.visible').click();
    cy.get('.align-stretch').should('be.visible').and('not.be.empty');
    cy.get('.flex.column-wrap.block-mfrh').should('be.visible').and('contain', 'Pink Beach');
    //search product
    cy.get('.mh__button.mh__button--search.btn-reset.js-wbsk-sidebar-search__open').should('be.visible').click();
    cy.get('.block-fh.wbsk-ui-scroll-flex.js-sidebar-search__wrapper').should('be.visible');
    cy.get('.js-sidebar-search__input.reset-input.sidebar-search__input.sidebar-search__input--icon-left').type('drinkware');
    cy.get('.f-w600.d-block.cell-l.cell-r.row.t-ucase').should('be.visible').and('contain', 'Products');
    cy.get('#shopify-section-predictive-search-sidebar').should('be.visible').and('not.be.empty');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('a.d-block.btn.btn--bdr').should('be.visible').and('contain', 'VIEW ALL  RESULTS').click();
    cy.get('.js-ajax-search-results').should('be.visible').and('contain','Travel Mug');
 
  });

});