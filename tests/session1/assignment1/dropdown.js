const { expect } = require("chai");

describe('dropdown', () => {

    it('Verify the current date is select by default in Sign Up dropdown', async () => {
        
    // Launch https:www.facebook.com/
    await browser.url('https://www.facebook.com/');
    await browser.pause(2000);

    // click on create new account
    const createNewBtn = await $('//a[@data-testid="open-registration-form-button"]');
    await createNewBtn.click();
    await browser.pause(2000);

    // Verify current date is displayed in the birthdate dropdowns.
    const dayDropdownElement = await('#day');
    dayDropdownElement.selectByIndex(21);
    

    const monthDropdownElement = await('#month');
    monthDropdownElement.selectByIndex(8);
   

    const yearDropElement = await ('#year');
    yearDropElement.selectByIndex(0);
    
    // verify the selected options
    // verify the selected date is 22
    const selectedDayOption = await dayDropdownElement.getSelectedOption();
    expect(selectedDayOption.getText(),'Selected day is not 22').to.equal('22');

    // Verify the selected month is 'Sep'
    const selectedMonthOption = await monthDropdownElement.getSelectedOption();
    expect(selectedMonthOption.getText(), 'Selected month is not Sep').to.equal('Sep');

    // Verify the selected year is '2023'
    const selectedYearOption = await yearDropdownElement.getSelectedOption();
    expect(selectedYearOption.getText(), 'Selected year is not 2023').to.equal('2023');

    })

})