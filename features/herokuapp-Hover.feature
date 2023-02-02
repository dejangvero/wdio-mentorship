Feature: E2E validation for hovering elements

        Scenario Outline: As a user, I want to hover over a profile avatar and see the name

            Given I am on the hover page
             When I hover the "second" avatar from the left
             Then I expect to see the name: "user3"