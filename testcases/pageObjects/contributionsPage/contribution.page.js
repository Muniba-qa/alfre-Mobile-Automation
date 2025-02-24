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


const createContribution = async (title, description) => {

    const contributionsLocators = new ContributionsLocators();

    allure.addStep('Click on the + button from the bottom to create ');
    await $(contributionsLocators.createContributionBtn).waitForDisplayed();
    await $(contributionsLocators.createContributionBtn).click();

    allure.addStep('Click on the share your contribution button');
    await $(contributionsLocators.shareYourContributionBtn).waitForDisplayed();
    await $(contributionsLocators.shareYourContributionBtn).click();

    allure.addStep(`Enter ${title} in the contribution title field`);
    await $(contributionsLocators.contributionTitleField).waitForDisplayed();
    await $(contributionsLocators.contributionTitleField).clearValue();
    await $(contributionsLocators.contributionTitleField).setValue(title);

    allure.addStep(`Enter ${description} in the contribution description field`);
    await $(contributionsLocators.contributionDescriptionField).waitForDisplayed();
    await $(contributionsLocators.contributionDescriptionField).clearValue();
    await $(contributionsLocators.contributionDescriptionField).setValue(description);

    allure.addStep('Click on the Next button of Contribution post');
    await $(contributionsLocators.contributionNextBtn).waitForDisplayed();
    await $(contributionsLocators.contributionNextBtn).click();
    
    allure.addStep('Click on the Art and Entertainment tag of Contribution post');
    await $(contributionsLocators.artAndEntertainmentTag).waitForDisplayed();
    await $(contributionsLocators.artAndEntertainmentTag).click();

    allure.addStep('Click on the share button of Contribution post');
    await $(contributionsLocators.contributionShare).waitForDisplayed();
    await $(contributionsLocators.contributionShare).click();

}
const deleteContribution = async () => {

    const contributionsLocators = new ContributionsLocators();

    allure.addStep('Click on the Three dot of the Contribution post');
    await $(contributionsLocators.contributionDotBtn).waitForDisplayed();
    await $(contributionsLocators.contributionDotBtn).click();

    allure.addStep('Click on the delete button of the Contribution post');
    await $(contributionsLocators.deleteContribution).waitForDisplayed();
    await $(contributionsLocators.deleteContribution).click();

    allure.addStep('Click on the delete Content button of the Contribution post');
    await $(contributionsLocators.deleteContributionContentBtn).waitForDisplayed();
    await $(contributionsLocators.deleteContributionContentBtn).click();
    
}

const verifyTranslationForTitle = async () => {

    await createContribution('Este es mi título de publicación.', 'This is my post description');

    await browser.pause(3000);

    const contributionsLocators = new ContributionsLocators();

    allure.addStep('Click on the Show Translation button of the contribution post');
    await $(contributionsLocators.showTranslationBtn).waitForDisplayed();
    await $(contributionsLocators.showTranslationBtn).click();

    await browser.pause(3000);

    allure.addStep('verify Contribution post title correctly translated');
    let postTitleText = await $(contributionsLocators.contributionPostTitle).getText();
    await expect(postTitleText).toEqual('This is my post title.');

    await deleteContribution();

}

const verifyTranslationForContent = async () => {

    await createContribution('This is my Post Title', 'Esta es mi descripción de la publicación.');

    await browser.pause(3000);

    const contributionsLocators = new ContributionsLocators();

    allure.addStep('Click on the Show Translation button of the contribution post');
    await $(contributionsLocators.showTranslationBtn).waitForDisplayed();
    await $(contributionsLocators.showTranslationBtn).click();

    await browser.pause(5000);

    let postContentText = await $(contributionsLocators.contributionPostContent).getText();
    await expect(postContentText).toEqual('This is my post description.');

    await deleteContribution();

}

const verifyTranslationForComments = async () => {

    await createContribution('This is my Post Title', 'This is my Post Description');

    await browser.pause(3000);

    const contributionsLocators = new ContributionsLocators();

    allure.addStep('Click on the comment button of the contribution post')
    await $(contributionsLocators.contributionPostCommentBtn).waitForDisplayed();
    await $(contributionsLocators.contributionPostCommentBtn).click();

    allure.addStep('verify that user redirect to the comment section of contribution post')
    await $(contributionsLocators.commentReflectionText).waitForDisplayed();
    await $(contributionsLocators.commentReflectionText).click();

    allure.addStep('Enter Este es mi comentario in the comment field')
    await $(contributionsLocators.addCommentField).waitForDisplayed();
    await $(contributionsLocators.addCommentField).clearValue();
    await $(contributionsLocators.addCommentField).setValue('Este es mi comentario');

    allure.addStep('clcik on the send comment button')
    await $(contributionsLocators.sendCommentBtn).waitForDisplayed();
    await $(contributionsLocators.sendCommentBtn).click();

    
    await browser.pause(5000);

    allure.addStep('verify that "Show Translation" text is visible under the comment.');
    await $(contributionsLocators.commentShowTranslationBtn).waitForDisplayed();

    allure.addStep('Click on the Show Translation text of the comment');
    await $(contributionsLocators.commentShowTranslationBtn).click();

    await browser.pause(5000);

    allure.addStep('verify the comment is correctly translated.');
    let commentText = await $(contributionsLocators.commentText).getText();
    await expect(commentText).toEqual('This is my comment');

    allure.addStep('Click on the three dot button of the comment');
    await $(contributionsLocators.deleteCommentDotBtn).waitForDisplayed();
    await $(contributionsLocators.deleteCommentDotBtn).click();

    allure.addStep('Click on the delete button of the comment popup');
    await $(contributionsLocators.deleteCommentBtn).waitForDisplayed();
    await $(contributionsLocators.deleteCommentBtn).click();

    allure.addStep('Click on the cross button of the comment popup');
    await $(contributionsLocators.crossBtnOfCommentPopup).waitForDisplayed();
    await $(contributionsLocators.crossBtnOfCommentPopup).click();
    
    await browser.pause(3000);

    await deleteContribution();

}

module.exports = {
    verifySeeMoreExistInContributionTab,
    verifyTranslationForTitle,
    verifyTranslationForContent,
    verifyTranslationForComments
}
