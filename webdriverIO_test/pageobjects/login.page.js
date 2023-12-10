const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputZipcode () {
        return $('//input[@data-testid="q3FmlhEfSKrk3eUtgXANe"]');
    }

    get gehtKlarButton () {
        return $('.fp_button.fp_button_primary.fp_button_large');
    }

    get enteredLocation () {
        return $("//div[@class='change_zip_code']//span[contains(text(),'48143')]");
    }

//////////////////////////////////////////***************** KEYWORDS */


    async zipcode (zipCode) {
        await this.inputZipcode.waitForExist();
        await this.inputZipcode.setValue(zipCode);
    }

    async clickGehtKlarButton () {
        await this.gehtKlarButton.waitForExist();
        await this.gehtKlarButton.click();
        
    }

    async enteredeLocationShouldbeAppear() {
        await this.enteredLocation.waitForExist();
        const pageZipcode = await this.enteredLocation.getText();
        console.log(pageZipcode);  // Log the text to the console
        const expectedZipcode = '48143';  // Define the expected value
        expect(pageZipcode).toEqual(expectedZipcode);  // Use an assertion to check if the actual value matches the expected value
        await browser.pause(2000);  // i used pause because i wanted to show how the result was.
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async slowConnectionOpen () {
        await super.slowConnectionOpen();
        
    }
    async open(){
        await super.open();
    }
}

module.exports = new LoginPage();
