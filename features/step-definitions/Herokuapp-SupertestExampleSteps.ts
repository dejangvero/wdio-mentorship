import { Given, When, Then } from "@wdio/cucumber-framework";
import { JsonArray } from "@wdio/types";
import supertest from 'supertest';
import UserConfig from "../../interfaces/user";

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

Given('I send a POST request to {string} endpoint with body:', async (endpoint:string, docString:string) => {
    response = await request.post(endpoint).send(JSON.parse(docString));      
});

Given('I add an user with name {string} and job {string}', async (userName:string, jobTitle:string) => {
    var user:UserConfig = {name: userName, job: jobTitle};
    response = await request.post(`/users`).send(user);      
});

Then('I see the request was successful', async () => {
    expect(response.statusCode).toStrictEqual(201);
    console.log(response.body);  
});

