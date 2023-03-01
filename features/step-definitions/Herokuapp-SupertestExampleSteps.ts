import { Given, When, Then } from "@wdio/cucumber-framework";
import { JsonArray } from "@wdio/types";
import supertest from 'supertest';

const request = supertest('https://reqres.in/api');
var response:any;
var apiStatusCode: any;
var apiResponseBody: any;
var apiResponseBodyDataArray: JsonArray;

Given('I send a GET request to REGRES GET USERS Endpoint', async () => {
    response = await request.get('/users?page=2');
    apiStatusCode = response.statusCode;
    apiResponseBody = response.body;
    apiResponseBodyDataArray = apiResponseBody.data;
});

Then('I receive a list of users', async () => {
    expect(apiStatusCode).toStrictEqual(200);
    expect(apiResponseBodyDataArray.length).toStrictEqual(6);
});

Given('I send a GET user request with ID: {int}', async (id: number) => {
    response = await request.get(`/users/${id}`);      
});

Then('I want to receive the following response in the body:', async (docString:string) => {
    expect(response.statusCode).toStrictEqual(200);
    const jsonBody:JSON = response.body;
    expect(jsonBody).toStrictEqual(JSON.parse(docString));
});