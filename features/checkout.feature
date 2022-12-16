Feature: E2E validation for the totals sum of bought products

    Scenario Outline: As a user, i want to buy multiple items and verify the total price on the checkout page

        Given I am on the inventory page
        And I add to cart the Backpack
        And I add to cart the Tshirt
        When I go to the checkout page
        Then I expect items total price to be 45.98