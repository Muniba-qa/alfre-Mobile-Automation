const {
  joinOurWaitList,
  createGroup,
  loginToAccount,
  verifyLineOfContent
} = require("../../pageObjects/loginPage/login.page.js");


describe("Login", () => {
  afterEach(async () => {
    await browser.reloadSession();
  });

  it("Verify 'join our wait list' link functionality", async () => {
    await joinOurWaitList();
  });
  it('Group data needs to refresh with change with "pull to refresh"', async () => {
    await loginToAccount();
    await createGroup("private");
    await createGroup("public");
  });
  it('verify see more button Exist in 21 or more line content Post in Contribution Page', async () => {
    await loginToAccount();
    await verifyLineOfContent();
  })
});
