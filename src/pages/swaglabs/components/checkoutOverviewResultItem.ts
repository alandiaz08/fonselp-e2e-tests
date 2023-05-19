import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

export class checkoutOverviewResultItem extends BaseComponent {
    private container;
    private readonly checkoutOverviewProductName: Locator;
    private readonly checkoutOverviewProductPrice: Locator;
    private readonly checkoutOverviewProductDescription: Locator;

    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.checkoutOverviewProductName = this.container.locator('[class="inventory_item_name"]');
        this.checkoutOverviewProductPrice = this.container.locator('[class="inventory_item_price"]');
        this.checkoutOverviewProductDescription = this.container.locator('[class="inventory_item_desc"]');
    }

    /**
     * Gets cart product name
     * @return {Promise<string>}
     */
    async getCartProductName(): Promise<string> {
        const nameElement = await this.checkoutOverviewProductName;
        return await nameElement.textContent();
    }

    /**
     * Gets cart product price
     * @return {Promise<string>}
     */
    async getCartProductPrice(): Promise<string> {
        const priceElement = await this.checkoutOverviewProductPrice;
        return await priceElement.textContent();
    }

    /**
     * Gets cart product description
     * @return {Promise<string>}
     */
    async getCartProductDescription(): Promise<string> {
        const descriptionElement = await this.checkoutOverviewProductDescription;
        return await descriptionElement.textContent();
    }
}