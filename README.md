# ElectroNeek-Challenge 

<p align="center">
  <img src="images/electroneekLogo.PNG" width="800" height="250"/>
</p>

ElectroNeek-Challenge is a TypeScript-based Playwright project that uses the Page Object Model to test swag labs page. This project currently serves as a proof of concept for automated testing using Playwright.

## 🛠️ Prerequisites

To use ElectroNeek-Challenge, you will need the following tools installed:
```bash
- Node.js
- TypeScript
- Playwright
```

## ⚙️ Recommended IDE and Extension

We recommend using Visual Studio Code as your IDE for ElectroNeek-Challenge. Additionally, we recommend installing the Playwright Test extension for Visual Studio Code, which provides advanced testing capabilities for Playwright scripts. You can download the extension from the Visual Studio Code Marketplace: [Playwright Test for VSCODE](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

## 🚀 Getting Started

To get started with ElectroNeek-Challenge, follow these steps:

```bash
1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the tests by running `npx playwright test` or 
`npx playwright test --project chromium --headed`
4. To Open last HTML report run `npx playwright show-report`

```

## 🚀 Scenarios

### Happy Paths

```bash
Test 1: Buy a product

Steps:
1.Navigate to the homepage.
2.Click on the login button.
3.Enter the username in the corresponding field.
4.Enter the password in the corresponding field.
5.Click on the login button.
6.Verify that the welcome message is displayed on the homepage.
7.Click on the products button.
8.Verify that the product list is displayed.
9.Select a product from the list.
10.Verify that the information of the selected product is displayed.
11.Add the product to the cart.
12.Click on the cart button.
13.Verify that the product list is displayed in the cart.
14.Verify that the selected product is in the cart.
15.Perform an action in the cart (e.g., remove the product).
16.Verify that the selected product is no longer in the cart.
17.Click on the checkout button.
18.Enter the purchase details on the payment information page.
19.Click on the checkout button.
20.Verify that the purchase summary is displayed.
21.Verify that the purchase information is correct.
22.Click on the checkout button.
23.Verify that the thank you page is displayed.

Test 2: Remove products until to buy them

Steps:
1.Log in to the page.
2.Add three products to the cart.
3.Navigate to the shopping cart.
4.Verify the first product in the cart.
5.Verify the second product in the cart.
6.Verify the third product in the cart.
7.Remove all products from the cart.
8.Verify that the cart is empty.
```

### Unhappy Paths

```bash
Test 3: Locked out user

Steps:
1.Log in to the page with a locked user.
2.Verify that the locked user message is displayed.
3.Invalid user last name:
4.Steps:

Test 4: Navigate to the login page.
Steps:
1.Enter the username 'problem_user'.
2.Enter the password 'secret_sauce'.
3.Click on the login button.
4.Navigate to the products page.
5.Get the list of available products.
6.Select the first product from the list.
7.Add the product to the cart.
8.Navigate to the cart page.
9.Start the checkout process.
10.Enter the name 'pepe' in the payment information form.
11.Enter the last name 'perez' in the payment information form.
12.Enter the postal code '1234' in the payment information form.
13.Continue to the checkout overview.
14.Verify if the error message 'Error: Last Name is required' is displayed.
15.Verify if the last name field with error is displayed.
```