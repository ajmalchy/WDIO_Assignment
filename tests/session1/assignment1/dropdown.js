const { expect } = require("chai");
const moment = require("moment/moment");

describe('dropdown', () => {

    it('Verify the current date is select by default in Sign Up dropdown', async () => {
        
    // Launch https:www.facebook.com/
    await browser.url('https://www.facebook.com/');
    await browser.pause(2000);

    // click on create new account
    const createNewBtn = await $('//a[@data-testid="open-registration-form-button"]');
    await createNewBtn.click();
    await browser.pause(2000);

    // Verify current date is displayed in the birthdate dropdowns.(not smart method)
    /*const defaultDay = await $('//select[@id="day"]//option[text()="1"]');
    expect(await defaultDay.isDisplayed(), 'default day not displayed').to.be.true;

    const defaultMonth = await $('//select[@id="month"]//option[text()="Oct"]');
    expect(await defaultMonth.isDisplayed(), 'default month not displayed').to.be.true;

    const defaultYear = await $('//select[@id="year"]//option[text()="2023"]');
    expect(await defaultYear.isDisplayed(), 'default Year not displayed').to.be.true;
    await browser.pause(2000); */

 
    // Verify current date is displayed in the birthdate dropdowns.(smart method)
    const dayDropdown = await $('#day');
    const monthDropdown = await $('#month');
    const yearDropdown = await $('#year');

    // get the selected values from the dropdowns
    const selectedDay = await dayDropdown.getValue();
    const selectedMonth = await monthDropdown.getValue();
    const selectedYear = await yearDropdown.getValue();

    // get the current date using moment.js
    const currentDate = moment();

    // format the current date to match the format of dropdown
    const formattedCurrentDay = currentDate.format('D');
    const formattedCurrentMonth = currentDate.format('M');
    const formattedCurrentYear = currentDate.format('YYYY');

    // assert that the selected values match current date
    expect(selectedDay).to.equal(formattedCurrentDay, 'selected day not equal to current day');
    expect(selectedMonth).to.equal(formattedCurrentMonth, 'selected month not equal to current month');
    expect(selectedYear).to.equal(formattedCurrentYear, 'selected year not equal to current year')


    // const dayDropdownElement = await $('#day');
    // await dayDropdownElement.selectByVisibleText("21");
    // await browser.pause(10000);

    // const monthDropdownElement = await $('#month');
    // monthDropdownElement.selectByIndex(8);
   

    // const yearDropElement = await $('#year');
    // yearDropElement.selectByIndex(0);
    
    // // verify the selected options
    // // verify the selected date is 22
    // const selectedDayOption = await dayDropdownElement.getSelectedOption();
    // expect(selectedDayOption.getText(),'Selected day is not 22').to.equal('22');

    // // Verify the selected month is 'Sep'
    // const selectedMonthOption = await monthDropdownElement.getSelectedOption();
    // expect(selectedMonthOption.getText(), 'Selected month is not Sep').to.equal('Sep');

    // // Verify the selected year is '2023'
    // const selectedYearOption = await yearDropdownElement.getSelectedOption();
    // expect(selectedYearOption.getText(), 'Selected year is not 2023').to.equal('2023');

    })

})