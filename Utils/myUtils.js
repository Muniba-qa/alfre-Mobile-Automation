const allure = require("@wdio/allure-reporter").default;


function getIssueKeyFromTestName(str) {
    console.log("resultresult" + str);
    const parts = str.split('|');
    const result = parts[1];
    console.log("resultresult" + result);
}

async function waitForElementDisplayed(element, buttonName) {
    allure.startStep(`verify visibility of ${buttonName}`);
    const isVisible = await element.isDisplayed();
    if (!isVisible) {
        await element.waitForDisplayed({
            timeout: 60000,
            timeoutMsg: `Element '${buttonName}' was not displayed after 60 seconds`
        });
    }
    allure.endStep('passed');
}

async function scrollInsideElement(elementSelector, scrollRatio = 0.4, duration = 1200) {
    const element = await $(elementSelector);
    const { x, y } = await element.getLocation();
    const { width, height } = await element.getSize();
    const midpoint = {
        x: Math.floor(width * 0.5),
        y: Math.floor(height * 0.5),
    };

    let startPoint, endPoint;
    startPoint = { x: x + midpoint.x, y: y + midpoint.y - (midpoint.y * scrollRatio) };
    endPoint = { x: x + midpoint.x, y: y + midpoint.y + (midpoint.y * scrollRatio) };
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startPoint.x, y: startPoint.y },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 200 },
            { type: 'pointerMove', duration, origin: 'pointer', x: endPoint.x - startPoint.x, y: endPoint.y - startPoint.y },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await driver.releaseActions();
}
async function scrollElementByXpath(elementSelector, duration = 650) {
    let elementVisible = false;

    while (!elementVisible) {
        const element = await $(elementSelector);
        const vis = await element.isDisplayed();

        if (vis) {
            elementVisible = true;
        } else {
            await driver.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 500, y: 1000 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 200 },
                    { type: 'pointerMove', duration, x: 0, y: -300 }, 
                    { type: 'pointerUp', button: 0 }
                ]
            }]);

            await driver.releaseActions();

        }

    }

}


async function scrollElementByXpath2(elementSelector, duration = 650) {
    let elementVisible = false;

    while (!elementVisible) {
        const element = await $(elementSelector);

        try {
            await element.waitForDisplayed({ timeout: 2000, reverse: false });
            elementVisible = true;
        } catch (e) {
            await driver.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 0, y: 1000 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 200 },
                    { type: 'pointerMove', duration, x: 0, y: -600 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);

            await driver.releaseActions();

            await driver.pause(1000);
        }
    }
}


const displayNameSentences = [
    'Innovators Collective',
    'Creative Minds Hub',
    'The Idea Exchange',
    'Creative Collaborators Network',
    'Innovative Thinkers Group',
    'Visionary Network',
    'Creative Pioneers Circle',
    'The Innovation Circle',
    'Minds of the Future',
    'Creative Genius Collective',
    'The Visionary Collective',
    'The Thinkers Tribe',
    'Disruptors Hub',
    'Minds in Motion',
    'The Idea Lab',
    'Future Creators Network',
    'Inventors Society',
    'The Creative Coalition',
    'Bold Thinkers Forum',
    'NextGen Innovators',
    'Future Leaders Network',
    'The Genius Collective',
    'Innovative Minds Circle',
    'Creative Sparks Network',
    'Innovation Network Hub',
    'The Ideas Marketplace',
    'Thought Leaders Collective',
    'Creative Impact Network',
    'Future Visionaries Network',
    'Innovation Nation'
];

const extendedNameSentences = [
    'A Forum for Creative Collaboration and Insightful Discussions',
    'Where Creativity Meets Innovation',
    'A Network for Visionaries and Thought Leaders',
    'Bringing Ideas to Life Through Meaningful Conversations',
    'A Community for Sharing and Growing Ideas',
    'An Intellectual Playground for Visionaries',
    'A Think Tank for Groundbreaking Ideas',
    'Nurturing Creativity Through Collaboration and Insight',
    'Empowering Innovators to Achieve More Together',
    'A Place for Thoughtful Minds to Connect and Grow'
];

const wishToShareSentences = [
    'Innovators Collective is a space for creative minds to share ideas, industry trends, and valuable insights. Join us for meaningful discussions and professional networking.',
    'We foster creative collaboration, innovation, and knowledge sharing through insightful discussions.',
    'A place where creativity and industry insights meet. Join us to collaborate and learn.',
    'Let\'s connect, share, and grow together in this space for innovation and insightful conversations.',
    'A vibrant community of thinkers and creators exchanging valuable ideas and industry insights.',
    'Join our collective to explore new ways of thinking, sharing, and creating together.',
    'This is a collaborative platform for passionate individuals to exchange transformative ideas.',
    'An engaging community for exchanging innovative ideas and building impactful relationships.',
    'A place for knowledge sharing, collaborative growth, and creative inspiration.',
    'Redefining creativity through collaboration, ideas, and forward-thinking solutions.'
];
function getRandomSentence(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const scrollElementByText = async (text) => {
    await driver.$(`android=new UiScrollable(new UiSelector().scrollable(true).instance(1)).setAsVerticalList().scrollForward().scrollIntoView(new UiSelector().text("${text}").instance(0))`);
}

const scrollToGetParentElement = async (parentElement) => {
    const parentViewGroups = await $$(parentElement);
    console.log('parentView length', parentViewGroups.length)

    for (let parent of parentViewGroups) {

        const childViewGroups = await parent.$$('android.view.ViewGroup');

        console.log('childViewGroups length', childViewGroups.length);
        console.log('text***********', childViewGroups.getText());

        if (childViewGroups.length < 10) {
            await scrollElementByXpath(childViewGroups);
            console.log('Scrolled into a parent ViewGroup with less than 10 children');
            break;
        }
    }
}

module.exports = {
    waitForElementDisplayed,
    scrollInsideElement,
    getRandomSentence,
    displayNameSentences,
    extendedNameSentences,
    wishToShareSentences,
    getIssueKeyFromTestName,
    scrollElementByText,
    scrollElementByXpath,
    scrollToGetParentElement,
    scrollElementByXpath2
}