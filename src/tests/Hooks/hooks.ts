import { Before,BeforeAll,AfterAll,After, setDefaultTimeout, Status} from "@cucumber/cucumber";
import {chromium,Browser,Page, BrowserContext} from "@playwright/test"
import { pageObject } from "../Hooks/PageObjects"


let browser:Browser;
let pages:Page;
// BeforeAll(async function() {
    
// })
Before(async function(){ 
    browser=await chromium.launch({headless:false});
    setDefaultTimeout:  60 * 1000 
    pages=await browser.newPage();
    pageObject.page=pages;
});
After(async function(scenario) {
     //Failed ScreenShot
   // console.log(scenario.result?.status);
    if(scenario.result?.status==Status.FAILED){
       // setDefaultTimeout(2000);
        const img=await pageObject.page.screenshot({path:`./test-results/Screenshots/${scenario.pickle.name}`,type:"png"});
        await this.attach(img,"image/png");
    }
    console.log("===============Close Browser==============");
    //await  pageObject.page.close();
    await browser.close();
   
//    context.close();
});
// AfterAll(async function(){
    
// })
