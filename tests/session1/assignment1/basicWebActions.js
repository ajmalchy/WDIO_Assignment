// TC-1: Verify user can go back and forward as expected

const { expect } = require("chai");

describe('Basic Web Actions', () => {
    
it('Verify user can go back and forward as expected', async () => {
    // launch amazon.com    
    await browser.url('https://www.amazon.com/');
    await browser.pause(5000);

    // Verify page title contains "Spend less. Smile more."
    const pageTitle = await browser.getTitle();
    expect(pageTitle.startsWith('Spend less. Smile more.'), 'Page title does not include Spend less. Smile more.')
    await browser.pause(5000);

    // Launch https://www.hotels.com/  
    await browser.url('https://www.hotels.com/');
    await browser.pause(5000);

    // Verify current url contains "hotels.com"
    const pageUrl = await browser.getUrl();
    expect(pageUrl.includes('hotels.com'), 'Page url does not include hotels.com')
    await browser.pause(5000);

    // Go back
    await browser.back();
    await browser.pause(5000);

    // Verify current url contains "amazon.com"
    const pageUrl1 = await browser.getUrl();
    expect(pageUrl1.includes('amazon.com'), 'Page url does not include amazon.com')
    await browser.pause(5000);

    // Go forward
    await browser.forward();
    await browser.pause(5000);

    // Verify page title contains "Deals & Discounts for Hotel Reservations"
    const pageTitle1 = await browser.getTitle();
    expect(pageTitle1.startsWith('Deals & Discounts for Hotel Reservations.'), 'Page title does not include Deals & Discounts for Hotel Reservations')
    await browser.pause(5000);
})
})