const {
    loginToAccount,
  } = require("../../pageObjects/loginPage/login.page.js");
const {
    verifySeeMoreInThoughts,
    verifySeeMoreNotExistInThoughts,
    verifySeeMoreAdditionalContentInThoughts,
    verifyShowTranslationFeatureInThoughts,
    verifyShowTranslationFeatureInThoughtsComments
} = require("../../pageObjects/thoughtPage/thoughts.page.js");

describe('Thoughts Tab', () => {
    beforeEach(async () => {
        await loginToAccount();
    })
    afterEach(async () => {
        await browser.reloadSession();
    });
    it('RD-2837_Verify See More button exist in more than or equal to 6 comments in Thoughts tab', async () => {
        await verifySeeMoreInThoughts();
    });
    it('RD-2838_Verify See More button not exist in less than or equal to 5 comments in Thoughts tab', async () => {
        await verifySeeMoreNotExistInThoughts();
    });
    it('RD-2846_Verify the additional content displayed when the "See More" button is clicked in the Thoughts tab.', async () => {
        await verifySeeMoreAdditionalContentInThoughts();
    });
    it('Verify the "Show Translation" feature in the Thoughts tab.', async () => {
        await verifyShowTranslationFeatureInThoughts();
    });
    it('Verify that the "Show Translation" feature works in the comments section of the Thoughts tab post.', async () => {
       await verifyShowTranslationFeatureInThoughtsComments();
    });
})