const { expect } = require("chai");

describe('advanced xpath test suite', () => {
    // TC-1: Verify current temp is less than or equals to feel-like temp
    it('verify current temp is less than or equals to feel-like temp', async () => {
        await browser.url('https://www.accuweather.com/');
        await browser.pause(2000); 
        // Verify current-temp is in between 45 and 55
        const currentTemp = await $('//span[@class="recent-location-temp"]');

        // const realFeelTemp = await $('//span[@class="recent-location-real-feel-value"]');
    
        expect(currentTemp >= 45 || currentTemp <= 55, 'The current temperature is not between 45 and 55').to.be.false;
        await browser.pause(5000);
    });

    it('Verify error on empty login flow', async () => {
        // Launch https:www.facebook.com/
        await browser.url('https://www.facebook.com/');
        await browser.pause(2000)

        // Click 'Log In' button
        const loginBtn = await $('//button[@data-testid="royal_login_button"]');
        await loginBtn.click();

        // Verify error msg is displayed
        const errorMsg = await $('//div[contains(text(), "email address or mobile number you entered is")]');
        const errorMsgDisplayed = await errorMsg.isDisplayed();
        expect(await errorMsgDisplayed, 'error message not displayed').to.be.true;
    });
    it('Verify the empty messenger login flow', async () => {
        // Launch https:www.facebook.com/
        await browser.url('https://www.facebook.com/');
        await browser.pause(2000)

        // Click on 'Messenger' link
        const messengerLink = await $('//a[text()="Messenger"]');
        await messengerLink.click();
        await browser.pause(2000)

        // // Verify 'Keep me signed in' checkbox is NOT selected
        const keepMeSignedIn = await $('//label[contains(text(), "me signed in")]');
        
        expect(await keepMeSignedIn.isSelected(), 'Keep me signed in checkbox is not selected').to.be.false; 

        // Click 'Log In' button
        const messengerloginBtn= await $('#loginbutton');
        await messengerloginBtn.click();
        await browser.pause(2000)

        //  Verify link -> "Find your account and log in" is displayed
       const messengerErrorMsg = await $('//a[text()="Find your account and log in."]');
        
        expect(await messengerErrorMsg.isDisplayed(), 'error message not displayed').to.be.true; 

        // Verify 'Continue' button is enabled
        const messengerContinueBtn= await $('#loginbutton');
       
        expect(await messengerContinueBtn.isEnabled(), 'continue btn not enabled').to.be.true;
        await browser.pause(5000);

        // Verify 'Keep me signed in' checkbox is NOT selected
        const keepMeSignedIn2 = await $('//label[contains(text(), "me signed in")]');
        
        expect(await keepMeSignedIn2.isSelected(), 'Keep me signed in checkbox is not selected').to.be.false; 

        // console.log("\nkeepMeSignedIn2\n");
        // console.log(keepMeSignedIn2);
        // console.log("\nkeepMeSignedIn2\n");

        // Click 'Keep me signed in' checkbox
        await keepMeSignedIn2.click();
        await browser.pause(5000);

        // Verify 'Keep me signed in' checkbox is selected
        const keepMeSignedIn3 = await $('//input[@name="persistent"]');
        expect(await keepMeSignedIn3.isSelected(), 'Keep me signed in checkbox is not selected').to.be.true;
    })

})