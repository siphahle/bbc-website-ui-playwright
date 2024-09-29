import { expect } from "@playwright/test";
import test from "node:test";
import { createBdd } from "playwright-bdd";
const {Given, When,Then,Before}= createBdd();
const { chromium } = require('playwright');
//const { expect } = require('chai');



Before(async function () {
 this.browser = await chromium.launch();
 this.page = await this.browser.newPage();
});


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

Given('I am on the Formula1 results page {string}', async ({page}, url) => {

  await page.goto(url)
  
});

When('I click on the 2023results link', async ({page}) => {
  await page.locator('[data-testid="datepicker-date-link-2023"]').click();
});


When("I retrieve the top three winners", async function () {

  await this.page.goto('https://www.bbc.com/sport/formula1/2023/results', { waitUntil: 'domcontentloaded' });

  await this.page.waitForSelector('table[aria-label="Race result"]', { timeout: 60000 });

  const winnerElements = await this.page.$$('table[aria-label="Race result"] tbody tr td:nth-child(2)');
  const winnerTexts = await Promise.all(winnerElements.slice(0, 3).map(element => element.innerText()));

  this.winners = winnerTexts

});

Then('I should see the winners are {string}, {string}, and {string}', function({},winner1, winner2, winner3)  {
  const expectedWinners = [winner1, winner2, winner3];
    
  if (!this.winners) {
    throw new Error('Winners not found');
}
console.log('Retrieved Winners:', this.winners);

if (this.winners.length !== expectedWinners.length) {
    throw new Error(`Expected ${expectedWinners.length} winners, but got ${this.winners.length}`);
}

if (JSON.stringify(this.winners) !== JSON.stringify(expectedWinners)) {
    throw new Error(`Expected winners to be ${JSON.stringify(expectedWinners)}, but got ${JSON.stringify(this.winners)}`);
}
console.log('Expected Winners:', expectedWinners);
});