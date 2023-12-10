Feature: Add to Cart and Validate Delivery Fee

  Background:
    Given I am on the home Page with normal connection speed  
    When I enter the zip Code
    When I click geht klar button
    Then I should see entered Zip code on Home Page

  Scenario: Add/remove items to basket and validate delivery fee
    Given I am on one of the category pages
    When  I add and remove the first available item to basket
    Then  The correct delivery fee for the given equivalence partitions is added to the basket
    