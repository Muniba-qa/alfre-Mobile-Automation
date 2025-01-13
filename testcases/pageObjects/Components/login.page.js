const allure = require("@wdio/allure-reporter").default;
const { email } = require("../../../Utils/constants.js");
const { fetchOtpFromEmail, inputOtp } = require("../../../Utils/emailUtils.js");
const LoginLocators = require("../locators/login.locators.js");


const loginLocators = new LoginLocators();

const joinOurWaitList = async () => {
  allure.addStep("Verify user is on landing page and logo is displayed.");
  await loginLocators.redBoxMeLogo.waitForDisplayed({
    timeout: 30000,
  });

  allure.addStep('Verify "Join our waitlist" link is visible.');
  await loginLocators.joinOurWaitListLink.waitForDisplayed({
    timeout: 30000,
  });

  allure.addStep('Click on "Join our waitlist" link.');
  await loginLocators.joinOurWaitListLink.click();

  allure.addStep(
    'Verify "Thank you for your interest in being part of our community" scren is visible.'
  );
  await loginLocators.thankyouDesc.waitForDisplayed({
    timeout: 10000,
  });

  allure.addStep('Verify "Enter your e-mail" field is visible.');
  await loginLocators.emailField.waitForDisplayed({
    timeout: 30000,
  });
  allure.addStep(
    'Verify "Join wait List" button is not enabled until valid email is entered.'
  );
  await loginLocators.joinWaitListButton.waitForDisplayed({
    timeout: 30000,
  });
  let joinWaitListBtnState = await loginLocators.joinWaitListButton.isEnabled();
  await expect(joinWaitListBtnState).toBe(false);
};

const loginToAccount = async () => {
  allure.addStep("Verify user is on landing page and logo is displayed.");
  await loginLocators.redBoxMeLogo.waitForDisplayed({
    timeout: 30000,
  });

  allure.addStep('Verify "I AM A MEMBER" button is visible.');
  await loginLocators.amAMemberBtn.waitForDisplayed({
    timeout: 30000,
  });

  allure.addStep('Click on "I AM A MEMBER" button.');
  await loginLocators.amAMemberBtn.click();

  allure.addStep('Verify "Enter email field" is visible.');
  await loginLocators.emailField.waitForDisplayed({
    timeout: 30000,
  });
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
  await loginLocators.plusBtnBottomNav.waitForDisplayed({
    timeout: 120000,
  });


}

const createGroup = async () => {

  allure.addStep('Click on "plus" button.');
  await loginLocators.plusBtnBottomNav.click();
  await loginLocators.buildaGroupTxt.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "Build Group option" text.');
  await loginLocators.buildaGroupTxt.click();
  await loginLocators.uploadPicture.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "Upload" text.');
  await loginLocators.uploadPicture.click();
  await loginLocators.chooseYourPhotosBtn.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "Choose from your Photos" button.');
  await loginLocators.chooseYourPhotosBtn.click();
  await loginLocators.videoFromPicker.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "Image " from picker.');
  await loginLocators.videoFromPicker.click();
  allure.addStep('Click on "ok " from picker.');
  await loginLocators.tickBtnEditSCreen.waitForDisplayed({
    timeout: 120000,
  });
  await loginLocators.tickBtnEditSCreen.click();
  allure.addStep('Input "Display Name" into field.');
  await loginLocators.displayNameInputField.waitForDisplayed({
    timeout: 120000,
  });
  await loginLocators.displayNameInputField.setValue('Innovators Collective');
  allure.addStep('Input "Extended name" into field.');
  await loginLocators.extendedNameInputField.waitForDisplayed({
    timeout: 120000,
  });
  await loginLocators.extendedNameInputField.setValue('A Forum for Creative Collaboration and Insightful Discussions');
  allure.addStep('Input into "wish to share" field.');
  await loginLocators.howToRedBoxInputField.waitForDisplayed({
    timeout: 120000,
  });
  await loginLocators.howToRedBoxInputField.setValue('Innovators Collective is a space for creative minds to share ideas, industry trends, and valuable insights. Join us for meaningful discussions and professional networking');
  
  await loginLocators.howToRedBoxText.waitForDisplayed({
    timeout: 120000,
  });
  await loginLocators.howToRedBoxText.click();
  allure.addStep('Click on "next " button.');
  await loginLocators.nextBtn.click();
  await loginLocators.nextBtn.waitForDisplayed({
    timeout: 120000,
  });
  await driver.pause(5000)
  allure.addStep('Click on "next " button.');
  await loginLocators.nextBtn.click();
  await loginLocators.allCategoriesBtn.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "All " button.');
  await loginLocators.allCategoriesBtn.click();
  await loginLocators.createGroupBtn.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "create Group" button.');
  await loginLocators.createGroupBtn.click();
  await loginLocators.seeMyGroupBtn.waitForDisplayed({
    timeout: 120000,
  });
  allure.addStep('Click on "see my Group" button.');
  await loginLocators.seeMyGroupBtn.click();
}



module.exports = {
  joinOurWaitList,
  createGroup,
  loginToAccount
};
