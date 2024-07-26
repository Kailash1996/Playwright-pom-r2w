
// // import { test, expect, Browser, Page } from '@playwright/test';
 
// import { test, expect, chromium, Browser, Page } from '@playwright/test';
// import { R2WPage } from '../pages/folderpublication.page';
// import * as Interfaces from '../utils/interfaces';
// //import {CustomFixtures} from '../helper/test'
// import * as Functions from '../utils/fileUtils';
// import { LoginPage } from '../pages/login.page';
// import { Profile } from '../pages/publicationProfile.page';
// import { publicationProfile } from '../locators/locators';
// import { CreateUser } from '../pages/securityMember.page';
// import { SecurityRoleCreation } from '../pages/securityRoleCreation.page';

// let browser: Browser;
// let page: Page;
// let r2wPage:  R2WPage;
// let publication: Profile;
// let loginPage: LoginPage; 


// test.beforeEach(async ({ playwright }) => {

//   browser = await playwright.chromium.launch({ headless: false, channel: 'chrome' });

//   page = await browser.newPage();
//   r2wPage = new R2WPage(page);
//   publication = new Profile(page);
//   loginPage = new LoginPage(page);
  
//   const credentialsJson = '../test_data/credentials.json';   
//   const cred: Interfaces.Cred = Functions.readJsonFile<Interfaces.Cred>(credentialsJson);
//   await page.goto(cred.url);
//   await loginPage.login(cred.userId, cred.password);



// });
 
// // test.afterEach(async () => {
// //   await browser.close();
// // });
 
// test('Folder and SubFolder Creation', async () => {
//       await r2wPage.navigateToFolders();

//   const timestamp = new Date().getTime();
//   const folderName = `testing_${timestamp}`;
//   await r2wPage.createFolder(folderName);
   

//   const dataJson = '../test_data/data.json';   
//   const data: Interfaces.Data = Functions.readJsonFile<Interfaces.Data>(dataJson);
//   const uploadFilePath= Functions.returnAbsoultePath('../test_data/r2w testing file.txt'); 
//   await r2wPage.uploadFile(folderName, uploadFilePath, data.authorName, data.title );

//   await expect(r2wPage.page.frameLocator('iframe[name="ifmfolder"]').getByLabel(folderName)).toBeVisible();
//   await r2wPage.addSubFolder(folderName);
//   await r2wPage.deleteFolder(folderName);


// });

// test('create publication profile', async ({  }) => {
// await r2wPage.navigateToFolders();  
// await publication.createPublication();

// });
 

// // test('should perform a specific action after login456', async () => {

// //     // await page.goto('https://example.com/some-page');
  
// //     // // Perform actions and assertions
  
// //     // const title = await page.title();
  
// //     // expect(title).toBe('Expected Page Title');

// //     await console.log('test  2');
  
// //   });

// //   test('should perform a specific action after login789', async () => {

// //     // await page.goto('https://example.com/some-page');
  
// //     // // Perform actions and assertions
  
// //     // const title = await page.title();
  
// //     // expect(title).toBe('Expected Page Title');

// //     await console.log('test  3');
  
// //   });
// // Add more tests as needed
