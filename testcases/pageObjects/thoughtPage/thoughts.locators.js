
class ThoughtsLocators {
    get thoughtTabBtn(){
        return '//android.widget.Button[@content-desc="Thoughts"]'
    }
    get seeMoreElementCount(){
        return "(//android.view.ViewGroup[@content-desc='See more, '])[1]"
    }
    get viewAllComments(){
        return "//android.view.ViewGroup[contains(@content-desc, 'comments')]/android.widget.TextView"
    }
    get parentCommnetElement(){
        return "((//android.view.ViewGroup[contains(@resource-id, 'avatar')]/..)[not(.//android.view.ViewGroup[contains(@content-desc, 'See more')])])[2]"
    }
    get thoughtPostSeeMoreBtn(){
        return "((//android.view.ViewGroup[contains(@resource-id, 'avatar')]/..)/following-sibling::android.view.ViewGroup[contains(@content-desc, 'See more')])[1]"
    }
    get reflectionsText(){
        return "//android.widget.TextView[contains(@text, 'Reflections')]"
    }
}

module.exports = new ThoughtsLocators;