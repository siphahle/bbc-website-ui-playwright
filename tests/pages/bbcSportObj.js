import { expect } from "@playwright/test";

class bbcSportObj {

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

    }
    async clickOnF1Link()
    {

    }
    async verifyF1Url()
    {
        
    }
    async clickOnResultsLink()
    {
        
    }
    async navigateTof1Url()
    {
        
    }
    async verifyF1ResultsHeading()
    {
        
    }

}