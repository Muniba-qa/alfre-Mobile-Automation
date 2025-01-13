const allure = require("@wdio/allure-reporter").default;
const LandingPage = require("../locators/Landing.page.js");
const joinOurWaitList = async () => {
  const LandingLocators = new LandingPage();

  allure.addStep("Verify user is on landing page and logo is displayed.");
  await $(LandingLocators.redBoxMeLogo).waitForDisplayed({
    timeout: 30000,
  });

  allure.addStep('Verify "Join our waitlist" link is visible.');
  await $(LandingLocators.joinOurWaitListLink).waitForDisplayed({
    timeout: 30000,
  });

  allure.addStep('Click on "Join our waitlist" link.');
  await $(LandingLocators.joinOurWaitListLink).click();

  allure.addStep(
    'Verify "Thank you for your interest in being part of our community" scren is visible.'
  );
  await $(LandingLocators.thankyouDesc).waitForDisplayed({
    timeout: 10000,
  });

  allure.addStep('Verify "Enter your e-mail" field is visible.');
  await $(LandingLocators.emailField).waitForDisplayed({
    timeout: 30000,
  });
  allure.addStep(
    'Verify "Join wait List" button is not enabled until valid email is entered.'
  );
  await $(LandingLocators.joinWaitListButton).waitForDisplayed({
    timeout: 30000,
  });
  let joinWaitListBtnState = await $(
    LandingLocators.joinWaitListButton
  ).isEnabled();
  await expect(joinWaitListBtnState).toBe(false);
};


const createGroup = async () => {

}



module.exports = {
  joinOurWaitList,
  createGroup
};
