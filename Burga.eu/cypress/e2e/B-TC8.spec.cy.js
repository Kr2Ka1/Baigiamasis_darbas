describe('8. Customer Support', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950)
    cy.wait(10000);
  });

  it('8.1 Access the Help Center', () => {
    cy.scrollTo('bottom');
    cy.wait(1000);
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(5000);
    cy.get('[href="https://support.burga.com/en-US"]').should('be.visible').and('contain', 'Help Center').click();
    cy.pause();//nepraeina cypress nes fiksuoja kad robotas, o ne žmogus. užfiksuta jira.
  });

  it('Try to connect directly to help center', () => {
    cy.visit('https://support.burga.com/en-US?_gl=1*w4cobj*_gcl_au*MjE0NTU4NDkuMTc0MjIwNzYyMg..*_ga*MTI5MTgzOTU0Mi4xNzQyMjA3NjIx*_ga_5HQMENMVMS*MTc0MjI4NTM2Ni4zLjEuMTc0MjI4NjM2NC41OS4wLjA.');
  });//šią dalį blokuoja serveris kad cypress negalėtų prieiti.

  it('8.3 Does clicking on contact us open a contact form', () => {
    cy.scrollTo('bottom');
    cy.wait(5000);
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(5000);
    cy.get('[href="/pages/contact"]').should('be.visible').and('contain', 'Contact Us').click();
    cy.get('.h-style').should('be.visible').and('contain', 'Contact us');
    // cy.get('.css-ekyqmx.e1qubwr112').should('be.visible').and('not.be.empty');
  });
//BD-10 on jira




});