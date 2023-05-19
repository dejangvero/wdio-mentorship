import { Given, When, Then} from "@cucumber/cucumber";
import supertest from 'supertest';

const request = supertest('https://app.brmodeloweb.com');


Given('I login to BR Modelo Web via API', async function () {
    const payload = { username: 'dXNpbmcxMjNAeW9wbWFpbC5jb20', password: 'VXNpbmcxMjM' };
    await request
        .post('/users/login')
        .send(payload)
        .set('Content-Type', 'application/json;charset=UTF-8')
        .set('Accept', 'application/json')
        .expect(200)
        .then(async (response) => {
            await browser.url('https://app.brmodeloweb.com/#!/')
            this.userId = response.body.userId;
            this.sessionId = response.body.sessionId;
        });
        
});

Then('I store to World previously received cookies', async function ()  {
    await browser.setCookies([
        { name: 'userId', value: this.userId },
        { name: 'sessionId', value: this.sessionId }
    ])
});

Then('I visit the BR Model Web page', async () => {
    await browser.url('https://app.brmodeloweb.com/#!/main');        
});


Then('I will see the Models header', async function ()  {
    const modelsLabel = await $("div.page-header>h2");    
    expect(await modelsLabel.getText()).toStrictEqual('Models');
});







