import { expect } from "@playwright/test";
import { url } from "inspector";
import { createBdd } from "playwright-bdd";
const {Given, When,Then}= createBdd();

// Verify the title

Given('I am on the BBC website Sports page {string}', async ({page}, url) => {
    
    await page.goto(url)
  });


  Then('The page title should be BBC Sport - Scores, Fixtures, News - Live Sport', async ({page}) => {
   
    await expect(page).toHaveTitle('BBC Sport - Scores, Fixtures, News - Live Sport');
  });

  Then('I click on {string} link', async ({page}) => {

    await page.locator(':nth-child(4) > .ssrcss-161fqwm-StyledLink > .ssrcss-1u47p8g-LinkTextContainer').click();
  
  });
  
  Then('I should verify url contains {string}', async ({page}, logged_url) => {
    //await page.pause();
    await expect(page).toHaveURL(new RegExp(logged_url))
  });

// Verify the heading


  Given('I am on the BBC Formula1 page {string}', async ({page},url) => {
    await page.goto(url)
  });

When('I click on the Results link', async ({page}) => {

  await page.locator(':nth-child(3) > .ssrcss-p70ifu-StyledLink > .ssrcss-1mstwv3-LinkTextContainer').click();
  //await page.pause();
});


Then('I should see the heading {string}', async ({page}) => {

  await expect(page.locator('[id ="main-heading"]')).toHaveText('Formula 1 Results');
});


//Verify The Table

Given('I am on the BBC Formula1 Results page {string}', async ({page}, url) => {
  await page.goto(url)
});


When('I click on the {int} Results link', async ({page}) => {
  await page.locator('[aria-label="2023"]').click();
});


Then('I should verify the top3 leaders on the table', async ({}) => {

});