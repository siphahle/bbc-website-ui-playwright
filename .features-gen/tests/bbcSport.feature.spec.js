/** Generated from: tests\bbcSport.feature */
import { test } from "playwright-bdd";

test.describe("Verify BBC Sport Page Title", () => {

  test("User visits the BBC Sport website and verifies the title", async ({ Given, page, Then, And }) => {
    await Given("I am on the BBC website Sports page \"https://www.bbc.com/sport\"", null, { page });
    await Then("The page title should be BBC Sport - Scores, Fixtures, News - Live Sport", null, { page });
    await And("I click on \"Formula one\" link", null, { page });
    await Then("I should verify url contains \"sport/formula1\"", null, { page });
  });

  test("User clicks the Results link and verifies the heading", async ({ Given, page, When, Then }) => {
    await Given("I am on the BBC Formula1 page \"https://www.bbc.com/sport/formula1\"", null, { page });
    await When("I click on the Results link", null, { page });
    await Then("I should see the heading \"Formula one Results\"", null, { page });
  });

  test("User verifies the Formula1 table 2023 results", async ({ Given, page, When, Then }) => {
    await Given("I am on the Formula1 results page \"https://www.bbc.com/sport/formula1/results\"", null, { page });
    await When("I click on the 2023results link", null, { page });
    await When("I retrieve the top three winners");
    await Then("I should see the winners are \"Max Verstappen\", \"Charles Leclerc\", and \"George Russell\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bbcSport.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User visits the BBC Sport website and verifies the title": {"pickleLocation":"3:3"},
  "User clicks the Results link and verifies the heading": {"pickleLocation":"9:5"},
  "User verifies the Formula1 table 2023 results": {"pickleLocation":"14:6"},
};