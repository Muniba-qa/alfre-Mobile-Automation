const ContributionsLocators = require('../contributionsPage/contribution.locator.js');
const { scrollElementByXpath2 } = require("../../../Utils/myUtils.js");
const allure = require("@wdio/allure-reporter").default;


const verifySeeMoreExistInContributionTab = async () => {

    const contributionsLocators = new ContributionsLocators();
  
    await browser.pause(5000);
  
    allure.addStep('verify the Contributions tab button is Visible');
    await $(contributionsLocators.contributionBtn).waitForDisplayed();
  
    allure.addStep('Click on the Contribution tab button');
    await $(contributionsLocators.contributionBtn).click();
  
    await browser.pause(8000);
  
    allure.addStep('Scroll the View to get 5 or more comments');
    await scrollElementByXpath2(contributionsLocators.contributionsPostSeeMoreBtn);
  
    const precedingSiblingXPath = `${contributionsLocators.seeMoreElementCount}/preceding-sibling::android.view.ViewGroup`;
  
    const elementsAboveSeeMore = await $$(precedingSiblingXPath);
  
    allure.addStep('Verify that see more button exist on 5 comments');
    const length = await elementsAboveSeeMore.length; 
    await expect(length).toBeGreaterThanOrEqual(5);
  
    allure.addStep('Click on the See more button');
    await $(contributionsLocators.seeMoreElementCount).waitForDisplayed();
    await $(contributionsLocators.seeMoreElementCount).click();
  
    await browser.pause(3000);
  
    allure.addStep('Verify that view All Comments are visible');
    await scrollElementByXpath(contributionsLocators.viewAllComments);
  
    let viewAll = await $(contributionsLocators.viewAllComments);
    let elementText = await viewAll.getText();
  
    let number = elementText.match(/\d+/);
  
    allure.addStep('verify that View all commnets are greater than 6');
    await expect(parseInt(number[0])).toBeGreaterThanOrEqual(6);
  
}

module.exports = {
    verifySeeMoreExistInContributionTab
}