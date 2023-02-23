@smoke
Feature: Example APi testing using supertest and https://reqres.in/

        Scenario Outline: As a user, I want to get the list of users and assert thati got a response body that contains users

            Given I send a GET request to REGRES GET USERS Endpoint
             Then I receive a list of users