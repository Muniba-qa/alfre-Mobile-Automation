const {
  joinOurWaitList
} = require("../pageObjects/Components/Landing.helper.js");

describe("Landing", () => {

  it("testcase # 01:- Verify 'join our wait list' link functionality", async () => {
    await joinOurWaitList();
  });

  it.only(`Group data needs to refresh with change with "pull to refresh"`, async () => {
    await joinOurWaitList();
  });

});
