import { expect, Page } from '@playwright/test';

import * as Locators from '../locators/locators';
export class Schedulerjobs {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }
     async navigateTocatalog() {
        await this.page.locator(Locators.Schedulerjobs.catalogmenuclick).click();
        await this.page.frameLocator(Locators.Schedulerjobs.catalogmenuiframe).locator(Locators.Schedulerjobs.Schedulerjobsclick).click()
        await this.page.locator(Locators.Schedulerjobs.schedulerjobicon).isVisible();
    }
     async jobsvisibility(){
        await this.page.frameLocator(Locators.Schedulerjobs.Contentframe)
        await this.page.locator(Locators.Schedulerjobs.R2W_Tempfile_Cleanup).isVisible()
        await this.page.locator(Locators.Schedulerjobs.R2W_Version_Retention).isVisible()
        await this.page.locator(Locators.Schedulerjobs.R2W_Subscriptions).isVisible()
        await this.page.locator(Locators.Schedulerjobs.R2W_Stat_Logger).isVisible()
        await this.page.locator(Locators.Schedulerjobs.R2W_Reset_License).isVisible()
        await this.page.locator(Locators.Schedulerjobs.R2W_Ldap_Synch).isVisible()
        await this.page.locator(Locators.Schedulerjobs.R2W_DB_Cleanup).isVisible()
     }
     async jobexecution(){
        
         await this.page.frameLocator(Locators.Schedulerjobs.Contentframe).locator(Locators.Schedulerjobs.R2W_Version_Retention).click({button: 'right'});           
         await this.page.frameLocator(Locators.Schedulerjobs.Contentframe).locator(Locators.Schedulerjobs.Executejob).click();
         // const pageNew1 = this.page.waitForEvent('popup'); 
         this.page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe("Successfully executed selected jobs.");
            await dialog.accept();
        });
        
   
     }
    }