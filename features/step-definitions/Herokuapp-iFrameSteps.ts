import { Given, When, Then } from "@wdio/cucumber-framework";
import HerokuappiFramePage from "../pageobjects/herokuapp-iFrame.page"

Given('I am on the iFrame page', async () => {    
    await browser.url(`https://the-internet.herokuapp.com/iframe`);    
});

When('I type in the text editor: {string}', async (textEditorValue:string) => {    
    await HerokuappiFramePage.enterTextIntoTextEditor(textEditorValue);
});

Then('I expect the inputed value to be: {string}', async (textEditorValue:string) => {    
    var currentTextValue = await (await HerokuappiFramePage.textEditorTextValue).getText();
    expect(currentTextValue).toStrictEqual(textEditorValue);
});