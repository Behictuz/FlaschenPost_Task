const { Given, When, Then } = require('@wdio/cucumber-framework');

const CategoryPage = require('../pageobjects/category.page');


Given(/^I am on one of the category pages$/, async () => {
  const categories = ['bier', 'wasser', 'rotwein'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  await CategoryPage.navigateToCategory(randomCategory);
});

When(/^I add and remove the first available item to basket$/, async () => {
  await CategoryPage.addToBasket();
});

Then(/^The correct delivery fee for the given equivalence partitions is added to the basket$/, async () => {
  await CategoryPage.verifyDeliveryFee();
});



