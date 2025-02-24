
const ThoughtsLocators = require('./thoughts.locators');
const { scrollElementByXpath, scrollElementByXpath2 } = require("../../../Utils/myUtils.js");
const allure = require("@wdio/allure-reporter").default;
const { remote } = require('webdriverio');

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

const deleteThoughtPost = async () => {

    allure.addStep('click on the show translated post');
    await $(ThoughtsLocators.showTranslationTitle).waitForDisplayed();
    await $(ThoughtsLocators.showTranslationTitle).click({force:true});

    allure.addStep('click on the three dot button of the post');
    await $(ThoughtsLocators.postOptionBtn).waitForDisplayed();
    await $(ThoughtsLocators.postOptionBtn).click();

    allure.addStep('click on the delete button of the popup');
    await $(ThoughtsLocators.deletePostBtn).waitForDisplayed();
    await $(ThoughtsLocators.deletePostBtn).click();

    allure.addStep('click on the delete thought button of the popup');
    await $(ThoughtsLocators.deleteThoughtBtn).waitForDisplayed();
    await $(ThoughtsLocators.deleteThoughtBtn).click();

}
const createThoughtPost = async (postTitle) => {

    await browser.pause(5000);

    allure.addStep('click on the menu profile button');
    await $(ThoughtsLocators.profileButton).waitForDisplayed();
    await $(ThoughtsLocators.profileButton).click();

    allure.addStep('click on the Thoughts button');
    await $(ThoughtsLocators.createPostThoughtTabBtn).waitForDisplayed();
    await $(ThoughtsLocators.createPostThoughtTabBtn).click();

    allure.addStep('click on the share your thoughts field');
    await $(ThoughtsLocators.shareYourThoughtsField).waitForDisplayed();
    await $(ThoughtsLocators.shareYourThoughtsField).click();

    allure.addStep(`Enter ${postTitle} text in the share thought field`);
    await $(ThoughtsLocators.shareYourThoughtsEditField).waitForDisplayed();
    await $(ThoughtsLocators.shareYourThoughtsEditField).clearValue();
    await $(ThoughtsLocators.shareYourThoughtsEditField).setValue(postTitle);

    allure.addStep('click on the share button of the post');
    await $(ThoughtsLocators.shareBtn).waitForDisplayed();
    await $(ThoughtsLocators.shareBtn).click();

    await browser.pause(5000);


}
const verifyShowTranslationFeatureInThoughts = async () => {

    await createThoughtPost('Este es mi post.');

    allure.addStep('verify that show translation text is visible on the other language post');
    await scrollElementByXpath2(ThoughtsLocators.showTranslationLink); 

    allure.addStep('Click on the show translation button of the post');
    await $(ThoughtsLocators.showTranslationLink).waitForDisplayed();
    await $(ThoughtsLocators.showTranslationLink).click();

    await browser.pause(6000);

    allure.addStep('verify that the post text translated correctly');
    let translatedText = await $(ThoughtsLocators.showOriginalTitleText).getText();
    await expect(translatedText).toEqual('This is my post.');

    await deleteThoughtPost();

};

const createCommentForThoughts = async (comment) => {

    allure.addStep('Verify that comment section is visible');
    await $(ThoughtsLocators.reflectionText).waitForDisplayed();
    await $(ThoughtsLocators.reflectionText).click();

    allure.addStep(`Enter ${comment} in the comment field`);
    await $(ThoughtsLocators.addCommentField).waitForDisplayed();
    await $(ThoughtsLocators.addCommentField).clearValue();
    await $(ThoughtsLocators.addCommentField).setValue(comment);

    allure.addStep('click on the send comment button');
    await $(ThoughtsLocators.commentSendBtn).waitForDisplayed();
    await $(ThoughtsLocators.commentSendBtn).click();
}

const verifyShowTranslationFeatureInThoughtsComments = async () => {

    await createThoughtPost('Este es mi post.');

    allure.addStep('verify that show translation text is visible on the other language post');
    await scrollElementByXpath2(ThoughtsLocators.showTranslationLink); 

    allure.addStep('click on the comments icon of the newly created post');
    await $(ThoughtsLocators.createdPostCommentBtn).waitForDisplayed();
    await $(ThoughtsLocators.createdPostCommentBtn).click();

    await createCommentForThoughts('Este es mi comentario');

    await browser.pause(5000);

    allure.addStep('verify that "Show Translation" text is visible under the comment.');
    await $(ThoughtsLocators.commentShowTranslationBtn).waitForDisplayed();

    allure.addStep('Click on the Show Translation text of the comment');
    await $(ThoughtsLocators.commentShowTranslationBtn).click();

    await browser.pause(5000);

    allure.addStep('verify the comment is correctly translated.');
    let commentText = await $(ThoughtsLocators.commentText).getText();
    await expect(commentText).toEqual('This is my comment');

    allure.addStep('Click on the three dot button of the comment');
    await $(ThoughtsLocators.deleteCommentDotBtn).waitForDisplayed();
    await $(ThoughtsLocators.deleteCommentDotBtn).click();

    allure.addStep('Click on the delete button of the comment popup');
    await $(ThoughtsLocators.deleteCommentBtn).waitForDisplayed();
    await $(ThoughtsLocators.deleteCommentBtn).click();

    allure.addStep('Click on the cross button of the comment popup');
    await $(ThoughtsLocators.crossBtnOfCommentPopup).waitForDisplayed();
    await $(ThoughtsLocators.crossBtnOfCommentPopup).click();
    
    await browser.pause(3000);

    await deleteThoughtPost();

}


module.exports = {
    verifySeeMoreInThoughts,
    verifySeeMoreNotExistInThoughts,
    verifySeeMoreAdditionalContentInThoughts,
    verifyShowTranslationFeatureInThoughts,
    verifyShowTranslationFeatureInThoughtsComments
}