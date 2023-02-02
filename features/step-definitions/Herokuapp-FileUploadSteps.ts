import { Given, When, Then } from "@wdio/cucumber-framework";

import HerokuappFileUploadPage from "../pageobjects/herokuapp-FileUpload.page"


Given('I am on the file upload page', async () => {    
    await browser.url(`https://the-internet.herokuapp.com/upload`);
    
});

When('I upload a file from the location: {string}', async (filePath:string) => { 
    await HerokuappFileUploadPage.uploadDesiredFile(filePath);
});

Then('I expect the file to be uploaded', async () => {    
    const banner = await $('div.example>h3').getText()
    const finalBanner = banner.trim();    
    expect(finalBanner).toStrictEqual('File Uploaded!');
});