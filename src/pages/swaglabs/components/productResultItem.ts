import {BaseComponent} from "../../base/baseComponent";
import {ElementHandle, Locator, Page} from "@playwright/test";

/**
 * Class for product result item.
 */
export class productResultItem extends BaseComponent{
    private container;
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly productDescription: Locator;
    private readonly productImage: Locator;
    private readonly addToCartButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.productName = this.container.locator('[class="inventory_item_name"]');
        this.productPrice = this.container.locator('[class="inventory_item_price"]');
        this.productDescription = this.container.locator('[class="inventory_item_desc"]');
        this.productImage = this.container.locator('[class="inventory_item_img"]');
        this.addToCartButton = this.container.locator('[class="pricebar"] button');
    }

    /**
     * Gets the product Name.
     * @return {Promise<string>}
     */
    async getName(): Promise<string> {
        const nameElement = await this.productName;
        return await nameElement.textContent();
    }

    /**
     * Gets the product Price.
     * @return {Promise<string>}
     */
    async getPrice(): Promise<string> {
        const priceElement =  await this.productPrice;
        return await priceElement.textContent();
    }

    /**
     * Gets the product Description.
     * @return {Promise<string>}
     */
    async getDescription(): Promise<string>  {
        const descriptionElement = await this.productDescription;
        return await descriptionElement.textContent();
    }

    /**
     * Gets the product Image.
     * @return {Promise<string>}
     */
    async getImage(): Promise<string>  {
        const imageElement = await this.productImage;
        return await imageElement.getAttribute('src');
    }

    /**
     * Clicks the Add To Cart button.
     * @return {Promise<void>}
     */
    async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    /**
     * Clicks the Remove From Cart button.
     * @return {Promise<void>}
     */
    async removeFromCart(): Promise<void> {
        await this.addToCartButton.click();
    }
}