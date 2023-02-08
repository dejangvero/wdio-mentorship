@regression
Feature: E2E validation for popup authentication

        Scenario Outline: As a user, I want to enter valid credentials and login

            Given I am on the popup authentication page and enter username: "admin" and password: "admin"
             Then I expect to get successful login confirmed