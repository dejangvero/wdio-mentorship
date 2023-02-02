import { Given, When, Then } from "@wdio/cucumber-framework";
import HerokuappHoverPage from "../pageobjects/herokuapp-Hover.page"

Given('I am on the hover page', async () => {    
    await browser.url(`https://the-internet.herokuapp.com/hovers`);    
});

When('I hover the {string} avatar from the left', async (avatarString:string) => {    
    await HerokuappHoverPage.hoverElement(avatarString);
});

Then('I expect to see the name: {string}', async (name:string) => {    
    const isElementVisible = await HerokuappHoverPage.isNameDisplayed(name);
    expect(isElementVisible).toStrictEqual(true);
});