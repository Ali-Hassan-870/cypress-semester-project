## Website Tested
https://www.saucedemo.com

## Prerequisites
- Node.js installed
- Run: npm install

## How to Run Tests

### Open Cypress Browser
npx cypress open

### Task 1 Test Files
- cypress/e2e/login.cy.js — Login tests (valid login, wrong password, empty fields)
- cypress/e2e/navigation.cy.js — Navigation tests (menu links, page sequence)
- cypress/e2e/form.cy.js — Form test (add item to cart and verify count)

### Task 2 Test Files
- cypress/e2e/task2.cy.js — Assertions, aliases and negative assertions
- cypress/e2e/custom_command.cy.js — Custom command test using cy.login()

## Task 1 Test Cases

### Login Tests
- Login Test 1: Valid username and password should redirect to dashboard
- Login Test 2: Wrong password should display error message
- Login Test 3: Empty fields should display validation message

### Navigation Tests
- Navigation Test 1: Clicking menu link opens correct page
- Navigation Test 2: Visit inventory page then cart page in sequence

### Form Test
- Form Test 1: Add item to cart and verify cart badge updates to 1

## Task 2 Test Cases

### Assertion Tests
- Assertion 1: Products title should be visible (be.visible)
- Assertion 2: Products title should have correct text (have.text)
- Assertion 3: Products title should have correct class attribute (have.attr)

### Negative Assertion
- Error message should not exist after successful login (not.exist)

### Alias Test
- Save cart button as alias and use it to navigate to cart page

### Custom Command
- cy.login(username, password) defined in cypress/support/commands.js
- Reusable login command used instead of repeating login steps manually

## Task 2 — What I Found Difficult
Setting up aliases was initially confusing because I was not sure when to
use cy.get('@alias') versus cy.get('.selector'). After testing I found that
aliases are most useful when you need to reference the same element multiple
times in one test to avoid repeating the selector. Using as() made the test
cleaner and easier to read. I also faced an issue with the have.attr assertion
where the attribute value did not match exactly, which I resolved by targeting
a different element with a more straightforward attribute.