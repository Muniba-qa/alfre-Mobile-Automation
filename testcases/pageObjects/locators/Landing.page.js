class LandingPage {
  get redBoxMeLogo() {
    return '//com.horcrux.svg.SvgView[@resource-id="logo-svg"]'
  }
  get joinOurWaitListLink() {
    return '//android.widget.TextView[@text="Join our waitlist"]'
  }
  get thankyouDesc() {
    return '//android.widget.TextView[@resource-id="title-container"]'
  }
  get weAreLookingTxt() {
    return '//android.widget.TextView[@text="We are looking forward to RedBox with you"]'
  }
  get emailField() {
    return '//android.widget.EditText[@resource-id="input-element"]'
  }
  get joinWaitListButton() {
    return '//android.view.ViewGroup[@content-desc="JOIN WAITLIST"]'
  }

  get plusBtnBottomNav() {
    return 'new UiSelector().className("android.widget.Button").instance(2)'
  }
  get buildaGroupTxt() {
    return 'new UiSelector().text("Build a Group")'
  }
  get displayNameInputField() {
    return '//android.widget.EditText[@resource-id="input-element" and @text="Display name"]'
  }
  get extendedNameInputField() {
    return '//android.widget.EditText[@resource-id="input-element" and @text="Extended name"]'
  }
  get howToRedBoxInputField() {
    return '//android.view.ViewGroup[@content-desc="How do you wish to redbox with us?, Tell us what you wish to share with our community, 0/160"]/android.widget.EditText'
  }
  get uploadPicture() {
    return 'new UiSelector().text("Upload picture")'
  }


}

module.exports = LandingPage;
