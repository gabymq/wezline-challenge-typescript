## Front-End Testcafe Challenge

### Follow the instructions provided below:

1. Create a new automation project whit Testcafe
2. Use POM to structure the new project
3. Automate the given scenarios for the sample page https://www.saucedodemo.com/ provided:

1. Login a valid user
a. Expected: Valid user navigates to the product's page

2. Login with an invalid user
a. Expected: Validate error message is displayed

3. Logout from product's page:
a. Expected: Validate user navigates to the login page

4. Navigate to the shopping Create
a. Expected:
Validate user navigates to the shopping cart page

5. Add a single item to the shopping cart
a. Expected: Validate user navigates the item has been added to the shopping cart

6. Add multiple items to the shopping cart
a. Expected: Validate all the items have been added to the shopping cart

7. Continue with missing mail information
a. Expected: Validate error message is displayed in the user's information page

8. Fill user's information
a. Expected: Validate the user navigates to the overview page once the his data has been filled

9. Final order items
a. Expected> Validate items in the overview page match with the added items

10. Complete a purchase
a. Expected: Validate the user navigates to the confirmation page.

### Bonus

This section contains some items that might be added to the automation.

- Use Testcafe roles
https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html

- Data provider for the testdata
- Test data reporter
- Multi-browser testing
https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/concurrent-test-execution.html