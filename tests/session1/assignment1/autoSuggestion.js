const { expect } = require("chai");

describe('Verify the travelers count on homepage', () => {

    it('Verify user can select value from auto-suggestion', async () => {

        // Launch hotels.com  
        await browser.url('https://www.hotels.com/');
        await browser.pause(2000);

        //    Enter 'new' in the destination
        await $('//button[@data-stid="destination_form_field-menu-trigger"]').click();
        await browser.pause(2000);

        await $('#destination_form_field').setValue('new');
        await browser.pause(2000);

        // select "Newport Beach" from the auto-suggestion
        const allSuggestions = await $$('//div[@class="truncate"]//strong');

        for (const suggestion of allSuggestions) {
            const suggestionText = await suggestion.getAttribute("aria-label");
            if (suggestionText.startsWith('Newport Beach')) {
                await suggestion.click();
                break;
            }
        }

    })

    
})