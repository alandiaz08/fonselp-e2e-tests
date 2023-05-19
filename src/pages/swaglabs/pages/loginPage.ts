import {Locator, Page} from '@playwright/test';
import { basePage } from '../../base/basePage';
import { URLBuilder } from '../../../utils/URLBuilder';
import { env } from "../../../../load-env";

/**
 * Class for login page.
 */
export class loginPage extends basePage {
    private readonly userInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly lockedMessage: Locator;

    /**
     * Constructor of the login page
     */
    constructor(page: Page) {
        super(page);
        this.userInput = page.locator('[data-test="username"]')
        this.passwordInput = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.lockedMessage = page.locator('[data-test="error"]')
    }

    /**
     * Navigates to the login page
     * @returns {Promise<void>}
     */
    async navigateToLoginPage(): Promise<void> {
        const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_LANG);
        const url = urlBuilder.buildURL('');
        await this.page.goto(url);
        await this.page.setViewportSize(this.viewportSize);
    }

    /**
     * Inputs the username into the username field
     * @param {string} username - The username to input
     * @returns {Promise<void>}
     */
    async inputUserName(username: string): Promise<void> {
        await this.userInput.fill(username);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Inputs the password into the password field
     * @param {string} password - The password to input
     * @returns {Promise<void>}
     */
    async inputPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks the login button
     * @returns {Promise<void>}
     */
    async login(): Promise<void> {
        await this.loginButton.click();
    }

    /**
     * Checks if the locked message is visible
     * @returns {Promise<boolean>}
     */
    async hasLockedMessage(): Promise<boolean> {
        return await this.lockedMessage.isVisible();
    }

    /**
     * Gets the locked message text
     * @returns {Promise<string>}
     */
    async getLockedMessage(): Promise<string> {
        const lockedMessage = await this.lockedMessage;
        return await lockedMessage.textContent();
    }
}