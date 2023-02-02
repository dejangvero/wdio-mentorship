Feature: E2E validation for file upload logic

        Scenario Outline: As a user, I want to successfully upload a file

            Given I am on the file upload page
             When I upload a file from the location: "../../fileForUpload/Basic.file"
             Then I expect the file to be uploaded