import { Given, When, Then } from '@wdio/cucumber-framework';
import supertest from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


const request = supertest('https://app.brmodeloweb.com');


// Given('I login to automation exercise via API',  async () => {
//     response = await request.post('/my-account/')
//     .type('form')    
//     .field('username', 'using123@yopmail.com')
//     .field('password', 'Using123*+')    
//     .expect(200)  
// });

// When('I navigate to automation exercise page',  async () => {
//     await browser.url(`https://practice.automationtesting.in/my-account/`);
// });


// Then('I will see the Logout button',  async () => {
//     const logoutButton = await $$("a[href='https://practice.automationtesting.in/my-account/customer-logout/']")[0];
//     expect(logoutButton.getText()).toStrictEqual('Logout');
// });

Given('I login to BR Modelo Web via API',  async () => {
    
    const payload = {username: 'dXNpbmcxMjNAeW9wbWFpbC5jb20', password: 'VXNpbmcxMjM' };
    const response = await request
    .post('/users/login')           
    .send(payload)
    .set('Content-Type', 'application/json;charset=UTF-8')
    .set('Accept', 'application/json')   
    .expect(200)
    .then(async (response) => {        
        await browser.setCookies([
            {name: 'userId', value: '642fe8a642659e8e4c6dd0f0'},
            {name: 'sessionId', value: 'Zs_JgfsJ3P8INADKDeh2bEYKc0G6hK7V'}
        ])
        await browser.url('/#!/main');
      });  
});

// When('I navigate to BR Modelo Web page',  async () => {
//     await browser.url(`https://practice.automationtesting.in/my-account/`);
// });


Then('I will see the Models header',  async () => {
    const modelsLabel = await $("h2");
    expect(modelsLabel.getText()).toStrictEqual('Models');
});



