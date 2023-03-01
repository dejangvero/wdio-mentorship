Feature: Example APi testing using supertest and https://reqres.in/

    @smoke
    Scenario: As a user, I want to get the list of users and assert that i got a response body that contains users
        Given I send a GET request to REGRES GET USERS Endpoint
        Then I receive a list of users

    @smoke
    Scenario: As i user, i want to get a single user by ID
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