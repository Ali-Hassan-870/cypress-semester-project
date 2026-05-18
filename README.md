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