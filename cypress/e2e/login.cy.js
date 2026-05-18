describe('Login Tests - SauceDemo', () => {

  // Login Test 1 - Valid credentials
  it('Login Test 1: Valid login should go to dashboard', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
    cy.get('.title').should('be.visible')
  })

  // Login Test 2 - Wrong password
  it('Login Test 2: Wrong password should show error message', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  // Login Test 3 - Empty fields
  it('Login Test 3: Empty fields should show validation message', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

})