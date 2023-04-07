import { Given, When, Then } from '@wdio/cucumber-framework';
import supertest from 'supertest';

const request = supertest('https://app.brmodeloweb.com');

Given('I login to BR Modelo Web via API',  async () => {    
    const payload = {username: 'dXNpbmcxMjNAeW9wbWFpbC5jb20', password: 'VXNpbmcxMjM' };
    await request
    .post('/users/login')           
    .send(payload)
    .set('Content-Type', 'application/json;charset=UTF-8')
    .set('Accept', 'application/json')   
    .expect(200)
    .then(async (response) => {
        await browser.url('https://app.brmodeloweb.com/#!/')                      
        await browser.setCookies([
            {name: 'userId', value: response.body.userId},
            {name: 'sessionId', value: response.body.sessionId}
        ])        
        await browser.url('https://app.brmodeloweb.com/#!/main');        
        
      });   
});

Then('I will see the Models header',  async () => {          
    const modelsLabel = await $("div.page-header>h2");    
    expect(await modelsLabel.getText()).toStrictEqual('Models');
});



