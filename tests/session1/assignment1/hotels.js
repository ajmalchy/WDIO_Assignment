const { expect } = require("chai");

describe('Verify the travelers count on homepage', () => {

    it('Verify the travelers count on homepage', async () => {
        
    // Launch hotels.com 
    await browser.url('https://www.hotels.com/');
    await browser.pause(2000);

    // Make Adults=4 in Room-1
    const roomPickerBtn = await $('//button[@data-stid="open-room-picker"]');
    await roomPickerBtn.click();
    await browser.pause(2000);
    const increaseAdultsByOneRoom1 = await $('//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button')
    await increaseAdultsByOneRoom1.click();
    await increaseAdultsByOneRoom1.click();
    
    await browser.pause(2000);

    // Click Add another room
    const addAnotherRoomBtn = await $('//button[@data-test-id="traveler_selector_add_room"]');
    await addAnotherRoomBtn.click();
    await browser.pause(2000);
    //  4. Make Adults=3 in Room-2
      const increaseAdultsByOneRoom2 = await $('//input[@id="traveler_selector_adult_step_input-1"]/following-sibling::button');
      await increaseAdultsByOneRoom2.click();
      await increaseAdultsByOneRoom2.click();
      await browser.pause(2000);
    //  5. Click on Done button
      const doneBtn = await $('#traveler_selector_done_button');
      await doneBtn.click();
      await browser.pause(2000);
    // 6. Verify total-travalers is equals to the number of adults mentioned in rooms

    const  roomPickerBtnAfterDone = await $('//button[contains(text(), "7 travelers")]');
    expect(await roomPickerBtnAfterDone.isDisplayed(), 'total-travalers is not equal to the number of adults mentioned in room').to.be.true;
    await browser.pause(2000);
  /*  // Verify current date is displayed in the birthdate dropdowns.
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
    expect(selectedYearOption.getText(), 'Selected year is not 2023').to.equal('2023'); */

    })

})