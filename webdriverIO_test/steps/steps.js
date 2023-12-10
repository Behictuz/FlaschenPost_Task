const { Given, When, Then } = require('@wdio/cucumber-framework');


const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the home Page with slow connection$/, async () => {
    await LoginPage.slowConnectionOpen();
    
    
});

Given(/^I am on the home Page with normal connection speed$/, async () => {
    await LoginPage.open();
    
});

When(/^I enter the zip Code$/, async () => {
    await LoginPage.zipcode("48143");
})
When(/^I click geht klar button$/, async () => {
    await LoginPage.clickGehtKlarButton();
});

Then(/^I should see entered Zip code on Home Page$/, async () => {
    await LoginPage.enteredeLocationShouldbeAppear();
});

