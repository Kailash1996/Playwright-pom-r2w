import { Browser, chromium, Locator, Page } from '@playwright/test';
import * as Locators from '../locators/locators';
import { R2WPage } from './folderpublication.page';
import * as Interfaces from '../utils/interfaces';
import * as Functions from '../utils/fileUtils';

export class LoginPage {
    static login() {
        throw new Error('Method not implemented.');
    }

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(userId: string, password: string) {
        await this.page.locator(Locators.login.userIdInputBox).fill(userId);
        await this.page.locator(Locators.login.passwordInputBox).fill(password);
        await this.page.locator(Locators.login.loginButton).click();
        await this.page.locator(Locators.login.homeTab).isVisible();
    }
}