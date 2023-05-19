import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";

/**
 * Class for thank you page.
 */
export class thankYouPage extends basePage {
    private readonly thankYouMessage: Locator;
    private readonly thankYouDescription: Locator;
    private readonly backHomeButton: Locator;
    private readonly logo: Locator;

    /**
     * Constructor of the class
     */
    constructor(page: Page) {
        super(page);
        this.thankYouMessage = page.locator('[class="complete-header"]');
        this.thankYouDescription = page.locator('[class="complete-text"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
        this.logo = page.locator('[alt="Pony Express"]');
    }

    /**
     * Checks if the thank you message is visible.
     * @returns {Promise<boolean>} - A boolean indicating if the thank you message is visible.
     */
    async hasThankYouMessage() {
        return await this.thankYouMessage.isVisible();
    }

    /**
     * Checks if the thank you description is visible.
     * @returns {Promise<boolean>} - A boolean indicating if the thank you description is visible.
     */
    async hasThankYouDescription() {
        return await this.thankYouDescription.isVisible();
    }

    /**
     * Checks if the back home button is visible.
     * @returns {Promise<boolean>} - A boolean indicating if the back home button is visible.
     */
    async hasBackHomeButton() {
        return await this.backHomeButton.isVisible();
    }

    /**
     * Checks if the logo is visible.
     * @returns {Promise<boolean>} - A boolean indicating if the logo is visible.
     */
    async hasLogo() {
        return await this.logo.isVisible();
    }

    /**
     * Clicks the back home button.
     * @returns {Promise<void>}
     */
    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }

    /**
     * Gets the thank you message.
     * @returns {Promise<string>} - The thank you message text.
     */
    async getThankYouMessage() {
        return this.thankYouMessage.innerText();
    }

    /**
     * Gets the thank you message description.
     * @returns {Promise<string>} - The thank you message description text.
     */
    async getThankYouDescription() {
        return this.thankYouDescription.innerText();
    }

}