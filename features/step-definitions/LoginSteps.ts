import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage
}

Given('I am on the login page', async () => {
    await browser.url(`https://www.saucedemo.com/`);
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then('True equals true', () => {
//     expect(true).toBeTruthy();    
// });




