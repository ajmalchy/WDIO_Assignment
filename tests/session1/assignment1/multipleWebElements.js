const { expect } = require("chai");

describe('Verify the travelers count on homepage', () => {

    it('Verify there are more than 40 links on the facebook.com', async () => {
        
   // Launch https:www.facebook.com/
   await browser.url('https://www.facebook.com/');
   await browser.pause(2000);

//    Verify there are more than 40-links   
   const allLinks = await $$("<a>");
   expect(await allLinks.length, 'links on page are not equal to 46').to.equal(46);

    })

    it('Verify there are 11 navigation-heading on classroomessential', async () => {
        
        // Launch 
        await browser.url('https://www.classroomessentialsonline.com/');
        await browser.pause(2000);
     
     //    Verify there are more than 40-links   
        const allNavHeading = await $$('//li[@class="navPages-item"]//a[@aria-expanded="false"]');

        expect(await allNavHeading.length, 'links on page are not equal to 11').to.equal(11);
     
        
         })

         it.only('Verify number of options in Church Chairs is equals to 7', async () => {
        
            // Launch 
            await browser.url('https://www.classroomessentialsonline.com/');
            await browser.pause(2000);
         
         
            // move mouse to church chairs
            const allNavHeadings = await $$('//li[@class="navPages-item"]//a[@aria-expanded="false"]');

            for (const navHeading of allNavHeadings) {
                const churchChairBtn = allNavHeadings[0];
                await churchChairBtn.scrollIntoView();
                await browser.pause(2000);
                await churchChairBtn.moveTo();
                await browser.pause(5000);
                const churchChairList = await $$('//li[@class="navPage-subMenu-item-child"]//a[contains(text(), "Church Chairs")]');
               
                expect(await churchChairList.length, 'No 7 options in the list').to.equal(7);
                return;
            }


         
             })

})