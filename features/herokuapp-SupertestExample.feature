Feature: Example APi testing using supertest and https://reqres.in/


    Scenario: As a user, I want to get the list of users and assert that i got a response body that contains users
        Given I send a GET request to REGRES GET USERS Endpoint
        Then I receive a list of users


    Scenario: As i user, I want to get a single user by ID
        Given I send a GET user request with ID: 2
        Then I want to receive the following response in the body:
            """
            {
                "data": {
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                },
                "support": {
                    "url": "https://reqres.in/#support-heading",
                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                }
            }
            """

    Scenario: As i visitor, I want to register via API
        Given I send a POST request to "/register" endpoint with body:
            """
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
            """
        Then I want to receive the following response in the body:
            """
            {
                "id": 4,
                "token": "QpwL5tke4Pnpja7X4"
            }
            """

    Scenario: As i visitor, I want to add a user via API
        Given I add an user with name "morpheus" and job "leader"
        Then I see the request was successful
    
        