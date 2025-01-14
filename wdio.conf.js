exports.config = {
    runner: 'local',
    specs: [
        "testcases/specs/login.spec.js",
    ],
    exclude: [],

    port: 4723,
    maxInstances: 1,
    capabilities: [
        {
            "platformName": "Android",
            "appium:deviceName": "Pixel_5_API_35",
            "appium:platformVersion": "15.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": "apps/application-768a829c-52c0-452f-b00f-b38ad713f10a.apk",
            "appium:autoAcceptAlerts": true,
            "appium:autoGrantPermissions": true,
            "appium:newCommandTimeout": 10000
        }, 
    ],
    logLevel: 'info',
    baseUrl: '',
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (passed) {
            console.log(test.title, ' passed, taking screenshot');
            await browser.takeScreenshot();
        }
    },
};
