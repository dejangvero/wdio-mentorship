import { Given, When, Then } from "@wdio/cucumber-framework";
import { JsonArray } from "@wdio/types";
import supertest from 'supertest';

const request = supertest('https://reqres.in/api');
var apiStatusCode:any;
var apiResponseBody:any;
var apiResponseBodyDataArray:JsonArray;

Given('I send a GET request to REGRES GET USERS Endpoint', async () => {    
      const response = await request.get('/users?page=2');
      apiStatusCode = response.statusCode;
      apiResponseBody = response.body;
      apiResponseBodyDataArray = apiResponseBody.data;    
});

Then('I receive a list of users', async () => { 
    expect(apiStatusCode).toStrictEqual(200);
    expect(apiResponseBodyDataArray.length).toStrictEqual(6);
});