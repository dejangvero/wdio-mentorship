Feature: E2E validation for handling drag and drop elements

        Scenario Outline: As a user, I want to excange the A and B element blocks

            Given I am on the drag and drop page              
             When I drag the "A" block to the other block
             Then I expect them to switch places