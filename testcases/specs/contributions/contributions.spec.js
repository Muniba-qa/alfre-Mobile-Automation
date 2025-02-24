const {
    loginToAccount,
} = require("../../pageObjects/loginPage/login.page.js");

const {
    verifySeeMoreExistInContributionTab
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
    
})