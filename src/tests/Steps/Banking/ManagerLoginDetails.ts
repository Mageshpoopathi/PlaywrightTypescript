import { Given,Then,When } from "@cucumber/cucumber";
import { ManagerLogin } from "../../Pages/Banking/ManagerLogin";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText, toClick } from "../../Helper/Actions";

let details:ManagerLogin;
Given('User navigate to the login screen', async function () {
    details = new ManagerLogin(pageObject.page)
    await details.navigate();
  });

  
When('user click on Manager Login', async function () {
    await details.clickManager();
    
});

When('click on Add customer option', async function () {
    await details.fillDetails();
  });

  When('Open the customer Details', async function () {
  await  details.openCustomer();
  });