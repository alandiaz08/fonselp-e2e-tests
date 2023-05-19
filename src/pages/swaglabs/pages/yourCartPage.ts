import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";

/**
 * Class for your cart page.
 */
export class yourCartPage extends basePage {
    private readonly resultsCartList: Locator;
    private readonly checkoutButton: Locator;
    private readonly continueShoppingButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     */
    constructor(page: Page) {
        super(page);
        this.resultsCartList = page.locator('[class="cart_list"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('data-test="continue-shopping"');
    }

    /**
     * Gets the cart list container.
     * @returns {Promise<Locator>} - The cart list container.
     */
    async getCartListContainer() {
        return this.resultsCartList;
    }

    /**
     * Performs the checkout action.
     * @returns {Promise<void>}
     */
    async checkout() {
        return this.checkoutButton.click();
    }

    /**
     * Performs the continue shopping action.
     * @returns {Promise<void>}
     */
    async continueShopping() {
        return this.continueShoppingButton.click();
    }

}