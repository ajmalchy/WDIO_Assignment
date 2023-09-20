describe('sample test suite', () => {
// refers to test cases
it('one sample test case', async()=> {
    await browser.url('https://google.com/');
    await browser.pause(5000);
})
})