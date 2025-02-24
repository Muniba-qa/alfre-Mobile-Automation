
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
    get createContributionBtn(){
        return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.Button/com.horcrux.svg.SvgView'
    }
    get shareYourContributionBtn(){
        return '//android.view.ViewGroup[@content-desc="Share your Contribution, Ask support, post an Op-Red or share your art, "]'
    }
    get contributionTitleField(){
        return '//android.widget.EditText[@text="Write a title for your content"]'
    }
    get contributionDescriptionField(){
        return '//android.widget.EditText[@text="Describe your Content"]'
    }
    get contributionNextBtn(){
        return '//android.widget.TextView[@text="Next"]'
    }
    get artAndEntertainmentTag(){
        return '//android.view.ViewGroup[@content-desc="Art and Entertainment"]'
    }
    get contributionShare(){
        return '(//android.widget.TextView[@text="Share"])[1]'
    }
    get contributionPostTitle(){
        return '//android.view.ViewGroup[@content-desc="Show original"]/preceding-sibling::android.widget.TextView[3]'
    }
    get contributionDotBtn() {
         return '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]'
    }
    get deleteContribution () {
        return '//android.widget.TextView[@text="Delete"]'
    }
    get deleteContributionContentBtn(){
        return '//android.view.ViewGroup[@content-desc="DELETE CONTENT"]'
    }
    get contributionPostContent () {
        return '//android.view.ViewGroup[@content-desc="Show original"]/preceding-sibling::android.widget.TextView[4]'
    }
    get showTranslationBtn(){
        return '//android.widget.TextView[@text="Show translation"]'
    }
    get contributionPostCommentBtn(){
        return '(//android.view.ViewGroup[@content-desc="0"])[2]/com.horcrux.svg.SvgView'
    }
    get commentReflectionText(){
        return '//android.widget.TextView[@text="Reflections"]'
    }
    get addCommentField(){
        return '//android.widget.EditText[@text="Add your reflection…"]'
    }
    get sendCommentBtn(){
        return '//android.view.ViewGroup[@resource-id="bottomSheet"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]'
    }
    get commentShowTranslationBtn(){
        return '(//android.view.ViewGroup[@content-desc="Show Translation"])[1]'
    }
    get commentText(){
        return '//android.view.ViewGroup[@content-desc="Show Original"]/preceding-sibling::android.widget.TextView[2]'
    }
    get deleteCommentDotBtn(){
        return '//android.view.ViewGroup[@content-desc="Show Original"]/preceding-sibling::android.view.ViewGroup'
    }
    get deleteCommentBtn(){
        return '//android.view.ViewGroup[@content-desc="Delete"]'
    }
    get crossBtnOfCommentPopup(){
        return '//android.view.ViewGroup[@content-desc=""]'
    }
}

module.exports = ContributionsLocators;