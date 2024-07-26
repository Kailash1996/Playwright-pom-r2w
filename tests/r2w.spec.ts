
import { test, expect, chromium, Browser, Page } from '@playwright/test';
import * as Interfaces from '../utils/interfaces';
import * as Functions from '../utils/fileUtils';
import { LoginPage } from '../pages/login.page';
import { publicationProfile } from '../locators/locators'
import { time } from 'console';
import { Schedulerjobs } from '../pages/schedulerjobss.page';
import {ldapconfig} from '../pages/ldapcon.page'

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let schedulerjobs: Schedulerjobs;
let ldapconfigure : ldapconfig;

test.beforeEach(async ({ playwright }) => {

  browser = await playwright.chromium.launch({ headless: false, channel: 'chrome' });

  page = await browser.newPage();
  loginPage = new LoginPage(page);
  schedulerjobs = new Schedulerjobs(page);
  ldapconfigure = new ldapconfig(page)

  const credentialsJson = '../test_data/credentials.json';
  const cred: Interfaces.Cred = Functions.readJsonFile<Interfaces.Cred>(credentialsJson);
  await page.goto(cred.url);
  await loginPage.login(cred.userId, cred.password);

});

test('Schjob', async () => {
  await schedulerjobs.navigateTocatalog();
  await schedulerjobs.jobsvisibility();
  await schedulerjobs.jobexecution();
})

test ('ldapc', async()=>{
  await ldapconfigure.ldapconnection();
})


