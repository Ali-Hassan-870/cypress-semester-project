describe('Task 2 - Assertions, Aliases & Custom Commands', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    // Assertion 1 - be.visible
    it('Assertion 1: Products title should be visible', () => {
        cy.get('.title').should('be.visible')
    })

    // Assertion 2 - have.text
    it('Assertion 2: Products title should have correct text', () => {
        cy.get('.title').should('have.text', 'Products')
    })

    // Assertion 3 - have.attr
    it('Assertion 3: Products title should have correct class attribute', () => {
        cy.get('.title').should('have.attr', 'class', 'title')
    })

    // Negative Assertion
    it('Negative Assertion: Error message should not exist on successful login', () => {
        cy.get('[data-test="error"]').should('not.exist')
    })

    // Alias Practice
    it('Alias Practice: Save cart element as alias and use it', () => {
        cy.get('.shopping_cart_link').as('cartButton')
        cy.get('@cartButton').should('be.visible')
        cy.get('@cartButton').click()
        cy.url().should('include', '/cart')
    })

})