import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText,assertURL, mouceClick, Fill } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";

const PageLocators={
    dashboard:"//div[text()='Dashboard']",
    userName:"//input[@placeholder='User']",
    passWord:"//input[@placeholder='Password']",
    submit:"//button[@id='reloadButton']",
    vocherButton:"//div[text()=' My vouchers ']",
    VocherPageValidation:"//div[text()=' Search vouchers ']",
    buyVochers:"//div[text()='Buy vouchers']",
    giftVocher:"//a[text()=' Gift voucher ']",
    cyclosLogo:"//div[text()='Cyclos']",
    giftVocherAmountText:"//input[@placeholder='0,00']",
    giftVocherText:"//div[text()=' Gift voucher ']",
    giftVocherCheckbox:"//label[contains(text(),'voucher is a gift')]",
    giftVocherNextButton:"//span[text()='Next']",
    giftConfirmationText:"//div[text()=' Buy confirmation ']",
    giftAmountText:"(//div[@class='d-flex label-value-value'])[2]" ,
    giftVocherStatus:"//div[text()='Open']",
    confirm:"//span[text()='Confirm']"
}

export class vocherPage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async ClickdashboardButton():Promise<any>{
        await toClick(PageLocators.dashboard);
    }

    async comparePage():Promise<any>{
        await assertText(PageLocators.cyclosLogo,"Cyclos");
    }

    async clickVocherButton(){
        await toClick(PageLocators.vocherButton);
        await assertText(PageLocators.VocherPageValidation,"Search vouchers");
    }

    async gotoGiftVocher()
    {
        await toClick(PageLocators.buyVochers);
        await toClick(PageLocators.giftVocher);
    }

    async verifyHomePageURL():Promise<any>{
        const homePageUrl:string="https://demo.cyclos.org/ui/dashboard";
        await assertURL(homePageUrl);
    }

    async giftVocherAmount():Promise<any>{
        await toClick(PageLocators.giftVocherAmountText);
        await sendkeys(PageLocators.giftVocherAmountText,"10");
        await toClick(PageLocators.giftVocherCheckbox);
        await toClick(PageLocators.giftVocherNextButton);
    }
    async validateGiftVocher():Promise<any>{
        await assertText(PageLocators.giftVocherText,"Gift voucher");
        await assertText(PageLocators.giftAmountText,"10,00 IU's");
    }
    
    async ConfirmationText():Promise<any>{
        await assertText(PageLocators.giftConfirmationText,"Buy confirmation");
        await toClick(PageLocators.confirm);
    }

    async assertGiftVocherPage():Promise<any>{
       await assertText(PageLocators.giftVocherStatus,"Open");
    }
};