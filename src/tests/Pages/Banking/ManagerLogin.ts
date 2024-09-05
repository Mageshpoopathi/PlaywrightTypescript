import {  expect, Page,Dialog } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , assertURL, assertText, takeScreenshot, select, sleep } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";

type DialogHandler = (dialog: Dialog) => Promise<void>;

const PageLocators = {
    bankManagerLogin:"//button[@ng-click='manager()']",
    addCustomer:"//button[@ng-click='addCust()']",
    selectCustomer:"//select[@id='userSelect']",
    selectCurrency:"//select[@id='currency']",
    openCustomer:"//button[@ng-click='openAccount()']",
    process:"//button[@type='submit']",
    firtName:"//input[@ng-model='fName']",
    lastName:"//input[@ng-model='lName']",
    postCode:"//input[@ng-model='postCd']",
    addDetails:"//button[text()='Add Customer']",
    home:"//button[text()='Home']"
}
export class ManagerLogin{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async navigate():Promise<any>{  
        let url="https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
        await launchURL(url);
        await assertURL(url);
    }

    async clickManager()
    {
        await(toClick(PageLocators.bankManagerLogin));
    }

    async fillDetails()
    {
     let fname:string="admin"+Date.now();
        await(toClick(PageLocators.addCustomer));
        await(clickAndSendkeys(PageLocators.firtName,fname));
        await(clickAndSendkeys(PageLocators.lastName,"sam"));
        await(clickAndSendkeys(PageLocators.postCode,"600001"));
        expect(PageLocators.home,"Home");
        console.log(fname)

        await(toClick(PageLocators.addDetails)); 
      
        pageObject.page.on('dialog', async dialog => {     // Check if the dialog type is 'alert'
            if (dialog.type() === 'alert') {   
                   console.log('Alert message:', dialog.message());          
                      // Dismiss the alertawait dialog.dismiss(); // Alternatively, you can accept the alert// 
                      await dialog.accept(); 
                    }
                    expect(PageLocators.openCustomer,"Open Account");
                 });
}


async openCustomer()
{
    await (toClick(PageLocators.openCustomer));
   // await (toClick(PageLocators.selectCustomer));
  
    await select(PageLocators.selectCustomer,"2");
    await select(PageLocators.selectCurrency,"Pound");

    await toClick(PageLocators.process);
}
}