class LoginLocators {
  get redBoxMeLogo() {
    return $(`//com.horcrux.svg.SvgView[@resource-id="logo-svg"]`)
  }
  get joinOurWaitListLink() {
    return $(`//android.widget.TextView[@text="Join our waitlist"]`)
  }
  get thankyouDesc() {
    return $(`//android.widget.TextView[@resource-id="title-container"]`)
  }
  get weAreLookingTxt() {
    return $(`//android.widget.TextView[@text="We are looking forward to RedBox with you"]`)
  }
  get emailField() {
    return $(`//android.widget.EditText[@resource-id="input-element"]`)
  }
  get joinWaitListButton() {
    return $(`//android.view.ViewGroup[@content-desc="JOIN WAITLIST"]`)
  }

  get plusBtnBottomNav() {
    return $('(//android.widget.Button//com.horcrux.svg.SvgView)[2]')
  }
  get buildaGroupTxt() {
    return $('android=new UiSelector().text("Build a Group")')
  }
  get displayNameInputField() {
    return $(`//android.widget.EditText[@resource-id="input-element" and @text="Display name"]`)
  }
  get extendedNameInputField() {
    return $(`//android.widget.EditText[@resource-id="input-element" and @text="Extended name"]`)
  }
  get howToRedBoxInputField() {
    return $(`//android.view.ViewGroup[contains(@content-desc, "How do you wish to redbox with us")]/android.widget.EditText`);
  }
  get howToRedBoxText() {
    return $(`//android.view.ViewGroup[contains(@content-desc, "How do you wish to redbox with us")]/android.widget.TextView[1]`);
  }
  get uploadPicture() {
    return $('android=new UiSelector().text("Upload picture")')
  }
  get amAMemberBtn() {
    return $(`//android.view.ViewGroup[@content-desc="I AM A MEMBER"]/android.widget.TextView`)
  }
  get sendCodeBtn() {
    return $(`//android.view.ViewGroup[@content-desc="SEND CODE"]/android.widget.TextView`)
  }
  get otpInput1() {
    return $(`(//android.widget.EditText[@text="*"])[1]`)
  }

  get submitVerificationCodeBtn() {
    return $(`//android.view.ViewGroup[@content-desc="SUBMIT VERIFICATION CODE"]/android.widget.TextView`)
  }

  get chooseYourPhotosBtn() {
    return $(`//android.view.ViewGroup[contains(@content-desc, 'Choose from your photos')]/android.widget.TextView[2]`);
  }
  get pickerDescTxt() { return $('android=new UiSelector().resourceId("com.google.android.providers.media.module:id/privacy_text")'); }

  get videoFromPicker() { return $('android=new UiSelector().resourceId("com.google.android.providers.media.module:id/icon_thumbnail").instance(0)'); }
  get tickBtnEditSCreen() {
    return $('android=new UiSelector().resourceId("com.redbox.redboxme:id/menu_crop")');
  }
  get nextBtn() {
    return $('android=new UiSelector().text("NEXT")');
  }
  get saveBtn() {
    return $('android=new UiSelector().text("SAVE")');
  }
  get allCategoriesBtn() {
    return $('//android.view.ViewGroup[@content-desc="All"]/android.widget.TextView');
  }

  get createGroupBtn() {
    return $('android=new UiSelector().text("CREATE GROUP")');
  }

  get seeMyGroupBtn() {
    return $('//android.view.ViewGroup[@content-desc="SEE MY GROUP PROFILE"]/android.widget.TextView');
  }

  get backArrowBtn() {
    return $('//android.view.ViewGroup[@resource-id="back-button"]');
  }

  get groupsTabHomePage() {
    return $('//android.widget.Button[@content-desc="Groups"]/android.widget.TextView');
  }
  get groupSwitch() {
    return $('//android.view.ViewGroup//android.widget.Switch');
  }
  
  get privateText() {
    return $('android=new UiSelector().text("PRIVATE")');
  }
  
  get groupMoreOptionBtn() {
    return $('(//android.view.ViewGroup//android.view.ViewGroup//com.horcrux.svg.SvgView)[1]');
  }
  get editProfileOption() {
    return $('android=new UiSelector().text("Edit Profile")');
  }
  get thoughtsTab() {
    return $('android=new UiSelector().text("Thoughts")');
  }
  get groupScrollElement() {
    return '(//android.view.ViewGroup//android.widget.ScrollView//android.view.ViewGroup)[1]';
  }
}

module.exports = LoginLocators;
