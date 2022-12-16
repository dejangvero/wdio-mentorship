import { Given, When, Then } from '@wdio/cucumber-framework';


import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

const pages = {
    login: LoginPage,
    inventory: InventoryPage
}

Given('I am on the inventory page', async () => {    
    await LoginPage.open(`inventory.html`);
    await LoginPage.login('standard_user', 'secret_sauce');
});

When('I add to cart the Backpack', async () => {
    await InventoryPage.buyBackPackButton.click();
});

When('I add to cart the Tshirt', async () => {
    await InventoryPage.buyTShirtButton.click();
});