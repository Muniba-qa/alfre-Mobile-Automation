
const ThoughtsLocators = require('./thoughts.locators');
const { scrollElementByXpath, scrollElementByXpath2 } = require("../../../Utils/myUtils.js");
const allure = require("@wdio/allure-reporter").default;

const verifySeeMoreInThoughts = async () => {
  
    await browser.pause(5000);
  
    allure.addStep('verify the Thoughts tab button is Visible');
    await $(ThoughtsLocators.thoughtTabBtn).waitForDisplayed();
  
    allure.addStep('Click on the Thoughts tab button');
    await $(ThoughtsLocators.thoughtTabBtn).click();
  
    await browser.pause(8000);
  
    allure.addStep('Scroll the View to get 5 or more comments');
    await scrollElementByXpath2(ThoughtsLocators.thoughtPostSeeMoreBtn);
  
    const precedingSiblingXPath = `${ThoughtsLocators.seeMoreElementCount}/preceding-sibling::android.view.ViewGroup`;
  
    const elementsAboveSeeMore = await $$(precedingSiblingXPath);
  
    allure.addStep('Verify that see more button exist on 5 comments');
    const length = await elementsAboveSeeMore.length; 
    await expect(length).toBeGreaterThanOrEqual(5);
  
    allure.addStep('Click on the See more button');
    await $(ThoughtsLocators.seeMoreElementCount).waitForDisplayed();
    await $(ThoughtsLocators.seeMoreElementCount).click();
  
    await browser.pause(3000);
  
    allure.addStep('Verify that view All Comments are visible');
    await scrollElementByXpath(ThoughtsLocators.viewAllComments);
  
    let viewAll = await $(ThoughtsLocators.viewAllComments);
    let elementText = await viewAll.getText();
  
    let number = elementText.match(/\d+/);
  
    allure.addStep('verify that View all commnets are greater than 6');
    await expect(parseInt(number[0])).toBeGreaterThanOrEqual(6);
  
}
const verifySeeMoreNotExistInThoughts = async () => {
  
    await browser.pause(5000);
  
    allure.addStep('verify the Thoughts tab button is Visible');
    await $(ThoughtsLocators.thoughtTabBtn).waitForDisplayed();
  
    allure.addStep('Click on the Thoughts tab button');
    await $(ThoughtsLocators.thoughtTabBtn).click();
  
    await browser.pause(3000);
    allure.addStep('Sroll the Page into first less than 6 comments view.')
    await scrollElementByXpath2(ThoughtsLocators.parentCommnetElement);
  
    let followingSibling = `${ThoughtsLocators.parentCommnetElement}/following-sibling::android.view.ViewGroup`;
  
    const belowElement = await $$(followingSibling);
  
    allure.addStep('Verify that see more button exist on less than or equal to 5 comments');
    const length = await belowElement.length; 
    await expect(length).toBeLessThanOrEqual(8);
  
}
const verifySeeMoreAdditionalContentInThoughts = async () => {
  
   await verifySeeMoreInThoughts();

    allure.addStep('Click on the View all comments button');
    await $(ThoughtsLocators.viewAllComments).click();

    allure.addStep('Verify that Additional Comments screen is visible');
    await $(ThoughtsLocators.reflectionsText).waitForDisplayed();

}
module.exports = {
    verifySeeMoreInThoughts,
    verifySeeMoreNotExistInThoughts,
    verifySeeMoreAdditionalContentInThoughts
}