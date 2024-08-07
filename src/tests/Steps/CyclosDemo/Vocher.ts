import { Given,Then,When } from "@cucumber/cucumber";
import { vocherPage } from "../../Pages/cyclosLoginPage/CyclosVocher";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText } from "../../Helper/Actions";
let CyclocsVocherpage:vocherPage;

  Given('User navigate to Home page and click dashboard', async function () {
    CyclocsVocherpage=new vocherPage(pageObject.page);
    await CyclocsVocherpage.verifyHomePageURL();
  });

  When('I click on Vocher Module', async function () {
    await CyclocsVocherpage.clickVocherButton();
  });

  When('navigate to Gift Vocher option', async function () {
    await CyclocsVocherpage.gotoGiftVocher();
  });

  When('Validate the gift vocher page', async function () {
  await CyclocsVocherpage.validateGiftVocher();
  });

  When('Enter the amount and click the gift vocher option', async function () {
   await CyclocsVocherpage.giftVocherAmount();
  });

  When('click the confirm button to complete the process', async function () {
    await CyclocsVocherpage.ConfirmationText();
  });

  Then('verify the gift vocher details', async function () {
  await CyclocsVocherpage.assertGiftVocherPage();
  });