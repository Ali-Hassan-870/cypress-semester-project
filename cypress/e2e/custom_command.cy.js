describe('Custom Command Test', () => {

  it('Custom Command: Login using custom cy.login() command', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
    cy.get('.title').should('be.visible')
  })

})