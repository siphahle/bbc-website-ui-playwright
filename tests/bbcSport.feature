Feature:  Verify BBC Sport Page Title

  Scenario: User visits the BBC Sport website and verifies the title
    Given I am on the BBC website Sports page "https://www.bbc.com/sport"
    Then The page title should be BBC Sport - Scores, Fixtures, News - Live Sport
    And I click on "Formula one" link
    Then I should verify url contains "sport/formula1"

    Scenario: User clicks the Results link and verifies the heading
     Given I am on the BBC Formula1 page "https://www.bbc.com/sport/formula1"
     When I click on the Results link
     Then I should see the heading "Formula one Results"

     Scenario: User verifies the Formula1 table 2023 results
     Given I am on the Formula1 results page "https://www.bbc.com/sport/formula1/results"
     When I click on the 2023results link
     When I retrieve the top three winners
     Then I should see the winners are "Max Verstappen", "Charles Leclerc", and "George Russell"