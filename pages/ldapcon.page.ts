import { expect, Page } from '@playwright/test';

import * as Locators from '../locators/locators';
import { waitForDebugger } from 'inspector';
export class ldapconfig {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async  ldapconnection() {
        await this.page.locator(Locators.ldap.environmentmenu).click()
        await this.page.frameLocator(Locators.ldap.Ldapmenuframe).locator(Locators.ldap.catalogclick).click()
        
            const page1New = this.page.waitForEvent('popup');
            await this.page.frameLocator(Locators.ldap.Contentframe).locator(Locators.ldap.addldap).click()
            const page1 = await page1New;
            await page1.locator(Locators.ldap.ldapname).click()
            await page1.locator(Locators.ldap.ldapname).fill("Redwood masalan")
            await page1.locator(Locators.ldap.ldapurl).click()
            await page1.locator(Locators.ldap.ldapurl).clear()
            await page1.locator(Locators.ldap.ldapurl).fill("ldap://10.31.10.10:389")
            await page1.locator(Locators.ldap.ldapbasedn).click()
            await page1.locator(Locators.ldap.ldapbasedn).clear()
            await page1.locator(Locators.ldap.ldapbasedn).fill("cn=Users,dc=masalan,dc=local")
            await page1.locator(Locators.ldap.ldapbinddn).click()
            await page1.locator(Locators.ldap.ldapbinddn).clear()
            await page1.locator(Locators.ldap.ldapbinddn).fill("cn=ldap bind,cn=Users,dc=masalan,dc=local")
            await page1.locator(Locators.ldap.ldappass).click()
            await page1.locator(Locators.ldap.ldappass).fill("D00wder1")
            await page1.locator(Locators.ldap.ldapbinddn).click()
            await page1.locator(Locators.ldap.testcon).click()
               page1.on('dialog', async dialog => {
                    expect(dialog.type()).toBe('alert');
                    expect(dialog.message()).toBe("LDAP connection validated.");    
                    await dialog.accept();
                    });
            await page1.locator(Locators.ldap.savebutton).click()
            //page1.close()
            
        }
        async  ldapconfirm() {
            await this.page.locator(Locators.ldap.environmentmenu).click()
            await this.page.frameLocator(Locators.ldap.Ldapmenuframe).locator(Locators.ldap.catalogclick).click()
            
            await this.page.frameLocator(Locators.ldap.Contentframe).locator(Locators.ldap.ldapicon).isVisible()
            

        }
    }
