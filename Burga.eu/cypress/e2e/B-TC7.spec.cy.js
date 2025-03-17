const { it } = require("node:test");

describe('7. User Account', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950)
  });

  it('7.1 Register a new account', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
    cy.get('.cell-l > .btn').should('be.visible').and('contain', 'CREATE ACCOUNT').click();
    cy.get('h1.h-style').should('be.visible').and('contain', 'CREATE AN ACCOUNT');
    cy.get('#FirstName').should('have.attr', 'placeholder', 'First Name').should('be.visible').type('Vardenis');
    cy.wait(1000);
    cy.get('#LastName').should('have.attr', 'placeholder', 'Last Name').should('be.visible').type('Pavardenis');
    cy.get('#Email').should('have.attr', 'placeholder', 'Email address').should('be.visible').type('Vardenis_testas@testas.lt');
    cy.get('#CreatePassword').should('have.attr', 'placeholder', 'Password').should('be.visible').type('TestasTestas1#');
    cy.get(':nth-child(7) > .reset-input').should('have.attr', 'placeholder', 'Confirm Password').should('be.visible').type('TestasTestas1#');
    cy.get('.block-r > .btn').should('be.visible').and('contain', 'CREATE ACCOUNT').click();
    cy.pause();
    // cy.get('h2.h-style.h-xxl.f-w500.t-ucase.row--m.tac').should('be.visible').and('contain', 'Order History');// nealiu tęsti testo, puslapis nebepraleidžia cypress klaida jira.
  });//antrą kartą nebesuveiksiantis testas nes sukurtas prisijungimas

  it('7.2 Log in to an existing account, through the account creation page', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
    cy.get('.cell-l > .btn').should('be.visible').and('contain', 'CREATE ACCOUNT').click();
    cy.get('h1.h-style').should('be.visible').and('contain', 'CREATE AN ACCOUNT');
    cy.get('.block-c.tac.flex.row-wrap.align-center.justify-center').should('be.visible').and('contain', 'Already a member? Sign in').click();
    cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
    cy.wait(10000);
    cy.get('#CustomerEmail').should('have.attr', 'placeholder', 'Email address').should('be.visible').and('be.enabled').type('Vardenis_testas@testas.lt', { delay: 100 });
    cy.get('#CustomerPassword').should('have.attr', 'placeholder', 'Password').should('be.visible').type('TestasTestas1#');
    cy.get('#customer_login > .block-r > .btn').should('be.visible').and('contain', 'LOG IN').click();//ta pati problema kaip ir su 7.1 prisijungti ir patikrinti neina.
    // cy.get('.js-mh__account-link').should('be.visible').click();
    // cy.get('h2.h-style.h-xxl.f-w500.t-ucase.row--m.tac').should('be.visible').and('contain', 'Order History');

  });

  it('7.2 Log in to an existing account, through the account creation page', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
    cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
    cy.wait(10000);
    cy.get('#CustomerEmail').should('have.attr', 'placeholder', 'Email address').should('be.visible').and('be.enabled').type('Vardenis_testas@testas.lt', { delay: 100 });
    cy.get('#CustomerPassword').should('have.attr', 'placeholder', 'Password').should('be.visible').type('TestasTestas1#');
    cy.get('#customer_login > .block-r > .btn').should('be.visible').and('contain', 'LOG IN').click();//ta pati problema kaip ir su 7.1 prisijungti ir patikrinti neina.    cy.get('.js-mh__account-link').should('be.visible').click();
    // cy.get('h2.h-style.h-xxl.f-w500.t-ucase.row--m.tac').should('be.visible').and('contain', 'Order History');
  });
  // 7.3 / 7.4 / 7.5 /7.6 - negaliu testuoti nes neina per cypress prisijugnti prie puslapui identifikavimo apsauga nepraleidžia.
  it(' 7.7 Check that the password reminder works', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
    cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
    cy.get('.block-c.tac.cb--s.flex.row-wrap.align-center.justify-center').should('be.visible').and('contain', 'Forgot your password?').click();
    cy.get('h2.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'RESET PASSWORD');
    cy.get('#RecoverEmail').should('have.attr', 'placeholder', 'Email address').should('be.visible').type('Vardenis_testas@testas.lt');
    cy.get('#customer_reset > form > .block-r > .btn').should('be.visible').and('contain', 'CONFIRM').click();
    cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
  });

  it('7.8 Start getting a renewed password and cancel it', () => {
    cy.get('.js-mh__account-link').should('be.visible').click();
    cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
    cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
    cy.get('.block-c.tac.cb--s.flex.row-wrap.align-center.justify-center').should('be.visible').and('contain', 'Forgot your password?').click();
    cy.get('h2.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'RESET PASSWORD');
    cy.get('#RecoverEmail').should('have.attr', 'placeholder', 'Email address').should('be.visible').type('Vardenis_testas@testas.lt');
    cy.get('#customer_reset > form > .block-c > a > u').should('be.visible').and('contain', 'Cancel reset').click();
    cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
  });

  // it.only('Try to login with wrong info', () => {
  //   cy.get('.js-mh__account-link').should('be.visible').click();
  //   cy.get('.h-style.h-m.row.f-w500').should('contain', 'CREATE AN ACCOUNT').and('be.visible');
  //   cy.get('h1.h-style.h-l.f-w500.row').should('be.visible').and('contain', 'WELCOME BACK');
  //   cy.get('#customer_login > .block-r > .btn').should('be.visible').and('contain', 'LOG IN').click();
  //   // cy.on('window:alert', (text) => {
  //   //   expect(text).to.equal('Please fill in this field.');
  //   // });
  // });


});