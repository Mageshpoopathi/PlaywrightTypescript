import { Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick,sendkeys, assertText, waitSelector, sleep} from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";

const PageLocators={
    marketPlaceButton:"//a[@id='menu_marketplace']",
    SearchTextbox:"//input[@type='text']",
    SelectItem:"(//*[@class='card-img-top'])[2]",
    VerifyItem:"//div[@class='title-text flex-grow-1 d-flex align-items-center']"
}
export class cyclosMarketPlacePage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async MarketPlaceButton():Promise<any>{
        await toClick(PageLocators.marketPlaceButton);
     }

     async SearchButton():Promise<any>{
        // await toClick(PageLocators.marketPlaceButton);
        await sendkeys(PageLocators.SearchTextbox,"photo");
     }

    
    async SelectItem():Promise<any>{
   
    
        await pageObject.page.locator(PageLocators.SelectItem).click();
     }

     async VerifyItem():Promise<any>{
    
        await assertText(PageLocators.VerifyItem," Matt photo store ");
     }

}