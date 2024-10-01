import { expect } from "@playwright/test";

class BbcSportObj {

    constructor(page){
        this.page = page;
        this.formula1_Link = page.locator(':nth-child(4) > .ssrcss-161fqwm-StyledLink > .ssrcss-1u47p8g-LinkTextContainer');
        this.results_Link = page.locator(':nth-child(3) > .ssrcss-p70ifu-StyledLink > .ssrcss-1mstwv3-LinkTextContainer');
        this.Formula1Results_Link = page.locator('Formula 1 Results');
        this.twenty23_Link = page.locator('[data-testid="datepicker-date-link-2023"]');
        this.tableResults = page.locator('table[aria-label="Race result"]');
        this.winningTableTop3 = page.locator('table[aria-label="Race result"] tbody tr td:nth-child(2)');

    }

    async navigateToUrl(url)
    {
        await this.page.goto(url);
    }
    async verifyPageTitle()
    {
        await expect(this.page).toHaveTitle('BBC Sport - Scores, Fixtures, News - Live Sport');
    }
    async clickOnF1Link()
    {
        await this.formula1_Link.click();
    }
    async verifyF1Url()
    {
        await expect(this.page).toHaveURL(new RegExp(logged_url))
    }
    
    async navigateTof1Url(url)
    {
        await this.page.goto(url);
    }
    async clickOnResultsLink()
    {
        await this.results_Link.click();
    }
    
    async verifyF1ResultsHeading()
    {
        await expect(this.page.locator('[id ="main-heading"]')).toHaveText('Formula 1 Results');
    }
    async navigateTo2023Results(url)
    {
        await this.page.goto(url);
    }

    async clickOn2023ResultsLink()
    {
    
        await this.twenty23_Link.click();
    }
    async retrieveTop3Winners()
    {
        await this.page.goto('https://www.bbc.com/sport/formula1/2023/results', { waitUntil: 'domcontentloaded' });
        await this.page.waitForSelector(this.tableResults, { timeout: 60000 });
        const winnerElements = await this.page.$$(this.winningTableTop3);
        const winnerTexts = await Promise.all(winnerElements.slice(0, 3).map(element => element.innerText()));

        this.winners = winnerTexts
    }
    async verifyTheWinnersNames()
    {
        const expectedWinners = [winner1, winner2, winner3];
    
        if (!this.winners) {
          throw new Error('Winners not found');
      }
      console.log('Retrieved Winners:', this.winners);
      
      if (this.winners.length !== expectedWinners.length) {
          throw new Error(`Expected ${expectedWinners.length} winners, but got ${this.winners.length}`);
      }
      
      if (JSON.stringify(this.winners) !== JSON.stringify(expectedWinners)) {
          throw new Error('Expected winners to be ${JSON.stringify(expectedWinners)}, but got ${JSON.stringify(this.winners)}');
      }
      console.log('Expected Winners:', expectedWinners);
    }

}
export {BbcSportObj};