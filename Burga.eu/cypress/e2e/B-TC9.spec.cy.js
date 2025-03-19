describe('9. Footer Links', () => {
  beforeEach(() => {
    cy.visit('https://eu.burga.com/');
    cy.viewport(1640, 950);
    cy.wait(10000);
     cy.get('.needsclick.klaviyo-close-form.go4255485812.kl-private-reset-css-Xuajs1').click();
  });

  it('9.1 Navigate to and verify that "About Us" page and information is visible', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('[href="/pages/about-us"]').should('be.visible').and('contain', 'About Us').click();
    cy.get('.h-style').should('be.visible').and('contain', 'About Us');
    cy.get('.block-c > .rte-content').should('be.visible').and('not.be.empty');
  });

  it('9.2 Navigate to and verify that "Blog" section page and information is visible', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('[href="https://burga.com/blogs/news"]').should('be.visible').and('contain', 'Blog');
    // cy.wait(500);
    // cy.origin('https://burga.com', () => {
    //   cy.visit('/blogs/news');
    //   cy.get('h1.h-style').should('be.visible').and('contain', 'The BURGA Reading List');
    //   cy.get('.ct--m.grid.grid--f').should('be.visible').and('not.be.empty');
    // });
  });

  it('9.3 Navigate to and verify that "Partnerships and Collaborations" section page and information is visible', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(1000);
    cy.get('[href="/pages/partnerships-collaborations"]').should('be.visible').and('contain', 'Partnerships and Collaborations').click();
    cy.get('.r-1c743lo > span > h3 > strong').should('be.visible').and('contain', 'Join our Partnerships Family');
    cy.get('.r-1rludnl > p > strong > span').should('be.visible').and('contain', 'Click Here').click();
    
    cy.get('[href="http://app.impact.com/campaign-campaign-info-v2/BURGA.brand?io=dvWtluhbAq%2F9%2Fk9JQrkFx1N%2Ftx6s3zhq0Ylnx2I6tccuQf5zXuGpVS94J2GfuR%2Fa"]')
    .should('have.attr', 'href')
    .and('include', 'href="http://app.impact.com/campaign-campaign-info-v2/BURGA.brand?io=dvWtluhbAq%2F9%2Fk9JQrkFx1N%2Ftx6s3zhq0Ylnx2I6tccuQf5zXuGpVS94J2GfuR%2Fa');

  });

  it.only('9.4 Check if the redirect to Instagram works', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(1000);
    cy.get('[href="https://www.instagram.com/burgaofficial/"]').should('be.visible').and('contain', 'Instagram');
  //   cy.wait(500);
  //   cy.get('a.instagram-link')
  // .should('have.attr', 'href')
  // .and('include', 'instagram.com');
  });


  it('9.5 Check if the redirect to Facebook works', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(1000);
    cy.get('[href="https://www.facebook.com/BurgaOfficial/"]').should('be.visible').and('contain', 'Facebook').click();
    cy.wait(500);
    //tikrinam tik ar yra href, nes nukreipimas po click įvyksta
  });

  it('9.6 Check if the redirect to TikTok works', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(1000);
    cy.get('[href="https://www.tiktok.com/@burgaofficial"]').should('be.visible').and('contain', 'TikTok').click();
    cy.wait(500);
    //tikrinam tik ar yra href, nes nukreipimas po click įvyksta
  });

  it('9.7 Check if the redirect to YouTube works', () => {
    cy.scrollTo('bottom');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(1000);
    cy.get('[href="https://www.youtube.com/@burgaofficial"]').should('be.visible').and('contain', 'YouTube').click();
    cy.wait(500);
    //tikrinam tik ar yra href, nes nukreipimas po click įvyksta
  });

});