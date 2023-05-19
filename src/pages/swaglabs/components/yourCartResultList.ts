import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for yourCartResultList.
 */
export class yourCartResultList extends BaseComponent {
    private readonly resultsCartListItems: Locator;
    private container;

    /**
     * Constructor of the class.
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.resultsCartListItems = this.container.locator('[class="cart_item"]');
    }

    /**
     * Gets the items in the cart.
     * @returns {Promise<Locator>}
     */
    async getCartItems(): Promise<Locator[]> {
        return this.resultsCartListItems.all();
    }

    /**
     * Gets items in the cart by index.
     * @param index
     * @returns {Promise<number>}
     */
    async getCartItemByIndex(index): Promise<Locator> {
        const productItems = await this.getCartItems();
        if (index >= 0 && index < productItems.length) {
            return productItems[index]
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    }

    /**
     * Gets the total items in the cart.
     * @returns {Promise<number>}
     */
    async getCartItemResultsNumber(): Promise<number> {
        const elements = await this.getCartItems();
        return elements.length;
    }
}