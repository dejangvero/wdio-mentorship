import { Given, When, Then } from "@wdio/cucumber-framework";

import HerokuappDragAndDropPage from "../pageobjects/herokuapp-DragAndDrop.page"

Given('I am on the drag and drop page', async () => {    
    await browser.url(`https://the-internet.herokuapp.com/drag_and_drop`);    
});

When('I drag the {string} block to the other block', async (box: string) => {    
    await HerokuappDragAndDropPage.dragAndDropElement(box);
    await browser.pause(60000)
});

Then('I expect them to switch places', async () => {    
    expect(await HerokuappDragAndDropPage.headerA.getText()).not.toStrictEqual("A");
});