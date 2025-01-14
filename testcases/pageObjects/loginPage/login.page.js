const allure = require("@wdio/allure-reporter").default;
const { email } = require("../../../Utils/constants.js");
const { fetchOtpFromEmail, inputOtp } = require("../../../Utils/emailUtils.js");
const { waitForElementDisplayed, scrollByUiLocator, scrollInsideElement, getRandomSentence, displayNameSentences, extendedNameSentences, wishToShareSentences } = require("../../../Utils/myUtils.js");
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

  // allure.addStep('Fetching OTP from email.');
  // const otp = await fetchOtpFromEmail();

  // allure.addStep('Input OTP into code fields.');
  // if (otp) {
  //   await inputOtp(otp);
  // }

  // allure.addStep('Click on "SUBMIT VERIFICATION CODE" button.');
  // await loginLocators.submitVerificationCodeBtn.click();

  allure.addStep('Verify Successful login.');
  await waitForElementDisplayed(loginLocators.plusBtnBottomNav, "");


}

const createGroup = async () => {

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
  await waitForElementDisplayed(loginLocators.groupSwitch, "Group switch")
  await loginLocators.groupSwitch.click();

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

  await waitForElementDisplayed(loginLocators.seeMyGroupBtn, "see my Group button");
  allure.addStep('Click on "see my Group" button.');
  await loginLocators.seeMyGroupBtn.click();
  
  await waitForElementDisplayed(loginLocators.groupMoreOptionBtn, "Group more options button");
  allure.addStep('Click on "more option" button.');
  await loginLocators.groupMoreOptionBtn.click();
  
  await waitForElementDisplayed(loginLocators.editProfileOption, "Edit Profile option");
  allure.addStep('Click on "more option" button.');
  await loginLocators.editProfileOption.click();

  await scrollByUiLocator(loginLocators.saveBtn)
  await waitForElementDisplayed(loginLocators.groupSwitch, "");
  allure.addStep('Click on "group" switch.');
  await loginLocators.groupSwitch.click();

  await waitForElementDisplayed(loginLocators.saveBtn, "");
  allure.addStep('Click on "Save" button.');
  await loginLocators.saveBtn.click();
  
  await driver.pause(5000)
  await waitForElementDisplayed(loginLocators.thoughtsTab, "");

  await scrollInsideElement(loginLocators.groupScrollElement);

}



module.exports = {
  joinOurWaitList,
  createGroup,
  loginToAccount
};
