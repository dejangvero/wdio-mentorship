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

Then('I expect items total price to be {float}', async (price:number) => {    
    var totalPriceOfInvividualArticles:number = await CheckoutPage.sumOfIndividualPrices();
    var totalPriceWithoutTax:number = await CheckoutPage.getSummarySubTotalPricePromise();        
    expect(totalPriceWithoutTax).toStrictEqual(price);
    expect(totalPriceWithoutTax).toStrictEqual(totalPriceOfInvividualArticles);
});
