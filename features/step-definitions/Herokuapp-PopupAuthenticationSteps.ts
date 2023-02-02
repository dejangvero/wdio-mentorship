import { Given, When, Then } from "@wdio/cucumber-framework";

Given('I am on the popup authentication page and enter username: {string} and password: {string}', async (username:string, password:string) => {    
    await browser.url(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
    await browser.waitUntil( async function () {
        const state = await browser.execute(function () {
          return document.readyState;
        });        
        return state === 'complete';
      },
        {
          timeout: 60000, //60secs
          timeoutMsg: 'Oops! Check your internet connection'
        });    
});

Then('I expect to get successful login confirmed', async () => { 
    const banner = await $('div.example p').getText()
    const finalBanner = banner.trim();
    expect(finalBanner).toStrictEqual('Congratulations! You must have the proper credentials.');
});