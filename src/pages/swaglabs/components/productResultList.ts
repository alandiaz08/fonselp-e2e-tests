import {ElementHandle, Locator, Page} from '@playwright/test';
import {BaseComponent} from '../../base/baseComponent';

/**
 * Class for productResultList.
 */
export class productResultList extends BaseComponent {
    private readonly resultsProductListItems: Locator;
    private container;

    /**
     * Constructor of the class.
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.resultsProductListItems = this.container.locator('[class="inventory_item"]');
    }

    /**
     * Gets the product list items.
     * @returns {Promise<Locator[]>}
     */
    async getProductItems(): Promise<Locator[]>  {
        return this.resultsProductListItems.all();
    }

    /**
     * Gets the product list items.
     * @returns {Promise<Locator[]>}
     */
    async getProductItemByIndex(index): Promise<Locator> {
        const productItems = await this.getProductItems();
        if (index >= 0 && index < productItems.length) {
            return productItems[index]
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    }

}
