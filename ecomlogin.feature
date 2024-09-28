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

     Scenario Outline: User clicks the Results link and verifies the heading
     Given I am on the BBC Formula1 Results page "https://www.bbc.com/sport/formula1/results"
     When I click on the 2023 Results link
     Then I should verify the top3 leaders on the table

     Examples:
      | Position | Driver           | Team       |
      | 1        | Max Verstappen   | Red Bull   |
      | 2        | Charles Leclerc  | Ferrari    |
      | 3        | George Russell   | Mercedes   |