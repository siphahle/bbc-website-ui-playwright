/** Generated from: ecomlogin.feature */
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

  test.describe("User clicks the Results link and verifies the heading", () => {

    test("Example #1", async ({ Given, page, When, Then }) => {
      await Given("I am on the BBC Formula1 Results page \"https://www.bbc.com/sport/formula1/results\"", null, { page });
      await When("I click on the 2023 Results link", null, { page });
      await Then("I should verify the top3 leaders on the table");
    });

    test("Example #2", async ({ Given, page, When, Then }) => {
      await Given("I am on the BBC Formula1 Results page \"https://www.bbc.com/sport/formula1/results\"", null, { page });
      await When("I click on the 2023 Results link", null, { page });
      await Then("I should verify the top3 leaders on the table");
    });

    test("Example #3", async ({ Given, page, When, Then }) => {
      await Given("I am on the BBC Formula1 Results page \"https://www.bbc.com/sport/formula1/results\"", null, { page });
      await When("I click on the 2023 Results link", null, { page });
      await Then("I should verify the top3 leaders on the table");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("ecomlogin.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User visits the BBC Sport website and verifies the title": {"pickleLocation":"3:3"},
  "User clicks the Results link and verifies the heading": {"pickleLocation":"9:5"},
  "User clicks the Results link and verifies the heading|Example #1": {"pickleLocation":"21:7"},
  "User clicks the Results link and verifies the heading|Example #2": {"pickleLocation":"22:7"},
  "User clicks the Results link and verifies the heading|Example #3": {"pickleLocation":"23:7"},
};