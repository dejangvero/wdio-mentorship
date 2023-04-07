@smoke
Feature: API + UI test

    # Scenario Outline: As a user, i want to login via API and continue with the UI

    #     Given I login to automation exercise via API
    #     And I navigate to automation exercise page
    #     Then I will see the Logout button


    Scenario Outline: As a user, i want to login via API and continue with the UI

        Given I login to BR Modelo Web via API
        # And I navigate to BR Modelo Web page
        Then I will see the Models header