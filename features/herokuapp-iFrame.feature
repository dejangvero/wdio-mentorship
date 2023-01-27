Feature: E2E validation for handling iFrame

        Scenario Outline: As a user, I want to write in the iFrame text editor

            Given I am on the iFrame page              
             When I type in the text editor: "Testing"
             Then I expect the inputed value to be: "Testing"