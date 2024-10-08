import { Page, expect } from "@playwright/test"
import { assertURL, clickAndSendkeys, launchURL, sendkeys, sleep, takeScreenshot, toClick, waitSelector } from "../../../Helper/Actions";

const pageLocators={
    usernameInputfield:"#user-name",
    passwordInputField:"#password",
    loginButton:"#login-button",
    inventoryItem:"//div[@class='inventory_item_price']",
    shoppingCartContainer:"//div[@id='shopping_cart_container']/a",
    inventoryItemName:"//div[@class='inventory_item']/div/a/div",
    myCartItems:"//div[@class='inventory_item_name']",
    checkoutButton:"//a[@class='btn_action checkout_button']",
    checkoutFirstName:"//input[@id='first-name']",
    checkoutLastName:"//input[@id='last-name']",
    checkoutPostalcode:"//input[@id='postal-code']",
    cartContinueButton:"//input[@class='btn_primary cart_button']",
    paymentInformation:"(//div[@class='summary_value_label'])[1]",
    finishButton:"//a[@class='btn_action cart_button']",
    selectfilter:"//select[@class='product_sort_container']",
    filteratoz:"//option[@value='az']",
    filterZtoa:"//option[@value='za']",
    filterLowtoHigh:"//option[@value='lohi']",
    filterHightolow:"//option[@value='hilo']"
}

export class addProducts{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    
    
    async minPriceProduct():Promise<any>{
       const products= await this.page.locator(pageLocators.inventoryItem).allTextContents();
       let min:number=500;
       let minindex:number=0;
      for(let i=0;i<products.length;i++){
        const price:string=products[i].slice(1,3);
        const productPrice:number=parseInt(price,10);
       
        if(min>productPrice){
            min=productPrice;
            minindex=i+1;
        }
      }
      await this.page.locator("(//div[@class='inventory_item']/div/button)["+minindex+"]").click();
      const minProductName=await this.page.locator("(//div[@class='inventory_item']/div/a/div)["+minindex+"]").innerText();
      await toClick(pageLocators.shoppingCartContainer);
      console.log(" Minimum price product name is : "+minProductName);
       }

       async maxPriceProduct():Promise<any>{
        const products= await this.page.locator(pageLocators.inventoryItem).allTextContents();
        let max:number=0;
        let maxindex:number=0;
       for(let i=0;i<products.length;i++){
         const price:string=products[i].slice(1,3);
         const productPrice:number=parseInt(price,10);
        
         if(max<productPrice){
             max=productPrice;
             maxindex=i+1;
         }
       }
       await this.page.locator("(//div[@class='inventory_item']/div/button)["+maxindex+"]").click();
       const maxProductName=await this.page.locator("(//div[@class='inventory_item']/div/a/div)["+maxindex+"]").innerText();
       await toClick(pageLocators.shoppingCartContainer);
       console.log(" Maximum price product name is : "+maxProductName);
        }


       async verifyMyCartPageURL():Promise<any>{
        const myCartPageUrl:string="https://www.saucedemo.com/v1/cart.html";
        await assertURL(myCartPageUrl);
       }
       async verifyMycartProductItems():Promise<any>{
        waitSelector(pageLocators.myCartItems);
         const Productname = await this.page.locator(pageLocators.myCartItems).innerText();
         expect(Productname).toContain('Sauce Labs ');
       }
       async clickCheckoutButton():Promise<any>{
        await toClick(pageLocators.checkoutButton);
       }
       async verifyCheckoutPageURL():Promise<any>{
        const checkoutPageUrl:string="https://www.saucedemo.com/v1/checkout-step-one.html";
        await assertURL(checkoutPageUrl);
       }
       async checkoutInformation():Promise<any>{
        await toClick(pageLocators.checkoutFirstName);
        await sendkeys(pageLocators.checkoutFirstName,"magesh"); 
        await toClick(pageLocators.checkoutLastName);
        await sendkeys(pageLocators.checkoutLastName,"poopathi");
        await clickAndSendkeys(pageLocators.checkoutPostalcode,"3456");
        await toClick(pageLocators.cartContinueButton);
       }
       async overviewPageURL():Promise<any>{
        const overviewPageUrl:string="https://www.saucedemo.com/v1/checkout-step-two.html";
        await assertURL(overviewPageUrl);
       }
       async paymentInformation():Promise<any>{
        waitSelector(pageLocators.paymentInformation);
        const paymentID= await this.page.locator(pageLocators.paymentInformation).innerText();
        console.log(" "+paymentID);
       }
       async clickFinishButton():Promise<any>{
        waitSelector(pageLocators.finishButton);
       await toClick(pageLocators.finishButton);
       }
       async verifyCheckoutCompletePage():Promise<any>{
            const CheckoutCompletePage:string="https://www.saucedemo.com/v1/checkout-complete.html";
            await assertURL(CheckoutCompletePage);
       }

       async addminimumcart():Promise<any>{
        waitSelector(pageLocators.selectfilter);
        await this.page.locator(pageLocators.selectfilter).click();
        const minimumProduct=await this.page.locator(pageLocators.filterLowtoHigh).click;
        console.log(" Maximum price product name is : "+minimumProduct);
       }
       async FinalScreenshot():Promise<any>{
        await takeScreenshot("FinalResult");
       }
    }
