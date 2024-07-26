import { expect, Page } from '@playwright/test';

import * as Locators from '../locators/locators';
export class ldapconfig {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async  ldapconnection() {
        await this.page.locator(Locators.ldap.environmentmenu).click()
        await this.page.frameLocator(Locators.ldap.Ldapmenuframe).locator(Locators.ldap.catalogclick).click()
        
    }
    async ldapform() {
        const page1New = this.page.waitForEvent('popup');
        await this.page.frameLocator(Locators.ldap.Contentframe).locator(Locators.ldap.addldap).click()
        const page1 = await page1New;
        await this.page.locator(Locators.ldap.ldapurl).click()
        await this.page.getBy().fill()
        await this.page.locator(Locators.ldap.ldapbasedn).click()
        await this.page.locator(Locators.ldap.ldapbinddn).click()
        await this.page.locator(Locators.ldap.ldappass).click()
       
    }
}