const allure = require("@wdio/allure-reporter").default;
const { click } = require("appium-uiautomator2-driver/build/lib/commands/element.js");
const { UiScrollable, UiSelector } = require('appium-uiautomator2-driver');
const { email } = require("../../../Utils/constants.js");
const emailUtils = require("../../../Utils/emailUtils.js");
const { waitForElementDisplayed, scrollInsideElement, getRandomSentence, scrollElementByText, scrollElementByXpath,scrollToGetParentElement, displayNameSentences,scroll, extendedNameSentences, wishToShareSentences, scrollElementByXpath2 } = require("../../../Utils/myUtils.js");
const LoginLocators = require("./login.locators.js");


const loginLocators = new LoginLocators();

const joinOurWaitList = async () => {
  await waitForElementDisplayed(loginLocators.redBoxMeLogo, "landing page and logo");
  await waitForElementDisplayed(loginLocators.joinOurWaitListLink, "Join our waitlist");

  allure.addStep('Click on "Join our waitlist" link.');
  await loginLocators.joinOurWaitListLink.click();

  await waitForElementDisplayed(loginLocators.thankyouDesc, "Thank you for your interest in being part of our community");

  await waitForElementDisplayed(loginLocators.emailField, "Enter your e-mail");

  await waitForElementDisplayed(loginLocators.joinWaitListButton, "Join wait List");
  let joinWaitListBtnState = await loginLocators.joinWaitListButton.isEnabled();
  await expect(joinWaitListBtnState).toBe(false);
};

const loginToAccount = async () => {
  await waitForElementDisplayed(loginLocators.redBoxMeLogo, "landing page and logo");

  await waitForElementDisplayed(loginLocators.amAMemberBtn, "I AM A MEMBER");
  allure.addStep('Click on "I AM A MEMBER" button.');
  await loginLocators.amAMemberBtn.click();

  await waitForElementDisplayed(loginLocators.emailField, "Enter email field");
  allure.addStep('Input "Email" into field.');
  await loginLocators.emailField.setValue(email);

  allure.addStep('Click on "SEND CODE" button.');
  await loginLocators.sendCodeBtn.click();

  await driver.pause(5000)
  allure.addStep('Fetching OTP from email.');
  const otp = await emailUtils.getEmailVerificationCode()
  await driver.pause(1000)

  allure.addStep('Input OTP into code fields.');
  if (otp) {
    const otpArray = otp.split('');
    await loginLocators.otpInput1.setValue(otpArray[0]);
    await driver.pause(200)
    await loginLocators.otpInput1.setValue(otpArray[1]);
    await driver.pause(200)
    await loginLocators.otpInput1.setValue(otpArray[2]);
    await driver.pause(200)
    await loginLocators.otpInput1.setValue(otpArray[3]);
    await driver.pause(200)
    await loginLocators.otpInput1.setValue(otpArray[4]);
    await driver.pause(200)
  }

  allure.addStep('Click on "SUBMIT VERIFICATION CODE" button.');
  await loginLocators.submitVerificationCodeBtn.click();

  allure.addStep('Verify Successful login.');
  await waitForElementDisplayed(loginLocators.plusBtnBottomNav, "");
  await driver.pause(2000)
}

const createGroup = async (status) => {

  await waitForElementDisplayed(loginLocators.plusBtnBottomNav, "");
  allure.addStep('Click on "plus" button.');
  await loginLocators.plusBtnBottomNav.click();

  await waitForElementDisplayed(loginLocators.buildaGroupTxt, "Build Group text");
  allure.addStep('Click on "Build Group option" text.');
  await loginLocators.buildaGroupTxt.click();

  await waitForElementDisplayed(loginLocators.uploadPicture, "Upload picture text");
  allure.addStep('Click on "Upload" text.');
  await loginLocators.uploadPicture.click();

  await waitForElementDisplayed(loginLocators.chooseYourPhotosBtn, "Choose from your Photos");
  allure.addStep('Click on "Choose from your Photos" button.');
  await loginLocators.chooseYourPhotosBtn.click();

  await waitForElementDisplayed(loginLocators.videoFromPicker, "");
  allure.addStep('Click on "Image " from picker.');
  await loginLocators.videoFromPicker.click();

  allure.addStep('Click on "tick" in edit image.');
  await waitForElementDisplayed(loginLocators.tickBtnEditSCreen, "");
  await loginLocators.tickBtnEditSCreen.click();

  allure.addStep('Input "Display Name" into field.');
  await waitForElementDisplayed(loginLocators.displayNameInputField, "Display Name");
  await loginLocators.displayNameInputField.setValue(getRandomSentence(displayNameSentences));

  allure.addStep('Input "Extended name" into field.');
  await waitForElementDisplayed(loginLocators.extendedNameInputField, "Extended name");
  await loginLocators.extendedNameInputField.setValue(getRandomSentence(extendedNameSentences));

  allure.addStep('Input into "wish to share" field.');
  await waitForElementDisplayed(loginLocators.howToRedBoxInputField, "Wish to share");
  await loginLocators.howToRedBoxInputField.setValue(getRandomSentence(wishToShareSentences));

  await loginLocators.howToRedBoxText.click();
  await scrollByUiLocator(loginLocators.nextBtn)
  if (status == "private") {
    await waitForElementDisplayed(loginLocators.groupSwitch, "Group switch")
    await loginLocators.groupSwitch.click();
  }

  await waitForElementDisplayed(loginLocators.nextBtn, "Next button");
  allure.addStep('Click on "next " button.');
  await loginLocators.nextBtn.click();

  await driver.pause(5000)
  await scrollByUiLocator(loginLocators.nextBtn)
  allure.addStep('Click on "next " button.');
  await loginLocators.nextBtn.click();

  await waitForElementDisplayed(loginLocators.allCategoriesBtn, "All");
  allure.addStep('Click on "All " button.');
  await loginLocators.allCategoriesBtn.click();

  await scrollByUiLocator(loginLocators.createGroupBtn)
  await waitForElementDisplayed(loginLocators.createGroupBtn, "create Group button");
  allure.addStep('Click on "create Group" button.');
  await loginLocators.createGroupBtn.click();

  await scrollInsideElement(loginLocators.groupScrollElement);

  await waitForElementDisplayed(loginLocators.seeMyGroupBtn, "see my Group button");
  allure.addStep('Click on "see my Group" button.');
  await loginLocators.seeMyGroupBtn.click();
  await driver.pause(5000)

  await waitForElementDisplayed(loginLocators.groupMoreOptionBtn, "Group more options button");
  allure.addStep('Click on "more option" button.');
  await loginLocators.groupMoreOptionBtn.click();

  await waitForElementDisplayed(loginLocators.editProfileOption, "Edit Profile option");
  allure.addStep('Click on "more option" button.');
  await loginLocators.editProfileOption.click();

  await scrollByUiLocator(loginLocators.saveBtn)

  const isVisible = await loginLocators.groupSwitch.isDisplayed();
  if (isVisible) {
    allure.addStep('Click on "group" switch.');
    await loginLocators.groupSwitch.click();

    allure.addStep('Click on "Save" button.');
    await loginLocators.saveBtn.click();
  } else {
    await loginLocators.backArrowBtn.click();
  }

  await driver.pause(3000)
  await waitForElementDisplayed(loginLocators.thoughtsTab, "");

  await scrollInsideElement(loginLocators.groupScrollElement);

}

const seeMoreLinkVerificationForMoreThanFiveComments = async () => {
  const loginLocators = new LoginLocators();
  allure.addStep('Click on All section');
  await $(loginLocators.allSection).waitForDisplayed({ timeout: 20000 });
  await $(loginLocators.allSection).click()
  allure.addStep('Scroll in to post with more than five comments.');
  await driver.pause(3000)
  await $(
    "android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,3)"
  );
  // await scrollByUiLocator(loginLocators.testigThoughtsPostingFromProfileTxt)
//   await loginLocators.testigThoughtsPostingFromProfileTxt.scrollIntoView({
//     direction: 'down',
//     maxScrolls: 5,
//     duration: 1500,
//     percent: 0.95
// });`

// Define the start and end points for the swipe
const start = { x: 514, y: 73 }; // Starting coordinates
const end = { x: 422, y: 1965 };   // Ending coordinates

// Perform the swipe using touch actions
// await driver.performActions([{
//   type: 'pointer',
//   id: 'finger1',
//   parameters: { pointerType: 'touch' },
//   actions: [
//     { type: 'pointerMove', duration: 0, x: start.x, y: start.y },
//     { type: 'pointerDown', button: 0 },
//     { type: 'pause', duration: 100 },
//     { type: 'pointerMove', duration: 1000, origin: 'pointer', x: end.x, y: end.y },
//     { type: 'pointerUp', button: 0 }
//   ]
// }]);

// Release all actions after completion
// await driver.releaseActions();

  await $(loginLocators.testigThoughtsPostingFromProfileTxt).waitForDisplayed({ timeout: 20000 });

  allure.addStep('Verify that see more link is visible.');

  await $(loginLocators.seemoreLink).waitForDisplayed({ timeout: 20000 });


}

module.exports = {
  joinOurWaitList,
  createGroup,
  loginToAccount,
  seeMoreLinkVerificationForMoreThanFiveComments,
};
