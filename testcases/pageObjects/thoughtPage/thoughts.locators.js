
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
    get showTranslationLink(){
        return '(//android.view.ViewGroup[@content-desc="Show translation"])[1]'
    }
    get showTranslationTitle(){
        return '((//android.view.ViewGroup[@content-desc="Show translation"])[1])/preceding-sibling::android.view.ViewGroup[2]/android.widget.TextView'
    }
    get showOriginalTitleText(){
        return '((//android.view.ViewGroup[@content-desc="Show original"])[1])/preceding-sibling::android.view.ViewGroup[2]/android.widget.TextView'
    }
    get profileButton(){
        return '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[5]/android.widget.Button'
    }
    get createPostThoughtTabBtn(){
        return '//android.widget.TextView[@text="Thoughts"]'
    }
    get shareYourThoughtsField(){
        return '//android.widget.TextView[@text="Share your thoughts"]'
    }
    get shareYourThoughtsEditField(){
        return '//android.widget.EditText[@text="Share your thoughts"]'
    }
    get shareBtn(){
        return '//android.widget.TextView[@text="Share"]'
    }
    get postOptionBtn(){
        return '(//android.view.ViewGroup[@content-desc="Show translation"])[1]/preceding-sibling::android.view.ViewGroup[2]/com.horcrux.svg.SvgView'
    }
    get deletePostBtn(){
        return '//android.widget.TextView[@text="Delete"]'
    }
    get deleteThoughtBtn(){
        return '//android.view.ViewGroup[@content-desc="DELETE THOUGHT"]'
    }
    get createdPostCommentBtn(){
        return '//android.view.ViewGroup[@content-desc="Show translation"]/following-sibling::android.view.ViewGroup[2]'
    }
    get reflectionText(){
        return '//android.widget.TextView[@text="Reflections"]'
    }
    get addCommentField(){
        return '//android.widget.EditText[@text="Add your reflection…"]'
    }
    get commentSendBtn(){
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

module.exports = new ThoughtsLocators;