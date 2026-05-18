describe('Navigation Tests - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  // Navigation Test 1 - Click menu link
  it('Navigation Test 1: Clicking About menu link opens correct page', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').should('be.visible')
    cy.url().should('include', '/inventory')
  })

  // Navigation Test 2 - Visit 2 pages in sequence
  it('Navigation Test 2: Visit inventory then cart page', () => {
    cy.url().should('include', '/inventory')
    cy.get('.title').should('contain', 'Products')
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('.title').should('contain', 'Your Cart')
  })

})