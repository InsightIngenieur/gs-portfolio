describe('Home Page', () => {
  it('successfully loads and interacts', () => {
    cy.visit('/');
    cy.contains('Welcome').should('be.visible');
    cy.get('button').click();
    cy.url().should('include', '/new-page');
  });
});