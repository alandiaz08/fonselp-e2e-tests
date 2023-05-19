import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";

/**
 * Class for checkoutYourInformationPage.
 */
export class checkoutYourInformationPage extends basePage {
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly cancelButton: Locator;
    private readonly errorLastNameMessage: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.errorLastNameMessage = page.locator('[data-test="error"]');
    }

    /**
     * Enters the first name in the checkout your information page.
     * @param {string} firstName - The first name to enter.
     * @returns {Promise<void>}
     */
    async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Enters the last name in the checkout your information page.
     * @param {string} lastName - The last name to enter.
     * @returns {Promise<void>}
     */
    async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Enters the postal code in the checkout your information page.
     * @param {string} postalCode - The postal code to enter.
     * @returns {Promise<void>}
     */
    async enterPostalCode(postalCode) {
        await this.postalCodeInput.fill(postalCode);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Navigates to the checkout overview page by clicking the continue button.
     * @returns {Promise<void>}
     */
    async goToCheckoutOverview() {
        await this.continueButton.click();
    }

    /**
     * Clicks the cancel button in the checkout your information page.
     * @returns {Promise<void>}
     */
    async clickCancelButton() {
        await this.cancelButton.click();
    }

    /**
     * Gets the error message for the last name field in the checkout your information page.
     * @returns {Promise<string>} - The error message for the last name field.
     */
    async getErrorLastNameMessage() {
        return await this.errorLastNameMessage.innerText();
    }

    /**
     * Checks if the error message for the last name field is visible in the checkout your information page.
     * @returns {Promise<boolean>}
     */
    async hasErrorLastName() {
        return await this.errorLastNameMessage.isVisible();
    }
}