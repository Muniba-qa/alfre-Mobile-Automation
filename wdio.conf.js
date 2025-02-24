const { default: axios } = require("axios");
const { JIRA_HOST, JIRA_EMAIL, JIRA_API_TOKEN } = require("./Utils/constants");
const uploadTestResults = require('./xrays-integration/uploadResults.js');
const authenticateXray = require('./xrays-integration/xrays.api.config.js');
const fs = require('fs');
const path = './results';

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

exports.config = {
    runner: 'local',
    specs: [
        // "testcases/specs/login/login.spec.js",
        "testcases/specs/thoughts/thoughts.spec.js",
    ],
    exclude: [],

    port: 4723,
    maxInstances: 1,
    capabilities: [
        {
            "platformName": "Android",
            "appium:deviceName": "Pixel_5_API_34",
            "appium:platformVersion": "14.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": "apps/application-053b93ec-273f-4b55-91bd-3dd4413160a6.apk",
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
    reporters: [
        'spec',
        ['junit', {
            outputDir: path,
            outputFileFormat: function (options) {
                return `results-${options.cid}.xml`;
            }
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    onComplete: async function () {
        const resultFiles = fs.readdirSync(path);
        const resultFile = resultFiles.find(file => file.startsWith('results-') && file.endsWith('.xml'));

        if (resultFile) {
            try {
                const token = await authenticateXray();
                await uploadTestResults(token, `${path}/${resultFile}`, 'RD-2829');
            } catch (error) {
                console.error('Error uploading test results to Xray:', error.message);
            }
        } else {
            console.error('Error: No JUnit result file found.');
        }
    },

};
