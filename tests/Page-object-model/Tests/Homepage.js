const { expect } = require('chai');
const homepage = require('../Pages/Homepage');
const loginpage = require('../Pages/Loginpage');

describe('Homepage testcases', () => {
    it('verify login fields are enabled', async () => {
        await browser.url('https://www.facebook.com/');

        expect(await homepage.isLoginEmailEnabled(), 'login email field not enabled').to.be.true;
        expect(await homepage.isLoginPasswordEnabled(), 'login password not enabled').to.be.true;
        expect(await homepage.isLoginButtonEnabled(), 'login btn not enabled').to.be.true;
    
    });

    it.only('verify error is displayed for empty login flow', async () => {
        await browser.url('https://www.facebook.com/');

        await homepage.clickLoginBtn();

       expect(await loginpage.isLoginErrorDisplayed(), 'login error not displayed').to.be.true;
    
    })
})
