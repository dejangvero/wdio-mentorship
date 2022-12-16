import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import CheckoutPage from '../pageobjects/checkout.page';

const pages = {
    login: LoginPage,
    checkout: CheckoutPage
}

When('I go to the checkout page', async () => {
    await CheckoutPage.goToCheckout('Dejan', 'Gvero', '21235');
});

Then('I expect items total price to be 45.98', async () => {    
    // var totalPriceOfInvividualArticles = await CheckoutPage.sumOfIndividualPrices;
    var totalPriceWithoutTax:number = await CheckoutPage.getSummarySubTotalPricePromise();
    console.log(totalPriceWithoutTax)    
    expect(totalPriceWithoutTax).toStrictEqual(45.98);
    // await expect(totalPriceOfInvividualArticles).toStrictEqual(45.98);
});
