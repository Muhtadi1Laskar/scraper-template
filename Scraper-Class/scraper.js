import { chromium } from '@playwright/test';
import { BuildURL } from '../Utils/buildURL.js';

export class Scraper {
    constructor() {
        this.page;
        this.browser;
        this.playwrightOptions = {
            headless: false
        };
        this.urlBuilder = new BuildURL();

        this.url = this.urlBuilder.constructURL('');
    }

    async main() {
        await this.startBrowser();
        await this.visit();
        await this.closeBrowser();
    }

    async startBrowser() {
        this.browser = await chromium.launch(this.playwrightOptions);
        this.page = await this.browser.newPage();
        this.page.setDefaultTimeout(100000);
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async visit() {
        await this.page.goto(this.url);
        await this.page.waitForEvent('domcontentloaded');
    }
}