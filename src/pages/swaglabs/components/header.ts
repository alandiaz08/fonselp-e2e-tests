import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for header
 */
export class header extends BaseComponent{
    private readonly cartButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     */
    constructor(page: Page){
        super(page);
        this.cartButton = this.page.locator('[id="shopping_cart_container"]');
    }

    /**
     * Goes to the shopping cart.
     */
    async goToYourCart(): Promise<void> {
        await this.cartButton.click();
    }

}