const { expect } = require("chai");

describe('Multiple windows', () => {

    it('Verify user can open multiple links from facebook homepage', async () => {

        // Launch https:www.facebook.com/
        await browser.url('https://www.facebook.com/');
        await browser.pause(2000);

        // click Meta pay
        await $('//a[text()="Meta Pay"]').click();
        await browser.pause(2000);
        // Click 
        await $('//a[text()="Meta Store"]').click();
        await browser.pause(2000);
        await $('//a[text()="Meta Quest"]').click();
        await browser.pause(2000);
        await $('//a[text()="Instagram"]').click();
        await browser.pause(2000);

        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.localeCompare('Instagram') !== 0) {
                await browser.closeWindow();
                await browser.pause(2000);

                break;
            }
            await $('//a[text()="Sign up"]').click();
            await browser.pause(5000);

        expect(await $('//a[text()="Log in"]/preceding :: p').isDisplayed(), 'Log in not displayed').to.be.true();
        
        expect(await $('//a[text()="Log in"]').isDisplayed(), 'Log in not displayed').to.be.true();
        return;
        

        }
        
    })

    

})