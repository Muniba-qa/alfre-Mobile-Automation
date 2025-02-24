const {
    loginToAccount,
} = require("../../pageObjects/loginPage/login.page.js");

const {
    verifySeeMoreExistInContributionTab,
    verifyTranslationForTitle,
    verifyTranslationForContent,
    verifyTranslationForComments
} = require("../../pageObjects/contributionsPage/contribution.page.js");

describe('Contributions Tab', () => {
    beforeEach(async () => {
        await loginToAccount();
    })
    afterEach(async () => {
        await browser.reloadSession();
    });

    it('Verify See More button exist in more than or equal to 6 comments in Contribution tab', async () => {
        await verifySeeMoreExistInContributionTab();
    });
    it('Verify the "Show Translation" feature in the Thoughts tab for the Post Title.', async () => {
       await verifyTranslationForTitle();
    });
    it('Verify the "Show Translation" feature in the Thoughts tab for the Post content.', async () => {
       await verifyTranslationForContent();
    });
    it('Verify the "Show Translation" feature in the Thoughts tab for the Post comment.', async () => {
        await verifyTranslationForComments();
    })
    
})