import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";

/**
 * class for checkout overview page.
 */
export class checkoutOverviewPage extends basePage {
    private readonly checkoutOverviewList: Locator;
    private readonly finishButton: Locator;
    private readonly cancelButton: Locator;
    private readonly paymentInformation: Locator;
    private readonly shippingInformation: Locator;
    private readonly priceTotalItem: Locator;
    private readonly tax: Locator;
    private readonly total: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.checkoutOverviewList = page.locator('[class="cart_list"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.paymentInformation = page.locator('[class="summary_info"] > div:nth-child(2)');
        this.shippingInformation = page.locator('[class="summary_info"] > div:nth-child(4)');
        this.priceTotalItem = page.locator('[class="summary_info"] > div:nth-child(6)');
        this.tax = page.locator('[class="summary_info"] > div:nth-child(7)');
        this.total = page.locator('//div[8]/text()[2]');
    }

    /**
     * Retrieves the container of the checkout overview list.
     * @returns {Promise<Locator>} - The container of the checkout overview list.
     */
    async getCheckoutOverviewListContainer() {
        return this.checkoutOverviewList;
    }

    /**
     * Finishes the checkout process by clicking the finish button.
     * @returns {Promise<void>}
     */
    async finish() {
        return this.finishButton.click();
    }

    /**
     * Cancels the checkout process by clicking the cancel button.
     * @returns {Promise<void>}
     */
    async cancel() {
        return this.cancelButton.click();
    }

    /**
     * Checks if the payment information is visible.
     * @returns {Promise<boolean>}
     */
    async hasPaymentInformation() {
        return await this.paymentInformation.isVisible();
    }

    /**
     * Checks if the shipping information is visible.
     * @returns {Promise<boolean>}
     */
    async hasShippingInformation() {
        return await this.shippingInformation.isVisible();
    }

    /**
     * Checks if the price total item is visible.
     * @returns {Promise<boolean>}
     */
    async hasPriceTotalItem() {
        return await this.priceTotalItem.isVisible();
    }

    /**
     * Checks if the tax is visible.
     * @returns {Promise<boolean>}
     */
    async hasTax() {
        return await this.tax.isVisible();
    }

}