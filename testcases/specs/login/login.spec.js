const {
  joinOurWaitList,
  createGroup,
  loginToAccount
} = require("../../pageObjects/loginPage/login.page.js");

describe("Login", () => {

  it("testcase # 01:- Verify 'join our wait list' link functionality", async () => {
    await joinOurWaitList();
  });

  it.only(`Group data needs to refresh with change with "pull to refresh"`, async () => {
    await loginToAccount();
    await createGroup("private");
    await createGroup("public");
  });

});
