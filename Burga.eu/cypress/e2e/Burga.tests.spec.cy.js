describe('Burga.eu Home Page', () => {
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

  it('1.4 Change the region is visible and accessible', () => {
    cy.viewport(1640, 950);
    cy.get('.ter-toggle').should('be.visible').click();
    cy.get('.ter-select-wrapper.tac.block-rel').should('be.visible');
    cy.get('.is-selected > .wbsk-ui-option-toggle__input').click({ force: true });
    cy.get('.wbsk-ui-option-toggle__options-wrap.wbsk-ui-option-toggle__options-wrap--drop-at-mobile.bdr.bdr-grey.wbsk-ui-option-toggle__options-wrap--is-open').should('be.visible');
    cy.get(':nth-child(2) > .wbsk-ui-option-toggle__input').click({ force: true });
    cy.get('.js-ter-select-navigate').should('contain', 'GO TO STORE').click({ force: true });
  });










});