import { Given,Then,When } from "@cucumber/cucumber";
import { vocherPage } from "../Pages/cyclosLoginPage/CyclosVocher";
import { pageObject } from "../Hooks/PageObjects";
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
