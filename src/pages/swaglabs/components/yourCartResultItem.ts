import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for yourCartResultItem.
 */
export class yourCartResultItem extends BaseComponent {
    private container;
    private readonly cartProductName: Locator;
    private readonly cartProductPrice: Locator;
    private readonly cartProductDescription: Locator;
    private readonly removeButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.cartProductName = this.container.locator('[class="inventory_item_name"]');
        this.cartProductPrice = this.container.locator('[class="inventory_item_price"]');
        this.cartProductDescription = this.container.locator('[class="inventory_item_desc"]');
        this.removeButton = this.container.locator('[class="inventory_item_price"] + button');
    }

    /**
     * Gets cart product name.
     * @return {Promise<string>}
     */
    async getCartProductName(): Promise<string> {
        const nameElement = await this.cartProductName;
        return await nameElement.textContent();
    }

    /**
     * Gets cart product price.
     * @return {Promise<string>}
     */
    async getCartProductPrice(): Promise<string> {
        const priceElement = await this.cartProductPrice;
        return await priceElement.textContent();
    }

    /**
     * Gets cart product description.
     * @return {Promise<string>}
     */
    async getCartProductDescription(): Promise<string> {
        const descriptionElement = await this.cartProductDescription;
        return await descriptionElement.textContent();
    }

    /**
     * Clicks on remove button.
     * @return {Promise<void>}
     */
    async removeFromCart(): Promise<void> {
        await this.removeButton.click();
    }

    /**
     * Checks if remove button is displayed.
     * @return {Promise<boolean>}
     */
    async hasCartProductName(): Promise<boolean> {
        return await this.cartProductName.isVisible();
    }

    /**
     * Checks if remove button is displayed.
     * @return {Promise<boolean>}
     */
    async hasCartProductPrice(): Promise<boolean> {
        return await this.cartProductPrice.isVisible();
    }

    /**
     * Checks if remove button is displayed.
     * @return {Promise<boolean>}
     */
    async hasCartProductDescription(): Promise<boolean> {
        return await this.cartProductDescription.isVisible();
    }

    /**
     * Checks if remove button is displayed.
     * @return {Promise<boolean>}
     */
    async hasRemoveButton(): Promise<boolean> {
        return await this.removeButton.isVisible();
    }
}