const allure = require("@wdio/allure-reporter").default;

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "",
  maxInstances: 1,
  bail: 0,

  services: [
    [
      "browserstack", 
      {
        buildIdentifier: process.env.BUILD_NUMBER || "default-build",
        browserstackLocal: true,
        opts: {
          forcelocal: false,
          localIdentifier: "Alfredus",
        },
        app: process.env.BROWSERSTACK_ANDROID_APP_PATH || "",
      },
    ],
  ],

  capabilities: [
    {
      "appium:autoAcceptAlerts": true,
      "appium:autoGrantPermissions": true,
      "appium:clearDeviceKeychain": true,
      acceptInsecureCerts: true,
      "appium:enforceAppInstall": true,
      "appium:unlockType": "pin",
      "appium:disableWindowAnimation": true,
      "appium:notificationsEnabled": "requiredNo,",
      "bstack:options": {
        projectName: "Alfredus",
        buildName: `Alfredus Android build ${new Date().toISOString()}`,
        deviceName: "Google Pixel 7",
        osVersion: "13.0",
        idleTimeout: 300,
        debug: true,
        acceptInsecureCerts: true,
        networkLogs: true,
        networkLogsOptions: {
          captureContent: true,
        },

        appiumVersion: "2.6.0",
      },
      "appium:app": process.env.BROWSERSTACK_ANDROID_APP_PATH || "",
    },
  ],

  updateJob: false,
  specs: [
    "testcases/specs/contributions/contributions.spec.js",
    "testcases/specs/thoughts/thoughts.spec.js",
  ],
  exclude: [],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 15000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 1800000,
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: true,
        disableMochaStepsReporting: true,
      },
    ],
  ],

  onPrepare: function (capabilities, specs) {
    const allure = require("allure-commandline");
    const reporter = allure(["--report-dir", "allure-results"]);
    reporter.on("end", () => {
      console.log("Allure report generated.");
    });
  },

  afterTest: async function (test, context, { error }) {
    if (error) {
      const screenshot = await browser.takeScreenshot();
      allure.addAttachment(
        "Screenshot",
        Buffer.from(screenshot, "base64"),
        "image/png"
      );
    }
  },
};
