import { Given,Then,When } from "@cucumber/cucumber";
import { cyclosloginPage } from "../../Pages/CyclosWebsite/cyclosLoginPage/cyclosLoginPage";
import { pageObject } from "../../Hooks/PageObjects";
let Cyclosloginpage:cyclosloginPage;

  Given('User navigate to login page', async function () {
    Cyclosloginpage=new cyclosloginPage(pageObject.page);
    await Cyclosloginpage.navigate();
  });
  
  Given('Enter the username and password {string} and {string}', async function (username, password) {
    await Cyclosloginpage.enterUsername(username);
    await Cyclosloginpage.enterPassword(password);
  });
  
  Given('Click the submit', async function () {
    await Cyclosloginpage.ClicklaunchButton();
  });

  Given('Click the user payment option', async function () {
    await Cyclosloginpage.ClickPayUserButton();
  });

  Given('I perform the user payment', async function () {

    await Cyclosloginpage.ClickUserSelectionButton();
    await Cyclosloginpage.ClickUserSelection();
    await Cyclosloginpage.enterUserAmount();
    await Cyclosloginpage.nextButton(); 
    await Cyclosloginpage.paymentConfirm();

  });

  Given('I click the confirm button', async function () {
       await Cyclosloginpage.confirmButton(); 
  });

  Then('I validate the payment', async function () {
    await Cyclosloginpage.validatePayment();
  });



  
  