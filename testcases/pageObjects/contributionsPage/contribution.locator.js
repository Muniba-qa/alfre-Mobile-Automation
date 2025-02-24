
class ContributionsLocators {
    get contributionBtn(){
        return '//android.widget.Button[@content-desc="Contributions"]';
    }
    get contributonPostContent(){
        return "(//android.view.ViewGroup[contains(@resource-id, 'avatar')]/..)/following-sibling::android.view.ViewGroup[contains(@content-desc, '...')]/android.widget.TextView"
    }
    get contributionsPostSeeMoreBtn(){
        return "((//android.view.ViewGroup[contains(@resource-id, 'avatar')]/..)/following-sibling::android.view.ViewGroup[contains(@content-desc, 'See more')])[1]"
    }
    get seeMoreElementCount(){
        return "(//android.view.ViewGroup[@content-desc='See more, '])[1]"
    }
    get viewAllComments(){
        return "//android.view.ViewGroup[contains(@content-desc, 'comments')]/android.widget.TextView"
    }
}

module.exports = ContributionsLocators;