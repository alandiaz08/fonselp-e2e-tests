import { test, expect } from '@playwright/test';
import {loginPage} from "../pages/swaglabs/pages/loginPage";
import {productsPage} from "../pages/swaglabs/pages/productsPage";
import {productResultList} from "../pages/swaglabs/components/productResultList";
import {productResultItem} from "../pages/swaglabs/components/productResultItem";
import {yourCartPage} from "../pages/swaglabs/pages/yourCartPage";
import {header} from "../pages/swaglabs/components/header";
import {checkoutYourInformationPage} from "../pages/swaglabs/pages/checkoutYourInformationPage";
import {yourCartResultItem} from "../pages/swaglabs/components/yourCartResultItem";
import {yourCartResultList} from "../pages/swaglabs/components/yourCartResultList";
import * as assert from "assert";
import {checkoutOverviewResultList} from "../pages/swaglabs/components/checkoutOverviewResultList";
import {checkoutOverviewPage} from "../pages/swaglabs/pages/checkoutOverviewPage";
import {checkoutOverviewResultItem} from "../pages/swaglabs/components/checkoutOverviewResultItem";
import {thankYouPage} from "../pages/swaglabs/pages/thankYouPage";

test.describe('Demo Challenge Tests', () => {
    test('Happy paths - Buy a product', async ({ page }, testInfo) => {
        // Arrange
        const user = 'standard_user';
        const password = 'secret_sauce';
        const productNameExpected = 'Sauce Labs Backpack';
        const productDescriptionExpected = 'carry.allTheThings() with the sleek,'
            + ' streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
        const productPriceExpected = "$29.99";
        const thankYouMessage =  'Thank you for your order!';
        const thankYouMessageDescription = 'Your order has been dispatched,'
            + ' and will arrive just as fast as the pony can get there!'
        const login = new loginPage(page);


        // Act: Login with a standard user
        await login.navigateToLoginPage();
        await login.inputUserName(user)
            .then(() => login.inputPassword(password))
            .then(() => login.login());

        // Arrange II: Get product details
        const products = new productsPage(page)
        const productList = new productResultList(page, await products.getProductsListContainer());
        const productItems =
            new productResultItem(page, await productList.getProductItemByIndex(0));


        //Assert I: Verify product details
        assert.equal(await productItems.getName(), productNameExpected,
            'The product is not: ' + productNameExpected)
        assert.equal(await productItems.getDescription(), productDescriptionExpected,
            'The product description is not: ' + productDescriptionExpected)
        assert.equal(await productItems.getPrice(), productPriceExpected,
            'The product price is not:'+ productPriceExpected)

        // Act II: Add product to cart
        await productItems.addToCart();

        // Arrange III: Go to cart and verify cart item
        const headers = new header(page);

        await headers.goToYourCart()

        const cart = new yourCartPage(page)
        const cartList = new yourCartResultList(page,await cart.getCartListContainer())
        const cartItems = new yourCartResultItem(page, await cartList.getCartItemByIndex(0))

        //Assert II: Verify cart item details

        assert.equal(await cartItems.getCartProductName(), productNameExpected,
            'The product is not: ' + productNameExpected);
        assert.equal(await cartItems.getCartProductDescription(), productDescriptionExpected,
            'The product description is not: ' + productDescriptionExpected);
        assert.equal(await cartItems.getCartProductPrice(), productPriceExpected,
            'The product price is not:'+ productPriceExpected);

        await expect(await cartItems.hasCartProductName()).toBe(true);
        await expect(await cartItems.hasCartProductDescription()).toBe(true);
        await expect(await cartItems.hasCartProductPrice()).toBe(true);
        await expect(await cartItems.hasRemoveButton()).toBe(true);

        //Act III: Proceed to checkout
        await cart.checkout();
        const checkout = new checkoutYourInformationPage(page);
        await checkout.enterFirstName('pepe')
            .then(() => checkout.enterLastName('perez'))
            .then(() => checkout.enterPostalCode('1234'))
            .then(() => checkout.goToCheckoutOverview());


        const checkoutOverview = new checkoutOverviewPage(page);
        const checkoutOverviewList = new checkoutOverviewResultList(page,
            await checkoutOverview.getCheckoutOverviewListContainer());
        const checkoutOverviewItems = new checkoutOverviewResultItem(page,
            await checkoutOverviewList.getCheckoutOverviewProductsByIndex(0));

        //Assert III: Verify checkout overview details
        assert.equal(await checkoutOverviewItems.getCartProductName(), productNameExpected,
            'The product is not: ' + productNameExpected);
        assert.equal(await checkoutOverviewItems.getCartProductDescription(), productDescriptionExpected,
            'The product description is not: ' + productDescriptionExpected);
        assert.equal(await checkoutOverviewItems.getCartProductPrice(), productPriceExpected,
            'The product price is not: '+ productPriceExpected);

        await expect(await checkoutOverview.hasShippingInformation()).toBe(true);
        await expect(await checkoutOverview.hasPaymentInformation()).toBe(true);
        await expect(await checkoutOverview.hasPriceTotalItem()).toBe(true);
        await expect(await checkoutOverview.hasTax()).toBe(true);

        await checkoutOverview.finish();

        //Arrange: Go to thank you page
        const thankYou = new thankYouPage(page);

        //Assert IV: Verify thank you page details
        assert.equal(await thankYou.getThankYouMessage(), thankYouMessage,
            'The thank you message is not: ' + thankYouMessage);
        assert.equal(await thankYou.getThankYouDescription(), thankYouMessageDescription,
            'The thank you message description is not: ' + thankYouMessageDescription);

        await expect(await thankYou.hasThankYouMessage()).toBe(true);
        await expect(await thankYou.hasThankYouDescription()).toBe(true);
        await expect(await thankYou.hasLogo()).toBe(true);
        await expect(await thankYou.hasBackHomeButton()).toBe(true);
    });

    test('Happy paths - Remove products util to buy them', async ({ page }, testInfo) => {
        // Arrange
        const user = 'standard_user';
        const password = 'secret_sauce';
        const firstProductNameExpected = 'Sauce Labs Backpack';
        const firstProductPriceExpected = "$29.99";
        const secondProductNameExpected = 'Sauce Labs Bike Light';
        const secondProductPriceExpected = "$9.99";
        const thirdProductNameExpected = 'Sauce Labs Bolt T-Shirt';
        const thirdProductPriceExpected = "$15.99";
        const login = new loginPage(page);

        //Act I: Login
        await login.navigateToLoginPage();
        await login.inputUserName(user)
            .then(() => login.inputPassword(password))
            .then(() => login.login());

        // Act II: Add products to cart
        const products = new productsPage(page)
        const productList = new productResultList(page, await products.getProductsListContainer());
        let productItems =
            new productResultItem(page, await productList.getProductItemByIndex(0));

        await productItems.addToCart();
        productItems =
            new productResultItem(page, await productList.getProductItemByIndex(1));
        await productItems.addToCart();
        productItems =
            new productResultItem(page, await productList.getProductItemByIndex(2));
        await productItems.addToCart();

        const headers = new header(page);
        await headers.goToYourCart()
        const cart = new yourCartPage(page)
        const cartList = new yourCartResultList(page,await cart.getCartListContainer())
        let cartItems = new yourCartResultItem(page, await cartList.getCartItemByIndex(0))

        //Assert I: Check the first product in the cart
        assert.equal(await cartItems.getCartProductName(), firstProductNameExpected,
            'The product is not: ' + firstProductNameExpected)
        assert.equal(await cartItems.getCartProductPrice(), firstProductPriceExpected,
            'The product price is not:'+ firstProductPriceExpected)

        //Act III: Check the second product in the cart
        cartItems = new yourCartResultItem(page, await cartList.getCartItemByIndex(1))

        //Assert II: Check the second product in the cart
        assert.equal(await cartItems.getCartProductName(), secondProductNameExpected,
            'The product is not: ' + secondProductNameExpected)
        assert.equal(await cartItems.getCartProductPrice(), secondProductPriceExpected,
            'The product price is not:'+ secondProductPriceExpected)

        //Act IV: Check the third product in the cart
        cartItems = new yourCartResultItem(page, await cartList.getCartItemByIndex(2))

        //Assert III: Check the third product in the cart
        assert.equal(await cartItems.getCartProductName(), thirdProductNameExpected,
            'The product is not: ' + thirdProductNameExpected)
        assert.equal(await cartItems.getCartProductPrice(), thirdProductPriceExpected,
            'The product price is not:'+ thirdProductPriceExpected)

        //Act V: Remove products from cart
        cartItems = new yourCartResultItem(page, await cartList.getCartItemByIndex(0))

        while (await cartList.getCartItemResultsNumber() > 0) {
            await cartItems.removeFromCart();
        }

        //Assert IV: Check that the cart is empty
        await expect(await cartList.getCartItemResultsNumber()).toBe(0)
    });

    test('Unhappy paths - Locked out user', async ({ page }, testInfo) => {
        // Arrange
        const user = 'locked_out_user';
        const password = 'secret_sauce';
        const lockedMessageExpected = 'Epic sadface: Sorry, this user has been locked out.';

        const login = new loginPage(page);


        // Act: Login with a locked user
        await login.navigateToLoginPage();
        await login.inputUserName(user)
            .then(() => login.inputPassword(password))
            .then(() => login.login());

        //Assert I: Check the locked user message
        assert.equal(await login.getLockedMessage(), lockedMessageExpected,
            'The locked user message is not: ' + lockedMessageExpected)

        // Assert II: Check if the locked message is displayed
        await expect(await login.hasLockedMessage()).toBe(true);
    });

    test('Unhappy paths - Invalid user last name', async ({ page }, testInfo) => {
        // Arrange
        const user = 'problem_user';
        const password = 'secret_sauce';
        const errorLastNameMessageExpected = 'Error: Last Name is required';

        //Act: Perform login with invalid user last name
        const login = new loginPage(page);
        await login.navigateToLoginPage();
        await login.inputUserName(user)
            .then(() => login.inputPassword(password))
            .then(() => login.login());

        // Arrange II: Add a product to cart and proceed to checkout
        const products = new productsPage(page)
        const productList = new productResultList(page, await products.getProductsListContainer());
        const productItems =
            new productResultItem(page, await productList.getProductItemByIndex(0));

        await productItems.addToCart();

        const headers = new header(page);

        await headers.goToYourCart()

        const cart = new yourCartPage(page)

        await cart.checkout();
        const checkout = new checkoutYourInformationPage(page);
        await checkout.enterFirstName('pepe')
            .then(() => checkout.enterLastName('perez'))
            .then(() => checkout.enterPostalCode('1234'))
            .then(() => checkout.goToCheckoutOverview());

        //Assert I: Verify the error message for invalid last name
        assert.equal(await checkout.getErrorLastNameMessage(), errorLastNameMessageExpected,
            'The last name error message is not: ' + errorLastNameMessageExpected)

        // Assert II: Check if the error message for last name is displayed
        await expect(await checkout.hasErrorLastName()).toBe(true);
    });
});
