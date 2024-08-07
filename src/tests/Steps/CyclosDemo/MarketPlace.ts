import { Given,Then,When } from "@cucumber/cucumber";
import { cyclosMarketPlacePage } from "../../Pages/CyclosWebsite/cyclosMarketPlace/cyclosMarketPlacePage";
import { pageObject } from "../../Hooks/PageObjects";
let Cyclosmarketplacepage:cyclosMarketPlacePage;


Given('I navigate to the marketplace', async function () {
    Cyclosmarketplacepage=new cyclosMarketPlacePage(pageObject.page);
    await Cyclosmarketplacepage.MarketPlaceButton();
  });

  Given('I select the item from marketplace', async function () {
    Cyclosmarketplacepage=new cyclosMarketPlacePage(pageObject.page);
    await Cyclosmarketplacepage.SearchButton();
    await Cyclosmarketplacepage.SelectItem();
    await Cyclosmarketplacepage.VerifyItem();
});

Given('I perform the payment', async function () {
  Cyclosmarketplacepage=new cyclosMarketPlacePage(pageObject.page);
  await Cyclosmarketplacepage.MakePaymentOption;
});

Given('I enter the amount for the item', async function () {
  Cyclosmarketplacepage=new cyclosMarketPlacePage(pageObject.page);
  await Cyclosmarketplacepage.enterUserAmount;
  await Cyclosmarketplacepage.nextButton;
  await Cyclosmarketplacepage.paymentConfirm;
});

Given('I confirm the payment', async function () {
  Cyclosmarketplacepage=new cyclosMarketPlacePage(pageObject.page);
  await Cyclosmarketplacepage.confirmButton;
});