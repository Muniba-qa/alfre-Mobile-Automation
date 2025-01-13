
async function scrollByXpathLocator(element) {
    const locator = await element.selector;
    const modifiedLocator = locator.replace('//', '');
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().xpath("${modifiedLocator}"))`);
}
