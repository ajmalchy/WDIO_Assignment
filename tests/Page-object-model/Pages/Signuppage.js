class Signuppage {
    fNameLocator = '//input[@name="firstname"]';
    lNameLocator = '//input[@name="lastname"]';
    mobileOrEmailLocator = '//input[@name="reg_email__"]';
    newPasswordLocator = '//input[@name="reg_passwd__"]';

    birthDayMonthLocator = '#month';
    birthDayDayLocator = '#day';
    birthDayYearLocator = '#year';

    femaleGenderLocator = '//label[text()="Female"]/following-sibling::input';
    maleGenderLocator = '//label[text()="Male"]/following-sibling::input';
    customGenderLocator = '//label[text()="Custom"]/following-sibling::input';

    signupBtnLocator = '//button[@name="websubmit"]';
    
    async enterFirstName(fName){
        await $(this.fNameLocator).setValue(fName);
    }
    async enterLastName(lName){
        await $(this.fNameLocator).setValue(lName);
    }
    async enterMobileOrEmail(mobileOrEmail){
        await $(this.mobileOrEmailLocator).setValue(mobileOrEmail);
    }
    async selectBirthdayMonth(month){
        const monthDropdown = await $(this.birthDayMonthLocator);
        await monthDropdown.selectByVisibleText(month);
    }
    async selectBirthdayDay(day){
        const dayDropdown = await $(this.birthDayDayLocator);
        await dayDropdown.selectByVisibleText(day);
    }
    async selectBirthdayYear(year){
        const yearDropdown = await $(this.birthDayYearLocator);
        await yearDropdown.selectByVisibleText(year);
    }
    async selectFemaleGender(){
        await $(this.femaleGenderLocator).click();
    }
    async selectMaleGender(){
        await $(this.maleGenderLocator).click();
    }
    async selectCustomGender(){
        await $(this.customGenderLocator).click();
    }
    async clickSignupBtn(){
        await $(this.signupBtnLocator).click();
    }
    

}