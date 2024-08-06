import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText,assertURL } from "../../Helper/Actions";
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
};