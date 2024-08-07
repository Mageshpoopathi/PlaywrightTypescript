import { Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick,sendkeys, assertText, waitSelector, sleep} from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";

const PageLocators={
    marketPlaceButton:"//a[@id='menu_marketplace']",
    SearchTextbox:"//input[@type='text']",
    SelectItem:"(//*[@class='card-img-top'])[2]",
    VerifyItem:"//div[@class='title-text flex-grow-1 d-flex align-items-center']",
    markPayment:"//div[text()='Make payment']",
    enterAmount:"//*[@formcontrolname='amount']//input",
    paymentConfirmation:"//div[@class='content-title d-flex']//div",
    nextButton:"//*[@class='d-inline-block button']",
    confirmButton:"//*[@type='button']//span[text()='Confirm']"
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

     async MakePaymentOption():Promise<any>{
        await toClick(PageLocators.markPayment);
     }

     async enterUserAmount():Promise<any>{
        await sendkeys(PageLocators.enterAmount,"100");
        console.log("Payment Completed")
     }

     async nextButton():Promise<any>{
        await pageObject.page.locator(PageLocators.nextButton).click();
        console.log("Payment Completed")
       }
  
    
       async paymentConfirm():Promise<any>{
          await assertText(PageLocators.paymentConfirmation," Payment confirmation ");
       }
       
       async confirmButton():Promise<any>{
          await toClick(PageLocators.confirmButton);
        //   console.log("Item Confirmation")
       }

}