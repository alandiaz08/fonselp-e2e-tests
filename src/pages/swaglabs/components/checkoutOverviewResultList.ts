import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for checkoutOverviewResultList
 */
export class checkoutOverviewResultList extends BaseComponent {
    private readonly checkoutOverviewListItems: Locator;
    private container;

    /**
     * Constructor of the class
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.checkoutOverviewListItems = this.container.locator('[class="cart_item"]');
    }

    async getCheckoutOverviewProductsItems(): Promise<Locator[]> {
        return this.checkoutOverviewListItems.all();
    }

    async getCheckoutOverviewProductsByIndex(index): Promise<Locator> {
        const productItems = await this.getCheckoutOverviewProductsItems();
        if (index >= 0 && index < productItems.length) {
            return productItems[index]
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    }
}