import { Page, Locator, ElementHandle } from '@playwright/test';
import { basePage } from '../../base/basePage';

/**
 * Class for product page
 */
export class productsPage extends basePage {
    private readonly resultsProductList: Locator;

    /**
     * Construct of the class.
     */
    constructor(page: Page) {
        super(page);
        this.resultsProductList = page.locator('[id="inventory_container"]');
    }

    /**
     * Gets the container element of the products list.
     * @returns {Promise<ElementHandle>} - The container element of the products list.
     */
    async getProductsListContainer() {
        return this.resultsProductList;
    }

}