class Homepage {
    // locators of elements of Homepage
    loginEmailLocator = '#email';
    loginPasswordLoator = '#pass';
    loginBtn = '//button[@data-testid="royal_login_button"]';
    forgetPwdLocator = '//a[text()="Forget password?"]';
    createNewAccount = '//a[@data-testid="open-registration-form-button"]'

    // functions to interact with the elements on Homepage
    async enterLoginEmail(loginEmail){
        await $(this.loginEmailLocator).setValue(loginEmail)
    }

    async enterLoginPassword(loginPassword){
        await $(this.loginEmailPassword).setValue(loginPassword)
    } 
    async clickLoginBtn(){
        await $(this.loginBtn).click();
    }
    async clickForgetPasswordBtn(){
        await $(this.forgetPwdLocator).click();
    }
    async clickCreateNewAccountBtn(){
        await $(this.createNewAccount).click();
    }
    async isLoginEmailEnabled() {
    return await $(this.loginEmailLocator).isEnabled();
    } 
    async isLoginPasswordEnabled() {
    return await $(this.loginPasswordLoator).isEnabled();
    }
    async isLoginButtonEnabled() {
    return await $(this.loginBtn).isEnabled();
    }
}
module.exports = new Homepage();
