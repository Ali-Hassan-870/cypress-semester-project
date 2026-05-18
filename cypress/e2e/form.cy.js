describe('Form Test - SauceDemo', () => {

  it('Form Test 1: Add item to cart and verify cart count updates', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

})