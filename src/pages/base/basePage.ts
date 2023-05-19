import { Page } from '@playwright/test';
import {env} from "../../../load-env";

export abstract class basePage {
    readonly page: Page;
    readonly viewportSize: { width: number; height: number; };

    constructor(page: Page) {
        this.page = page;
        this.viewportSize = { width: +env.VIEWPORT_WIDTH, height: +env.VIEWPORT_HEIGHT };
    }
}