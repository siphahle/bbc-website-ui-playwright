import {test as base} from 'playwright-bdd'
import {BbcSportObj}from '../pages/bbcSportObj'

export const test = base.extend(({

    bbcPage : async ({page},use) =>{
        const bbcPage = new BbcSportObj(page)
        await use(bbcPage);
        
    }
}))